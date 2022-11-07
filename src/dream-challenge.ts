import { BigInt } from "@graphprotocol/graph-ts"
import {
  DreamChallenge,
  AddChallenge,
  EnterChallenge,
  ModificationAdmin,
  ModifyChallenge,
  OpenChallenge,
  OwnershipTransferred,
  WithdrawReward
} from "../generated/DreamChallenge/DreamChallenge"
import { ChallengeInfo, UserInfo, UserChallenge } from "../generated/schema"

export function handleAddChallenge(event: AddChallenge): void {

  let entity = ChallengeInfo.load(event.params.challengeId.toString());

  if (!entity) {
    entity = new ChallengeInfo(event.params.challengeId.toString());
    entity.ctype = event.params.ctype;
    entity.winnerTarget = 0;
    entity.placeId = event.params.placeId;
    entity.matchId = event.params.matchId;
    entity.startAt = event.params.startAt;
    entity.endAt = event.params.endAt;
    entity.openAt = BigInt.fromI32(0);
    entity.tokenIdLeft = event.params.tokenIdLeft;
    entity.tokenIdRight = event.params.tokenIdRight;
    entity.leftTotalAmount = BigInt.fromI32(0);
    entity.rightTotalAmount = BigInt.fromI32(0);
    entity.leftMiddleTotalAmount = BigInt.fromI32(0);
    entity.rightMiddleTotalAmount = BigInt.fromI32(0);
  }
  entity.save();

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.challengeIdInex(...)
  // - contract.getChallengeInfo(...)
  // - contract.getUserChallengeInfo(...)
  // - contract.getUserChallenge(...)
  // - contract.getUserRewards(...)
  // - contract.isAdmin(...)
  // - contract.nftCost(...)
  // - contract.onERC1155BatchReceived(...)
  // - contract.onERC1155Received(...)
  // - contract.owner(...)
  // - contract.rewardToken(...)
  // - contract.supportsInterface(...)
  // - contract.teamNft(...)
}

export function handleEnterChallenge(event: EnterChallenge): void {
  let entity = UserChallenge.load(event.params.user.toHexString());
  
  if (!entity) {
    entity = new UserChallenge(event.params.user.toHexString());
    entity.challenges = []
  }

  let userinfoId = event.params.user
  .toHexString()
  .concat('-')
  .concat(BigInt.fromI32(event.params.challengeId).toString());

  let userinfo = UserInfo.load(userinfoId);
    
  if (!userinfo) {
    userinfo = new UserInfo(userinfoId);
    userinfo.challenge = BigInt.fromI32(event.params.challengeId).toString();
    userinfo.isTakeReward = false;
    userinfo.amountsLeft = BigInt.fromI32(0);
    userinfo.amountsRight = BigInt.fromI32(0);
    userinfo.amountMiddleL = BigInt.fromI32(0);
    userinfo.amountMiddleR = BigInt.fromI32(0);
  }

  let challenge = ChallengeInfo.load(event.params.challengeId.toString());
  if (!challenge) {
    challenge = new ChallengeInfo(event.params.challengeId.toString());
  }

  if(BigInt.fromI32(event.params.target).equals(BigInt.fromI32(1))) {
    //left
    userinfo.amountsLeft = userinfo.amountsLeft.plus(event.params.amount);
    challenge.leftTotalAmount = challenge.leftTotalAmount.plus(event.params.amount);
  } else if(BigInt.fromI32(event.params.target).equals(BigInt.fromI32(2))) {
    //mid
    if(event.params.tokenid.equals(challenge.tokenIdLeft)) {
      userinfo.amountMiddleL = userinfo.amountMiddleL.plus(event.params.amount);
      challenge.leftMiddleTotalAmount = challenge.leftMiddleTotalAmount.plus(event.params.amount);
    } 

    if(event.params.tokenid.equals(challenge.tokenIdRight)) {
      userinfo.amountMiddleR = userinfo.amountMiddleR.plus(event.params.amount);
      challenge.rightMiddleTotalAmount = challenge.rightMiddleTotalAmount.plus(event.params.amount);
    }
  } else if(BigInt.fromI32(event.params.target).equals(BigInt.fromI32(3))) {
    //right
    userinfo.amountsRight = userinfo.amountsRight.plus(event.params.amount);
    challenge.rightTotalAmount= challenge.rightTotalAmount.plus(event.params.amount);
  }

  let challenges = entity.challenges;
  let isHas = false;
  for(let i = 0; i < challenges.length; ++i) {
    if(challenges[i] ===  userinfoId){
      // challenges[i] = userinfo.id;
      isHas = true;
      break;
    }
  }
  if(isHas === false) {
    challenges.push(userinfo.id);
  }
  entity.challenges = challenges;
  entity.save();
  userinfo.save();
  challenge.save();
}

export function handleModificationAdmin(event: ModificationAdmin): void {
}

export function handleModifyChallenge(event: ModifyChallenge): void {
  let entity = ChallengeInfo.load(event.params.challengeId.toString())

  if (!entity) {
    entity = new ChallengeInfo(event.params.challengeId.toString())
  }
  entity.ctype = event.params.ctype;
  entity.winnerTarget = 0;
  entity.placeId = event.params.placeId;
  entity.matchId = event.params.matchId;
  entity.startAt = event.params.startAt;
  entity.endAt = event.params.endAt;
  entity.openAt = BigInt.fromI32(0);
  entity.tokenIdLeft = event.params.tokenIdLeft;
  entity.tokenIdRight = event.params.tokenIdRight;
  entity.leftTotalAmount = BigInt.fromI32(0);
  entity.rightTotalAmount = BigInt.fromI32(0);
  entity.leftMiddleTotalAmount = BigInt.fromI32(0);
  entity.rightMiddleTotalAmount = BigInt.fromI32(0);
  entity.save();
}

export function handleOpenChallenge(event: OpenChallenge): void {
  let entity = ChallengeInfo.load(event.params.challenageId.toString())

  if (!entity) {
    entity = new ChallengeInfo(event.params.challenageId.toString())
  }
  entity.winnerTarget = event.params.target;
  entity.openAt = event.params.openTime;
  entity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleWithdrawReward(event: WithdrawReward): void {

}

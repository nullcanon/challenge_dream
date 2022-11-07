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
import { ChallengeInfo, UserInfo, UserInfos } from "../generated/schema"

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
  // - contract.getUserChallenges(...)
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
  let entity = UserInfos.load(event.params.user.toHexString());
  
  if (!entity) {
    entity = new UserInfos(event.params.user.toHexString());
    entity.challenges = []
  }

  let userinfo = UserInfo.load(
    event.params.user
    .toHexString()
    .concat('-')
    .concat(BigInt.fromI32(event.params.challengeId).toString())
    );
  if (!userinfo) {
    userinfo = new UserInfo(    
      event.params.user
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(event.params.challengeId).toString()));

    userinfo.challenge = BigInt.fromI32(event.params.challengeId).toString();
    userinfo.isTakeReward = false;
    userinfo.amountsLeft = BigInt.fromI32(0);
    userinfo.amountsRight = BigInt.fromI32(0);
    userinfo.amountMiddleL = BigInt.fromI32(0);
    userinfo.amountMiddleR = BigInt.fromI32(0);
  }

  if(event.params.target === 1) {
    //left
    userinfo.amountsLeft.plus(event.params.amount);
  } else if(event.params.target === 2) {
    //mid
    let challenge = ChallengeInfo.load(event.params.challengeId.toString());
    if (!challenge) {
      challenge = new ChallengeInfo(event.params.challengeId.toString());
    }
    if(event.params.tokenid.equals(challenge.tokenIdLeft)) {
      userinfo.amountMiddleL.plus(event.params.amount);
    } 

    if(event.params.tokenid.equals(challenge.tokenIdRight)) {
      userinfo.amountMiddleR.plus(event.params.amount);
    }
  } else if(event.params.target === 3) {
    //right
    userinfo.amountsRight.plus(event.params.amount);
  }
  userinfo.save();


  // challenges 
  // let challenges = entity.challenges || [];
  // challenges.push(userinfo.id || '');
  // entity.challenges = challenges;
  entity.challenges.push(userinfo.id || '')

  entity.save();
}

export function handleModificationAdmin(event: ModificationAdmin): void {
}

export function handleModifyChallenge(event: ModifyChallenge): void {
  let entity = ChallengeInfo.load(event.params.challengeId.toString())

  if (!entity) {
    entity = new ChallengeInfo(event.params.challengeId.toString())
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
}

export function handleOpenChallenge(event: OpenChallenge): void {
  let entity = ChallengeInfo.load(event.params.challenageId.toString())

  if (!entity) {
    entity = new ChallengeInfo(event.params.challenageId.toString())
    entity.winnerTarget = event.params.target;
    entity.openAt = event.params.openTime;
  }
  entity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleWithdrawReward(event: WithdrawReward): void {

}

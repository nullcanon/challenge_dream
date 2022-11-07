import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddChallenge,
  EnterChallenge,
  ModificationAdmin,
  ModifyChallenge,
  OpenChallenge,
  OwnershipTransferred,
  WithdrawReward
} from "../generated/DreamChallenge/DreamChallenge"

export function createAddChallengeEvent(
  admin: Address,
  ctype: i32,
  challengeId: i32,
  placeId: i32,
  matchId: i32,
  startAt: BigInt,
  endAt: BigInt,
  tokenIdLeft: BigInt,
  tokenIdRight: BigInt
): AddChallenge {
  let addChallengeEvent = changetype<AddChallenge>(newMockEvent())

  addChallengeEvent.parameters = new Array()

  addChallengeEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  addChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "ctype",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(ctype))
    )
  )
  addChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "challengeId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(challengeId))
    )
  )
  addChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "placeId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(placeId))
    )
  )
  addChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "matchId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(matchId))
    )
  )
  addChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "startAt",
      ethereum.Value.fromUnsignedBigInt(startAt)
    )
  )
  addChallengeEvent.parameters.push(
    new ethereum.EventParam("endAt", ethereum.Value.fromUnsignedBigInt(endAt))
  )
  addChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIdLeft",
      ethereum.Value.fromUnsignedBigInt(tokenIdLeft)
    )
  )
  addChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIdRight",
      ethereum.Value.fromUnsignedBigInt(tokenIdRight)
    )
  )

  return addChallengeEvent
}

export function createEnterChallengeEvent(
  user: Address,
  challengeId: i32,
  tokenid: BigInt,
  amount: BigInt
): EnterChallenge {
  let enterChallengeEvent = changetype<EnterChallenge>(newMockEvent())

  enterChallengeEvent.parameters = new Array()

  enterChallengeEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  enterChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "challengeId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(challengeId))
    )
  )
  enterChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenid",
      ethereum.Value.fromUnsignedBigInt(tokenid)
    )
  )
  enterChallengeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return enterChallengeEvent
}

export function createModificationAdminEvent(
  admin: Address,
  oldState: boolean,
  newState: boolean
): ModificationAdmin {
  let modificationAdminEvent = changetype<ModificationAdmin>(newMockEvent())

  modificationAdminEvent.parameters = new Array()

  modificationAdminEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  modificationAdminEvent.parameters.push(
    new ethereum.EventParam("oldState", ethereum.Value.fromBoolean(oldState))
  )
  modificationAdminEvent.parameters.push(
    new ethereum.EventParam("newState", ethereum.Value.fromBoolean(newState))
  )

  return modificationAdminEvent
}

export function createModifyChallengeEvent(
  admin: Address,
  ctype: i32,
  challengeId: i32,
  placeId: i32,
  matchId: i32,
  startAt: BigInt,
  endAt: BigInt,
  tokenIdLeft: BigInt,
  tokenIdRight: BigInt
): ModifyChallenge {
  let modifyChallengeEvent = changetype<ModifyChallenge>(newMockEvent())

  modifyChallengeEvent.parameters = new Array()

  modifyChallengeEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  modifyChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "ctype",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(ctype))
    )
  )
  modifyChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "challengeId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(challengeId))
    )
  )
  modifyChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "placeId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(placeId))
    )
  )
  modifyChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "matchId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(matchId))
    )
  )
  modifyChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "startAt",
      ethereum.Value.fromUnsignedBigInt(startAt)
    )
  )
  modifyChallengeEvent.parameters.push(
    new ethereum.EventParam("endAt", ethereum.Value.fromUnsignedBigInt(endAt))
  )
  modifyChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIdLeft",
      ethereum.Value.fromUnsignedBigInt(tokenIdLeft)
    )
  )
  modifyChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIdRight",
      ethereum.Value.fromUnsignedBigInt(tokenIdRight)
    )
  )

  return modifyChallengeEvent
}

export function createOpenChallengeEvent(
  admin: Address,
  challenageId: i32,
  target: i32,
  openTime: BigInt
): OpenChallenge {
  let openChallengeEvent = changetype<OpenChallenge>(newMockEvent())

  openChallengeEvent.parameters = new Array()

  openChallengeEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  openChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "challenageId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(challenageId))
    )
  )
  openChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "target",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(target))
    )
  )
  openChallengeEvent.parameters.push(
    new ethereum.EventParam(
      "openTime",
      ethereum.Value.fromUnsignedBigInt(openTime)
    )
  )

  return openChallengeEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createWithdrawRewardEvent(
  user: Address,
  challageId: i32,
  amount: BigInt
): WithdrawReward {
  let withdrawRewardEvent = changetype<WithdrawReward>(newMockEvent())

  withdrawRewardEvent.parameters = new Array()

  withdrawRewardEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawRewardEvent.parameters.push(
    new ethereum.EventParam(
      "challageId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(challageId))
    )
  )
  withdrawRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawRewardEvent
}

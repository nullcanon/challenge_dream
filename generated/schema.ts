// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ChallengeInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ChallengeInfo entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ChallengeInfo must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ChallengeInfo", id.toString(), this);
    }
  }

  static load(id: string): ChallengeInfo | null {
    return changetype<ChallengeInfo | null>(store.get("ChallengeInfo", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ctype(): i32 {
    let value = this.get("ctype");
    return value!.toI32();
  }

  set ctype(value: i32) {
    this.set("ctype", Value.fromI32(value));
  }

  get winnerTarget(): i32 {
    let value = this.get("winnerTarget");
    return value!.toI32();
  }

  set winnerTarget(value: i32) {
    this.set("winnerTarget", Value.fromI32(value));
  }

  get placeId(): i32 {
    let value = this.get("placeId");
    return value!.toI32();
  }

  set placeId(value: i32) {
    this.set("placeId", Value.fromI32(value));
  }

  get matchId(): i32 {
    let value = this.get("matchId");
    return value!.toI32();
  }

  set matchId(value: i32) {
    this.set("matchId", Value.fromI32(value));
  }

  get leftScore(): i32 {
    let value = this.get("leftScore");
    return value!.toI32();
  }

  set leftScore(value: i32) {
    this.set("leftScore", Value.fromI32(value));
  }

  get rightScore(): i32 {
    let value = this.get("rightScore");
    return value!.toI32();
  }

  set rightScore(value: i32) {
    this.set("rightScore", Value.fromI32(value));
  }

  get startAt(): BigInt {
    let value = this.get("startAt");
    return value!.toBigInt();
  }

  set startAt(value: BigInt) {
    this.set("startAt", Value.fromBigInt(value));
  }

  get endAt(): BigInt {
    let value = this.get("endAt");
    return value!.toBigInt();
  }

  set endAt(value: BigInt) {
    this.set("endAt", Value.fromBigInt(value));
  }

  get openAt(): BigInt {
    let value = this.get("openAt");
    return value!.toBigInt();
  }

  set openAt(value: BigInt) {
    this.set("openAt", Value.fromBigInt(value));
  }

  get tokenIdLeft(): BigInt {
    let value = this.get("tokenIdLeft");
    return value!.toBigInt();
  }

  set tokenIdLeft(value: BigInt) {
    this.set("tokenIdLeft", Value.fromBigInt(value));
  }

  get tokenIdRight(): BigInt {
    let value = this.get("tokenIdRight");
    return value!.toBigInt();
  }

  set tokenIdRight(value: BigInt) {
    this.set("tokenIdRight", Value.fromBigInt(value));
  }

  get leftTotalAmount(): BigInt {
    let value = this.get("leftTotalAmount");
    return value!.toBigInt();
  }

  set leftTotalAmount(value: BigInt) {
    this.set("leftTotalAmount", Value.fromBigInt(value));
  }

  get rightTotalAmount(): BigInt {
    let value = this.get("rightTotalAmount");
    return value!.toBigInt();
  }

  set rightTotalAmount(value: BigInt) {
    this.set("rightTotalAmount", Value.fromBigInt(value));
  }

  get leftMiddleTotalAmount(): BigInt {
    let value = this.get("leftMiddleTotalAmount");
    return value!.toBigInt();
  }

  set leftMiddleTotalAmount(value: BigInt) {
    this.set("leftMiddleTotalAmount", Value.fromBigInt(value));
  }

  get rightMiddleTotalAmount(): BigInt {
    let value = this.get("rightMiddleTotalAmount");
    return value!.toBigInt();
  }

  set rightMiddleTotalAmount(value: BigInt) {
    this.set("rightMiddleTotalAmount", Value.fromBigInt(value));
  }
}

export class UserInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserInfo entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserInfo must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserInfo", id.toString(), this);
    }
  }

  static load(id: string): UserInfo | null {
    return changetype<UserInfo | null>(store.get("UserInfo", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get challenge(): string {
    let value = this.get("challenge");
    return value!.toString();
  }

  set challenge(value: string) {
    this.set("challenge", Value.fromString(value));
  }

  get amountsLeft(): BigInt {
    let value = this.get("amountsLeft");
    return value!.toBigInt();
  }

  set amountsLeft(value: BigInt) {
    this.set("amountsLeft", Value.fromBigInt(value));
  }

  get amountsRight(): BigInt {
    let value = this.get("amountsRight");
    return value!.toBigInt();
  }

  set amountsRight(value: BigInt) {
    this.set("amountsRight", Value.fromBigInt(value));
  }

  get amountMiddleL(): BigInt {
    let value = this.get("amountMiddleL");
    return value!.toBigInt();
  }

  set amountMiddleL(value: BigInt) {
    this.set("amountMiddleL", Value.fromBigInt(value));
  }

  get amountMiddleR(): BigInt {
    let value = this.get("amountMiddleR");
    return value!.toBigInt();
  }

  set amountMiddleR(value: BigInt) {
    this.set("amountMiddleR", Value.fromBigInt(value));
  }

  get isTakeReward(): boolean {
    let value = this.get("isTakeReward");
    return value!.toBoolean();
  }

  set isTakeReward(value: boolean) {
    this.set("isTakeReward", Value.fromBoolean(value));
  }
}

export class UserChallenge extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserChallenge entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserChallenge must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserChallenge", id.toString(), this);
    }
  }

  static load(id: string): UserChallenge | null {
    return changetype<UserChallenge | null>(store.get("UserChallenge", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get challenges(): Array<string> {
    let value = this.get("challenges");
    return value!.toStringArray();
  }

  set challenges(value: Array<string>) {
    this.set("challenges", Value.fromStringArray(value));
  }
}

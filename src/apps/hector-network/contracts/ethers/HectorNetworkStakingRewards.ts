/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface HectorNetworkStakingRewardsInterface extends utils.Interface {
  functions: {
    'balanceOf(address)': FunctionFragment;
    'earned(address)': FunctionFragment;
    'exit()': FunctionFragment;
    'getReward()': FunctionFragment;
    'getRewardForDuration()': FunctionFragment;
    'lastPauseTime()': FunctionFragment;
    'lastTimeRewardApplicable()': FunctionFragment;
    'lastUpdateTime()': FunctionFragment;
    'notifyRewardAmount(uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'paused()': FunctionFragment;
    'periodFinish()': FunctionFragment;
    'pullManagement()': FunctionFragment;
    'pushManagement(address)': FunctionFragment;
    'recoverERC20(address,uint256)': FunctionFragment;
    'renounceManagement(string)': FunctionFragment;
    'rewardPerToken()': FunctionFragment;
    'rewardPerTokenStored()': FunctionFragment;
    'rewardRate()': FunctionFragment;
    'rewards(address)': FunctionFragment;
    'rewardsDistribution()': FunctionFragment;
    'rewardsDuration()': FunctionFragment;
    'rewardsToken()': FunctionFragment;
    'setPaused(bool)': FunctionFragment;
    'setRewardsDistribution(address)': FunctionFragment;
    'setRewardsDuration(uint256)': FunctionFragment;
    'stake(uint256)': FunctionFragment;
    'stakingToken()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'userRewardPerTokenPaid(address)': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'balanceOf'
      | 'earned'
      | 'exit'
      | 'getReward'
      | 'getRewardForDuration'
      | 'lastPauseTime'
      | 'lastTimeRewardApplicable'
      | 'lastUpdateTime'
      | 'notifyRewardAmount'
      | 'owner'
      | 'paused'
      | 'periodFinish'
      | 'pullManagement'
      | 'pushManagement'
      | 'recoverERC20'
      | 'renounceManagement'
      | 'rewardPerToken'
      | 'rewardPerTokenStored'
      | 'rewardRate'
      | 'rewards'
      | 'rewardsDistribution'
      | 'rewardsDuration'
      | 'rewardsToken'
      | 'setPaused'
      | 'setRewardsDistribution'
      | 'setRewardsDuration'
      | 'stake'
      | 'stakingToken'
      | 'totalSupply'
      | 'userRewardPerTokenPaid'
      | 'withdraw',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'earned', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'exit', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getReward', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getRewardForDuration', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastPauseTime', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastTimeRewardApplicable', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastUpdateTime', values?: undefined): string;
  encodeFunctionData(functionFragment: 'notifyRewardAmount', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
  encodeFunctionData(functionFragment: 'periodFinish', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pullManagement', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pushManagement', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'recoverERC20',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'renounceManagement', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'rewardPerToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardPerTokenStored', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardRate', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewards', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'rewardsDistribution', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardsDuration', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardsToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setPaused', values: [PromiseOrValue<boolean>]): string;
  encodeFunctionData(functionFragment: 'setRewardsDistribution', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setRewardsDuration', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'stake', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'stakingToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'userRewardPerTokenPaid', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [PromiseOrValue<BigNumberish>]): string;

  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'earned', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRewardForDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastPauseTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastTimeRewardApplicable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastUpdateTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'notifyRewardAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'periodFinish', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pullManagement', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pushManagement', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'recoverERC20', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceManagement', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerTokenStored', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardsDistribution', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardsDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardsToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPaused', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setRewardsDistribution', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setRewardsDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakingToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userRewardPerTokenPaid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

  events: {
    'OwnershipPulled(address,address)': EventFragment;
    'OwnershipPushed(address,address)': EventFragment;
    'PauseChanged(bool)': EventFragment;
    'Recovered(address,uint256)': EventFragment;
    'RewardAdded(uint256)': EventFragment;
    'RewardPaid(address,uint256)': EventFragment;
    'RewardsDurationUpdated(uint256)': EventFragment;
    'Staked(address,uint256)': EventFragment;
    'Withdrawn(address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipPulled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipPushed'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PauseChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Recovered'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardPaid'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardsDurationUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Staked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdrawn'): EventFragment;
}

export interface OwnershipPulledEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipPulledEvent = TypedEvent<[string, string], OwnershipPulledEventObject>;

export type OwnershipPulledEventFilter = TypedEventFilter<OwnershipPulledEvent>;

export interface OwnershipPushedEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipPushedEvent = TypedEvent<[string, string], OwnershipPushedEventObject>;

export type OwnershipPushedEventFilter = TypedEventFilter<OwnershipPushedEvent>;

export interface PauseChangedEventObject {
  isPaused: boolean;
}
export type PauseChangedEvent = TypedEvent<[boolean], PauseChangedEventObject>;

export type PauseChangedEventFilter = TypedEventFilter<PauseChangedEvent>;

export interface RecoveredEventObject {
  token: string;
  amount: BigNumber;
}
export type RecoveredEvent = TypedEvent<[string, BigNumber], RecoveredEventObject>;

export type RecoveredEventFilter = TypedEventFilter<RecoveredEvent>;

export interface RewardAddedEventObject {
  reward: BigNumber;
}
export type RewardAddedEvent = TypedEvent<[BigNumber], RewardAddedEventObject>;

export type RewardAddedEventFilter = TypedEventFilter<RewardAddedEvent>;

export interface RewardPaidEventObject {
  user: string;
  reward: BigNumber;
}
export type RewardPaidEvent = TypedEvent<[string, BigNumber], RewardPaidEventObject>;

export type RewardPaidEventFilter = TypedEventFilter<RewardPaidEvent>;

export interface RewardsDurationUpdatedEventObject {
  newDuration: BigNumber;
}
export type RewardsDurationUpdatedEvent = TypedEvent<[BigNumber], RewardsDurationUpdatedEventObject>;

export type RewardsDurationUpdatedEventFilter = TypedEventFilter<RewardsDurationUpdatedEvent>;

export interface StakedEventObject {
  user: string;
  amount: BigNumber;
}
export type StakedEvent = TypedEvent<[string, BigNumber], StakedEventObject>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export interface WithdrawnEventObject {
  user: string;
  amount: BigNumber;
}
export type WithdrawnEvent = TypedEvent<[string, BigNumber], WithdrawnEventObject>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface HectorNetworkStakingRewards extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HectorNetworkStakingRewardsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    getRewardForDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastPauseTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    periodFinish(overrides?: CallOverrides): Promise<[BigNumber]>;

    pullManagement(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    pushManagement(
      newOwner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    recoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    renounceManagement(
      confirm: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    rewardPerToken(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardsDistribution(overrides?: CallOverrides): Promise<[string]>;

    rewardsDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardsToken(overrides?: CallOverrides): Promise<[string]>;

    setPaused(
      _paused: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setRewardsDistribution(
      _rewardsDistribution: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setRewardsDuration(
      _rewardsDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    stake(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  getRewardForDuration(overrides?: CallOverrides): Promise<BigNumber>;

  lastPauseTime(overrides?: CallOverrides): Promise<BigNumber>;

  lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

  lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  notifyRewardAmount(
    reward: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

  pullManagement(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  pushManagement(
    newOwner_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  recoverERC20(
    tokenAddress: PromiseOrValue<string>,
    tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  renounceManagement(
    confirm: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

  rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

  rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  rewardsDistribution(overrides?: CallOverrides): Promise<string>;

  rewardsDuration(overrides?: CallOverrides): Promise<BigNumber>;

  rewardsToken(overrides?: CallOverrides): Promise<string>;

  setPaused(
    _paused: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setRewardsDistribution(
    _rewardsDistribution: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setRewardsDuration(
    _rewardsDuration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  stake(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  stakingToken(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    exit(overrides?: CallOverrides): Promise<void>;

    getReward(overrides?: CallOverrides): Promise<void>;

    getRewardForDuration(overrides?: CallOverrides): Promise<BigNumber>;

    lastPauseTime(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(reward: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    pullManagement(overrides?: CallOverrides): Promise<void>;

    pushManagement(newOwner_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    recoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    renounceManagement(confirm: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    rewardsDistribution(overrides?: CallOverrides): Promise<string>;

    rewardsDuration(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsToken(overrides?: CallOverrides): Promise<string>;

    setPaused(_paused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;

    setRewardsDistribution(_rewardsDistribution: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setRewardsDuration(_rewardsDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    stake(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    stakingToken(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'OwnershipPulled(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipPulledEventFilter;
    OwnershipPulled(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipPulledEventFilter;

    'OwnershipPushed(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipPushedEventFilter;
    OwnershipPushed(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipPushedEventFilter;

    'PauseChanged(bool)'(isPaused?: null): PauseChangedEventFilter;
    PauseChanged(isPaused?: null): PauseChangedEventFilter;

    'Recovered(address,uint256)'(token?: null, amount?: null): RecoveredEventFilter;
    Recovered(token?: null, amount?: null): RecoveredEventFilter;

    'RewardAdded(uint256)'(reward?: null): RewardAddedEventFilter;
    RewardAdded(reward?: null): RewardAddedEventFilter;

    'RewardPaid(address,uint256)'(user?: PromiseOrValue<string> | null, reward?: null): RewardPaidEventFilter;
    RewardPaid(user?: PromiseOrValue<string> | null, reward?: null): RewardPaidEventFilter;

    'RewardsDurationUpdated(uint256)'(newDuration?: null): RewardsDurationUpdatedEventFilter;
    RewardsDurationUpdated(newDuration?: null): RewardsDurationUpdatedEventFilter;

    'Staked(address,uint256)'(user?: PromiseOrValue<string> | null, amount?: null): StakedEventFilter;
    Staked(user?: PromiseOrValue<string> | null, amount?: null): StakedEventFilter;

    'Withdrawn(address,uint256)'(user?: PromiseOrValue<string> | null, amount?: null): WithdrawnEventFilter;
    Withdrawn(user?: PromiseOrValue<string> | null, amount?: null): WithdrawnEventFilter;
  };

  estimateGas: {
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    getRewardForDuration(overrides?: CallOverrides): Promise<BigNumber>;

    lastPauseTime(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    pullManagement(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    pushManagement(
      newOwner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    recoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    renounceManagement(
      confirm: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    rewardsDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsDuration(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsToken(overrides?: CallOverrides): Promise<BigNumber>;

    setPaused(
      _paused: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setRewardsDistribution(
      _rewardsDistribution: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setRewardsDuration(
      _rewardsDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    stake(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    stakingToken(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    getRewardForDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastPauseTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    periodFinish(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pullManagement(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    pushManagement(
      newOwner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    recoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    renounceManagement(
      confirm: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    rewardPerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsDistribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPaused(
      _paused: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setRewardsDistribution(
      _rewardsDistribution: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setRewardsDuration(
      _rewardsDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    stake(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface IChallengeInterface extends ethers.utils.Interface {
  functions: {
    'asserter()': FunctionFragment
    'challenger()': FunctionFragment
    'clearChallenge()': FunctionFragment
    'currentResponderTimeLeft()': FunctionFragment
    'initializeChallenge(address[],address,bytes32,uint256,address,address,uint256,uint256,address,address)': FunctionFragment
    'lastMoveBlock()': FunctionFragment
    'timeout()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'asserter', values?: undefined): string
  encodeFunctionData(functionFragment: 'challenger', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'clearChallenge',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'currentResponderTimeLeft',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'initializeChallenge',
    values: [
      string[],
      string,
      BytesLike,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      string,
      string
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'lastMoveBlock',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'timeout', values?: undefined): string

  decodeFunctionResult(functionFragment: 'asserter', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'challenger', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'clearChallenge',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'currentResponderTimeLeft',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'initializeChallenge',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'lastMoveBlock',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'timeout', data: BytesLike): Result

  events: {}
}

export class IChallenge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: IChallengeInterface

  functions: {
    asserter(overrides?: CallOverrides): Promise<[string]>

    challenger(overrides?: CallOverrides): Promise<[string]>

    clearChallenge(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    currentResponderTimeLeft(overrides?: CallOverrides): Promise<[BigNumber]>

    initializeChallenge(
      _executors: string[],
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    lastMoveBlock(overrides?: CallOverrides): Promise<[BigNumber]>

    timeout(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  asserter(overrides?: CallOverrides): Promise<string>

  challenger(overrides?: CallOverrides): Promise<string>

  clearChallenge(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  currentResponderTimeLeft(overrides?: CallOverrides): Promise<BigNumber>

  initializeChallenge(
    _executors: string[],
    _resultReceiver: string,
    _executionHash: BytesLike,
    _maxMessageCount: BigNumberish,
    _asserter: string,
    _challenger: string,
    _asserterTimeLeft: BigNumberish,
    _challengerTimeLeft: BigNumberish,
    _sequencerBridge: string,
    _delayedBridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  lastMoveBlock(overrides?: CallOverrides): Promise<BigNumber>

  timeout(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    asserter(overrides?: CallOverrides): Promise<string>

    challenger(overrides?: CallOverrides): Promise<string>

    clearChallenge(overrides?: CallOverrides): Promise<void>

    currentResponderTimeLeft(overrides?: CallOverrides): Promise<BigNumber>

    initializeChallenge(
      _executors: string[],
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: CallOverrides
    ): Promise<void>

    lastMoveBlock(overrides?: CallOverrides): Promise<BigNumber>

    timeout(overrides?: CallOverrides): Promise<void>
  }

  filters: {}

  estimateGas: {
    asserter(overrides?: CallOverrides): Promise<BigNumber>

    challenger(overrides?: CallOverrides): Promise<BigNumber>

    clearChallenge(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    currentResponderTimeLeft(overrides?: CallOverrides): Promise<BigNumber>

    initializeChallenge(
      _executors: string[],
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    lastMoveBlock(overrides?: CallOverrides): Promise<BigNumber>

    timeout(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    asserter(overrides?: CallOverrides): Promise<PopulatedTransaction>

    challenger(overrides?: CallOverrides): Promise<PopulatedTransaction>

    clearChallenge(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    currentResponderTimeLeft(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    initializeChallenge(
      _executors: string[],
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    lastMoveBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>

    timeout(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
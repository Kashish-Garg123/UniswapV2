/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IUniswapV2Migrator,
  IUniswapV2MigratorInterface,
} from "../IUniswapV2Migrator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IUniswapV2Migrator__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV2MigratorInterface {
    return new utils.Interface(_abi) as IUniswapV2MigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapV2Migrator {
    return new Contract(address, _abi, signerOrProvider) as IUniswapV2Migrator;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapV2ERC20,
  UniswapV2ERC20Interface,
} from "../UniswapV2ERC20";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6040518060400160405280600a81526020017f556e697377617020563200000000000000000000000000000000000000000000815250805190602001206040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250805190602001208330604051602001620000c79594939291906200011d565b6040516020818303038152906040528051906020012060038190555050620001c2565b620000f5816200017a565b82525050565b62000106816200018e565b82525050565b6200011781620001b8565b82525050565b600060a082019050620001346000830188620000fb565b620001436020830187620000fb565b620001526040830186620000fb565b6200016160608301856200010c565b620001706080830184620000ea565b9695505050505050565b6000620001878262000198565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b61137a80620001d26000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80633644e5151161008c57806395d89b411161006657806395d89b411461022a578063a9059cbb14610248578063d505accf14610278578063dd62ed3e14610294576100cf565b80633644e515146101ac57806370a08231146101ca5780637ecebe00146101fa576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd1461014057806330adf81f14610170578063313ce5671461018e575b600080fd5b6100dc6102c4565b6040516100e99190610f68565b60405180910390f35b61010c60048036038101906101079190610ccb565b6102fd565b6040516101199190610e8c565b60405180910390f35b61012a610314565b604051610137919061100a565b60405180910390f35b61015a60048036038101906101559190610bd6565b61031a565b6040516101679190610e8c565b60405180910390f35b6101786104e5565b6040516101859190610ea7565b60405180910390f35b61019661050c565b6040516101a39190611025565b60405180910390f35b6101b4610511565b6040516101c19190610ea7565b60405180910390f35b6101e460048036038101906101df9190610b69565b610517565b6040516101f1919061100a565b60405180910390f35b610214600480360381019061020f9190610b69565b61052f565b604051610221919061100a565b60405180910390f35b610232610547565b60405161023f9190610f68565b60405180910390f35b610262600480360381019061025d9190610ccb565b610580565b60405161026f9190610e8c565b60405180910390f35b610292600480360381019061028d9190610c29565b610597565b005b6102ae60048036038101906102a99190610b96565b6107bf565b6040516102bb919061100a565b60405180910390f35b6040518060400160405280600a81526020017f556e69737761702056320000000000000000000000000000000000000000000081525081565b600061030a3384846107e4565b6001905092915050565b60005481565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146104cf5761044e82600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108cf90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b6104da848484610928565b600190509392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b81565b601281565b60035481565b60016020528060005260406000206000915090505481565b60046020528060005260406000206000915090505481565b6040518060400160405280600681526020017f554e492d5632000000000000000000000000000000000000000000000000000081525081565b600061058d338484610928565b6001905092915050565b428410156105da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d190610fea565b60405180910390fd5b60006003547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b898989600460008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061065690611183565b919050558a60405160200161067096959493929190610ec2565b60405160208183030381529060405280519060200120604051602001610697929190610e55565b6040516020818303038152906040528051906020012090506000600182868686604051600081526020016040526040516106d49493929190610f23565b6020604051602081039080840390855afa1580156106f6573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561076a57508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b6107a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a090610faa565b60405180910390fd5b6107b48989896107e4565b505050505050505050565b6002602052816000526040600020602052806000526040600020600091509150505481565b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108c2919061100a565b60405180910390a3505050565b60008282846108de91906110bd565b9150811115610922576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091990610f8a565b60405180910390fd5b92915050565b61097a81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108cf90919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a0f81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610abc90919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610aaf919061100a565b60405180910390a3505050565b6000828284610acb9190611067565b9150811015610b0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0690610fca565b60405180910390fd5b92915050565b600081359050610b24816112e8565b92915050565b600081359050610b39816112ff565b92915050565b600081359050610b4e81611316565b92915050565b600081359050610b638161132d565b92915050565b600060208284031215610b7f57610b7e611205565b5b6000610b8d84828501610b15565b91505092915050565b60008060408385031215610bad57610bac611205565b5b6000610bbb85828601610b15565b9250506020610bcc85828601610b15565b9150509250929050565b600080600060608486031215610bef57610bee611205565b5b6000610bfd86828701610b15565b9350506020610c0e86828701610b15565b9250506040610c1f86828701610b3f565b9150509250925092565b600080600080600080600060e0888a031215610c4857610c47611205565b5b6000610c568a828b01610b15565b9750506020610c678a828b01610b15565b9650506040610c788a828b01610b3f565b9550506060610c898a828b01610b3f565b9450506080610c9a8a828b01610b54565b93505060a0610cab8a828b01610b2a565b92505060c0610cbc8a828b01610b2a565b91505092959891949750929550565b60008060408385031215610ce257610ce1611205565b5b6000610cf085828601610b15565b9250506020610d0185828601610b3f565b9150509250929050565b610d14816110f1565b82525050565b610d2381611103565b82525050565b610d328161110f565b82525050565b610d49610d448261110f565b6111cc565b82525050565b6000610d5a82611040565b610d64818561104b565b9350610d74818560208601611150565b610d7d8161120a565b840191505092915050565b6000610d9560158361104b565b9150610da08261121b565b602082019050919050565b6000610db8601c8361104b565b9150610dc382611244565b602082019050919050565b6000610ddb60028361105c565b9150610de68261126d565b600282019050919050565b6000610dfe60148361104b565b9150610e0982611296565b602082019050919050565b6000610e2160128361104b565b9150610e2c826112bf565b602082019050919050565b610e4081611139565b82525050565b610e4f81611143565b82525050565b6000610e6082610dce565b9150610e6c8285610d38565b602082019150610e7c8284610d38565b6020820191508190509392505050565b6000602082019050610ea16000830184610d1a565b92915050565b6000602082019050610ebc6000830184610d29565b92915050565b600060c082019050610ed76000830189610d29565b610ee46020830188610d0b565b610ef16040830187610d0b565b610efe6060830186610e37565b610f0b6080830185610e37565b610f1860a0830184610e37565b979650505050505050565b6000608082019050610f386000830187610d29565b610f456020830186610e46565b610f526040830185610d29565b610f5f6060830184610d29565b95945050505050565b60006020820190508181036000830152610f828184610d4f565b905092915050565b60006020820190508181036000830152610fa381610d88565b9050919050565b60006020820190508181036000830152610fc381610dab565b9050919050565b60006020820190508181036000830152610fe381610df1565b9050919050565b6000602082019050818103600083015261100381610e14565b9050919050565b600060208201905061101f6000830184610e37565b92915050565b600060208201905061103a6000830184610e46565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600061107282611139565b915061107d83611139565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156110b2576110b16111d6565b5b828201905092915050565b60006110c882611139565b91506110d383611139565b9250828210156110e6576110e56111d6565b5b828203905092915050565b60006110fc82611119565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561116e578082015181840152602081019050611153565b8381111561117d576000848401525b50505050565b600061118e82611139565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156111c1576111c06111d6565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000600082015250565b7f556e697377617056323a20494e56414c49445f5349474e415455524500000000600082015250565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b7f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000600082015250565b7f556e697377617056323a20455850495245440000000000000000000000000000600082015250565b6112f1816110f1565b81146112fc57600080fd5b50565b6113088161110f565b811461131357600080fd5b50565b61131f81611139565b811461132a57600080fd5b50565b61133681611143565b811461134157600080fd5b5056fea26469706673582212201de5793c0754fd532e4604f457b6824ae8e87ef6f203e6428b133dabea623a9c64736f6c63430008070033";

export class UniswapV2ERC20__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV2ERC20> {
    return super.deploy(overrides || {}) as Promise<UniswapV2ERC20>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UniswapV2ERC20 {
    return super.attach(address) as UniswapV2ERC20;
  }
  connect(signer: Signer): UniswapV2ERC20__factory {
    return super.connect(signer) as UniswapV2ERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2ERC20Interface {
    return new utils.Interface(_abi) as UniswapV2ERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2ERC20 {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2ERC20;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Token1, Token1Interface } from "../Token1";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amountToBePaid",
        type: "uint256",
      },
    ],
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
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
        name: "amount",
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
        name: "account",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "amount",
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
        name: "amount",
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
  "0x60806040523480156200001157600080fd5b506040516200219438038062002194833981810160405281019062000037919062000391565b82828160039080519060200190620000519291906200024c565b5080600490805190602001906200006a9291906200024c565b5050506200007f3382620000c960201b60201c565b33600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505062000710565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200013c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001339062000463565b60405180910390fd5b62000150600083836200024260201b60201c565b806002600082825462000164919062000512565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001bb919062000512565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000222919062000485565b60405180910390a36200023e600083836200024760201b60201c565b5050565b505050565b505050565b8280546200025a90620005af565b90600052602060002090601f0160209004810192826200027e5760008555620002ca565b82601f106200029957805160ff1916838001178555620002ca565b82800160010185558215620002ca579182015b82811115620002c9578251825591602001919060010190620002ac565b5b509050620002d99190620002dd565b5090565b5b80821115620002f8576000816000905550600101620002de565b5090565b6000620003136200030d84620004cb565b620004a2565b905082815260208101848484011115620003325762000331620006ad565b5b6200033f84828562000579565b509392505050565b600082601f8301126200035f576200035e620006a8565b5b815162000371848260208601620002fc565b91505092915050565b6000815190506200038b81620006f6565b92915050565b600080600060608486031215620003ad57620003ac620006b7565b5b600084015167ffffffffffffffff811115620003ce57620003cd620006b2565b5b620003dc8682870162000347565b935050602084015167ffffffffffffffff8111156200040057620003ff620006b2565b5b6200040e8682870162000347565b925050604062000421868287016200037a565b9150509250925092565b60006200043a601f8362000501565b91506200044782620006cd565b602082019050919050565b6200045d816200056f565b82525050565b600060208201905081810360008301526200047e816200042b565b9050919050565b60006020820190506200049c600083018462000452565b92915050565b6000620004ae620004c1565b9050620004bc8282620005e5565b919050565b6000604051905090565b600067ffffffffffffffff821115620004e957620004e862000679565b5b620004f482620006bc565b9050602081019050919050565b600082825260208201905092915050565b60006200051f826200056f565b91506200052c836200056f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200056457620005636200061b565b5b828201905092915050565b6000819050919050565b60005b83811015620005995780820151818401526020810190506200057c565b83811115620005a9576000848401525b50505050565b60006002820490506001821680620005c857607f821691505b60208210811415620005df57620005de6200064a565b5b50919050565b620005f082620006bc565b810181811067ffffffffffffffff8211171562000612576200061162000679565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b62000701816200056f565b81146200070d57600080fd5b50565b611a7480620007206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806342966c681161008c578063a457c2d711610066578063a457c2d71461025f578063a9059cbb1461028f578063dd62ed3e146102bf578063f851a440146102ef576100ea565b806342966c68146101f557806370a082311461021157806395d89b4114610241576100ea565b806323b872dd116100c857806323b872dd1461015b578063313ce5671461018b57806339509351146101a957806340c10f19146101d9576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f761030d565b6040516101049190611391565b60405180910390f35b610127600480360381019061012291906110f8565b61039f565b6040516101349190611376565b60405180910390f35b6101456103c2565b6040516101529190611513565b60405180910390f35b610175600480360381019061017091906110a5565b6103cc565b6040516101829190611376565b60405180910390f35b6101936103fb565b6040516101a0919061152e565b60405180910390f35b6101c360048036038101906101be91906110f8565b610404565b6040516101d09190611376565b60405180910390f35b6101f360048036038101906101ee91906110f8565b6104ae565b005b61020f600480360381019061020a9190611138565b61054c565b005b61022b60048036038101906102269190611038565b610559565b6040516102389190611513565b60405180910390f35b6102496105a1565b6040516102569190611391565b60405180910390f35b610279600480360381019061027491906110f8565b610633565b6040516102869190611376565b60405180910390f35b6102a960048036038101906102a491906110f8565b61071d565b6040516102b69190611376565b60405180910390f35b6102d960048036038101906102d49190611065565b610740565b6040516102e69190611513565b60405180910390f35b6102f76107c7565b604051610304919061135b565b60405180910390f35b60606003805461031c90611677565b80601f016020809104026020016040519081016040528092919081815260200182805461034890611677565b80156103955780601f1061036a57610100808354040283529160200191610395565b820191906000526020600020905b81548152906001019060200180831161037857829003601f168201915b5050505050905090565b6000806103aa6107ed565b90506103b78185856107f5565b600191505092915050565b6000600254905090565b6000806103d76107ed565b90506103e48582856109c0565b6103ef858585610a4c565b60019150509392505050565b60006012905090565b60008061040f6107ed565b90506104a3818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461049e9190611565565b6107f5565b600191505092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461053e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053590611453565b60405180910390fd5b6105488282610ccd565b5050565b6105563382610e2d565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546105b090611677565b80601f01602080910402602001604051908101604052809291908181526020018280546105dc90611677565b80156106295780601f106105fe57610100808354040283529160200191610629565b820191906000526020600020905b81548152906001019060200180831161060c57829003601f168201915b5050505050905090565b60008061063e6107ed565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610704576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fb906114d3565b60405180910390fd5b61071182868684036107f5565b60019250505092915050565b6000806107286107ed565b9050610735818585610a4c565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610865576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085c906114b3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108cc906113f3565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109b39190611513565b60405180910390a3505050565b60006109cc8484610740565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610a465781811015610a38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2f90611413565b60405180910390fd5b610a4584848484036107f5565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610abc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab390611493565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b23906113b3565b60405180910390fd5b610b37838383611004565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610bbd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb490611433565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c509190611565565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610cb49190611513565b60405180910390a3610cc7848484611009565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d34906114f3565b60405180910390fd5b610d4960008383611004565b8060026000828254610d5b9190611565565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610db09190611565565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e159190611513565b60405180910390a3610e2960008383611009565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9490611473565b60405180910390fd5b610ea982600083611004565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610f2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f26906113d3565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610f8691906115bb565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610feb9190611513565b60405180910390a3610fff83600084611009565b505050565b505050565b505050565b60008135905061101d81611a10565b92915050565b60008135905061103281611a27565b92915050565b60006020828403121561104e5761104d611707565b5b600061105c8482850161100e565b91505092915050565b6000806040838503121561107c5761107b611707565b5b600061108a8582860161100e565b925050602061109b8582860161100e565b9150509250929050565b6000806000606084860312156110be576110bd611707565b5b60006110cc8682870161100e565b93505060206110dd8682870161100e565b92505060406110ee86828701611023565b9150509250925092565b6000806040838503121561110f5761110e611707565b5b600061111d8582860161100e565b925050602061112e85828601611023565b9150509250929050565b60006020828403121561114e5761114d611707565b5b600061115c84828501611023565b91505092915050565b61116e816115ef565b82525050565b61117d81611601565b82525050565b600061118e82611549565b6111988185611554565b93506111a8818560208601611644565b6111b18161170c565b840191505092915050565b60006111c9602383611554565b91506111d48261171d565b604082019050919050565b60006111ec602283611554565b91506111f78261176c565b604082019050919050565b600061120f602283611554565b915061121a826117bb565b604082019050919050565b6000611232601d83611554565b915061123d8261180a565b602082019050919050565b6000611255602683611554565b915061126082611833565b604082019050919050565b6000611278600a83611554565b915061128382611882565b602082019050919050565b600061129b602183611554565b91506112a6826118ab565b604082019050919050565b60006112be602583611554565b91506112c9826118fa565b604082019050919050565b60006112e1602483611554565b91506112ec82611949565b604082019050919050565b6000611304602583611554565b915061130f82611998565b604082019050919050565b6000611327601f83611554565b9150611332826119e7565b602082019050919050565b6113468161162d565b82525050565b61135581611637565b82525050565b60006020820190506113706000830184611165565b92915050565b600060208201905061138b6000830184611174565b92915050565b600060208201905081810360008301526113ab8184611183565b905092915050565b600060208201905081810360008301526113cc816111bc565b9050919050565b600060208201905081810360008301526113ec816111df565b9050919050565b6000602082019050818103600083015261140c81611202565b9050919050565b6000602082019050818103600083015261142c81611225565b9050919050565b6000602082019050818103600083015261144c81611248565b9050919050565b6000602082019050818103600083015261146c8161126b565b9050919050565b6000602082019050818103600083015261148c8161128e565b9050919050565b600060208201905081810360008301526114ac816112b1565b9050919050565b600060208201905081810360008301526114cc816112d4565b9050919050565b600060208201905081810360008301526114ec816112f7565b9050919050565b6000602082019050818103600083015261150c8161131a565b9050919050565b6000602082019050611528600083018461133d565b92915050565b6000602082019050611543600083018461134c565b92915050565b600081519050919050565b600082825260208201905092915050565b60006115708261162d565b915061157b8361162d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156115b0576115af6116a9565b5b828201905092915050565b60006115c68261162d565b91506115d18361162d565b9250828210156115e4576115e36116a9565b5b828203905092915050565b60006115fa8261160d565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611662578082015181840152602081019050611647565b83811115611671576000848401525b50505050565b6000600282049050600182168061168f57607f821691505b602082108114156116a3576116a26116d8565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f4f6e6c792061646d696e00000000000000000000000000000000000000000000600082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611a19816115ef565b8114611a2457600080fd5b50565b611a308161162d565b8114611a3b57600080fd5b5056fea2646970667358221220d037b0bfef626df30aed837697c187355349d99f22e79d6e23612bf2b55fee8664736f6c63430008070033";

export class Token1__factory extends ContractFactory {
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
    tokenName: string,
    tokenSymbol: string,
    amountToBePaid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Token1> {
    return super.deploy(
      tokenName,
      tokenSymbol,
      amountToBePaid,
      overrides || {}
    ) as Promise<Token1>;
  }
  getDeployTransaction(
    tokenName: string,
    tokenSymbol: string,
    amountToBePaid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      tokenName,
      tokenSymbol,
      amountToBePaid,
      overrides || {}
    );
  }
  attach(address: string): Token1 {
    return super.attach(address) as Token1;
  }
  connect(signer: Signer): Token1__factory {
    return super.connect(signer) as Token1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Token1Interface {
    return new utils.Interface(_abi) as Token1Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token1 {
    return new Contract(address, _abi, signerOrProvider) as Token1;
  }
}

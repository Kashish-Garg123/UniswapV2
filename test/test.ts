import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { expandTo18Decimals } from "./utilities/utilities";
import { Contract, ContractFactory, Signer } from "ethers";

describe("Uniswap Contracts", function () {
  let UniswapV2Factory: any;
  let uniswapFactory: any;
  let router: any;
  let uniswaprouter: any;
  let weth: any;
  let hardhatWeth: any;
  let tokenA: any;
  let tokenB: any;
  let signers: SignerWithAddress[];
  let owner: SignerWithAddress;
  let user: SignerWithAddress;
  let s1: SignerWithAddress;
  let UniswapV2Pair: any;
  let uniswappair: any;
  let Hash: any;

  beforeEach(async function () {
    signers = await ethers.getSigners();
    owner = signers[0];
    user = signers[1];
    s1 = signers[2];
    UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
    uniswapFactory = await UniswapV2Factory.deploy(owner.address);
    const TokenA = await ethers.getContractFactory("Token1");
    tokenA = await TokenA.deploy("Token1", "TK1", expandTo18Decimals(1000));
    const TokenB = await ethers.getContractFactory("Token2");
    tokenB = await TokenB.deploy("Token2", "TK2", expandTo18Decimals(1000));
    weth = await ethers.getContractFactory("WETHToken");
    hardhatWeth = await weth.deploy();
    UniswapV2Pair = await ethers.getContractFactory("UniswapV2Pair");
    uniswappair = await UniswapV2Pair.deploy();
    router = await ethers.getContractFactory("UniswapV2Router02");
    uniswaprouter = await router.deploy(
      uniswapFactory.address,
      hardhatWeth.address
    );
  });

  describe("checking token details", function () {
    it("tokenA name should be TokenA and symbol should be TKA", async function () {
      expect(await tokenA.name()).to.equal("Token1");
      expect(await tokenA.symbol()).to.equal("TK1");
    });
    it("tokenB name should be TokenB and symbol should be TKB", async function () {
      expect(await tokenB.name()).to.equal("Token2");
      expect(await tokenB.symbol()).to.equal("TK2");
    });

    it("get hash and add liquidity", async () => {
      const hash = await ethers.getContractFactory("CalHash");
      Hash = await hash.deploy();
      console.log(await Hash.getInitHash(), "***************");
    });
    it("add liquidity", async function () {
      const hash = await ethers.getContractFactory("CalHash");
      Hash = await hash.deploy();
      const temp = expandTo18Decimals(100);
      await tokenA.approve(uniswaprouter.address, expandTo18Decimals(1000));
      await tokenB.approve(uniswaprouter.address, expandTo18Decimals(1000));
      await uniswaprouter.addLiquidity(
        tokenA.address,
        tokenB.address,
        expandTo18Decimals(10),
        expandTo18Decimals(10),
        expandTo18Decimals(1),
        expandTo18Decimals(1),
        owner.address,
        1696118399
      );
      const Pair = await uniswapFactory.getPair(tokenA.address, tokenB.address);
      const PairFactory = await ethers.getContractFactory("UniswapV2Pair");
      const Pair_instance = PairFactory.attach(Pair);
      let result = await Pair_instance.getReserves();
      let Reserve0 = Number(result._reserve0);
      let Reserve1 = Number(result._reserve1);
      expect(Reserve0).to.be.lessThanOrEqual(Number(expandTo18Decimals(10)));
      expect(Reserve1).to.be.lessThanOrEqual(Number(expandTo18Decimals(10)));
    });
    it("add Liquidity ETH", async function () {
      await tokenA.approve(uniswaprouter.address, expandTo18Decimals(1000));
      await uniswaprouter
        .connect(owner)
        .addLiquidityETH(
          tokenA.address,
          expandTo18Decimals(10),
          expandTo18Decimals(1),
          expandTo18Decimals(1),
          owner.address,
          1696118399,
          { value: "125" }
        );
      const Pair = await uniswapFactory.getPair(
        tokenA.address,
        hardhatWeth.address
      );
      const PairFactory = await ethers.getContractFactory("UniswapV2Pair");
      const Pair_instance = PairFactory.attach(Pair);
      let result = await Pair_instance.getReserves();
      let Reserve0 = Number(result._reserve0);
      let Reserve1 = Number(result._reserve1);
      expect(Reserve0).to.be.lessThanOrEqual(Number(expandTo18Decimals(10)));
      expect(Reserve1).to.be.lessThanOrEqual(Number(expandTo18Decimals(125)));
    });
    // it("add Liquidity reverts if the amount is greater than the actual available number of tokens ", async function () {
    //   await tokenA.connect(owner).transfer(s1.address, expandTo18Decimals(10));
    //   await tokenA
    //     .connect(s1)
    //     .approve(uniswaprouter.address, expandTo18Decimals(1000));
    //   await tokenB.connect(owner).transfer(s1.address, expandTo18Decimals(10));
    //   await tokenB
    //     .connect(s1)
    //     .approve(uniswaprouter.address, expandTo18Decimals(1000));
    //   await expect(
    //     uniswaprouter
    //       .connect(s1)
    //       .addLiquidity(
    //         tokenA.address,
    //         tokenB.address,
    //         expandTo18Decimals(20),
    //         expandTo18Decimals(20),
    //         expandTo18Decimals(1),
    //         expandTo18Decimals(1),
    //         s1.address,
    //         1693526399
    //       )
    //   ).revertedWith("transferFrom: transferFrom failed");
    // });
    // it("AddLiquidityETH transfer fails", async function () {
    //   await tokenA.connect(owner).transfer(s1.address, expandTo18Decimals(10));
    //   await tokenA
    //     .connect(s1)
    //     .approve(router.address, expandTo18Decimals(1000));
    //   await expect(
    //     uniswaprouter
    //       .connect(s1)
    //       .addLiquidityETH(
    //         tokenA.address,
    //         expandTo18Decimals(10),
    //         expandTo18Decimals(1),
    //         expandTo18Decimals(1),
    //         owner.address,
    //         1678948210,
    //         { value: "125" }
    //       )
    //   ).revertedWith("transferFrom: transferFrom failed");
    // });
    it("swapExactTokensForTokens", async function () {
      let array = [tokenA.address, tokenB.address];
      await tokenA.approve(uniswaprouter.address, expandTo18Decimals(1000));
      await tokenB.approve(uniswaprouter.address, expandTo18Decimals(1000));
      await uniswaprouter
        .connect(owner)
        .addLiquidity(
          tokenA.address,
          tokenB.address,
          expandTo18Decimals(10),
          expandTo18Decimals(10),
          expandTo18Decimals(1),
          expandTo18Decimals(1),
          owner.address,
          1696118399
        );
      const Pair = await uniswapFactory.getPair(tokenA.address, tokenB.address);
      const PairFactory = await ethers.getContractFactory("UniswapV2Pair");
      const Pair_instance = PairFactory.attach(Pair);
      let result = await Pair_instance.getReserves();
      let Reserve0 = Number(result._reserve0);
      let Reserve1 = Number(result._reserve1);
      await uniswaprouter
        .connect(owner)
        .swapExactTokensForTokens(
          expandTo18Decimals(2),
          expandTo18Decimals(1),
          array,
          owner.address,
          1696118399
        );
      let result1 = await Pair_instance.getReserves();
      let Reserve2 = Number(result1._reserve0);
      Reserve1 = Number(result1._reserve1);

      let tokenAmountoutbypool = await uniswaprouter
        .connect(owner)
        .getAmountsOut(expandTo18Decimals(2), array);
      let a1 = Number(tokenAmountoutbypool[1]);
      expect(Reserve0).to.be.lessThan(Reserve2);
    });
    it("swapTokensForExactTokens", async function () {
      let array = [tokenA.address, tokenB.address];
      await tokenA.approve(uniswaprouter.address, expandTo18Decimals(1000));
      await tokenB.approve(uniswaprouter.address, expandTo18Decimals(1000));
      await uniswaprouter
        .connect(owner)
        .addLiquidity(
          tokenA.address,
          tokenB.address,
          expandTo18Decimals(10),
          expandTo18Decimals(10),
          expandTo18Decimals(1),
          expandTo18Decimals(1),
          owner.address,
          1696118399
        );
      const Pair = await uniswapFactory.getPair(tokenA.address, tokenB.address);
      const PairFactory = await ethers.getContractFactory("UniswapV2Pair");
      const Pair_instance = PairFactory.attach(Pair);
      let result = await Pair_instance.getReserves();
      let Reserve1 = Number(result._reserve1);
      await uniswaprouter
        .connect(owner)
        .swapTokensForExactTokens(
          expandTo18Decimals(2),
          expandTo18Decimals(100),
          array,
          owner.address,
          1696118399
        );
      let result1 = await Pair_instance.getReserves();
      let Reserve2 = Number(result1._reserve1);
      expect(Reserve2).to.be.greaterThanOrEqual(Reserve1);
    });
    it("swapExactEthForTokens", async function () {
      let array = [hardhatWeth.address, tokenA.address];
      await tokenA.approve(uniswaprouter.address, expandTo18Decimals(1000));
      await hardhatWeth.approve(uniswaprouter.address, expandTo18Decimals(100));
      await uniswaprouter
        .connect(owner)
        .addLiquidityETH(
          tokenA.address,
          expandTo18Decimals(100),
          expandTo18Decimals(1),
          expandTo18Decimals(1),
          owner.address,
          1696118399,
          { value: "125" }
        );
      const Pair = await uniswapFactory.getPair(
        hardhatWeth.address,
        tokenA.address
      );
      const pairFactory = await ethers.getContractFactory("UniswapV2Pair");
      const Pair_instance = pairFactory.attach(Pair);
      let result = await Pair_instance.getReserves();
      let Reserve0 = Number(result._reserve0);
      let Reserve1 = Number(result._reserve1);
      await uniswaprouter
        .connect(owner)
        .swapExactETHForTokens(
          expandTo18Decimals(10),
          array,
          owner.address,
          1696118399,
          { value: "125" }
        );
      let result1 = await Pair_instance.getReserves();
      let Reserve2 = Number(result1._reserve0);
      Reserve1 = Number(result1._reserve1);
      expect(Reserve2).to.be.lessThan(Reserve0);
    });
    it("should remove liquidity", async function () {
      const temp = expandTo18Decimals(100);
      await tokenA.approve(uniswaprouter.address, expandTo18Decimals(1000));
      await tokenB.approve(uniswaprouter.address, expandTo18Decimals(1000));
      const pooldetails = await uniswaprouter.addLiquidity(
        tokenA.address,
        tokenB.address,
        expandTo18Decimals(10),
        expandTo18Decimals(10),
        expandTo18Decimals(1),
        expandTo18Decimals(1),
        owner.address,
        1696118399
      );
      const Pair = await uniswapFactory.getPair(tokenA.address, tokenB.address);
      const PairFactory = await ethers.getContractFactory("UniswapV2Pair");
      const Pair_instance = PairFactory.attach(Pair);
      let result = await Pair_instance.getReserves();
      let Reserve0 = Number(result._reserve0);
      let Reserve1 = Number(result._reserve1);
      expect(Reserve0).to.be.lessThanOrEqual(Number(expandTo18Decimals(10)));
      expect(Reserve1).to.be.lessThanOrEqual(Number(expandTo18Decimals(10)));
      const balanceliquidity = await Pair_instance.connect(owner).balanceOf(
        owner.address
      );
      await Pair_instance.connect(owner).approve(
        uniswaprouter.address,
        balanceliquidity
      );
      await uniswaprouter.removeLiquidity(
        tokenA.address,
        tokenB.address,
        balanceliquidity,
        0,
        0,
        owner.address,
        1696118399
      );
      const newbalanceliquidity = await Pair_instance.connect(owner).balanceOf(
        owner.address
      );
      expect(newbalanceliquidity).to.equal(0);
      let newresult = await Pair_instance.getReserves();
      let NewReserve0 = Number(newresult._reserve0);
      let NewReserve1 = Number(newresult._reserve1);
    });
    it("should remove liquidity ether", async function () {
      await tokenA.approve(uniswaprouter.address, expandTo18Decimals(1000));
      await uniswaprouter
        .connect(owner)
        .addLiquidityETH(
          tokenA.address,
          expandTo18Decimals(10),
          expandTo18Decimals(1),
          expandTo18Decimals(1),
          owner.address,
          1696118399,
          { value: "125" }
        );
      const Pair = await uniswapFactory.getPair(
        tokenA.address,
        hardhatWeth.address
      );
      const PairFactory = await ethers.getContractFactory("UniswapV2Pair");
      const Pair_instance = PairFactory.attach(Pair);
      let result = await Pair_instance.getReserves();
      let Reserve0 = Number(result._reserve0);
      let Reserve1 = Number(result._reserve1);
      const balanceliquidity = await Pair_instance.connect(owner).balanceOf(
        owner.address
      );
      await Pair_instance.connect(owner).approve(
        uniswaprouter.address,
        balanceliquidity
      );
      await uniswaprouter.removeLiquidityETH(
        tokenA.address,
        balanceliquidity,
        0,
        0,
        owner.address,
        1696118399
      );
    });
    it("checking removeLiquidityWithPermit", async function () {
      const ad = uniswaprouter.address;
      await tokenA.approve(ad, expandTo18Decimals(5000));
      await tokenB.approve(ad, expandTo18Decimals(5000));
      await uniswaprouter
        .connect(owner)
        .addLiquidity(
          tokenA.address,
          tokenB.address,
          expandTo18Decimals(1000),
          expandTo18Decimals(1000),
          expandTo18Decimals(1),
          expandTo18Decimals(1),
          owner.address,
          1696118399
        );
      const Pair = await uniswapFactory.getPair(tokenA.address, tokenB.address);
      const uniswapv2pair = await ethers.getContractFactory("UniswapV2Pair");
      const pairinstance = uniswapv2pair.attach(Pair);
      const liquidityToken = await pairinstance.balanceOf(owner.address);
      const signatureDigest = await owner._signTypedData(
        {
          name: await pairinstance.name(),
          version: "1",
          chainId: 0,
          verifyingContract: Pair,
        },
        {
          Permit: [
            {
              name: "owner",
              type: "address",
            },
            {
              name: "spender",
              type: "address",
            },
            {
              name: "value",
              type: "uint256",
            },
            {
              name: "nonce",
              type: "uint256",
            },
            {
              name: "deadline",
              type: "uint256",
            },
          ],
        },
        {
          owner: owner.address,
          spender: uniswaprouter.address,
          value: liquidityToken,
          nonce: await pairinstance.nonces(owner.address),
          deadline: 1696118399,
        }
      );
      const splitsig = ethers.utils.splitSignature(signatureDigest);
      await uniswaprouter
        .connect(owner)
        .removeLiquidityWithPermit(
          tokenA.address,
          tokenB.address,
          liquidityToken,
          expandTo18Decimals(1),
          expandTo18Decimals(1),
          owner.address,
          1696118399,
          false,
          splitsig.v,
          splitsig.r,
          splitsig.s
        );
      expect(await pairinstance.balanceOf(owner.address)).to.equal(0);
    });

    it("checking getAmountOut using swapExactTokensForTokens", async function () {
      let path = [tokenA.address, tokenB.address];
      await tokenA.approve(uniswaprouter.address, expandTo18Decimals(1000));
      await tokenB.approve(uniswaprouter.address, expandTo18Decimals(1000));
      await uniswaprouter
        .connect(owner)
        .addLiquidity(
          tokenA.address,
          tokenB.address,
          expandTo18Decimals(10),
          expandTo18Decimals(10),
          expandTo18Decimals(1),
          expandTo18Decimals(1),
          owner.address,
          1696118399
        );
      const Pair = await uniswapFactory.getPair(tokenA.address, tokenB.address);
      const uniswapv2pair = await ethers.getContractFactory("UniswapV2Pair");
      const pairinstance = uniswapv2pair.attach(Pair);
      let amountout = await uniswaprouter
        .connect(owner)
        .getAmountsOut(expandTo18Decimals(2), path);
      expect(await Number(amountout[1])).to.be.lessThanOrEqual(
        Number(expandTo18Decimals(2))
      );
      await uniswaprouter
        .connect(owner)
        .swapExactTokensForTokens(
          expandTo18Decimals(2),
          expandTo18Decimals(1),
          path,
          owner.address,
          1696118399
        );
      amountout = await uniswaprouter
        .connect(owner)
        .getAmountsOut(expandTo18Decimals(2), path);
      expect(await Number(amountout[1])).to.be.lessThanOrEqual(
        Number(expandTo18Decimals(2))
      );
    });
    it("checking getAmountIn using swapTokensForExactTokens", async function () {
      let path = [tokenA.address, tokenB.address];
      await tokenA.approve(uniswaprouter.address, expandTo18Decimals(1000));
      await tokenB.approve(uniswaprouter.address, expandTo18Decimals(1000));
      await uniswaprouter
        .connect(owner)
        .addLiquidity(
          tokenA.address,
          tokenB.address,
          expandTo18Decimals(10),
          expandTo18Decimals(10),
          expandTo18Decimals(1),
          expandTo18Decimals(1),
          owner.address,
          1696118399
        );
      const Pair = await uniswapFactory.getPair(tokenA.address, tokenB.address);
      const uniswapv2pair = await ethers.getContractFactory("UniswapV2Pair");
      const pairinstance = uniswapv2pair.attach(Pair);
      let amountIn = await uniswaprouter
        .connect(owner)
        .getAmountsIn(expandTo18Decimals(2), path);
      expect(await Number(amountIn[1])).to.be.lessThanOrEqual(
        Number(expandTo18Decimals(3))
      );
      await uniswaprouter
        .connect(owner)
        .swapTokensForExactTokens(
          expandTo18Decimals(2),
          expandTo18Decimals(3),
          path,
          owner.address,
          1696118399
        );
      amountIn = await uniswaprouter
        .connect(owner)
        .getAmountsIn(expandTo18Decimals(2), path);
      expect(await Number(amountIn[0])).to.be.lessThanOrEqual(
        Number(expandTo18Decimals(5))
      );
    });
  });
});

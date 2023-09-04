// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import "contracts/UniswapV2Factory.sol";
// import "contracts/UniswapV2Router02.sol";
// import "contracts/WETHToken.sol";
import "contracts/interfaces/IUniswapV2Router02.sol";
import "contracts/interfaces/IUniswapV2Factory.sol";
import "contracts/interfaces/IUniswapV2Pair.sol";
import "hardhat/console.sol";

contract testuniswapliquidity {
  address private FACTORY;
  address private ROUTER;
  address private WETH;
  address private Pair;
  uint256 private feededucted;
  uint256 public feeprcnt;

  event Log(string message, uint256 value);

  constructor(address factory, address router) {
    FACTORY = factory;
    ROUTER = router;
    //WETH = weth;
  }

  function addliquidity(
    address _tokenA,
    address _tokenB,
    uint256 _amountA,
    uint256 _amountB
  ) external {
    IERC20(_tokenA).transferFrom(msg.sender, address(this), _amountA);
    //console.log("test0");
    IERC20(_tokenB).transferFrom(msg.sender, address(this), _amountB);
    //console.log("test1");
    IERC20(_tokenA).approve(ROUTER, _amountA);
    //console.log("test2");
    IERC20(_tokenB).approve(ROUTER, _amountB);
    //console.log("test3");
    // IUniswapV2Router02(ROUTER).addL
    IUniswapV2Router01(ROUTER).addLiquidity(
      _tokenA,
      _tokenB,
      _amountA,
      _amountB,
      1,
      1,
      address(this),
      (block.timestamp + 300)
    );
    //console.log("test4");

    // emit Log("amountA",amountA);
    // emit Log("amountB",amountB);
    // emit Log("liquidity",liquidity);
  }

  function setperc(uint256 _feeprcnt) public {
    feeprcnt = _feeprcnt;
  }

  function perc(uint256 amount) private returns (uint256) {
    require((amount / 10000) * 10000 == amount, "too small amount");
    return (amount * feeprcnt) / 10000;
    //return feededucted;
  }

  function swap(
    // address _tokenIn,
    // address _tokenOut,
    address[] memory path,
    uint256 _amountIn,
    uint256 _amountOutMin,
    address _to
  ) external {
    IERC20(path[0]).transferFrom(msg.sender, address(this), _amountIn);
    console.log("msg", msg.sender);
    console.log("this", address(this));
    feededucted = perc(_amountIn);
    uint256 amountin = _amountIn - feededucted;
    IERC20(path[0]).approve(ROUTER, amountin);
    // console.log("_amountin",_amountIn);
    console.log("amountin");

    //address[] memory path;
    // if (_tokenIn == WETH || _tokenOut == WETH) {
    //   path = new address[](2);
    //   path[0] = _tokenIn;
    //   path[1] = _tokenOut;
    // } else {
    //   path = new address[](3);
    //   path[0] = _tokenIn;
    //   path[1] = WETH;
    //   path[2] = _tokenOut;
    // }
    // path = new address[](2);
    //   path[0] = _tokenIn;
    //   path[1] = _tokenOut;
    IUniswapV2Router02(ROUTER).swapExactTokensForTokens(
      amountin,
      _amountOutMin,
      path,
      _to,
      block.timestamp + 300
    );
    console.log("test4");
  }

  function getAmountOutMin(
    address _tokenIn,
    address _tokenOut,
    uint256 _amountIn
  ) external view returns (uint256) {
    address[] memory path;
    if (_tokenIn == WETH || _tokenOut == WETH) {
      path = new address[](2);
      path[0] = _tokenIn;
      path[1] = _tokenOut;
    } else {
      path = new address[](3);
      path[0] = _tokenIn;
      path[1] = WETH;
      path[2] = _tokenOut;
    }

    // same length as path
    uint256 amountin = _amountIn - feededucted;
    //IERC20(_tokenIn).approve(ROUTER, amountin);

    uint256[] memory amountOutMins = IUniswapV2Router02(ROUTER).getAmountsOut(
      amountin,
      path
    );

    return amountOutMins[path.length - 1];
  }

  function removeLiquidity(address _tokenA, address _tokenB) external {
    address pair = IUniswapV2Factory(FACTORY).getPair(_tokenA, _tokenB);
    Pair = pair;

    uint256 liquidity = IERC20(pair).balanceOf(address(this));
    IERC20(pair).approve(ROUTER, liquidity);

    (uint256 amountA, uint256 amountB) = IUniswapV2Router02(ROUTER)
      .removeLiquidity(
        _tokenA,
        _tokenB,
        liquidity,
        1,
        1,
        msg.sender,
        block.timestamp
      );

    emit Log("amountA", amountA);
    emit Log("amountB", amountB);
  }

  function getreseves()
    external
    view
    returns (
      uint112 r1,
      uint112 r2,
      uint32 b
    )
  {
    (r1, r2, b) = IUniswapV2Pair(Pair).getReserves();
    return (r1, r2, b);
  }

  function collectedfee(address tokenadrs, address ltwoadrs)
    public
    view
    returns (uint256)
  {
    //uint256 fee = IERC20(tokenadrs).balanceOf(ltwoadrs);
    console.log("test2");
    return IERC20(tokenadrs).balanceOf(ltwoadrs);
  }
}

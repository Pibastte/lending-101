pragma solidity ^0.6.0;

import "./IExerciceSolution.sol";
import "./IDepositTokens.sol";

contract ExerciceSolution is IExerciceSolution
{
  IDepositTokens depositTokens;

  constructor (IDepositTokens _depositTokensContract) public {
    depositTokens = _depositTokensContract;
  }

	function depositSomeTokens() external override {
    depositTokens.depositETH(0x3561c45840e2681495ACCa3c50Ef4dAe330c94F8, msg.sender, 0x0);
  }

	function withdrawSomeTokens() external override {
    require(false, "Not implemented yet");
  }

	function borrowSomeTokens() external override {
    require(false, "Not implemented yet");
  }

	function repaySomeTokens() external override {
    require(false, "Not implemented yet");
  }

	function doAFlashLoan() external override {
    require(false, "Not implemented yet");
  }

	function repayFlashLoan() external override {
    require(false, "Not implemented yet");
  }
}


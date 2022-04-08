pragma solidity ^0.6.0;

interface IDepositTokens 
{
	function depositETH(address lendingPool, address onBehalfOf, uint16 referralCode) external;
}


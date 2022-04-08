require('dotenv').config();

// const Str = require('@supercharge/strings')
// const BigNumber = require('bignumber.js');

var TDErc20 = artifacts.require("ERC20TD.sol");
var evaluator = artifacts.require("Evaluator.sol");
var exerciceSolution = artifacts.require("ExerciceSolution.sol");


module.exports = (deployer, network, accounts) => {
    deployer.then(async () => {
        await deployTDToken(deployer, network, accounts); 
        await deployEvaluator(deployer, network, accounts); 
        // await setPermissionsAndRandomValues(deployer, network, accounts); 
        await deployRecap(deployer, network, accounts);
        await deployExercise(deployer, network, accounts);
        await submitExercise();
        await printBalance(accounts[0]);
        console.log("Launching Exercice 5");
        await exercice5();
        await printBalance(accounts[0]);

    });
};

async function deployTDToken(deployer, network, accounts) {
	TDToken = await TDErc20.new("TD-AAVE-101","TD-AAVE-101",web3.utils.toBN("20000000000000000000000000000"))
	USDCAddress = "0x5b8b635c2665791cf62fe429cb149eab42a3ced8"
	variableDebtUSDCAddress = "0x7f7d85ec65b50fb50527f784a702e35ce4e76111"
	aDAIAddress = "0x43e8058dfa2ddea046180e1c57a41a1760e4ac60"
}

async function deployEvaluator(deployer, network, accounts) {
	Evaluator = await evaluator.at(0xF00a099b637841fB2D240ABEeDeb48719836fd6D);
  // Evaluator = await evaluator.new(TDToken.address, aDAIAddress, USDCAddress, variableDebtUSDCAddress)
}

async function setPermissionsAndRandomValues(deployer, network, accounts) {
	await TDToken.setTeacher(Evaluator.address, true)
}

async function deployRecap(deployer, network, accounts) {
	console.log("TDToken " + TDToken.address)
	console.log("Evaluator " + Evaluator.address)
}

async function deployExercise(deployer, network, accounts) {
  ExerciceSolution = await exerciceSolution.new("0xbe8f1f1d3f063c88027cab4c5315219eecea6930", {from: accounts[1]});
}

async function submitExercise() {
  Evaluator.submitExercise(ExerciceSolution.address);
}

async function exercice5() {
  Evaluator.ex5_showContractCanDepositTokens();
}

async function printBalance(account) {
  console.log("Balance:", (await TDToken.balanceOf(account)).toString());
}
async function main() {
  const network = await ethers.provider.getNetwork();
  console.log("Using network:", network.name, network.chainId);

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const accountBalance = await deployer.provider.getBalance(deployer.address);

  const weiAmount = accountBalance.toString();

  console.log("Account balance:", weiAmount / 10 ** 18, "ETH");

  const Token = await ethers.getContractFactory("MyERC20");
  const token = await Token.deploy({ gasPrice: 891024067, gasLimit: 10000000 });
  await token.waitForDeployment();

  console.log("Token address:", token.address);
}

// run main, catch error, if any, and log in console
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

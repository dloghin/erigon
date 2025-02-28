const fs = require('fs');
const path = require('path');

async function main() {
  const network = await ethers.provider.getNetwork();
  console.log("Using network:", network.name, network.chainId);

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const accountBalance = await deployer.provider.getBalance(deployer.address);

  const weiAmount = accountBalance.toString();

  console.log("Account balance:", weiAmount / 10 ** 18, "ETH");

  const Token = await ethers.getContractFactory("MyERC20");
  var token = await Token.deploy();
  token = await token.waitForDeployment();

  const addr = await token.getAddress();

  console.log("Token contract deployed at address:", addr);

  const outputPath = path.join(process.cwd(), '.env');
  const data = "CONTRACT_ADDRESS=" + addr + "\nTO_ADDRESS=0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B";
  fs.writeFileSync(outputPath, data);
}

// run main, catch error, if any, and log in console
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

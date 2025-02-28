require('dotenv').config();

async function main() {
  const network = await ethers.provider.getNetwork();
  console.log("Using network:", network.name, network.chainId);

  const [sender] = await ethers.getSigners();

  var amount = "10";
  console.log("Send from account:", sender.address);
  console.log("Send to account:", process.env.TO_ADDRESS);
  console.log("Send amount:", amount);
  console.log("Using contract deployed at address:", process.env.CONTRACT_ADDRESS)

  const Token = await ethers.getContractAt("MyERC20", process.env.CONTRACT_ADDRESS);

  var amount = BigInt(amount) * BigInt("10") ** BigInt("18");
  await Token.transfer(process.env.TO_ADDRESS, amount.toString());
}

// run main, catch error, if any, and log in console
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

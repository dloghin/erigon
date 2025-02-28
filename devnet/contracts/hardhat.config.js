require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
/*
The accounts below are taken from: https://github.com/erigontech/erigon/blob/v3.0.0-beta2/docs/DEV_CHAIN.md
*/
module.exports = {
  solidity: "0.8.28",
  networks:{
    devnet:{
      url: "http:127.0.0.1:8545",
      accounts: ["0x26e86e45f6fc45ec6e2ecd128cec80fa1d1505e5507dcd2ae58c3130a7a97b48", "0x45a915e4d060149eb4365960e6a7a45f334393093061116b197e3240065ff2d8"],
    },
    devnet2:{
      url: "http:127.0.0.1:8123",
      accounts: ["0x26e86e45f6fc45ec6e2ecd128cec80fa1d1505e5507dcd2ae58c3130a7a97b48", "0x45a915e4d060149eb4365960e6a7a45f334393093061116b197e3240065ff2d8"],
    }
  }
};

//SPDX-License-Identifier: Unlicense
//Declare the version of solidity to compile this contract.
//This must match the version of solidity in your hardhat.config.js file
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyERC20 is ERC20 {

    uint constant _initial_supply = 100 * (10**18);

    constructor() ERC20("MyERC20", "MET") {

        _mint(msg.sender, _initial_supply);
    }
}
// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.9;


contract Migrations {
    address public owner;
    uint256 public lastCompletedMigration;


    constructor() {
        owner = msg.sender;
    }


    modifier restricted() {
        if (msg.sender == owner) _;
    }

    function setCompleted(uint256 completed) public restricted {
        lastCompletedMigration = completed;
    }

    function upgrade(address new_address) public restricted {
        Migrations upgraded = Migrations(new_address);
        upgraded.setCompleted(lastCompletedMigration);
    }
}

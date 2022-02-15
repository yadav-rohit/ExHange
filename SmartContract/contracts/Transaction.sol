//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import "../node_modules/hardhat/console.sol";

contract Transaction {
    //? event stores the log of the transaction on blockchain
    event Transfer (address sender , address receiver , uint ammount , string message ,uint256 timestamp , string keyword );
   function publishTransaction(address payable receiver, uint ammount , string memory message , string memory keyword) public {
        //emmit is used to call the event or emit the event
        emit Transfer(msg.sender , receiver , ammount , message , block.timestamp , keyword);
   }
}

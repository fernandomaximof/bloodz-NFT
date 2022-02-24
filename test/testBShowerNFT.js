const { expect } = require("chai");
//const { BigNumber } = require("ethers");
// const { ethers } = require("hardhat");

describe("BShowerNFT CONTRACT", function() {
    let accounts;
    let bsnft

    let payment = web3.utils.toWei("0.08", "ether").toString();
  
    before(async function() {
        accounts = await web3.eth.getAccounts();

        const BShowerNFT = await ethers.getContractFactory("BShowerNFT");
        bsnft = await BShowerNFT.deploy();
        await bsnft.deployed();

        await bsnft.mintTo(accounts[1], { from: accounts[0], value: payment});
        await bsnft.mintTo(accounts[1], { from: accounts[0], value: payment });
        await bsnft.mintTo(accounts[1], { from: accounts[0], value: payment });
        await bsnft.mintTo(accounts[1], { from: accounts[0], value: payment });
        await bsnft.mintTo(accounts[2], { from: accounts[0], value: payment });
    });
  
    it("SHOULD RETURN THE RIGHT NAME AND SYMBOL", async function() {
        expect(await bsnft.name()).to.equal("BShowerNFT");
        expect(await bsnft.symbol()).to.equal("BSNFT");
    });

    it('SHOULD RETURN CORRECT OWNER BALANCE', async function () { 
        expect(BigInt(await bsnft.balanceOf(accounts[0])).toString()).to.equal("0");    
    })

    it('SHOULD RETURN CORRECT BALANCE FOR ACCOUNTS 1 AND 2', async function () { 
        expect(BigInt(await bsnft.balanceOf(accounts[1])).toString()).to.equal("4");
        expect(BigInt(await bsnft.balanceOf(accounts[2])).toString()).to.equal("1");    
    })

    it('SHOULD RETURN TOKEN OWNER', async function () { 
        expect(await bsnft.ownerOf(1)).to.equal(accounts[1]);
    })

});
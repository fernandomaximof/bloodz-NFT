const { expect } = require("chai");
//const { BigNumber } = require("ethers");
// const { ethers } = require("hardhat");

describe("Bloodz CONTRACT", function() {
    var accounts;
    var bznft;
    var owner
    var addr1;
    //let payment = web3.utils.toWei("0.08", "ether").toString();
  
    before(async function() {
        accounts = await web3.eth.getAccounts();
        [owner, addr1] = await ethers.getSigners();

        const Bloodz = await ethers.getContractFactory("Bloodz");
        bznft = await Bloodz.deploy();
        await bznft.deployed();

        await bznft.mintTo(accounts[1], { from: accounts[0]}); //, value: payment });
        await bznft.mintTo(accounts[1], { from: accounts[0]}); //, value: payment });
        await bznft.mintTo(accounts[1], { from: accounts[0]}); //, value: payment });
        await bznft.mintTo(accounts[1], { from: accounts[0]}); //, value: payment });
        await bznft.mintTo(accounts[2], { from: accounts[0]}); //, value: payment });
        await bznft.mintTo(accounts[1], { from: accounts[0]}); //, value: payment });
        await bznft.mintTo(accounts[1], { from: accounts[0]}); //, value: payment });
        await bznft.mintTo(accounts[1], { from: accounts[0]}); //, value: payment });
        await bznft.mintTo(accounts[1], { from: accounts[0]}); //, value: payment });
        await bznft.mintTo(accounts[2], { from: accounts[0]}); //, value: payment });
    });
  
    it("SHOULD RETURN THE RIGHT NAME AND SYMBOL", async function() {
        expect(await bznft.name()).to.equal("BloodzNFT");
        expect(await bznft.symbol()).to.equal("BLDZ");
    });

    it('SHOULD RETURN CORRECT OWNER BALANCE', async function () { 
        expect(BigInt(await bznft.balanceOf(accounts[0])).toString()).to.equal("0");    
    })

    it('SHOULD RETURN CORRECT BALANCE FOR ACCOUNTS 1 AND 2', async function () { 
        expect(BigInt(await bznft.balanceOf(accounts[1])).toString()).to.equal("8");
        expect(BigInt(await bznft.balanceOf(accounts[2])).toString()).to.equal("2");    
    })

    it('SHOULD RETURN TOKEN OWNER', async function () { 
        expect(await bznft.ownerOf(1)).to.equal(accounts[1]);
    })

    it('SHOULD TRANSFER TOKEN OWNERSHIP AND RETURN CORRECT BALANCE FOR ACCOUNTS 2', async function () { 
        // await bznft.transferFrom(accounts[1], accounts[2], 1, {from: accounts[1]});
        await bznft.connect(addr1).transferFrom(accounts[1], accounts[2], 1);
        expect(BigInt(await bznft.balanceOf(accounts[1])).toString()).to.equal("7");
        expect(BigInt(await bznft.balanceOf(accounts[2])).toString()).to.equal("3");    
    })

});
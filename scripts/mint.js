const { task } = require("hardhat/config");
const { getContract } = require("./helpers");
const fetch = require("node-fetch");

task("mint", "MINTS FROM THE NFT CONTRACT")
.addParam("address", "THE ADDRESS TO RECEIVE A TOKEN")
.setAction(async function (taskArguments, hre) {
    const contract = await getContract("Bloodz", hre);
    //const mint_price = await contract.MINT_PRICE();
    const transactionResponse = await contract.mintTo(taskArguments.address, {
        gasLimit: 500_000,
        //value: mint_price
    });
    console.log(`TRANSACTION HASH: ${transactionResponse.hash}`);
});

task("set-base-token-uri", "SETS THE BASE TOKEN URI FOR THE DEPLOYED SMART CONTRACT")
.addParam("baseUrl", "THE BASE OF THE TOKENURI ENDPOINT TO SET")
.setAction(async function (taskArguments, hre) {
    const contract = await getContract("Bloodz", hre);
    const transactionResponse = await contract.setBaseTokenURI(taskArguments.baseUrl, {
        gasLimit: 500_000,
    });
    console.log(`TRANSACTION HASH: ${transactionResponse.hash}`);
});


task("token-uri", "FETCHES THE TOKEN METADATA FOR THE GIVEN TOKEN ID")
.addParam("tokenId", "THE TOKENID TO FETCH METADATA FOR")
.setAction(async function (taskArguments, hre) {
    const contract = await getContract("Bloodz", hre);
    const response = await contract.tokenURI(taskArguments.tokenId, {
        gasLimit: 500_000,
    });
    
    const metadata_url = response;
    console.log(`METADATA URL: ${metadata_url}`);

    const metadata = await fetch(metadata_url).then(res => res.json());
    console.log(`METADATA FETCH RESPONSE: ${JSON.stringify(metadata, null, 2)}`);
});
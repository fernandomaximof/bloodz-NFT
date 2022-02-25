# RINKEBY CONTRACT DEPLOYED
https://rinkeby.etherscan.io/address/0xe4655A7bFe616f9f99CB14654Fd490d468c46e58
https://testnets.opensea.io/collection/bloodznft-v2

# COMPILING CONTRACT
```npx hardhat compile```

# TESTING CONTRACT
```npx hardhat deploy --network rinkeby```

# CHECKING ACCOUNT BALANCE
```npx hardhat check-balance```

# DEPLOYING CONTRACT
```npx hardhat deploy```

# VERIFYING CONTRACT
```npx hardhat verify --network rinkeby [address]```

# PACKING NFT IMAGES TO IPFS CAR - https://nft.storage/
```npx ipfs-car --pack images --output images.car```

# PACKING NFT METADATA TO IPFS CAR - https://nft.storage/
```npx ipfs-car --pack metadata --output metadata.car```

# SETTING URI FOR NFT
```npx hardhat set-base-token-uri --base-url "https://bafybeihs7yxofqwifxmcf2clce6rcv5frmqtilgzot6ietsdynko4r5zm4.ipfs.dweb.link/metadata/"```

# MITING NFT
```npx hardhat mint --address [address]```

# CHECKING NFT METADATA
```npx hardhat token-uri --token-id 1```

# BASIC SAMPLE HARDHAT PROJECT
```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

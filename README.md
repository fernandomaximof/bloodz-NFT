# Rinkeby Contract Deployed
https://rinkeby.etherscan.io/address/0xe4655A7bFe616f9f99CB14654Fd490d468c46e58
https://testnets.opensea.io/collection/bloodznft-vwou07x96f

# Compiling Contract
```npx hardhat compile```

# Testing Contract
```npx hardhat deploy --network rinkeby```

# Checking Account Balance
```npx hardhat check-balance```

# Deploying Contract
```npx hardhat deploy```

# Verifying Contract
```npx hardhat verify --network rinkeby [address]```

# Packing NFT Images to IPFS Car - https://nft.storage/
```npx ipfs-car --pack images --output images.car```

# Packing NFT Metadata to IPFS Car - https://nft.storage/
```npx ipfs-car --pack metadata --output metadata.car```

# Setting URI for NFT
```npx hardhat set-base-token-uri --base-url "https://bafybeihs7yxofqwifxmcf2clce6rcv5frmqtilgzot6ietsdynko4r5zm4.ipfs.dweb.link/metadata/"```

# Miting NFT
```npx hardhat mint --address [address]```

# Checking NFT Metadata
```npx hardhat token-uri --token-id 1```

# Basic Sample Hardhat Project
```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

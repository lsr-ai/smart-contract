# lsr-nft-smart-contract

NFT smart contract for LSR project

<br>

### Template .env
```
PRIVATE_KEY=<string>
INFURA_API_KEY=<string>
ETHERSCAN_API_KEY=<string>
```

<br>

### Test
```
npm run test
```

<br>

### Build

```
npm run build
```

<br>

### Deploy

Rinkeby - Ethereum testnet

```
npm run deploy:rinkeby
```

Ethereum mainnet
```
npm run deploy:eth
```

<br>

### Verify

Rinkeby - Ethereum testnet: rinkeby.etherscan.io
```
npx truffle run verify NFT@<address> --network rinkeby
```

Ethereum mainnet: etherscan.io
```
npx truffle run verify NFT@<address> --network eth
```

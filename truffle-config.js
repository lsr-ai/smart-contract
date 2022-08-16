require('dotenv').config();

const {cleanEnv, str} = require('envalid');
const HDWalletProvider = require('@truffle/hdwallet-provider');


const env = cleanEnv(process.env, {
    PRIVATE_KEY: str(),
    INFURA_API_KEY: str(),
    ETHERSCAN_API_KEY: str()
});


module.exports = {
    networks: {
        rinkeby: {
            provider: () => new HDWalletProvider(env.PRIVATE_KEY, `https://rinkeby.infura.io/v3/${env.INFURA_API_KEY}`),
            network_id: 4,
            gas: 4500000,
            gasPrice: 10000000000,
            networkCheckTimeout: 60000,
            timeoutBlocks: 100
        },
        eth: {
            provider: () => new HDWalletProvider(env.PRIVATE_KEY, `https://mainnet.infura.io/v3/${env.INFURA_API_KEY}`),
            network_id: 1,
            gas: 4500000,
            gasPrice: 10000000000,
            networkCheckTimeout: 60000,
            timeoutBlocks: 100
        }
    },
    plugins: ['solidity-coverage', 'truffle-plugin-verify'],
    api_keys: {
        etherscan: env.ETHERSCAN_API_KEY
    },
    compilers: {
        solc: {
            version: '^0.8.9',
            settings: {
                optimizer: {
                    enabled: true
                }
            }
        }
    }
};

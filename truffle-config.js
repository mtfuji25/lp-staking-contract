const HDWalletProvider = require('@truffle/hdwallet-provider');
const dotenv = require('dotenv');
dotenv.config();

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || null;
const RPC_NODE_GOERLI = process.env.RPC_NODE_GOERLI || null;
const PRIVATE_KEY_GOERLI = process.env.PRIVATE_KEY_GOERLI || null;

module.exports = {
  networks: {
    goerli: {
      provider: function () {
        return new HDWalletProvider([PRIVATE_KEY_GOERLI], RPC_NODE_GOERLI);
      },
      network_id: 5,
      gas: 8000000,
      gasPrice: 30000000000,
      skipDryRun: true,
      networkCheckTimeout: 100000000,
      timeoutBlocks: 200,
    },
  },
  api_keys: {
    etherscan: ETHERSCAN_API_KEY,
  },
  plugins: ['solidity-coverage', 'truffle-contract-size', 'truffle-plugin-verify', 'truffle-flatten'],
  mocha: {
    timeout: 100000,
    reporter: 'eth-gas-reporter',
    reporterOptions: {
      excludeContracts: ['Migrations']
    }
  },
  compilers: {
    solc: {
      version: '0.8.12',
      settings: {
        optimizer: {
          enabled: true,
          runs: 10000,
        },
      },
    },
  },
  db: {
    enabled: false,
  },
};

require('babel-register');
require('babel-polyfill');
const dotenv = require('dotenv');
dotenv.config();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = process.env.MNEMONICS;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777 // Match any network id
    },
    ganache_local: {
      provider: function() {
        //return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545", AccountIndex)
        return new HDWalletProvider("dynamic slide income anxiety rude goose chef lab review boss gospel impact", "http://127.0.0.1:7545", AccountIndex)
      },
      network_id: 5777
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/932370ec84184006a33437348ee5d938`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/`),
      network_id: 42,
      gas:  0x7a1000,
      gasPrice: 2000000000
    },
  },
  contracts_directory: './client/src/contracts/',
  contracts_build_directory: './client/src/abis/',
  compilers: {
    solc: {
      version: "^0.6.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}

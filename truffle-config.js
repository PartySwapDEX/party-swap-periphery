require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

//Account credentials from which our contract will be deployed
const mnemonic = process.env.MNEMONIC;

//API key of your Datahub account for Avalanche Fuji test network
const APIKEY = process.env.APIKEY;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    fuji: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic,
          providerOrUrl: `https://avalanche--fuji--rpc.datahub.figment.io/apikey/${APIKEY}/ext/bc/C/rpc`,
          chainId: "0xa869"
        })
      },
      network_id: "*",
      gas: 8000000,
      gasPrice: 225000000000,
      skipDryRun: true
    },
    mainnet: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic,
          providerOrUrl: `https://api.avax.network/ext/bc/C/rpc`,
          chainId: 43114
        })
      },
      network_id: "*",
      gas: 5000000,
      gasPrice: 225000000000,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.6.6"
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    },
  }
}
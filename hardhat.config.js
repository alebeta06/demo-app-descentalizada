require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const privateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;
const projectID = process.env.ALCHEMY_PROJECT_ID;

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${projectID}`,
      accounts: [privateKey],
    },
  },
};

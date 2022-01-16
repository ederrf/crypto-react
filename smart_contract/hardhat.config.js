//https://eth-ropsten.alchemyapi.io/v2/An79CMXyQiPYqFtoiCpfzwN-2_8BdkTT
//0xE764a324af1420DCB2Eaf1F36881B8CC9267CA78

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/An79CMXyQiPYqFtoiCpfzwN-2_8BdkTT',
      accounts: ['9691c38498a247ecbbd5202091707827b6409c68083f7cf7a027612c036c36ab']
    }
  }
}
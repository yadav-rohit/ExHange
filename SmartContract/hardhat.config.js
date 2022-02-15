require("@nomiclabs/hardhat-waffle");

require('dotenv').config();

const urle = process.env.REACT_APP_MY_URL;
const account = process.env.REACT_APP_MY_KEY;
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/QWJIauw-8PjcoJYKG9bx4ZmTkocFIEkm",
      accounts: [
        "303163908c40748cf6f2af731ff212f23e767430bc9a5a4cf0070a2a750871d9",
      ],
    }
  },
}

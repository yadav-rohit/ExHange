require("@nomiclabs/hardhat-waffle");

require('dotenv').config();

const urle = process.env.REACT_APP_MY_URL;
const account = process.env.REACT_APP_MY_KEY;
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: urle,
      accounts: [
        account,
      ],
    }
  },
}

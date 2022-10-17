const Web3 = require("web3");
const fs = require("fs");
var web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/5b87811ab110487abd4b3bfc9bd484f6"
  )
);
const address = "0xaa97E0C54420C2136Af29eb9232b5d8Fc628695d";
const contractJson = fs.readFileSync("abi.json");
const ABI = JSON.parse(contractJson);
// console.log(web3.eth.getBalance); // проверяем
const testC = new web3.eth.Contract(ABI, address);

testC.getPastEvents(
  "AllEvents",
  { fromBlock: 0, toBlock: "latest" },
  function (error, events) {
    if (error) {
      console.log(error);
    } else {
      console.log(events);
    }
  }
);

// package import
const  TendermintClient  = require("@cosmjs/launchpad");
// local import
const Wallet = require("../database/schema/keplr.schema");
const { catchError } = require("../utils");




// Utility function to get balance
const getBalance = async (lcdUrl, offlineSigner) => {
    try {
        // console.log("n2222222-->",lcdUrl);
      const client = await new TendermintClient.connect(lcdUrl);
      console.log("1-->", client);

      const bank = await client.bank.bank;
      const balance = await bank.allBalances(offlineSigner);
      return balance;
    } catch (error) {
      console.error("Error getting balance:", error);
      throw error; // Re-throw error for further handling
    }
  };


module.exports = class {
    static createWallet = async(chainId, lcdUrl, offlineSigner) =>
       await catchError(async ()=> {
        // const keplr  = await window.keplr.enable(chainId);
        // const accounts = await offlineSigner.getAccounts();
        const wallet = new Wallet({chainId: chainId, lcdUrl: lcdUrl, publicKey: offlineSigner});
        const result = await wallet.save();

        // Get balance for the created wallet
      const balance = await getBalance(lcdUrl, offlineSigner); // Retrieve the balance
      
      // Return the result along with the balance
      return {
        wallet: result, // Or whatever `result` represents
        balance, // Include balance information
      };
    })
}

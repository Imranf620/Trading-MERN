// package import

// local import
const Wallet = require("../controller/keplr.controller");

module.exports = class {
    static createWallet = async(chainId, lcdUrl, offlineSigner) =>
       await catchError(async ()=> {
        const keplr  = await window.keplr.enable(chainId);
        const accounts = await offlineSigner.getAccounts();
        const wallet = new Wallet({chainId: chainId, lcdUrl: lcdUrl, publicKey: accounts[0].address});
        const result = await wallet.save();
        return result;
       })
}

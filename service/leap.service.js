// package import
const { SigningStargateClient } = require('@cosmjs/stargate');
// local import
const leapsWallet = require("../database/schema/leap.schema");

module.exports = class {
    static createWallet = async(chainId) =>
       await catchError(async ()=> {
        const signOptions = {
            // set this to true to prevent leap from overriding the fees.
            preferNoFeeSet: false
        };
    
        const offlineSigner = await leapsWallet.getOfflineSigner(chainId, signOptions);
        const accounts = await offlineSigner.getAccounts();
        const rpcUrl = "https://rpc.canto.nodestake.top"; // Replace with a RPC URL for the given chainId
        const lWallet = await SigningStargateClient.connectWithSigner(
            rpcUrl,
            offlineSigner,
            // {
            //     gasPrice: GasPrice.fromString("0.0025ujuno"),
            // }
        );
        const result = await lWallet.save();
        return result;
       })
}

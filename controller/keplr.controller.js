//package import

//local import
const walletService = require("../service/keplr.service");

module.exports = class {
    static async create(req, res) {
        try{
            // const chainId = 'cosmoshub-4';
            const chainId = req.headers['x-chain-id'];
            const publicAddress = req.headers['x-public-address'];
        
            if (!chainId || !publicAddress) {
              return res.status(400).json({ message: "Missing chainId or publicAddress" });
            }
            // const { chainId } = req.body;console.log(chainId);
            const lcdUrl = "https://lcd-cosmoshub.keplr.app/rest";
            // const offlineSigner = window.getOfflineSigner(chainId);
            const result = await new walletService(chainId, lcdUrl, publicAddress);
            if(!result) {
                return res.status(400).json({message: " Internal Server Error."});
            }
            else {
                return res.status(200).json({message: " Success", result});
            }
        }catch(error){
            console.log(error)
            return res.status(500).json({message: "Internal Server Error"});
        }
    }
}
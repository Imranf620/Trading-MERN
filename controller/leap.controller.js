//package import

//local import
const walletService = require("../service/keplr.service");

module.exports = class {
    static async create(req, res) {
        try{
            // const chainId = 'cosmoshub-4';
            // const { chainId } = req.body;console.log(chainId);
            const result = await walletService(chainId);
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
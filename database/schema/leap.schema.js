const mongoose = require('mongoose');


const LeapwalletSchema = new mongoose.Schema(
    {
        chainId: {
            type: String,
            required: true,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
    );

// Create a model from the schema
const leapWallet = mongoose.model('transaction', LeapwalletSchema);

// Export the User model
module.exports = Wallet;
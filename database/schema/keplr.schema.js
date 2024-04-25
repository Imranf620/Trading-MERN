const mongoose = require('mongoose');


const walletSchema = new mongoose.Schema(
    {
        chainId: {
            type: String,
            required: true,
            trim: true,
        },
        lcdUrl: {
            type: String,
            required: true,
            trim: true,
        },
        publicKey: {
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
const Wallet = mongoose.model('transaction', walletSchema);

// Export the User model
module.exports = Wallet;
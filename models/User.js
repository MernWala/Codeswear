import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    img: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    size: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    availableQty: {
        type: Number,
        required: true
    }
}, { timestamps: true })

mongoose.models = {}

export default mongoose.model('User', UserSchema)
import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
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
    desc: {
        type: String,
        required: false
    },
    isSeller: {
        type: Boolean,
        default: false,
        required: true
    },
    phoneNo: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

export default mongoose.model("User", userSchema);
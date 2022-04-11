import mongoose from 'mongoose';

const memberSchema = mongoose.Schema({
    email: { type: String, required: true },
    mobileNum: { type: String, minlength: 10 },
    name : { type: String, required: true },

    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.model('Member', memberSchema);
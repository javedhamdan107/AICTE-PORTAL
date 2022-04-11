import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const canteenSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    venueId: { type: ObjectId, required: true },

});

export default mongoose.model('Canteen', canteenSchema);
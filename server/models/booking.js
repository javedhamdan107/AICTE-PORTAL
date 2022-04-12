import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const bookingSchema = mongoose.Schema({
    eventName : { type: String, required: true },
    userId : { type: ObjectId, required: true },
    venueId : { type: ObjectId, required: true },
    eventDate : {type: Date, required: true},
    startTime : {type: String, required: true},
    description : { type: String, required: true },
    isCanteen : { type: Boolean, required: true },
    mealType : { type: String, required: false },
    expCount : {type: Number, required: false},


    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.model('Booking', bookingSchema);
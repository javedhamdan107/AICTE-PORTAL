import mongoose from 'mongoose';

const venueSchema = mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.model('Venue', venueSchema);
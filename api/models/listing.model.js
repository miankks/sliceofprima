import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    regularPrice: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    imageUrls: {
        type: Array,
        required: false
    },
},
{
    timestamps: true
}
)

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
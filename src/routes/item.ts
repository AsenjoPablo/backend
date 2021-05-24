import { Schema, model } from 'mongoose';

// item template schema for mongoose
const itemSchema = new Schema({
    attribute: {
        type: String,
        required: true,
        trim: true,
        //unique: false,
    },
    secondAttribute: {
        type: String,
        trim: true,
    }
}, {
    versionKey: false,
    timestamps: true,
})

export default model('item', itemSchema);
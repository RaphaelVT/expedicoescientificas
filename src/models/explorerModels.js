import { Schema, model } from 'mongoose';

const explorerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    expeditionParticipated: {
        type: Number,
        required: true,
    },
    
});

export default model('Explorer', explorerSchema);
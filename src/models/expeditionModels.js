import { Schema, model } from 'mongoose';

const expeditionSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    participants: {
        type: [Schema.Types.ObjectId],
        ref: 'Explorers',
        
    },
    speciesFound:{
        type: [Schema.Types.ObjectId],
        ref: 'Species',
        
    }
});

export default model('Expedition', expeditionSchema);
import mongoose from 'mongoose';

const db = async() => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ADDRESS}/${process.env.DB_NAME}"`
          );

    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

export default db;

import mongoose from 'mongoose';

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "restaurant"
    })
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((error) => {
        console.log('Database connection failed');
        console.error(error);
    });
};

export default dbConnection;

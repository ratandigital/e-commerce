import mongoose from 'mongoose';


let isConnected = false; // track the connection


export const connectToDB = async () => {
    mongoose.set('strictQuery', true);


    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }


    try {
        await mongoose.connect('mongodb://localhost:27017/ecommerce', {
            dbName: "ecommerce",
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })


        isConnected = true;


        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}

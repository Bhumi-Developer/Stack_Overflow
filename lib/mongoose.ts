import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async()=>{
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URL){
        return console.log('Missing Url')
    }
    if(isConnected){
        return console.log('MongoDb is connected already')
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName: 'Stack_Overflow'
        })
        isConnected = true;
        console.log('MongoDB is connected');
    } catch (error) {
        console.log('MongoDB connection failed',error)
    }
}
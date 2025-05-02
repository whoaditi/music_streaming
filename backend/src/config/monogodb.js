import mongoose from 'mongoos'

const connectDB = async ()=>{

    mongoose.connection.on('connected',()=>{
        console.log("connectection established")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/spotify`);


}

export default connectDB;
import mongoose, { connection } from 'mongoose';

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log('Mongodb succesfully connected ')
        })
        connection.on('error', (err)=>{
            console.log('Mongodb connection error', +err)
            process.exit();
        })
    }
    catch{
        console.log('Something went wrong')
    }
}
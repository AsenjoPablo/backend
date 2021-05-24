import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config';

// database handling automatically called on start
(async () =>
{
    try
    {
        const mongooseOptions: ConnectionOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            /* user: config.MONGO_USER,
            pass: config.MONGO_PASSWORD, */
        }
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);
        console.log('Connection to database successfully established:', db.connection.name)
    }
    catch (err)
    {
        console.log("An error ocurred:", err)
    }
})()
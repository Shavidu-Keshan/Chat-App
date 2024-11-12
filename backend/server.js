import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';


const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000

app.use(express.json());  //parse the incomming request json payloads(from req.body)
app.use(cookieParser()); //parse the incomming request cookies

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server started on port ${PORT}`);
    
})
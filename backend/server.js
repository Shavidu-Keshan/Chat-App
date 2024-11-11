import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000

app.use(express.json());  //parse the incomming request json payloads(from req.body)

app.use("/api/auth",authRoutes);

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server started on port ${PORT}`);
    
})
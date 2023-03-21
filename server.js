import 'express-async-errors';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Homepage' });
});

// mongo connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(`mongoDB connection successful`))
  .catch((err) => console.log(`could not connect to mongoDB`, err));
// server connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

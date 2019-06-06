import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default axios.create({
  baseURL: process.env.BACK_END_URL,
  headers: {'Content-Type': 'application/json'}
})
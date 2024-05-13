import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async (dbURL) => {
  try {
    await mongoose.connect(dbURL)
    console.log('conexión exitosa con la base de datos')
  } catch (error) {
    console.log('error en la conexión:', error)
  }
}

export default connectDB 
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import connectDB from '../backend/server/database/connectDB.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = process.env.PUERTO
const db = process.env.MONGO_URL

const connect = async () => {
    try {
        await connectDB(db)
        app.listen(port, console.log(`el servidor inició: ${port}`))
    } catch(error){
        console.log(`error en el servidror: ${error}`)
    }
 }

app.get('/', (req, res) => {
    res.send('Hola Mundo!')
})

connect()
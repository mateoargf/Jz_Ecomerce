import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

const app = express()
const port = process.env.PUERTO

app.get('/', (req, res) => {
    res.send('Hola Mundo!')
})

app.listen(port, () => {
    console.log(`Servidor  Express escuchando el puerto ${port}`)
})

const express = require('express')
const app = express()
const PORT = 3003

app.get('/', (req, res) => {
     res.send('Hola Mundo!')
})

app.listen(PORT, () => {
    console.log(`Servidor  Express escuchando el puerto ${PORT}`)
})

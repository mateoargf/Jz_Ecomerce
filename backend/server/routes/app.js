import express from 'express'
const router = express.Router()
import errRouter from './err.js'

router.get('/', (req, res) => {
    res.send('Hola Mundo!')
})

router.use('/err', errRouter)

export default router
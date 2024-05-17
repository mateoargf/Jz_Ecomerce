import express from 'express'
const router = express.Router()
import errRouter from './err.js'
import { getIndexPage } from '../controllers/app.js'
import { postAllProducts, deleteAllProducts } from '../controllers/products.js'

router.get('/', getIndexPage)

router.use('/err', errRouter)

router.post('/post', postAllProducts)

router.delete('/delete', deleteAllProducts)

export default router
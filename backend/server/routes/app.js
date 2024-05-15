import express from 'express'
const router = express.Router()
import errRouter from './err.js'
import { getIndexPage } from '../controllers/app.js'

router.get('/', getIndexPage)

router.use('/err', errRouter)

export default router
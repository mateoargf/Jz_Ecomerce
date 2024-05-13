import Router from 'express'
const errRouter = Router()
import { get404 } from '../controllers/err.js'

errRouter.get('/404', get404)

export default errRouter
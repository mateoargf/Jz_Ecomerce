import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const get404 = (req,res) => {
   res.status(404).send('error',res.statusCode)
 } 
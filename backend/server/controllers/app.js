import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const getIndexPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../../../frontend/public/index.html'))
} 
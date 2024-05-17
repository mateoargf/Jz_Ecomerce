import mongoose from 'mongoose'
import path from 'path'
import Product from '../models/products.js'
import productsJson from '../jsons/products.json' assert {type: 'json'}

const postAllProducts = async (req, res) => {
     //   validación de condiciones de productos 
     try {
          const ValidProducts = productsJson.filter(product => {
               return product.name &&
                    product.image &&
                    product.price > 0 &&
                    Number.isInteger(product.stock) &&
                    product.stock > 0
          })

          if (ValidProducts.length !== productsJson.length) {
               return res.status(400).send('Algunos tienen datos inválidos y no se pueden agregar')
          }

          // envío de productos a db
          const insertedProducts = await Product.insertMany(ValidProducts)
          res.status(200).json({
               message: 'Productos enviados',
               insertedProducts: insertedProducts
          })
     } catch (error) {
          console.error('Error en petición agregar productos:', error)
          res.status(500).send(`Error al agregar productos: ${error.message}`)
     }
}

const deleteAllProducts = async (req, res) => {
     try {
          // vericamos que no este vacía la collection
          const count = await Product.countDocuments()
          count === 0 ?
               res.status(404).json({ message: 'La colección ya está vacía' }) :
               (async () => {
                    // eliminar products de db
                    const result = await Product.deleteMany({})
                    result.deletedCount > 0 ? res.status(200).json({
                         message: 'Todos los productos eliminados de db'
                    }) :
                         res.status(404).json({
                              message: 'La colección ya está vacía'
                         })
               })()

     } catch (error) {
          console.error('Error al eliminar los productos:', error)
          res.status(500).send(`Error al eliminar productos: ${error.message}`)
     }
}

export { postAllProducts, deleteAllProducts }
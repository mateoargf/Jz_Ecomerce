import mongoose from 'mongoose'
const { Schema } = mongoose

const products = new Schema({
     name: {
          type: String,
          required: true,
          validate: {
               validator: function (value) {
                    return value.length > 0
               },
               message: 'El nombre no puede ir vacío'
          }
     },
     image: {
          type: String,
          required: true,
          validate: {
               validator: function (value) {
                    return /\.(jpg|jpeg|png|gif)$/.test(value.toLowerCase())
               },
               message: 'La url de la imagen no es válida',
          }
     },
     price: {
          type: Number,
          required: true,
          validate: {
               validator: function (value) {
                    return value > 0
               },
               message: 'El precio no debe ser menor a 0'
          }
     },
     stock: {
          type: Number,
          required: true,
          validate: {
               validator: function(value){
                    return Number.isInteger(value) && value >= 0
               },
               message: 'El stock no puede ser menor a 0'
          }
     }
})

export default products
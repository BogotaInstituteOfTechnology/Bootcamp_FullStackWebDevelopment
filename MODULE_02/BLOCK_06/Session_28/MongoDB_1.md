# Bootcamp_WebDevelopmentFullStack
// Conectarse a MongoDB
mongo

// Crear una base de datos
use mi_tienda

// Insertar datos en una colección de productos
db.productos.insertMany([
  { nombre: "Producto 1", precio: 10.99 },
  { nombre: "Producto 2", precio: 20.99 },
  { nombre: "Producto 3", precio: 30.99 },
  { nombre: "Producto 4", precio: 40.99 },
  { nombre: "Producto 5", precio: 50.99 }
])

// Insertar datos en una colección de stock
db.stock.insertMany([
  { producto: "Producto 1", cantidad: 10 },
  { producto: "Producto 2", cantidad: 10 },
  { producto: "Producto 3", cantidad: 10 },
  { producto: "Producto 4", cantidad: 10 },
  { producto: "Producto 5", cantidad: 10 }
])

// Insertar datos en una colección de proveedores
db.proveedores.insertMany([
  { nombre: "Proveedor 1", direccion: "Calle 1", telefono: "555-1234" },
  { nombre: "Proveedor 2", direccion: "Calle 2", telefono: "555-5678" }
])

// Editar un proveedor
db.proveedores.updateOne(
  { nombre: "Proveedor 1" },
  { $set: { direccion: "Nueva calle", telefono: "555-4321" } }
)

// Eliminar un producto y su stock
db.productos.deleteOne({ nombre: "Producto 5" })
db.stock.deleteOne({ producto: "Producto 5" })

// Consultar todos los productos
db.productos.find()

// Consultar solo un proveedor
db.proveedores.findOne({ nombre: "Proveedor 1" })

// Consultar un producto y su cantidad en stock y los proveedores
db.productos.aggregate([
  {
    $lookup: {
      from: "stock",
      localField: "nombre",
      foreignField: "producto",
      as: "stock"
    }
  },
  {
    $lookup: {
      from: "proveedores",
      localField: "nombre",
      foreignField: "nombre",
      as: "proveedores"
    }
  },
  { $match: { nombre: "Producto 1" } }
])

/**
 * Mocking client-server processing
 */
// import _products from './products.json'




// Replace static API for fetched JSON

let inventoryImages = [
 {inventoryImage: 'chronograph.jpg'},
 {inventoryImage: 'quartz.jpg'},
 {inventoryImage: 'weekender.jpg'}
]

export default {
  getProducts: (cb) => {
    fetch("http://tech.work.co/shopping-cart/products.json")
    .then((data) => data.json())
    .then(inventory =>{

      inventory.map((item, index) =>{
         item.inventoryImages = inventoryImages[index].inventoryImage
        });
      console.log("List all inventory w/ image :",inventory)
      cb(inventory)
    })
  },
  buyProducts: (payload, cb) => cb()
}

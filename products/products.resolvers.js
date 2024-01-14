const productsModel = require("./products.model");

module.exports = {
 Query: {
  products: () => {
   return productsModel.fetchAllProducts();
  },
  product: (_, { id }) => {
   return productsModel.fetchProductById(id);
  },
  productsByPrice: (_, { minPrice, maxPrice }) => {
   return productsModel.filterByPrice(minPrice, maxPrice);
  },
 },
 Mutation: {
  createProduct: (_, { description, price }) => {
   return productsModel.createProduct(description, price);
  },
  createReview: (_, { productId, raiting, comment }) => {
   return productsModel.createReview(productId, raiting, comment);
  },
 },
};

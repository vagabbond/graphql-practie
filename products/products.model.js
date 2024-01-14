const products = [
 {
  id: 1,
  description: "Water",
  price: 1.99,
  reviews: [
   {
    raiting: 5,
    comment: "Best water ever!",
   },
  ],
 },
 {
  id: 2,
  description: "Bread",
  price: 2.99,
  reviews: [
   {
    raiting: 5,
    comment: "Best bread ever!",
   },
  ],
 },
];

const fetchAllProducts = () => {
 return products;
};

const fetchProductById = (id) => {
 return products.find((product) => product.id === Number(id));
 0;
};

const filterByPrice = (minPrice, maxPrice) => {
 return products.filter(
  (product) => product.price >= minPrice && product.price <= maxPrice
 );
};

const createProduct = (description, price) => {
 const newProduct = {
  id: products.length + 1,
  reviews: [],
  price,
  description,
 };
 products.push(newProduct);
 return newProduct;
};

const createReview = (productId, raiting, comment) => {
 const product = products.find((product) => product.id === Number(productId));
 const newReview = {
  raiting,
  comment,
 };
 product.reviews.push(newReview);
 return newReview;
};

module.exports = {
 fetchAllProducts,
 fetchProductById,
 filterByPrice,
 createProduct,
 createReview,
};

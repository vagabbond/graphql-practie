const orders = [
 {
  date: "2021-01-01",
  subtotal: 10.98,
  items: [
   {
    product: {
     id: 1,
     description: "Water",
     price: 1.99,
    },
    quantity: 1,
   },
   {
    product: {
     id: 2,
     description: "Bread",
     price: 2.99,
    },
    quantity: 2,
   },
  ],
 },
 {
  date: "2021-01-02",
  subtotal: 1.99,
  items: [
   {
    product: {
     id: 1,
     description: "Water",
     price: 1.99,
    },
    quantity: 1,
   },
  ],
 },
];

const fetchAllOrders = () => {
 return orders;
};

const fetchOrderBySubtotal = (minSubtotal, maxSubtotal) => {
 return orders.filter(
  (order) => order.subtotal >= minSubtotal && order.subtotal <= maxSubtotal
 );
};
module.exports = {
 fetchAllOrders,
 fetchOrderBySubtotal,
};

const ordersModel = require("./orders.model");

module.exports = {
 Query: {
  orders: () => {
   return ordersModel.fetchAllOrders();
  },
  ordersBySubtotal: (_, { minSubtotal, maxSubtotal }) => {
   return ordersModel.fetchOrderBySubtotal(minSubtotal, maxSubtotal);
  },
 },
};

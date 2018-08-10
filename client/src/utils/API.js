import axios from "axios";

export default {
  // Gets all orders
  getOrder: function() {
    return axios.get("/api/order");
  },
  // Gets the order with the given id
  getOrderById: function(id) {
    return axios.get("/api/order/" + id);
  },
  // Gets the order with the given id
  updateOrder: function(id, orderData) {
    return axios.put("/api/order/" + id, orderData);
  },
  // Deletes the order with the given id
  deleteOrder: function(id) {
    return axios.delete("/api/order/" + id);
  },
  // Saves a order to the database
  saveOrder: function(orderData) {
    return axios.post("/api/order", orderData);
  },
  // Gets all menu items
  getMenu: function() {
    return axios.get("/api/menu");
  },
  // Gets the menu item with the given id
  getMenuById: function(id) {
    return axios.get("/api/menu/" + id);
  },
  // Deletes the menu item with the given id
  deleteMenu: function(id) {
    return axios.delete("/api/menu/" + id);
  },
  // Saves a menu item to the database
  saveMenu: function(menuItem) {
    return axios.post("/api/menu", menuItem);
  }
};

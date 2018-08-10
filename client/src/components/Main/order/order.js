import React, { Component } from "react";
import OrderItem from "./orderItem";
import "./order.css";

class Order extends Component {
  render() {
    return (
      <div className="orderedItems">
      <h5>Items added to your order (click to remove)</h5>
      {this.props.orderItems.map(item => (
        <OrderItem key={item._id} {...item} removeOrder={() => this.props.removeOrder(item._id)} />
        ))}
      </div>
      )
  }
}

export default Order;

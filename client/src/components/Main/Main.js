import React, { Component } from "react";
import API from "../../utils/API";

import Foodcontainer from "./foodcontainer";
import Order from "./order";
import Chooser from "./chooser";
import SuccessModal from "./successmodal";
import "./Main.css";
import Footer from "../Footer";

class Main extends Component {
  state = {
    menuOptions: [],
    orderItems: [],
    currentSelection: {},
    currentlyOrdering: true
  };

  // ==============================================================
  // Component loads menu and sets a placholder in current items
  componentDidMount() {
    // get all menu items
    API.getMenu()
      .then(data => this.setState({ menuOptions: data.data }))
      .then(() => {
        if(this.state.menuOptions[0]){
          return this.setCurrent( this.state.menuOptions[0]._id );
        } else {
          return this.setDefaultCurrent();
        }
      })
  }

  // ==============================================================
  // Handle showing current item showing

  // set currentSelection to placeholder values
  setDefaultCurrent = () => {
    let placeholder = {
      _id: +new Date(),
      category: "",
      name: "Select an item from above...",
      image: "Order-Up-w-text.png",
      price: 0,
      desc: ""
    }
    this.setState({ currentSelection: placeholder });
  }

  // set currentSelection to a menu item
  setCurrent = (index) => {
    let currentSelection = this.state.menuOptions.filter(option => option._id === index)[0];
    this.setState({ currentSelection });
  }

  // ==============================================================
  // Handle adding and removing an item from the order

  // add item to order
  addCurrentToOrder = () => {
    let addedItem = { ...this.state.currentSelection, _id: +new Date() };
    let newOrderItems = [...this.state.orderItems, addedItem];

    // do we want to remove current selection when added to order?
    // this.setDefaultCurrent();

    this.setState({ orderItems: newOrderItems });
  }

  // remove item from order
  removeFromOrder = index => {
    let newOrderItems = this.state.orderItems.filter(item => item._id !== index);

    this.setState({ orderItems: newOrderItems });
  }


  // ==============================================================
  // Handle submitting an order and reseting to hide nice

  // submit order
  submitOrder = () => {
    if(this.state.orderItems.length < 1){
      return ;
    }

    const items = this.state.orderItems.map( item => {
      return {name: item.name, price: item.price, image: item.image}
    });
    console.log(items);

    API.saveOrder({items, forWho: 10})
    .then(data => {
      console.log('save data', data);
      this.setDefaultCurrent();
      this.setState({
        currentlyOrdering: false,
        orderItems: []
      });
    });
  }

  // set currently ordering to true
  startNewOrder = () => {
    this.setState({currentlyOrdering: true});
  }

  // ==============================================================
  // Render function
  render() {
    const total = Math.round(this.state.orderItems.reduce((t, i) => t + i.price, 0) * 100) / 100;
    return (
      <React.Fragment>
      <div className="logo">
        <div className="logoContainer">
          <h1><i class="fas fa-utensils"></i>&nbsp;Order Buddy</h1>
        </div>
      </div>
      <div className="by">
        <p>by <a href="https://chrisyangportfolio.herokuapp.com/">cy</a></p>
      </div>
      <div className="menuSelection">
      <Chooser menuOptions={this.state.menuOptions} setCurrent={this.setCurrent} />
      </div>


      {this.state.currentSelection ?
      <Foodcontainer {...this.state.currentSelection} addToOrder={this.addCurrentToOrder} /> :
      null }
      <div className="totalArea">

        <h2>Total: {total}</h2>
      <div className="submitButton">
        <button onClick={this.submitOrder}>Submit Order</button>
      </div>
      </div>
        <Order orderItems={this.state.orderItems} removeOrder={this.removeFromOrder} />
        <div className="footerContainer">
        </div>

      {
        this.state.currentlyOrdering ?
        null :
        <SuccessModal hideModal={this.startNewOrder} />
      }
    </React.Fragment>

    );
  }
}

export default Main;

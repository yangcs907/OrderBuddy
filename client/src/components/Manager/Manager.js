import React, { Component } from "react";
import {Tabs, Tab} from 'react-bootstrap-tabs';
import API from "../../utils/API";
import AddItem from "./AddItem/AddItem";
import MenuItem from "./MenuItem/menuitem";
import OrderItem from "./OrderItem/OrderItem";
import "./Manager.css";

class Manager extends Component {
    login() {
        this.props.auth.login();
    }
    state = {
        menuOptions: [],
        orders: []
    };

    // ==============================================================
    // Component loads menu and sets a placholder in current items
    componentDidMount() {
        // get all menu items
        API.getMenu()
            .then(data => {
                this.setState({ menuOptions: data.data });
            });
        // get all orders
        API.getOrder()
            .then(data => {
                this.setState({ orders: data.data });
            });
    }

    // ==============================================================
    // Handle adding and deleting of menu items

    handleAdd = newMenuItem => {
        API.saveMenu(newMenuItem)
            .then(data => {
                const savedMenuItem = data.data;
                const totalMenu = [savedMenuItem, ...this.state.menuOptions];
                this.setState({ menuOptions: totalMenu });
            });
    }

    handleDelete = index => {
        API.deleteMenu(index)
            .then(data => {
                const restOfMenu = this.state.menuOptions.filter(item => item._id !== index);
                this.setState({ menuOptions: restOfMenu });
            });
    }

    // ==============================================================
    // Handle completing orders

    handleChangeCompleted = (orderId, isComplete) => {
        API.updateOrder(orderId, {complete: isComplete})
            .then(data => {
                const updatedOrders = this.state.orders.map( order =>{
                    if(order._id === orderId){
                        order.complete = isComplete;
                    }
                    return order;
                });
                this.setState({orders: updatedOrders});
            });
    }

    // ==============================================================
    // Render function
    render() {
        const { isAuthenticated } = this.props.auth;
        const renderMenuItem = item => (
            <MenuItem
            key={item._id || +new Date()}
            {...item}
            delete={this.handleDelete}
             />);
        const renderOrder = order => (
            <OrderItem
            key={order._id}
            {...order}
            changeComplete={this.handleChangeCompleted}
            />);
        return (
            <div>
                {
                    isAuthenticated() && (
                        <React.Fragment>
                            <h1 className="sr-only">Manage</h1>
                            <div className="container mt-5 mb-5">
                            <div className="cardContainer">
                              <div className="card-body">
                              <Tabs>
                                  <Tab class ="tabs" label="Open Orders">
                                  <ul className="list-group">
                                  {this.state.orders.filter(order => !order.complete ).map(renderOrder)}
                                  </ul>
                                  </Tab>
                                  <Tab class="tabs" label="Past Orders">
                                  <ul className="list-group">
                                  {this.state.orders.filter(order => order.complete ).map(renderOrder)}
                                  </ul>
                                  </Tab>
                                  <Tab class="tabs" label="Manage Menu">
                                  <ul className="list-group">
                                  {this.state.menuOptions.map(renderMenuItem)}
                                  </ul>
                                  </Tab>
                                  <Tab class="tabs" label="Add To Menu">
                                  <AddItem add={this.handleAdd} />
                                  </Tab>
                                </Tabs>
                            </div>
                            </div>
                            </div>
                        </React.Fragment>
                    )
                }
                {
                    !isAuthenticated() && (
                        <h4>
                            You are not logged in! Please{' '}
                            <a
                                style={{ cursor: 'pointer' }}
                                onClick={this.login.bind(this)}
                            >
                                Log In
                            </a>
                            {' '}to continue.
                          </h4>
                    )
                }
            </div>
        );
    }
}

export default Manager;

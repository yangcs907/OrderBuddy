import React, { Component } from "react";

const submitMenuItem = {
  color: "rgb(238,232,170)",
  borderStyle: "none",
  backgroundColor: "rgba(0,0,0,0)",
  cursor: "pointer",
  fontSize: "24px"
}

const addItemForm = {
  fontFamily: "Didact Gothic, sans-serif"
}
class AddItem extends Component {
  state = {
    category: "",
    name: "",
    price: "",
    desc: "",
    image: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    if( this.state.category && this.state.name && this.state.price && this.state.image ){

      this.props.add(this.state);

      this.setState({
        category: "",
        name: "",
        price: "",
        desc: "",
        image: ""
      });

    }
  };

  render() {
    return (
      <div className="px-5" style={addItemForm}>
      <h1 className="mt-4 mb-4" style={addItemForm}>Add an item to the menu</h1>

      <form className="form">

      <div class="form-group">
      <legend>Select a Category</legend>
      <label className="mr-4">
      <input name="category" onChange={this.handleInputChange} type="radio" value="Specials" /> Specials
      </label>
      <label className="mr-4">
      <input name="category" onChange={this.handleInputChange} type="radio" value="Kids" /> Kids
      </label>
      <label className="mr-4">
      <input name="category" onChange={this.handleInputChange} type="radio" value="Entrees" /> Entrees
      </label>
      <label className="mr-4">
      <input name="category" onChange={this.handleInputChange} type="radio" value="Desserts" /> Desserts
      </label>
      <label className="mr-4">
      <input name="category" onChange={this.handleInputChange} type="radio" value="Drinks" /> Drinks
      </label>
      </div>

      <div class="form-group">
      <label>Item Name:</label>
      <input
      className="form-control"
      value={this.state.name}
      name="name"
      onChange={this.handleInputChange}
      type="text"
      placeholder="Item Name"
      />
      </div>

      <div class="form-group">
      <label for="price">Item Price:</label>
      <input
      className="form-control"
      value={this.state.price}
      name="price"
      id="price"
      onChange={this.handleInputChange}
      type="number"
      step="0.01"
      min="0"
      placeholder="Item Price"
      />
      </div>

      <div class="form-group">
      <label for="desc">Item Description:</label>
      <input
      className="form-control"
      value={this.state.desc}
      name="desc"
      id="desc"
      onChange={this.handleInputChange}
      type="text"
      placeholder="Description"
      />
      </div>

      <div class="form-group">
      <label for="image">Item Image:</label>
      <input
      className="form-control"
      value={this.state.image}
      name="image"
      desc="image"
      onChange={this.handleInputChange}
      type="text"
      placeholder="Image"
      />
      </div>
      <button style={submitMenuItem} onClick={this.handleFormSubmit}>Submit</button>
      </form>
      </div>
      );
    }
  }

  export default AddItem;

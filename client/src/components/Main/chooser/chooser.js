import React, { Component } from "react";
import "./chooser.css";
// import Flickity from 'react-flickity-component';
import Slider from "react-slick";

class Chooser extends Component {
  state = {
    categories: ["Specials", "Entrees", "Appetizers", "Desserts", "Drinks", "Kids"],
    shownCategory: "Specials"
  }

  // ==============================================================
  // Category Interactions

  renderCategoryButton = category => (
    <button
    className="menuButton"
    onClick={() => this.switchCategory(category)}
    key={category}
    >
    {category}
    </button>
    )

  shownCategory = () =>{
    return this.props.menuOptions
      .filter(item => item.category === this.state.shownCategory)
      .map(item => (
        <div className="thumbnail-wrapper" key={item._id}>
        <img
        src={item.image}
        onClick={() => this.props.setCurrent(item._id)}
        alt={item.name} />
        </div>
        ))
  }

  switchCategory = category =>{
    console.log(this.props.menuOptions);
    console.log(category);

    this.setState({shownCategory: category});
  }

  // ==============================================================
  // Render function
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };

    // console.log(this.props.menuOptions);
    return (
      <React.Fragment>
      {this.state.categories.map(category => this.renderCategoryButton(category))}
      <Slider {...settings}>
        {this.shownCategory()}
      </Slider>
      </React.Fragment>
    );
  }
}

export default Chooser;

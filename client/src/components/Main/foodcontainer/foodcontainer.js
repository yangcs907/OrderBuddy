import React from "react";
import "./foodcontainer.css";

const Foodcontainer = props => (
	<div className="foodContainer">
		<div className="imageContainer">
	<img src={props.image} alt={props.name} />
	</div>

	<div className="card">
	<div className="card-body">
	<h5 className="card-title">{props.name}</h5>
	<p className="card-textDesc">{props.desc}</p>
	<p className="card-textPrice">$&nbsp;{props.price}</p>
	{props.category !== "" ?
	<button className="addButton" onClick={props.addToOrder}>Add to Order</button> :
	<button className="btn btn-primary" disabled>Choose an Item</button>
	}
	</div>
	</div>
	</div>
);

export default Foodcontainer;

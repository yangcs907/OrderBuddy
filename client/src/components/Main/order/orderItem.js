import React from "react";

const OrderItem = props => (
	<div>
	<img src={props.image} alt={props.name} className="order-img-thumbnail" onClick={() => props.removeOrder(props._id)} /> 
	</div>
);

export default OrderItem;

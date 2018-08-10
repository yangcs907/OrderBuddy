import React from "react";
import "./thumbnails.css";

const thumbnails = props => (

<div class="food-thumbnails" style="float:right;margin-left: 40%;">
		 <img src= ${props.imageurl} style="width:100px; border-radius: 50%; margin:5px;" alt="Avatar">
 	</div>

);

export default thumbnails;

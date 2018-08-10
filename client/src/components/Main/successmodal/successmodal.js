import React from "react";
import "./successmodal.css";

const SuccessModal = props => (
	<div className="modal-wrapper">
	<div className="modal-window">
	<h1 className="display-4 mb-3">Thank You! Your order has been submitted</h1>
	<button className="btnSuccess" onClick={props.hideModal}>Close</button>
	</div>
	</div>
);

export default SuccessModal;

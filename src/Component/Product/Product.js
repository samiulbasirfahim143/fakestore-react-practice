import React from "react"
import "./Product.css"
const Product = ({ product , cartCount}) => {
	const { image, title, description } = product
    console.log(cartCount);
	return (
		<div className="col-3 product">
			<img width="220px" height="220px" src={image} alt="" />
			<h3 className="text-center fw-bolder">{title.slice(0, 10)}</h3>
			<p>{description.slice(0, 100)}...</p>
			<div>
				<button onClick={cartCount} className="btn btn-warning p-2 me-5">Add on cart</button>
				<button className="btn btn-success p-2">Details</button>
			</div>
		</div>
	)
}

export default Product

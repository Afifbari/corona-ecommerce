import React from "react";
import { useHistory } from "react-router-dom";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvide";

import Subtotal from "./Subtotal";

function Checkout() {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://i.ibb.co/V23q75t/OCC-Amazon1-CB423492668.jpg"
					alt=""
				/>
				<div>
					<h3>Hello, {user ? user.email : "Guest"}</h3>
					<h2 className="checkout__title">Your Shopping Basket</h2>

					{basket.map((item) => (
						<CheckoutProduct
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						></CheckoutProduct>
					))}
					{/* BasketItem */}
					{/* BasketItem */}
					{/* BasketItem */}
					{/* BasketItem */}
				</div>
			</div>

			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;

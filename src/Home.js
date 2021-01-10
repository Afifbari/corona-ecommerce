import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://i.ibb.co/XbDSTmP/pngtree-corona-virus-background-clipart-image-332330.jpg"
					alt=""
				/>

				<div className="home__row">
					<Product
						id="1"
						title="Pulse Oximeter"
						image="https://img.medicalexpo.com/images_me/photo-g/113383-15586886.jpg"
						price={900.5}
						rating={5}
					/>
					<Product
						id="2"
						title="Blood Glucose Meter"
						image="https://5.imimg.com/data5/HW/WL/RR/ANDROID-25957024/product-jpeg-500x500.jpg"
						price={675.5}
						rating={5}
					/>
					<Product
						id="3"
						title="Digital Infrared Forehead Thermometer"
						image="https://cdn.shopify.com/s/files/1/0222/6841/1976/products/IR_Thermometer_IlyapaHealth_main_2000x.jpg?v=1586809257"
						price={450}
						rating={4}
					/>
				</div>

				<div className="home__row">
					<Product
						id="4"
						title="Surgical Face Mask (Full Box)"
						image="https://labtekservices.co.uk/wp-content/uploads/2020/07/3-ply-Fluid-Resistant-Mask.gif"
						price={230}
						rating={4}
					/>
					<Product
						id="5"
						title="Full PPE Kit"
						image="https://images-na.ssl-images-amazon.com/images/I/51HdZRPwVhL._SL1000_.jpg"
						price={1200}
						rating={3}
					/>
					<Product
						id="6"
						title="Hexisol Hand Rub"
						image="https://cdn.chaldal.net/_mpimage/hexisol-hand-rub-50-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D68528&q=low&v=1"
						price={300}
						rating={4}
					/>
				</div>

				{/* <div className="home__row">
					<Product
						id="6"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
						price={1094.98}
						rating={4}
					/>
				</div> */}
			</div>
		</div>
	);
}

export default Home;

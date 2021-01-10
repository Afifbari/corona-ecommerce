const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
	"sk_test_51Hm1fcJX0Agwl3p9DgEeKo98hYCG3a5h183YLOmwWuCKmeYqeHI4lt1vNlgGLSIGwoaA7U7uqU3WTh5Apo7MGSe500JK2WhWWL"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("Hello world"));

app.post("/payments/create", async (req, res) => {
	const total = req.query.total;

	console.log(
		"Payment request received BOOM!! for this amount >>> ",
		total
	);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "usd",
	});

	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/ecommerce-cep/us-central1/api

import axios from "axios";

const instance = axios.create({
	baseURL: "https://us-central1-ecommerce-cep.cloudfunctions.net/api",

	//"http://localhost:5001/ecommerce-cep/us-central1/api",
	// https://us-central1-ecommerce-cep.cloudfunctions.net/api

	// command for deploying firebase functions
	// firebase deploy --only functions
});

export default instance;

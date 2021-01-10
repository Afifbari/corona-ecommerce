import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAQReqhttcxTzUmROvWnOsFBOd-qpn-TdU",
	authDomain: "ecommerce-cep.firebaseapp.com",
	databaseURL: "https://ecommerce-cep.firebaseio.com",
	projectId: "ecommerce-cep",
	storageBucket: "ecommerce-cep.appspot.com",
	messagingSenderId: "275201248641",
	appId: "1:275201248641:web:631840e82ef341fe6b2c80",
	measurementId: "G-RMN0N6ECPQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

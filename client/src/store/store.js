import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";



const store = configureStore({
	reducer: {
		auth: authReducer
	}
});

export default store;


// This file is going to be our global reducer where all of our reducers are going to be combined.
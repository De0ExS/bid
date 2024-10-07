import type { LoginPayload, LoginResponse } from "@/login/models/login.types";
import axios from "axios";

export const loginWithEmailAndPassword = async (
	payload: LoginPayload
): Promise<LoginResponse> => {
	try {
		const apiKey = import.meta.env.VITE_API_KEY;
		const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
		const { data } = await axios.post(endpoint, payload);
		return data;
	} catch (error) {
		console.log("Error: ", error);
	}
};

import axios from "axios";

const asaas = axios.create({
	baseURL: "https://sandbox.asaas.com/api",
	headers: {
		accept: "application/json",
		"content-type": "application/json",
		access_token:
			"$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNzAyOTM6OiRhYWNoXzMxZmViOTBkLWY4MTMtNGQ0ZC04Njc2LTIyMTVlMmQxMjNiOQ==",
	},
});

export default asaas;

import axios from "axios";

const apiToken = process.env.REACT_APP_API_TOKEN;

const axiosConfig = {
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 10000,
	headers: {
		"Content-type": "application/json",
		Authorization: `Bearer ${apiToken}`,
	},
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;

import axios from "axios";
import { getToken } from '../config/protectedToken';

const url = process.env.REACT_APP_TOKEN_URL;
const token = process.env.REACT_APP_TOKEN;

const apiPayment = axios.create({
  baseURL: url
});

apiPayment.interceptors.request.use(async config => {
    config.headers["x-api-key"] = ` ${token}`;
    return config;
});

export default apiPayment;

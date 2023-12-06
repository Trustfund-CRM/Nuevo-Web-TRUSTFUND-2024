import axios from "axios";

const BASE_URL = "https://trustfund.com.ar/webApi/public/"

const apiInstance = axios.create({baseURL: BASE_URL})

export default apiInstance;
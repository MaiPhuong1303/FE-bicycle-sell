import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, // Thời gian chờ tối đa (nếu cần)

});

export default axiosInstance;
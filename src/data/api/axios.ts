// import axios from 'axios';
//
// const BASE_URL = 'http://localhost:4000';
//
// axios.get(`${BASE_URL}/products`)
//     .then(response => {
//         console.log(response.data); // Log dữ liệu sản phẩm từ fake server
//     })
//     .catch(error => {
//         console.error('Error fetching products:', error);
//     });
// api/axiosInstance.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, // Thời gian chờ tối đa (nếu cần)
    // Cấu hình khác nếu có

});

export default axiosInstance;

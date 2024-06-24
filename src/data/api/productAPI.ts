// import axios from "axios";
//
// interface ProductParams {
//     _page?: number;
//     _limit?: number;
//     _start?: number; // Thêm thuộc tính _start vào interface
//     // Các thuộc tính khác nếu có
// }
//
// const productApi = {
//     async getAll(params: ProductParams) {
//         const newParams = {...params};
//
//         // Tạo hoặc cập nhật thuộc tính _start dựa trên _page và _limit
//         newParams._start = !params._page || params._page <= 1
//             ? 0
//             : (params._page - 1) * (params._limit || 50);
//
//         // Xóa thuộc tính _page (nếu có)
//         delete newParams._page;
//
//         // Lấy danh sách sản phẩm và số lượng
//         const productList = await axios.get('/products', {
//             params: newParams
//         });
//         const count = await axios.get('/products/count', {
//             params: newParams
//         });
//
//         // Xây dựng và trả về response
//         return {
//             data: productList.data,
//             pagination: {
//                 page: params._page,   // Sử dụng params ở đây để truyền lại giá trị
//                 limit: params._limit,
//                 total: count.data
//             }
//         };
//     }
// };
// export default productApi;
// api/productApi.ts
// Đường dẫn đến tập tin axiosInstance.ts

import axiosInstance from "./axios";

interface ProductParams {
    _page?: number;
    _limit?: number;
    _start?: number;
    // Các thuộc tính khác nếu có
}

const productApi = {
    async getAll(params: ProductParams) {
        const newParams = {...params};
        newParams._start = !params._page || params._page <= 1
            ? 0
            : (params._page - 1) * (params._limit || 10);

        delete newParams._page;

        const productList = await axiosInstance.get('/product', {
            params: newParams,
        });


        return {
            data: productList.data,
            pagination: {
                page: params._page,
                limit: params._limit,

            },
        };
    },
};

export default productApi;

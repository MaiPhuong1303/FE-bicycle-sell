import axiosInstance from "./axios";

export interface ProductParams {
    _page?: number;
    _limit?: number;
    _start?: number;
    _end?: number;
    _totalItems?: number

}

const productApi = {
    async getAll(params: ProductParams) {
        try {
            const {_page = 1, _limit = 12} = params;


            const _start = (_page - 1) * _limit;
            const _end = _start + _limit;


            const fakeProducts = await axiosInstance.get('/products');


            const totalItems = fakeProducts.data.length;


            const slicedProducts = fakeProducts.data.slice(_start, _end);


            return {
                data: slicedProducts,
                pagination: {
                    page: _page,
                    limit: _limit,
                },
                totalItems: totalItems,
            };
        } catch (error) {
            console.error('Lỗi khi lấy danh sách sản phẩm:', error);
            throw error;
        }
    },
};
export default productApi;
import axiosInstance from "./axios";

export interface ProductParams {
    _page?: number;
    _limit?: number;
    _start?: number;
    _end?: number;
    _totalItems?: number;
}

const productApi = {
    async getAll(params: ProductParams) {
        try {
            const newParams = {...params};
            newParams._start = !params._page || params._page <= 1
                ? 0
                : (params._page - 1) * (params._limit || 50);

            delete newParams._page;
            const productList = await axiosInstance.get('/products', {params: newParams});
            const fakeProducts = await axiosInstance.get('/products');
            const totalItems = fakeProducts.data.length;
            const slicedProducts = productList.data.slice(params._start, params._end);

            return {
                data: slicedProducts,
                pagination: {
                    page: params._page,
                    limit: params._limit,
                },
                totalItems: totalItems,
            };
        } catch (error) {
            console.error('Lỗi khi lấy danh sách sản phẩm:', error);
            throw error;
        }
    },
    async countProductsByCategory(categoryId: number) {
        try {
            const response = await axiosInstance.get('/products', {
                params: {categories_id: categoryId}
            });
            return response.data.length;
        } catch (error) {
            console.error('Lỗi khi đếm sản phẩm theo loại:', error);
            throw error;
        }
    },
    async countTotalProducts() {
        try {
            const response = await axiosInstance.get('/products');
            return response.data.length;
        } catch (error) {
            console.error('Lỗi khi đếm tổng sản phẩm:', error);
            throw error;
        }
    }
};

export default productApi;

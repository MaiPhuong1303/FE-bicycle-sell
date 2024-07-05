import axiosInstance from "./axios";
import {ProductParams} from "./productAPI";

// Định nghĩa interface cho đối tượng Category
// categoryAPI.ts
export interface Category {
    id: number;
    name: string;
    // Other properties if needed
}

interface CategoryAPI {
    getAll(params: ProductParams): Promise<Category[]>; // getAll trả về một Promise chứa một mảng các đối tượng Category
    get(id: number): Promise<Category>; // get trả về một Promise với một đối tượng Category
    add(data: any): Promise<any>; // Thêm phương thức add để thêm một danh mục sản phẩm mới
    update(data: any): Promise<any>; // Thêm phương thức update để cập nhật một danh mục sản phẩm
    remove(id: number): Promise<any>; // Thêm phương thức remove để xóa một danh mục sản phẩm dựa trên id
}

// Đối tượng categoryAPI với các phương thức tương ứng
const categoryAPI: CategoryAPI = {
    getAll(params) {
        const url = '/categories';
        return axiosInstance.get(url, {params})
            .then(response => response.data); // Trả về chỉ mục 'categories' từ dữ liệu trả về

    },
    get(id) {
        const url = `/categories/${id}`;
        return axiosInstance.get(url)
            .then(response => response.data);
    },
    add(data) {
        const url = '/categories';
        return axiosInstance.post(url, data);
    },
    update(data) {
        const url = `/categories/${data.id}`;
        return axiosInstance.patch(url, data);
    },
    remove(id) {
        const url = `/categories/${id}`;
        return axiosInstance.delete(url);
    },
};

export default categoryAPI;

// Product.ts
export interface Product {
    id: string; // Sửa từ number thành string tại đây nếu id là kiểu string
    name: string;
    description: string;
    price: string;
    urlImage: string;
    categories_id: number;
}

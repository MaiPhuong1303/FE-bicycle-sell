export interface Product {
    id: string; // Sửa từ number thành string tại đây nếu id là kiểu string
    name: string;
    description: string;
    price: string;
    urlImage: string;
    categories_id: number;
    brand_name: string;
    color: string;
    rating: number;
    images: string;
    highlight_items: string
}

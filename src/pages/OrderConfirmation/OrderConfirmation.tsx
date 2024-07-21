// src/pages/OrderConfirmation/OrderConfirmation.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from "../../components/helpers/common"; // Đảm bảo rằng bạn có hàm này để định dạng tiền tệ
import styles from './OrderConfirmation.module.scss'; // Thêm style của bạn ở đây

interface Product {
    id: string;
    name: string;
    price: number;
    qty: number;
    thumbnail: string;
}

const OrderConfirmation: React.FC = () => {
    const [order, setOrder] = useState<Product[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Lấy dữ liệu đơn hàng từ localStorage
        const savedOrder = localStorage.getItem('order');
        if (savedOrder) {
            setOrder(JSON.parse(savedOrder));
        }
    }, []);

    const calculateTotalPrice = (items: Product[]) => {
        return items.reduce((total, item) => total + item.price * item.qty, 0);
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className={styles.orderConfirmation}>
            <div className={styles.messageContainer}>
                <h1>Đơn hàng của bạn đã được đặt thành công!</h1>
                <p>Cảm ơn bạn đã mua sắm tại cửa hàng của chúng tôi.</p>
            </div>
            <h2>CHI TIẾT ĐƠN HÀNG</h2>
            {order.length > 0 ? (
                <div className={styles.orderDetails}>
                    <table className={`table table-hover ${styles.table}`}>
                        <thead>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng</th>
                        </tr>
                        </thead>
                        <tbody>
                        {order.map((product) => (
                            <tr key={product.id}>
                                <td className={styles.imgContainer}>
                                    <img src={product.thumbnail} className='img-fluid rounded' alt={product.name} />
                                </td>
                                <td className={styles.itemName}>{product.name}</td>
                                <td className={styles.priceContainer}>{formatCurrency(product.price)}</td>
                                <td className={styles.quantityContainer}>{product.qty}</td>
                                <td className={styles.totalPriceContainer}>{formatCurrency(product.price * product.qty)}</td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colSpan={4} className={styles.totalLabel}>Tổng cộng:</td>
                            <td className={styles.totalAmount}>{formatCurrency(calculateTotalPrice(order))}</td>
                        </tr>
                        </tfoot>
                    </table>
                    <button className={`btn btn-primary ${styles.backButton}`} onClick={handleBackToHome}>
                        Quay về trang chủ
                    </button>
                </div>
            ) : (
                <p>Không có sản phẩm nào trong đơn hàng.</p>
            )}
        </div>
    );
};

export default OrderConfirmation;

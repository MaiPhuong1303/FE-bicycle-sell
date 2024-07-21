import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShoppingContext } from "../../components/contexts/ShoppingContext";
import { formatCurrency } from "../../components/helpers/common";
import styles from './Checkout.module.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MAX_NAME_LENGTH = 20; // Độ dài tối đa trước khi hiển thị "Xem thêm"

const Checkout = () => {
    const navigate = useNavigate();
    const { cartItems, totalPrice, increaseQty, decreaseQty, removeCartItem, clearCart } = useShoppingContext();
    const [expandedNames, setExpandedNames] = useState<{ [key: string]: boolean }>({});

    const toggleNameExpansion = (id: string) => {
        setExpandedNames(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleOrder = () => {
        // Lưu giỏ hàng vào localStorage
        localStorage.setItem('order', JSON.stringify(cartItems));
        clearCart(); // Xóa giỏ hàng
        toast.success("Đặt hàng thành công!", {
            autoClose: 3000,
        });
        navigate('/order-confirmation'); // Chuyển đến trang xác nhận đơn hàng
    };

    return (
        <div className={styles.checkout}>
            <ToastContainer /> {/* Thêm ToastContainer */}
            <aside className={`${styles.sidebar} ${styles.sidebarLeft}`}></aside>
            <div className={styles.contain}>
                <table className={`table table-hover ${styles.table}`}>
                    <thead>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td className={styles.imgContainer}>
                                <img src={item.thumbnail} className='img-fluid rounded' alt={item.name} />
                            </td>
                            <td className={styles.itemContainer} style={{ maxWidth: expandedNames[item.id] ? 'none' : '250px' }}>
                                    <span className={styles.itemName}>
                                        {expandedNames[item.id] ? item.name : `${item.name.slice(0, MAX_NAME_LENGTH)}...`}
                                    </span>
                                {item.name.length > MAX_NAME_LENGTH && (
                                    <span
                                        className={styles.showMore}
                                        onClick={() => toggleNameExpansion(item.id)}
                                    >
                                            {expandedNames[item.id] ? 'Thu gọn' : 'Xem thêm'}
                                        </span>
                                )}
                            </td>
                            <td className={styles.priceContainer}>{formatCurrency(item.price)}</td>
                            <td className={styles.quantityContainer}>
                                <div className={styles.quantityButtons}>
                                    <button
                                        type="button"
                                        className={`btn btn-primary ${styles.btn}`}
                                        onClick={() => decreaseQty(item.id)}
                                    >
                                        <strong>-</strong>
                                    </button>
                                    <span className={styles.quantityNumber}>{item.qty}</span>
                                    <button
                                        type="button"
                                        className={`btn btn-primary ${styles.btn}`}
                                        onClick={() => increaseQty(item.id)}
                                    >
                                        <strong>+</strong>
                                    </button>
                                </div>
                            </td>
                            <td className={styles.totalPriceContainer}>{formatCurrency(item.price * item.qty)}</td>
                            <td>
                                <button className={`btn btn-sm btn-danger ${styles.btnRemove}`} onClick={() => removeCartItem(item.id)}>
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className={styles.summary}>
                    <span><strong>Tổng cộng: {formatCurrency(totalPrice)}</strong></span>
                </div>
                <div className={styles.buttonContainer}>
                    <Link to='/collection' className='btn btn-sm btn-primary'>Tiếp tục mua sắm</Link> {/* Thay đổi liên kết */}
                    <button
                        className='btn btn-sm btn-success'
                        onClick={handleOrder} // Gọi hàm handleOrder khi nhấn nút
                    >
                        Đặt hàng
                    </button>
                </div>
            </div>
            <aside className={`${styles.sidebar} ${styles.sidebarRight}`}></aside>
        </div>
    );
};

export default Checkout;

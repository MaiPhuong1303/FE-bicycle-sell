import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FaEnvelope, FaLocationArrow, FaPhone, FaCheckCircle } from 'react-icons/fa'; // Import biểu tượng tick
import emailjs from 'emailjs-com';
import styles from './contact.module.scss';

const cx = classNames.bind(styles);

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        title: '',
        content: ''
    });
    const [showThankYouMessage, setShowThankYouMessage] = useState(false);

    useEffect(() => {
        if (showThankYouMessage) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [showThankYouMessage]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.send('service_b4lnyib', 'template_4kg1vns', formData, 'sBdosjvcp8D6f8XyB')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                clearForm();
                setShowThankYouMessage(true);
                setTimeout(() => {
                    setShowThankYouMessage(false);
                }, 3000); // Ẩn thông báo sau 3 giây
            }, (err) => {
                console.log('FAILED...', err);
            });
    };

    const clearForm = () => {
        setFormData({
            name: '',
            email: '',
            phoneNo: '',
            title: '',
            content: ''
        });
    };

    return (
        <div className={cx('container')}>
            <div className={cx('sidebar-left')}></div>
            <div className={cx('main-content')}>
                <div className={cx('contact-info')}>
                    <h2 className={cx('heading')}>Thông tin liên hệ</h2>
                    <ul className={cx('contact-list')}>
                        <li>
                            <span className={cx('icon')}>
                                <FaLocationArrow />
                            </span>
                            <span className={cx('description')}>
                                <p className={cx('title')}>Địa chỉ</p>
                                <p>Khu phố 6, phường Linh Trung, thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam</p>
                            </span>
                        </li>
                        <li>
                            <span className={cx('icon')}>
                                <FaEnvelope />
                            </span>
                            <span className={cx('description')}>
                                <p className={cx('title')}>Email</p>
                                <p>21130211@st.hcmuaf.edu.vn</p>
                            </span>
                        </li>
                        <li>
                            <span className={cx('icon')}>
                                <FaPhone />
                            </span>
                            <span className={cx('description')}>
                                <p className={cx('title')}>Điện thoại</p>
                                <p>0877.287.869</p>
                            </span>
                        </li>
                        <li>
                            <span className={cx('icon')}>
                                <FaEnvelope />
                            </span>
                            <span className={cx('description')}>
                                <p className={cx('title')}>Thời gian làm việc</p>
                                <p>
                                    Thứ 2 đến Thứ 6 từ 8h00 đến 18h00 <br />
                                    Thứ 7 và Chủ nhật từ 8h00 đến 17h00
                                </p>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={cx('contact-form')}>
                    <h2 className={cx('heading')}>Gửi thắc mắc tại đây</h2>
                    {showThankYouMessage && (
                        <div className={cx('thank-you-message', 'show')}>
                            <FaCheckCircle className={cx('tick-icon')} /> {/* Thêm biểu tượng tick */}
                            <p>
                                Cảm ơn bạn đã liên hệ đến chúng tôi. Chúng tôi sẽ trả lời bạn sớm nhất có thể.
                            </p>
                        </div>
                    )}
                    <form className={cx('form-input')} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Tên của bạn"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email của bạn"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="phoneNo"
                            placeholder="Số điện thoại của bạn"
                            value={formData.phoneNo}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="title"
                            placeholder="Tiêu đề nội dung"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="content"
                            placeholder="Nội dung"
                            value={formData.content}
                            onChange={handleChange}
                            required
                        />
                        <p className={cx('caption')}>
                            This site is protected by reCAPTCHA and the Google{' '}
                            <a href="https://policies.google.com/privacy">&nbsp;Privacy Policy&nbsp;</a> and{' '}
                            <a href="https://policies.google.com/terms">&nbsp;Terms of Service&nbsp;</a> apply.
                        </p>
                        <div className={cx('submit-btn')}>
                            <input type="submit" value="GỬI CHO CHÚNG TÔI"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className={cx('sidebar-right')}></div>
        </div>
    );
};

export default Contact;

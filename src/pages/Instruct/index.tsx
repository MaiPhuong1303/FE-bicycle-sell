import {readFile} from "node:fs";

import classNames from 'classnames/bind';
import styles from './Instruct.module.scss';
import {Link} from 'react-router-dom';
import aboutImages from '../../images/aboutImages';
import SideBox from '../../components/layouts/components/SideBox';
import SideBar from '../../components/layouts/components/SideBar';

const cx = classNames.bind(styles);

function Instruct() {
    return (
        <>

            <div className={cx('container')}>
                <SideBar>
                    <SideBox title="Danh Sách Sản Phẩm">
                        <div className={cx('sidebar-list')}>
                            <ul className={cx('menu-list')}>
                                <li className={cx('item')}>
                                    <Link to="/collection/xe-dap-the-thao">✨Xe đạp thể thao</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/collection/xe-dap-nu">✨Xe đạp nữ</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/collection/xe-dap-hoc-sinh">✨Xe đạp học sinh</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/collection/xe-dap-tre-em">✨Xe đạp trẻ em</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/collection/xe-dap-nhap-khau">✨Xe đạp nhập khẩu</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/collection/xe-dap-dien">✨Xe đạp điện</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/collection/phu-kien">✨Phụ kiện</Link>
                                </li>
                            </ul>
                        </div>
                    </SideBox>
                </SideBar>
                <div className={cx('wrap-content')}>
                    <div className={cx('header')}>
                        <h1>Chào Mừng Đến Với Cửa Hàng Bicycles</h1>
                    </div>
                    <div className={cx('content')}>
                        <h4 className={cx('title')}>Không cần trực tiếp đến siêu thị mua hàng, bạn có thể lựa chọn cách
                            mua hàng online bằng cách chọn một trong những cách mua hàng sau:</h4>
                        <p>
                            Cách 1: Gọi điện thoại đến tổng đài (--------) hoặc (---------) từ 7g30-22g (cả CN & ngày
                            lễ) để đặt hàng, nhân viên chúng tôi luôn sẵn phục vụ, tư vấn và hỗ trợ quý khách mua được
                            sản phẩm ưng ý.
                        </p>
                        <p>🔶Cách 2: Đặt mua hàng online trên website </p>
                        <div className={cx('image')}>
                            <img src={aboutImages[0]} alt="bicycle img1"/>
                            <br/>
                            <span>Xe đạp hiện đại, được bảo dưỡng kĩ càng</span>
                        </div>
                        <p>
                            Bước 1: Tìm sản phẩm cần mua
                        </p>
                        <p>
                            Bạn có thể truy cập website .com để tìm và chọn sản phẩm muốn mua bằng nhiều cách:
                        </p>

                        <p> + Sử dụng ô tìm kiếm phía trên, gõ tên sản phẩm muốn mua (có thể tìm đích danh 1 sản phẩm,
                            tìm theo hãng...). Website sẽ cung cấp cho bạn những gợi ý chính xác để lựa chọn</p>
                        <div className={cx('image')}>
                            <img src={aboutImages[0]} alt=""/>
                        </div>

                        <p>🔶 + Trang web luôn có sẵn những gợi ý sản phẩm hot nhất, có chương trình khuyến mãi hấp dẫn,
                            bạn cũng có thể chọn xem ngay mà không cần tìm kiếm:</p>
                        <div className={cx('image')}>
                            <img src={aboutImages[1]} alt=""/>
                            <br/>

                            <span>Xe đạp các loại, phù hợp với mọi lứa tuổi</span>
                        </div>
                        <p>
                            Bước 2: Đặt mua sản phẩm

                        </p>
                        <p>+ Điền đầy đủ các thông tin mua hàng theo các bước trên website, sau đó chọn hình thức nhận
                            hàng là giao hàng tận nơi hay đến siêu thị lấy hàng, chọn hình thức thanh toán là trả khi
                            nhận hàng hay thanh toán online (bằng thẻ ATM, VISA hay MasterCard) và hoàn tất đặt
                            hàng.</p>
                        <p>+ Ngoài ra, nếu quý khách đang sở hữu phiếu mua hàng, mã giảm giá... thì hãy nhập trong bước
                            đặt hàng để được giảm giá theo các bước tại hướng dẫn: Cách sử dụng phiếu mua hàng.

                            + Sau khi đặt hàng thành công, Thế Giới Di Động sẽ liên hệ quý khách để xác nhận và hoàn tất
                            thủ tục.

                            Ngoài các cách trên, để mua hàng tại Thế Giới Di Động quý khách còn có thể để lại bình luận
                            tại bất kì đâu trên website (có thông tin tên, số điện thoại...), hoặc trực tiếp chat với tư
                            vấn viên của công ty để được tư vấn và đặt mua sản phẩm.</p>
                        <p>+Lưu ý:</p>
                        <p> Chúng tôi chỉ chấp nhận những đơn đặt hàng khi cung cấp đủ thông tin chính xác về địa chỉ,
                            số điện thoại. Sau khi bạn đặt hàng, chúng tôi sẽ liên lạc lại để kiểm tra thông tin và thỏa
                            thuận thêm những điều có liên quan.

                        </p>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Instruct;

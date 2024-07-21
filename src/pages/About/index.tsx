import classNames from 'classnames/bind';
import styles from './About.module.scss';
import { Link } from 'react-router-dom';
import aboutImages from '../../images/aboutImages';
import SideBox from '../../components/layouts/components/SideBox';
import SideBar from '../../components/layouts/components/SideBar';

const cx = classNames.bind(styles);

function About() {
    return (
        <>

            <div className={cx('container')}>
                <div className={cx('wrap-content')}>
                    <div className={cx('header')}>
                        <h1>Chào Mừng Đến Với Cửa Hàng Bicycles</h1>
                    </div>
                    <div className={cx('content')}>
                        <h4 className={cx('title')}>Về Chúng Tôi</h4>
                        <p>
                            🔶Xe đạp nói riêng và các hoạt động thể chất ngoài trời nói chung là vô cùng cần thiết cho sự
                            phát triển toàn diện của các bạn nhỏ cũng như người trưởng thành. Xe đạp không chỉ là phương
                            tiện đi lại mà còn giúp nâng cao sức khỏe chống lại bệnh tật, giúp chúng ta có tinh thần
                            hăng hái, học tập và làm việc hiệu quả hơn.
                        </p>
                        <p>🔶“Mục tiêu của chúng tôi là xây dựng một hệ thống bán xe đạp chuyên nghiệp tại Hà Nội, TP HCM
                            và các tỉnh, thành phố. Chúng tôi muốn xây dựng hình ảnh cửa hàng trẻ, năng động, hết mình
                            vì khách hàng” </p>
                        <div className={cx('image')}>
                            <img src={aboutImages[0]} alt="bicycle img1"/>
                            <br/>
                            <span>Xe đạp hiện đại, được bảo dưỡng kĩ càng</span>
                        </div>
                        <p>
                            🔶 Bicycles mong muốn mang lại cho tất cả mọi người, đặc biệt bạn nhỏ, các bạn học sinh, thế
                            hệ trẻ những chiếc xe đạp chất lượng và an toàn. Với đội ngũ kỹ thuật viên chuyên nghiệp,
                            tận tình, tất cả xe đạp tại Bicycles khi đến tay khách hàng đều được đảm bảo chất lượng,
                            Khách hàng hoàn toàn yên tâm khi sử dụng.
                        </p>
                        <p>
                            🔶Bicycles không ngừng hoàn thiện và phát triển, đáp lại sự tin tưởng của Khách hàng với tiêu
                            chí: Chất lượng xe tốt nhất - Mẫu xe đa dạng nhất - Khách hàng được hỗ trợ trong suốt quá
                            trình sử dụng - Xe tới tay khách hàng với mức giá tốt nhất.
                        </p>

                        <p> 🔶 Với xe đạp được nhập khẩu trực tiếp và là nhà phân phối cấp 1 của nhiều thương hiệu xe đạp
                            hàng đầu, Bicycles luôn nằm trong TOP những đơn vị bán lẻ xe đạp uy tín hàng đầu, nơi khách
                            hàng có thể yên tâm về nguồn gốc, chất lượng và chế độ bảo hành chính hãng.</p>

                        <p>🔶 Bicycles đã đang và sẽ luôn đi đầu trong dịch vụ chăm sóc Khách hàng với sự tận tâm, chu
                            đáo sau bán hàng với dịch vụ Homecare - sửa xe tại nhà. Các kỹ thuật viên Bicycles luôn lắng
                            nghe và hỗ trợ Khách hàng ngay khi được liên hệ.</p>
                        <div className={cx('image')}>
                            <img src={aboutImages[1]} alt="bicycle img2"/>
                            <br/>
                            <span>Xe đạp các loại, phù hợp với mọi lứa tuổi</span>
                        </div>
                        <p>
                            &emsp; ✨ LỢI ÍCH KHÁCH HÀNG NHẬN ĐƯỢC TẠI BICYCLE:
                            <p> ✅ Xe đạp nhập khẩu trực tiếp, bảo hành chính hãng</p>

                            <p>✅ Mẫu mã đa dạng, nhiều lựa chọn</p>

                            <p> ✅ HomeCare bảo hành tại nhà (<Link to={"/contact"}>liên hệ với chúng tôi</Link>)</p>
                        </p>
                        <div className={cx('image')}>
                            <img src={aboutImages[2]} alt="bicycle img3"/>
                            <br/>
                            <span>Giấy tờ đầy đủ, thủ tục nhanh gọn</span>
                        </div>
                        <p>
                            &emsp; ✨Ngoài ra chúng tôi còn cung cấp cho khách hàng những phụ kiện cần thiết cho xe đạp.
                        </p>
                        <div className={cx('image')}>
                            <img src={aboutImages[3]} alt="bicycle img4"/>
                            <br/>
                            <span>Thiết bị, phụ kiện hỗ trợ như: mũ bảo hiểm, đèn hậu, đệm baga,...</span>
                        </div>
                        <p>
                            &emsp; Hãy đến với Bicycles để cảm nhận sự khác biệt và tận hưởng trải nghiệm mua sắm
                            tuyệt vời!
                        </p>
                    </div>
                </div>
                <SideBar>
                    <SideBox title="Danh Sách Sản Phẩm" >
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


            </div>
        </>
    );
}

export default About;

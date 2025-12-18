import "./Dashboard.css";
import logo from "../img/mankailogo.png";
import searchIcon from "../img/search-normal.png";
import avatarImg from "../img/Avatar.png";
import notification from "../img/notification.png";
import avt from "../img/IMG.png";
import logoLms from "../img/message-programming.png";
import logoElearning from "../img/monitor-recorder.png";
import logoExam from "../img/mobile-programming.png";
import logoTrain from "../img/global.png";
import makailogo from "../img/Frame 54.png";
import iconAddress from "../img/Featured icon.png";
import iconHotline from "../img/Featured icon (1).png";
import iconEmail from "../img/Featured icon (2).png";
import iconfacebook from "../img/facebook.png";
import iconyoutube from "../img/youtube.png";
import { useNavigate } from "react-router-dom";

// type Item = {
//   title: string;
//   desc: string;
//   icon: string;
// };

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <header className="header">
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={() => navigate("/")}
        />
        <div className="header-actions">
          <img src={searchIcon} alt="Search" className="icon" />
          <img src={notification} alt="Notification" className="icon" />
          <img src={avatarImg} className="avatar" alt="Avatar" />
        </div>
      </header>

      <section className="banner">
        <div className="banner-text">
          <h1 className="banner-title">Xin Chào, Viên</h1>
          <p className="banner-desc">
            Cùng khám phá kho tàng kiến thức bất tận cùng bộ tài liệu độc quyền
            với Rikkei Education nhé!
          </p>
        </div>
        <img src={avt} alt="Banner Girl" className="banner-img" />
      </section>

      <h2 className="section-title">Hệ thống học tập</h2>

      <div className="grid-container">
        <div className="card">
          <div className="card-icon">
            <img src={logoLms} alt="LMS" />
          </div>
          <h3 className="card-title">LMS</h3>
          <p className="card-desc">
            Nền tảng quản lý học tập trực tuyến giúp tổ chức, theo dõi, và đánh
            giá các khóa học và tài liệu học tập
          </p>
        </div>

        <div className="card" onClick={() => navigate("/HomePage")}>
          <div className="card-icon">
            <img src={logoElearning} alt="E-Learning" />
          </div>
          <h3 className="card-title">E-Learning</h3>
          <p className="card-desc">
            Phương pháp học tập trực tuyến thông qua các thiết bị điện tử, cung
            cấp sự linh hoạt và tiện lợi cho người học
          </p>
        </div>

        <div className="card" onClick={() => navigate("")}>
          <div className="card-icon">
            <img src={logoExam} alt="Bài kiểm tra" />
          </div>
          <h3 className="card-title">Bài kiểm tra</h3>
          <p className="card-desc">
            Các bài kiểm tra được thiết kế để đánh giá trình độ và hiệu biết của
            người học trong một lĩnh vực cụ thể
          </p>
        </div>

        <div className="card">
          <div className="card-icon">
            <img src={logoTrain} alt="Quản lý đào tạo" />
          </div>
          <h3 className="card-title">Quản lý đào tạo</h3>
          <p className="card-desc">
            Công cụ tạo và quản lý các bài kiểm tra trực tuyến giúp giáo viên
            đánh giá kiến thức của học sinh một cách dễ dàng và nhanh chóng
          </p>
        </div>
      </div>

      <footer className="site-footer" role="contentinfo">
        <div className="footer-top">
          <img
            src={makailogo}
            alt="Mankai Academy logo"
            className="footer-logo"
          />
          <h2 className="footer-title">
            MANKAI ACADEMY - HỌC VIỆN ĐÀO TẠO PHÁT TRIỂN TIẾNG NHẬT THỰC CHIẾN
          </h2>
        </div>

        <div className="footer-body">
          <div className="col contact">
            <h3 className="col-title">THÔNG TIN LIÊN HỆ</h3>
            <ul className="contact-list">
              <li>
                <img src={iconAddress} alt="Address" className="icon" />
                <div>
                  <strong>Địa chỉ:</strong>
                  <div>
                    Tòa Sông Đà, Đường Phạm Hùng, Mỹ Đình, Nam Từ Liêm, Hà Nội
                  </div>
                </div>
              </li>
              <li>
                <img src={iconHotline} alt="Hotline" className="icon" />
                <div>
                  <strong>Hotline:</strong>
                  <div>0835 662 538</div>
                </div>
              </li>
              <li>
                <img src={iconEmail} alt="Email" className="icon" />
                <div>
                  <strong>Email:</strong>
                  <div>support@mankai.edu.vn</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="col social">
            <h3 className="col-title">THEO DÕI CHÚNG TÔI TẠI</h3>
            <div className="social-icons" aria-hidden>
              <a href="#" className="social-btn" aria-label="Facebook">
                <img src={iconfacebook} alt="Facebook" />
              </a>
              <a
                href="https://www.youtube.com/@RikkeiEducation"
                className="social-btn"
                aria-label="Youtube"
              >
                <img src={iconyoutube} alt="Youtube" />
              </a>
            </div>
          </div>

          <div className="col quote">
            <blockquote>
              <p>
                “Hạnh phúc là điểm khởi đầu của giáo dục và cũng là đích đến
                cuối cùng. Giảng viên chúng tôi tâm niệm rằng giảng dạy và luyện
                thi JLPT, mảng ngôn ngữ phối hợp với phát triển kỹ năng giúp học
                viên phát triển toàn diện.”
              </p>
              <cite>— Anh Nguyễn Việt Lâm — CEO Mankai Academy</cite>
            </blockquote>
          </div>
        </div>

        <div className="footer-bottom">
          <small>
            © 2024 By Mankai Academy - Mankai Education. All rights reserved.
          </small>
        </div>
      </footer>
    </div>
  );
}

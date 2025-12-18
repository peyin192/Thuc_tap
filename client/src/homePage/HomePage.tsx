import "./HomePage.css";
import logo from "../img/Logo.png";
import searchIcon from "../img/search-normal.png";
import avatarImg from "../img/Avatar.png";
import notification from "../img/notification.png";
import makailogo from "../img/Frame 54.png";
import iconAddress from "../img/Featured icon.png";
import iconHotline from "../img/Featured icon (1).png";
import iconEmail from "../img/Featured icon (2).png";
import iconfacebook from "../img/facebook.png";
import iconyoutube from "../img/youtube.png";
import imggiang from "../img/Image.png";
import img2 from "../img/Image 2.png";
import clock from "../img/clock.png";
import book from "../img/book.png";
import profiler from "../img/profile.png";
import iconHome from "../img/home.png";
import iconBook from "../img/book (1).png";

export default function Dashboard() {
  const courses = [
    {
      id: 1,
      title: "N1 CHILL CLASS",
      subtitle: "N1 Chill Class",
      lessons: "30 buổi",
      teacher: "Giang Sensei",
      image: 2,
    },
    {
      id: 2,
      title: "N2 CHILL CLASS",
      subtitle: "N2 Chill Class",
      lessons: "24 buổi",
      teacher: "Giang Sensei",
      image: 2,
    },
    {
      id: 3,
      title: "PHÁT ÂM J-VOICE",
      subtitle: "Phát âm / J-Voice",
      lessons: "16 buổi",
      teacher: "Giang Sensei",
      rating: "4.9",
      image: 2,
    },
    {
      id: 4,
      title: "IT TALK",
      subtitle: "IT Talk",
      lessons: "12 buổi",
      teacher: "Giang Sensei",
      rating: "4.7",
      image: 2,
    },
  ];
  return (
    <div className="home-container">
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Logo" className="logo" />

          <nav className="nav">
            <span className="nav-item active">
              {" "}
              <img src={iconHome} /> Trang chủ
            </span>
            <span className="nav-item">
              {" "}
              <img src={iconBook} /> Bài viết
            </span>
          </nav>
        </div>

        <div className="header-actions">
          <img src={searchIcon} alt="Search" className="icon" />
          <img src={notification} alt="Notification" className="icon" />
          <img src={avatarImg} className="avatar" alt="Avatar" />
        </div>
      </header>
      <div className="tb-container">
        <div className="tb-left">
          <span className="tb-quote">“</span>

          <p className="tb-text">
            Hạnh phúc là điểm khởi đầu của giáo dục và cũng là đích đến cuối
            cùng. Giang, với <strong>hơn 10 năm kinh nghiệm</strong> giảng dạy
            và luyện thi JLPT, mong muốn giúp học viên rút ngắn thời gian và
            <strong> chinh phục JLPT</strong>. Hãy biến học tập thành không chỉ
            là mục tiêu phát triển bản thân mà còn là hành trình hạnh phúc để
            hiện thực hóa những giấc mơ..
          </p>

          <span className="tb-quote right">”</span>
        </div>

        <div className="tb-right">
          <img src={imggiang} alt="Giang Sensei" className="tb-image" />
        </div>
      </div>

      <div className="course-container">
        <h2 className="course-title">TẤT CẢ KHÓA HỌC</h2>

        <div className="course-grid">
          {courses.map((c) => (
            <div key={c.id} className="course-card">
              <div className="course-img-box">
                <img src={img2} alt={c.title} className="course-img" />
                <span className="course-level">Beginner</span>
              </div>

              <div className="course-body">
                <div className="course-info">
                  <span>
                    <img src={clock} /> 360 phút
                  </span>
                  <span>
                    <img src={book} /> {c.lessons}
                  </span>
                  <span>
                    <img src={profiler} /> {c.teacher}
                  </span>
                </div>

                <h3 className="course-subtitle">{c.subtitle}</h3>

                <button className="course-btn">
                  HỌC NGAY <span>↗</span>
                </button>
              </div>
            </div>
          ))}
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
                <img src={iconAddress} alt="Search" className="icon" />
                <div>
                  <strong>Địa chỉ:</strong>
                  <div>
                    Tòa Sông Đà, Đường Phạm Hùng, Mỹ Đình, Nam Từ Liêm, Hà Nội
                  </div>
                </div>
              </li>
              <li>
                <img src={iconHotline} alt="Search" className="icon" />
                <div>
                  <strong>Hotline:</strong>
                  <div>0835 662 538</div>
                </div>
              </li>
              <li>
                <img src={iconEmail} alt="Search" className="icon" />
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
                <img src={iconfacebook} />
              </a>
              <a
                href="https://www.youtube.com/@RikkeiEducation"
                className="social-btn"
                aria-label="Youtube"
              >
                <img src={iconyoutube} />
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

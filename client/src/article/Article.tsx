import "./Article.css";
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
import iconHome from "../img/home.png";
import iconBook from "../img/book (1).png";
import clock from "../img/clock2.png";
import iconBook2 from "../img/book2.png";
import banner from "../img/back ground.png";

export default function Article() {
  const blogs = [];

  for (let i = 1; i <= 9; i++) {
    blogs.push({
      id: i,
      category: "Front-End",
      title: "Authentication & Authorization trong ReactJS",
      description:
        "Chào bạn! Nếu bạn đã làm việc với React, chắc hẳn bạn đã biết tới Dev Mode...",
      time: "15-17 phút đọc",
      views: "8 tháng trước",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
    });
  }

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
      <div className="blog-page">
        {/* Banner */}
        <div className="blog-banner">
          <img src={banner} />
          <p className="breadcrumb">Trang chủ / Bài viết</p>
          <h1>Bài viết</h1>
        </div>

        {/* Content */}
        <div className="blog-container">
          <div className="blog-header">
            <h3>
              Tất cả bài viết <span>(120)</span>
            </h3>
            <select>
              <option>Sắp xếp: Front-End</option>
              <option>Back-End</option>
            </select>
          </div>
          <hr />
          <div className="blog-grid">
            {blogs.map((item) => (
              <div className="blog-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="blog-card-content">
                  <span className="tag">{item.category}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="blog-meta">
                    <span className="meta-item">
                      <img src={clock} alt="Lượt xem" className="meta-icon" />
                      {item.views}
                    </span>
                    <span className="meta-item">
                      <img
                        src={iconBook2}
                        alt="Thời gian đọc"
                        className="meta-icon"
                      />
                      {item.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

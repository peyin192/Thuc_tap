import "./Elearning.css";
import logo from "../img/mankailogo.png";
import searchIcon from "../img/search-normal.png";
import avatarImg from "../img/Avatar.png";
import notification from "../img/notification.png";
import iconHome from "../img/home.png";
import iconBook from "../img/book (1).png";
import clockIcon from "../img/clock2.png";
import { useNavigate } from "react-router-dom";

export default function Elearning() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home-container">
        <header className="header">
          <div className="header-left">
            <img
              src={logo}
              alt="Logo"
              className="logo"
              onClick={() => navigate("/")}
            />

            <nav className="nav">
              <span className="nav-item active">
                <img
                  src={iconHome}
                  alt="Home"
                  onClick={() => navigate("/HomePage")}
                />{" "}
                Trang chủ
              </span>
              <span className="nav-item" onClick={() => navigate("/Article")}>
                <img src={iconBook} alt="Blog" /> Bài viết
              </span>
            </nav>
          </div>

          <div className="header-actions">
            <img src={searchIcon} alt="Search" className="icon" />
            <img src={notification} alt="Notification" className="icon" />
            <img src={avatarImg} className="avatar" alt="Avatar" />
          </div>
        </header>

        {/* MAIN CONTENT */}
        <div className="elearning-layout">
          {/* LEFT */}
          <main className="elearning-main">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
              Trang chủ <span>/</span> Web Frontend Fundamental
            </nav>

            {/* Video section */}
            <section className="video-card">
              <div className="video-hero">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/NcTQjubLpyk"
                    title="Web Frontend Fundamental"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Content dưới video */}
              <div className="video-content">
                <h2 className="course-title-elearning">N1 Chill Class</h2>

                <div className="course-meta">
                  <span className="course-date">
                    {" "}
                    <img src={clockIcon} /> 24 tháng 6 năm 2023
                  </span>
                  <span className="lesson-progress">1/10 Bài học</span>
                </div>

                <div className="course-desc">
                  <h3>Mô tả</h3>
                  <h5>Lorem ipsum dolor sit amet consectetur:</h5>
                  <p>
                    Ornare eu elementum felis porttitor nunc tortor. Ornare
                    neque accumsan metus nulla ultricies maecenas rhoncus
                    ultrices cras. Vestibulum varius adipiscing ipsum pharetra.
                    Semper ullamcorper malesuada ut auctor scelerisque. Sit
                    morbi pellentesque adipiscing pellentesque habitant
                    ullamcorper est. In dolor sit platea faucibus ut dignissim
                    pulvinar.
                  </p>
                  <h5>
                    Semper lacinia non lectus mauris sed eget scelerisque
                    facilisis donec:
                  </h5>
                  <ul>
                    <li>
                      Semper lacinia non lectus mauris sed eget scelerisque
                      facilisis donec:
                    </li>
                    <li>
                      Sit parturient viverra ut cursus. Vestibulum non et
                      ullamcorper fermentum fringilla est.
                    </li>
                    <li>
                      A nullam diam rhoncus pellentesque eleifend risus ut
                      libero. Eget gravida fermentum nisi dignissim senectus
                      pellentesque egestas. Pellentesque scelerisque arcu congue
                      lorem. In quis sagittis netus lacinia ut vitae. Vitae quam
                      nunc quis libero in. Viverra purus elementum risus feugiat
                      in est. Ut sit a erat ante aliquam. Nec viverra nibh orci
                      erat feugiat viverra viverra sit faucibus
                    </li>
                  </ul>
                  <h5>Lorem ipsum dolor sit amet consectetur:</h5>
                  <p>
                    Ornare eu elementum felis porttitor nunc tortor. Ornare
                    neque accumsan metus nulla ultricies maecenas rhoncus
                    ultrices cras. Vestibulum varius adipiscing ipsum pharetra.
                    Semper ullamcorper malesuada ut auctor scelerisque. Sit
                    morbi pellentesque adipiscing pellentesque habitant
                    ullamcorper est. In dolor sit platea faucibus ut dignissim
                    pulvinar.
                  </p>
                  <h5>
                    Semper lacinia non lectus mauris sed eget scelerisque
                    facilisis donec:
                  </h5>
                  <ul>
                    <li>
                      Tellus molestie leo gravida feugiat. Ipsum est lacus
                      lobortis accumsan eget.
                    </li>
                    <li>
                      Sit parturient viverra ut cursus. Vestibulum non et
                      ullamcorper fermentum fringilla est.
                    </li>
                    <li>
                      A nullam diam rhoncus pellentesque eleifend risus ut
                      libero. Eget gravida fermentum nisi dignissim senectus
                      pellentesque egestas. Pellentesque scelerisque arcu congue
                      lorem. In quis sagittis netus lacinia ut vitae. Vitae quam
                      nunc quis libero in. Viverra purus elementum risus feugiat
                      in est. Ut sit a erat ante aliquam. Nec viverra nibh orci
                      erat feugiat viverra viverra sit faucibus.
                    </li>
                  </ul>
                  <p>
                    Adipiscing vel nunc integer mi montes cras magna. Est vitae
                    posuere quis sed quam vivamus urna lorem dolor. Odio potenti
                    non purus platea ultrices id egestas. Mattis arcu felis sed
                    commodo. Magna enim vel consequat leo eleifend etiam.
                    Tincidunt ut morbi volutpat at etiam morbi sagittis. Urna
                    elit pretium fermentum cras cursus nam odio libero.
                    Scelerisque augue in vel cursus. Varius amet tristique risus
                    velit in libero id tincidunt nunc. Elit proin dictumst purus
                    cras. Diam vitae congue est iaculis lacinia lectus senectus
                    ut egestas. At ultrices ultricies cras ut vehicula. Nisl
                    viverra imperdiet pharetra purus tortor viverra aenean
                    accumsan. Sed quis viverra cras tortor lacus. Morbi eget in
                    porta lectus risus eget mauris luctus ac.
                  </p>
                  <button className="view-more">ẩn bớt</button>
                </div>
              </div>
            </section>
          </main>

          {/* RIGHT */}
          <aside className="elearning-sidebar">
            <h3 className="sidebar-title">Danh sách bài học</h3>

            <div className="session">
              <h4>Session 1: Từ vựng</h4>
              <ul>
                <li className="active">Form & Table</li>
                <li>Luyện tập Function</li>
                <li>Tổng quan về Git</li>
                <li>Quiz JS cơ bản</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

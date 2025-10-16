import React from "react";
import "./App.css";
import "./css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      {/* ---------- NAVBAR ---------- */}
      <nav className="navbar navbar-expand-lg bg-success-subtle sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="/images/juice.jpeg"
              alt="Logo"
              className="img-fluid me-1 rounded logo"
              style={{ height: "60px" }}
            />
            <span>Smart Serve</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/services"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/cafe-managed">
                      Cafe Managed Services
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/saas-solution">
                      SaaS Solution
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/events">
                      Events and Pop-ups
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/sectors">
                  Sectors
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/careers">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ---------- ABOUT SECTION ---------- */}
      <div className="container my-5 text-center">
        <h2>Welcome to Smart Serve</h2>
        <p className="lead">
          Your one-stop solution for all your food and beverage needs. We offer a
          wide range of services including cafe management, SaaS solutions, and
          event catering.
        </p>
      </div>

      {/* ---------- MENU SECTION ---------- */}
      <div className="container m-5">
        <h1 className="text-center mb-4">Our Menus</h1>
        <div className="row g-4">
          {[
            "Juices",
            "Ice-Cream",
            "Cake",
            "Meals",
            "Rice",
            "Salad",
            "Tea/Coffee",
            "Pizza",
          ].map((item, index) => (
            <div key={index} className="col-md-3">
              <div className="card bg-success-subtle w-100 h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">{item}</h5>
                  <img
                    src="/images/juice.jpeg"
                    className="img-fluid menu-img"
                    alt={item}
                  />
                  <a href="/menu" className="d-block mt-2 text-decoration-none">
                    Click here &gt;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- FOOTER ---------- */}
      <footer className="text-center text-lg-start bg-body-tertiary text-muted mt-5">
        {/* Social Media Section */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us:</span>
          </div>

          <div>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        {/* Footer Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              {/* Company Info */}
              <div className="col-md-3">
                <h6 className="fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Smart Serve
                </h6>
                <p>
                  Smart Serve is your one-stop solution for all your food and
                  beverage needs.
                </p>
              </div>

              {/* Company Links */}
              <div className="col-md-2">
                <h6 className="fw-bold mb-4">Company</h6>
                <p><a href="/about" className="text-reset">About Us</a></p>
                <p><a href="/services" className="text-reset">Our Services</a></p>
                <p><a href="/sectors" className="text-reset">Sectors</a></p>
              </div>

              {/* Services Links */}
              <div className="col-md-3">
                <h6 className="fw-bold mb-4">Services</h6>
                <p><a href="/cafe-managed" className="text-reset">Cafeteria Managed</a></p>
                <p><a href="/saas-solution" className="text-reset">SaaS Solution</a></p>
                <p><a href="/events" className="text-reset">Events & Pop-ups</a></p>
              </div>

              {/* Contact */}
              <div className="col-md-4">
                <h6 className="fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> RETOUCH IT SERVICES</p>
                <p><i className="fas fa-envelope me-3"></i> retouch@example.com</p>
                <p><i className="fas fa-phone me-3"></i> +91-1111111111</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;

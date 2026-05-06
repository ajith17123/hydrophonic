import '../assets/style/Footer.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer () {
    return (

<>

<footer className="footer-sec py-5">
      <div className="container">
        <div className="row g-4">
          
          <div className="col-lg-4 col-md-6">
            <h3 className="footer-logo mb-3">HYDRO ELITE</h3>
            <p className="footer-about">
              Bringing the future of farming to your home. We provide premium hydroponic kits, nutrients, and expert guidance to help you grow fresh, pesticide-free greens anywhere.
            </p>
            <div className="social-icons d-flex gap-3 justify-content-center mt-3">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/product">Shop Now</Link></li>
              <li><Link to="/about">Who We Are</Link></li>
              <li><Link to="/login">My Account</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Support</h5>
            <ul className="footer-links">
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Return & Refund</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title">Get In Touch</h5>
            <ul className="footer-contact">
              <li><i className="bi bi-geo-alt-fill me-2"></i> Hydro Elite, Bangalore.</li>
              <li><i className="bi bi-telephone-fill me-2"></i> +91 9598562541</li>
              <li><i className="bi bi-envelope-fill me-2"></i> hydroelite@gmail.com</li>
            </ul>
            <div className="newsletter mt-4">
              <h6 className='mb-3'>Subscribe to our Newsletter</h6>
              <div className="input-group">
                <input type="text" className="form-control footer-input" placeholder="Email Address" />
                <button className="btn-footer" type="button">Join</button>
              </div>
            </div>
          </div>

        </div>

        <hr className="footer-hr mt-5" />
        
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="copyright-text">
              &copy;<strong>Hydro Elite</strong>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>

</>

    )
}

export default Footer;
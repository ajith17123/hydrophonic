import '../assets/style/Nav.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Nav () {
    return (

<>

<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Hydro Elite</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home<i className="bi bi-house"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Who We Are</Link>
        </li>
        <li className="nav-item">
          <NavHashLink 
                    className="nav-link" 
                    smooth 
                    to="/about#cont"
                  >
                    Support <i className="bi bi-telephone-fill"></i>
                  </NavHashLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Track Order</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/login">Login<i className="bi bi-person"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Cart<i className="bi bi-bag"></i></Link>
        </li>
        <button className='nav-but'>Visit Now</button>
      </ul>
    </div>
  </div>
</nav>

</>

    )
}

export default Nav;
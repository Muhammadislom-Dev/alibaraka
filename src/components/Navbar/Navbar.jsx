import './Navbar.css'

import alibaraka from '../../assets/img/alibaraka.png'
import phone from '../../assets/img/phone.png'

import { Link } from 'react-router-dom'

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="container">
                <div className="nav">
                    <Link to="/" href="#" className="navbar-link">
                        <img src={alibaraka} alt="" className="navbar-img" />
                    </Link>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <Link to="/product" href="#" className="navbar-links">Products</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about" href="#" className="navbar-links">About us</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/blog" href="#" className="navbar-links">Blog</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/contact" href="#" className="navbar-links">Contact</Link>
                        </li>
                        <li className="navbar-item navbar-title">
                            <div className="navbar-phone">
                                <img src={phone} alt="" className="navbar-pic" />
                            </div>
                            <div className="navbar-box">
                                <a href="#" className="navbar-number">95-004-80-90</a>
                                <a href="#" className="navbar-number">94-641-40-00</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
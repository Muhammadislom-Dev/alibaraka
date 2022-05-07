import './Navbar.css'

import alibaraka from '../../assets/img/alibaraka.png'
import phone from '../../assets/img/phone.png'

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="container">
                <div className="nav">
                    <a href="#" className="navbar-link">
                        <img src={alibaraka} alt="" className="navbar-img" />
                    </a>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="#" className="navbar-links">Products</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-links">About us</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-links">Blog</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-links">Contact</a>
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
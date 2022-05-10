import './Footer.css'

import alibaraka from '../../assets/img/alibarakas.png'
import abba from '../../assets/img/abba.png'
import abbas from '../../assets/img/abbas.png'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="container">
                <div className="footer-box">
                    <div className="footer-page">
                        <a href="#" className="footer-link">
                            <img src={alibaraka} alt="" className="footer-img" />
                        </a>
                        <p className="footer-map">Tashkent, Mustakillik St, 15</p>
                        <p className="footer-phone">Tel: +998 99 000 00 00</p>
                        <p className="footer-phone">E-mail: hello@alibaraka.com</p>
                    </div>

                    <div className="footer-bottom">
                        <ul className="footer-list">
                            <li className="footer-item">
                                <h4 className="footer-name">About Us</h4>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-links">About us</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-links">Our Team</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-links">Frequent Questions</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-links">Contact us</a>
                            </li>
                        </ul>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <h4 className="footer-name">Products</h4>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-links">Plyonka</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-links">Zajim</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-links">Isitish x Sovutish</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-links">Suv taqsimoti</a>
                            </li>
                        </ul>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <h4 className="footer-name">Blog</h4>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-links">10X</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-links">Gardening</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-links">Melon</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-links">Water dist</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-text">Все права защищены.</p>
                    <ul className="footer-title">
                        <p className="footer-text">Разработано в</p>
                        <li className="footer-items">
                            <a href="#" className="footer__link">
                                <img src={abba} alt="" className="footer-images" />
                            </a>
                        </li>
                        <li className="footer-items">
                            <a href="#" className="footer__link">
                                <img src={abbas} alt="" className="footer-images" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer
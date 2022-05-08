import './Header.css'

import yarim from '../../assets/img/yarim.png'
import sqr from '../../assets/img/sqr.png'

const Header = () =>{
    return(
        <div className="header">
            <div className="container">
                <div className="header-left">
                    <h1 className='header-name'>ВСЕ ДЛЯ ТЕПЛИЦ</h1>
                    <p className="header-text">Here will be brief information about our company and some of advantages of our offers. Here will be brief information about our company.</p>
                    <button className="header-btn">
                        <span>Explore</span>
                    </button>
                </div>
                <div className="header-right">
                    <img src={yarim} alt="" className="header-img" />
                    <div className="header-box">
                        <img src={sqr} alt="" className="header-pic" />

                        <button className="header-button">
                            <div className="header-triangle"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header
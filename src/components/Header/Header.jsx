import './Header.css'

import yarim from '../../assets/img/yarim.png'

const Header = () =>{
    return(
        <div className="header">
            <div className="container">
                <div className="header-left">
                    <h1 className='header-name'>ВСЕ ДЛЯ ТЕПЛИЦ</h1>
                    <p className="header-text">Here will be brief information about our company and some of advantages of our offers. Here will be brief information about our company.</p>
                    <button className="header-btn">Explore</button>
                </div>
                <div className="header-right">
                    <img src={yarim} alt="" className="header-hulf" />
                </div>
            </div>
        </div>
    )
}
export default Header
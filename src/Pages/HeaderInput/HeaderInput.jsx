import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './HeaderInput.css'

import headerImg from '../../assets/img/header_img.png'
import Section from '../../components/Section/Section'

const HeaderInput = ()=>{
    return(
        <>
          <div className="headerinput">
            <Navbar />
            <Header />
          </div>

        <div className="iframe">
            <img src={headerImg} alt="" className="header-iframe" />
        </div>
          <Section />
        </>
    )
}
export default HeaderInput
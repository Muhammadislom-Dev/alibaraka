import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './HeaderInput.css'

const HeaderInput = ()=>{
    return(
        <div className="headerinput">
            <div className="container">
                <Navbar />
                <Header />
            </div>
        </div>
    )
}
export default HeaderInput
import './Content.css'

import kvadrat from '../../assets/img/kvadrat.png'
import aylana from '../../assets/img/aylana.png'
import garden from '../../assets/img/garden.png'

const Content =() =>{


    return(
        <div className="content">
            <div className="container">
                <div className="content-left">
                    <img src={kvadrat} alt="" className="content-img" />
                </div>
                <div className="content-box">
                    <div className="content-page">
                        <img src={garden} alt="" className="content-pic" />

                        <h3 className="content-name">STILL ARE YOU HESITATING?</h3>
                        <p className="content-text">Your work is going to fill a large part of your life, and the only way to be truly satisfied</p>
                    </div>

                    <form className="content-form">
                        <span className="content-span">
                            <input type="text"  className="content-input" required placeholder='Enter your name' />
                            <input type="text"  className="content-input" required placeholder='Enter your phone' />
                        </span>
                        <textarea placeholder='Enter your subject' className='content-texts' ></textarea>
                        <button className="content-btn">Send Message</button>
                    </form>
                </div>

                <div className="content-right">
                    <img src={aylana} alt="" className="content-pics" />
                </div>
            </div>
        </div>
    )
}
export default Content
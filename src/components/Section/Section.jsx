import './Section.css'

import frame from '../../assets/img/company_ramka.png'
import cloud from '../../assets/img/bulut.png'
import traktor from '../../assets/img/traktor.png'
import aylana from '../../assets/img/aylana_company.png'

const Section = () =>{
    return(
        <div className="section">
            <div className="container">
                <h2 className="section-name">OUR PRODUCTION</h2>
                <p className="section-text">"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work]</p>

                <div className="section-page">
                    <div className="section-left"  data-aos="fade-right"
                    data-aos-offset="600"
                    data-aos-easing="ease-in-sine">
                        <h2 className='section-names'>LITTLE ABOUT OUR COMPANY</h2>
                        <p className="section-texts">"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."</p>

                        <div className="section-list">
                            <a href="#" className="section-link section-links">
                                <span>MORE ABOUT</span>
                            </a>
                            <a href="#" className="section-link section-items ">
                                <span>OUR YOUTUBE</span>
                            </a>
                        </div>
                    </div>

                    <div className="section-right">
                        <div className="section-title" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"data-aos-duration="2000">
                            <img src={frame} alt="" className="section-img" />
                        </div>
                        <div className="section-titles">
                            <img src={traktor} alt="" data-aos="fade-left"
                            data-aos-easing="ease-in-out" data-aos-duration="88000" />
                        </div>
                        <div className="section-item" data-aos="flip-left"data-aos-easing="ease-out-cubic"data-aos-duration="2000">
                            <img src={aylana} alt="" />
                        </div>
                        <div className="section-cloud" data-aos="flip-left"data-aos-easing="ease-out-cubic"data-aos-duration="2000">
                            <img src={cloud} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section
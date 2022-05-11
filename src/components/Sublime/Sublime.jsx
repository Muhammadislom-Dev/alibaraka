import './Sublime.css'

import man from '../../assets/img/man.png'

const Sublime =() =>{
    return(
        <div className="sublime">
            <div className="container">
                <div data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine" className="sublime-left">
                    <h2 className='sublime-name'>How our client made 10x revenue</h2>
                    <div className="sublime-title">
                        <h4 className='sublime-names'>"I learned so much, even as a professional".</h4>
                        <p className="sublime-texts">"Ut vehicula lacus a lacus tempor, nec viverra justo condimentum. Integer eu urna dapibus, scelerisque nisl non, semper ipsum. Etiam dolor arcu, tincidunt a arcu eget."</p>
                        <p className="sublime-surnames">Juan Huang</p>
                    </div>

                    <div className="sublime-titles">
                        <img src={man} alt="" className="sublime-img" />
                    </div>
                    <a href="#" className="sublime-link">more stories</a>
                </div>

                <div data-aos="fade-left" data-aos-offset="400" data-aos-easing="ease-in-sine" className="sublime-right">
                    <h2 className='sublime-surname'>Other successful stories</h2>
                    <ul className="sublime-list">
                        <li className="sublime-item">
                            <h3 className="sublime-full">Amateur</h3>
                            <p className="sublime-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                            <a href="#" className="sublime-links">More Information</a>
                        </li>
                        <li className="sublime-item">
                            <h3 className="sublime-full">Beginner</h3>
                            <p className="sublime-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                            <a href="#" className="sublime-links">More Information</a>
                        </li>
                        <li className="sublime-item">
                            <h3 className="sublime-full">Professional</h3>
                            <p className="sublime-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                            <a href="#" className="sublime-links">More Information</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sublime




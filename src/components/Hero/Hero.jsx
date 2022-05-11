import Accordions from "../Accordion/Accordion";

import bayroq from '../../assets/img/microsofts.png'
import './Hero.css'

const Hero =() =>{
    return(
        <div className="hero">
           <div className="container">
             <div  
              data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine"
             className="hero-left">
                <img src={bayroq} alt="" className="hero-img" />
             </div>
             <div data-aos="fade-left" data-aos-offset="400" data-aos-easing="ease-in-sine" className="hero-right">
               <h2 className="hero-name">SEE WHY WE ARE TRUSTED THE WORLD OVER</h2>
              <p className="hero-text">The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency.</p>

              <div className="hero-list">
              <Accordions
              className={"faq"}
              faqs={faqArray}
              />
              </div>
              </div>
           </div>
        </div>
    )
}




const faqArray = [
    {
      question: "SAVOL1",
      answer: "Javob1"
    },
    {
      question: "SAVOL2",
      answer: "Javob2"
    },
    {
      question: "SAVOL3",
      answer: "Javob3"
    },
    {
      question: "ISMINGIZ",
      answer: "Marat"
    },
    {
      question: "TEST",
      answer: "Test"
    },
    {
      question: "SAVOL1",
      answer: "Javob1"
    },
    {
      question: "SAVOL2",
      answer: "Javob2"
    },
    {
      question: "SAVOL3",
      answer: "Javob3"
    },

    {
      question: "SAVOL1",
      answer: "Javob1"
    },
    {
      question: "SAVOL2",
      answer: "Javob2"
    },
    {
      question: "SAVOL3",
      answer: "Javob3"
    },
  ]

  
export default Hero



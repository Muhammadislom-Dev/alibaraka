import Section from "../../components/Section/Section"
import Splides from "../../components/Splide/Splide"
import Hero from "../../components/Hero/Hero"
import  Sublime from '../../components/Sublime/Sublime'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'


const AboutPage  =() =>{
    return(
        <div className="aboutpage">
            <Section />
            <Splides />
            <Hero />
            <Sublime />
            <Content />
            <Footer />
        </div>
    )
}

export default AboutPage
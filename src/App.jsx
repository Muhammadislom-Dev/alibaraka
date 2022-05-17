import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import HeaderInput from './Pages/HeaderInput/HeaderInput';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Sublime from './components/Sublime/Sublime';

import headerimg from './assets/img/header_img.png'
import Hero from './components/Hero/Hero';
import Box from './components/Box/Box';


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <HeaderInput />
      <Hero />
      <Sublime />
      <Content />
      <Footer />
      <div className="App-page">
        <img src={headerimg} alt="" className="app-img" />
      </div>

      {/* <Box /> */}
    </div>
  );
}

export default App;

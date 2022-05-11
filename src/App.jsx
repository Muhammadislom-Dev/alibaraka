import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import HeaderInput from './Pages/HeaderInput/HeaderInput';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Sublime from './components/Sublime/Sublime';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <HeaderInput />
      <Sublime />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

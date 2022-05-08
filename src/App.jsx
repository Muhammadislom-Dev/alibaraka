import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import HeaderInput from './Pages/HeaderInput/HeaderInput';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <HeaderInput />
    </div>
  );
}

export default App;

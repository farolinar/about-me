import { useEffect } from 'react';
import './App-min.css';
import HeaderLayout from './views/layouts/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import { useSelector } from 'react-redux';
import About from './views/pages/About/About';
import Experience from './views/pages/Experience/Experience';
import Footer from './views/pages/Footer/Footer';

function App() {
  const theme = useSelector(state => state.theme.themeState);

  useEffect(()=>{
    document.documentElement.className = theme;
  },[theme]);

  return (
    <>
      <div className="App">
        <HeaderLayout />
        {/* <SideMenu /> */}
        <About />
        <Experience />
        <Footer />
      </div>
    </>
  );
}

export default App;

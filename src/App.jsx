import { useEffect } from 'react';
import './App.css';
import HeaderLayout from './views/layouts/Header/Header';
import PageHome from './views/pages/Home';
import SideMenu from './components/SideMenu/SideMenu';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector(state => state.theme.themeState);

  useEffect(()=>{
    document.documentElement.className = theme;
  },[theme]);

  return (
    <>
      <div className="App">
        <HeaderLayout />
        <SideMenu />
        <PageHome />
      </div>
    </>
  );
}

export default App;

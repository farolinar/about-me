import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App-min.css';
import HeaderLayout from './views/layouts/Header/Header';
import { useSelector } from 'react-redux';
import About from './views/pages/About/About';
import Experience from './views/pages/Experience/Experience';
import BlogsCarouselSection from './views/pages/BlogsCarouselSection/BlogsCarouselSection';
import BlogsPage from './views/pages/BlogsPage/BlogsPage';
import Footer from './views/pages/Footer/Footer';

function HomeView({ refs }) {
  const [aboutRef, experienceRef, educationRef, blogsRef] = refs;
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = location.state.scrollTo;
      if (section === 'about' && aboutRef.current) aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      if (section === 'experience' && experienceRef.current) experienceRef.current.scrollIntoView({ behavior: 'smooth' });
      if (section === 'blogs' && blogsRef.current) blogsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, aboutRef, experienceRef, blogsRef]);

  return (
    <>
      <About thisRef={aboutRef} />
      <Experience thisRef={experienceRef} />
      <BlogsCarouselSection thisRef={blogsRef} />
    </>
  );
}

function App() {
  const theme = useSelector((state) => state.theme.themeState);

  // refs
  const AboutRef = useRef();
  const ExperienceRef = useRef();
  const EducationRef = useRef();
  const BlogsRef = useRef();

  const navRefs = [AboutRef, ExperienceRef, EducationRef, BlogsRef];

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <HeaderLayout refs={navRefs} />
      <Routes>
        <Route path="/" element={<HomeView refs={navRefs} />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
      <Footer refs={navRefs} />
    </div>
  );
}

export default App;

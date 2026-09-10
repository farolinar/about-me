import { useNavigate, useLocation } from "react-router-dom";
import "./HeaderMenuList.min.css";

function HeaderMenuList({ refs = [] }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (refIndex, sectionId) => {
        if (location.pathname === '/') {
            if (refs[refIndex]?.current) {
                refs[refIndex].current.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/', { state: { scrollTo: sectionId } });
        }
    };

    const handleBlogsClick = () => {
        if (location.pathname === '/') {
            if (refs[3]?.current) {
                refs[3].current.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate('/blogs');
            }
        } else if (location.pathname === '/blogs') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/blogs');
        }
    };

    return (
        <div className="header-menu-list">
            <p className="clickable-text" onClick={() => handleNavClick(0, 'about')}>About</p>
            <p className="clickable-text" onClick={() => handleNavClick(1, 'experience')}>Experience</p>
            <p className="clickable-text" onClick={() => handleNavClick(2, 'education')}>Education</p>
            <p className="clickable-text" onClick={handleBlogsClick}>Blogs</p>
        </div>
    );
}

export default HeaderMenuList;

import { useEffect, useState } from "react";
import "./Header.min.css"
import HamburgerIcon from "../../../assets/img/hamburger.png";
import HeaderIcons from "../../../components/HeaderIcons/HeaderIcons";
import { showSideMenu } from "../../../utils/viewUtil";
import HeaderMenuList from "../../../components/HeaderMenuList/HeaderMenuList";
import SideMenu from "../../../components/SideMenu/SideMenu";


function HeaderLayout({refs=[]}) {
    const [scrolled, setScrolled] = useState(false);
    const [glowOpacity, setGlowOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 50);

            // Calculate opacity based on scroll position
            // Starts fading in at 50px, fully visible at 150px
            const opacity = Math.min((scrollY - 50) / 100, 1);
            setGlowOpacity(Math.max(0, opacity));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div
                className={`header-layout-outer ${scrolled ? 'scrolled' : ''}`}
                style={{'--glow-opacity': glowOpacity}}
            >
                <div className="header-layout">
                    <div className="hamburger" onClick={showSideMenu} >
                        <img src={HamburgerIcon} alt="hamburger" />
                    </div>
                    <div className="logo">
                        <img src={window.location.origin + '/logo.png'} alt="logo" />
                        <p>FAROL R</p>
                    </div>
                    <HeaderMenuList refs={refs} />
                    <HeaderIcons />
                </div>
                <SideMenu refs={refs} />
            </div>
        </>
    )
}

export default HeaderLayout;

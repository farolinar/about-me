import BrightnessToggle from "../../../components/BrightnessToggle/BrightnessToggle";
import LinkedInLogo from "../../../assets/img/linkedin.png";
import GithubLogo from "../../../assets/img/github.png";
import HamburgerIcon from "../../../assets/img/hamburger.png";
import "./Header.css"

function HeaderLayout() {
    return (
        <>
            <div className="header-layout-outer">
                <div className="header-layout">
                    <div className="hamburger">
                        <img src={HamburgerIcon} alt="hamburger" />
                    </div>
                    <div className="logo">
                        <img src={window.location.origin + '/logo.png'} alt="logo" />
                        <p>FAROL R</p>
                    </div>
                    <div className="menu">
                        <p className="clickable-text">About</p>
                        <p className="clickable-text">Experience</p>
                        <p className="clickable-text">Education</p>
                        <p className="clickable-text">Contact</p>
                    </div>
                    <div className="icons">
                        <button className="icon">
                            <img src={GithubLogo} alt="github" />
                        </button>
                        <button className="icon">
                            <img src={LinkedInLogo} alt="linkedin" />
                        </button>
                        <BrightnessToggle />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderLayout;

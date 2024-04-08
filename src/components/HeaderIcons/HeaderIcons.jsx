import "./HeaderIcons-min.css"
import BrightnessToggle from "../BrightnessToggle/BrightnessToggle"
import LinkedInLogo from "../../assets/img/linkedin.png";
import GithubLogo from "../../assets/img/github.png";

function HeaderIcons({ brightnessToggleVisible = true }) {
    return(
        <>
            <div className="header-icons">
                <button className="icon">
                    <img src={GithubLogo} alt="github" />
                </button>
                <button className="icon linkedin">
                    <img src={LinkedInLogo} alt="linkedin" />
                </button>
                { brightnessToggleVisible ? <BrightnessToggle /> : "" }
            </div>
        </>
    )
}

export default HeaderIcons;

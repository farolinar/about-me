import "./HeaderIcons-min.css"
import BrightnessToggle from "../BrightnessToggle/BrightnessToggle"
import LinkedInLogo from "../../assets/img/linkedin.png";
import GithubLogo from "../../assets/img/github.png";

function HeaderIcons({ brightnessToggleVisible = true }) {
    return(
        <>
            <div className="header-icons">
                <button className="icon">
                    <a href="https://github.com/farolinar" target="_blank">
                        <img src={GithubLogo} alt="github" />
                    </a>
                </button>
                <button className="icon linkedin">
                    <a href="https://www.linkedin.com/in/farolina-r/" target="_blank">
                        <img src={LinkedInLogo} alt="linkedin" />
                    </a>
                </button>
                { brightnessToggleVisible ? <BrightnessToggle /> : "" }
            </div>
        </>
    )
}

export default HeaderIcons;

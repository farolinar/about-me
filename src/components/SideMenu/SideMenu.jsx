import "./SideMenu.css"
import CloseIcon from "../../assets/img/close.png"
import { toggleElementById } from "../../utils/viewUtil"

function SideMenu() {
    return(
        <>
            <div className="side-menu-outer" id="side-menu" style={{display: "none"}}>
                <div className="side-menu">
                    <button className="close-btn no-background" onClick={() => toggleElementById("side-menu")}>
                        <img src={CloseIcon} alt="close" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default SideMenu

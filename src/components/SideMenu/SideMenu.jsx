import "./SideMenu.css"
import CloseIcon from "../../assets/img/close.png"

function SideMenu() {
    return(
        <>
            <div className="side-menu-outer" id="side-menu">
                <div className="side-menu">
                    <button className="close-btn no-background">
                        <img src={CloseIcon} alt="close" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default SideMenu

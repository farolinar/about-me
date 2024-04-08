import "./SideMenu-min.css"
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import HeaderMenuList from "../HeaderMenuList/HeaderMenuList";

function SideMenu() {
    return(
        <>
            <div className="side-menu-outer" id="side-menu">
                <div className="side-menu">
                    {/* <button className="close-btn no-background" onClick={() => toggleElementById("side-menu")}>
                        <img src={CloseIcon} alt="close" />
                    </button> */}
                    <HeaderIcons brightnessToggleVisible={false} />
                    <HeaderMenuList />
                </div>
            </div>
        </>
    )
}

export default SideMenu

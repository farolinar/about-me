import "./SideMenu-min.css"
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import HeaderMenuList from "../HeaderMenuList/HeaderMenuList";

function SideMenu({refs}) {
    return(
        <>
            <div className="side-menu-outer">
                <div className="side-menu" id="side-menu">
                    {/* <button className="close-btn no-background" onClick={() => toggleElementById("side-menu")}>
                        <img src={CloseIcon} alt="close" />
                    </button> */}
                    <HeaderIcons brightnessToggleVisible={false} />
                    <HeaderMenuList refs={refs}/>
                </div>
            </div>
        </>
    )
}

export default SideMenu

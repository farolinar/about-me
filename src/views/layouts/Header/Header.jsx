import "./Header-min.css"
import HamburgerIcon from "../../../assets/img/hamburger.png";
import HeaderIcons from "../../../components/HeaderIcons/HeaderIcons";
import { showSideMenu } from "../../../utils/viewUtil";
import HeaderMenuList from "../../../components/HeaderMenuList/HeaderMenuList";
import SideMenu from "../../../components/SideMenu/SideMenu";


function HeaderLayout() {
    return (
        <>
            <div className="header-layout-outer">
                <div className="header-layout">
                    <div className="hamburger" onClick={showSideMenu} >
                        <img src={HamburgerIcon} alt="hamburger" />
                    </div>
                    <div className="logo">
                        <img src={window.location.origin + '/logo.png'} alt="logo" />
                        <p>FAROL R</p>
                    </div>
                    <HeaderMenuList />
                    <HeaderIcons />
                </div>
                <SideMenu />
            </div>
        </>
    )
}

export default HeaderLayout;

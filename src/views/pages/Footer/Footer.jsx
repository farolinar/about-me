import Credits from "../../../components/Credits/Credits";
import HeaderIcons from "../../../components/HeaderIcons/HeaderIcons";
import HeaderMenuList from "../../../components/HeaderMenuList/HeaderMenuList";
import "./Footer.css"

function Footer({children, refs=[]}) {
    return <div className="footer-outer">
        <HeaderMenuList refs={refs}/>
        <HeaderIcons />
        <Credits />
    </div>
}

export default Footer;

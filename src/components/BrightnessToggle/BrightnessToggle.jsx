import "./BrightnessToggle.css"
import Moon from "../../assets/img/moon.png"
import Sun from "../../assets/img/sun.png"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../../store/reducers/themeReducer";


function BrightnessToggle() {
    const theme = useSelector(state => state.theme.themeState);
    const dispatch = useDispatch();

    const calculateIcon = () => {return theme == "light" ? Moon : Sun};

    const toggle = () => {
        dispatch(toggleTheme())
    }

    return(
        <>
            <div className="brightness-toggle-outer">
                <button className={"brightness-toggle "} onClick={toggle} title="Brightness Toggle">
                    <img src={calculateIcon()} alt="brightness-toggle" />
                </button>
            </div>
        </>
    )
}

export default BrightnessToggle

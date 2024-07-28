import { CreditsList } from "../../utils/data";
import "./Credits.css"

function Credits(params) {
    return <div className="credits-outer">
        <div>Credits</div>
        <div>
            <ul>
                {CreditsList.map((value, index) => {
                    return <li key={`credits-${index}`}>{value}</li>
                })}
            </ul>
        </div>
    </div>
}

export default Credits;

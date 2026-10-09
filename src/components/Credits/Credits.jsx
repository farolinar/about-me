import { CreditsList } from '../../utils/data';
import './Credits.css';

function Credits() {
  return (
    <div className="credits-outer">
      <div>Credits</div>
      <div>
        <ul>
          {CreditsList.map((value, index) => (
            <li key={`credits-${index}`}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Credits;

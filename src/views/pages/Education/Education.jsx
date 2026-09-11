import { Educations } from "../../../utils/data.jsx";
import "./Education-min.css";

function Education({ thisRef }) {
  // Single item for now; structured for future carousel expansion
  const item = Educations[0];

  return (
    <section
      className="education-section"
      ref={thisRef}
      style={{ "--education-bg": `url(${item.bg})` }}
    >
      {/* Full-bleed overlay for readability — colours via CSS per theme */}
      <div className="education-overlay" />

      <div className="education-content">
        <h1 className="education-title">Education</h1>

        <div className="education-item">
          <div className="education-item-header">
            <h2 className="education-item-name">{item.name}</h2>
            <span className="education-item-year">{item.year}</span>
          </div>

          {item.activities.length > 0 && (
            <div className="education-item-activities">
              <p className="education-label">{"// Activities"}</p>
              <ul>
                {item.activities.map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="education-item-courses">
            <p className="education-label">{"// Courses"}</p>
            <div className="courses-grid">
              {item.courses.map((course, i) => (
                <span key={i} className="course-chip">{course}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

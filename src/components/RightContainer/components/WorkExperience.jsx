import { workExperience } from "../../../../data/workExperience";

export default function WorkExperience() {
  function handleWorkExperieneData(data) {
    return Object.entries(data).map(([item, info], i) => {
      return (
        <li key={i}>
          <span>{info.date}</span>
          <div>
            <h4>{item}</h4>
            <h5>{info.role}</h5>
            <p>{info.info}</p>
          </div>
        </li>
      );
    });
  }

  return (
    <section>
      <h3>Experience</h3>
      <ul>{handleWorkExperieneData(workExperience)}</ul>
      <span>View Resume</span>
    </section>
  );
}

import { useState } from "react";

function Form({
  schoolName,
  studyTitle,
  year,
  setSchoolName,
  setStudyTitle,
  setYear,
  handleSubmit,
}) {
  return (
    <section className="info-fields">
      <form action="#"  onSubmit={handleSubmit}>
        <label htmlFor="schoolName" className="info-label">
          School Name:
          <input
            type="text"
            value={schoolName}
            onChange={(event) => setSchoolName(event.target.value)}
            className="general-input"
          />
        </label>

        <label htmlFor="Title" className="info-label">
          Title:
          <input
            type="text"
            value={studyTitle}
            onChange={(event) => setStudyTitle(event.target.value)}
            className="general-input"
          />
        </label>

        <label htmlFor="year" className="info-label">
          Year:{" "}
          <input
            type="text"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className="general-input"
          />
        </label>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
}

function DisplayEducationData({ schoolName, studyTitle, year, EditForm }) {
  return (
    <section className="display-information">
      <h1>School name: {schoolName}</h1>
      <h1>Title: {studyTitle}</h1>
      <h1>Year: {year}</h1>

      <button onClick={EditForm} className="edit-btn">Edit</button>
    </section>
  );
}

function EducationInfo() {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [year, setYear] = useState("");
  const [submit, setSubmitted] = useState(false);
  const [edit, setEditing] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setEditing(false);
  }

  return (
    <div className="info-section">
      {!submit || edit ? (
        <Form
          schoolName={schoolName}
          setSchoolName={setSchoolName}
          studyTitle={studyTitle}
          setStudyTitle={setStudyTitle}
          year={year}
          setYear={setYear}
          handleSubmit={handleSubmit}
        />
      ) : (
        <DisplayEducationData
          schoolName={schoolName}
          studyTitle={studyTitle}
          year={year}
          EditForm={() => setEditing(true)}
        />
      )}
    </div>
  );
}

export {EducationInfo};
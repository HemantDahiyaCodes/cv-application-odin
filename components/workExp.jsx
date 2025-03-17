import { useState } from "react";

function Form({
  companyName,
  JobTitle,
  timePeriod,
  setCompanyName,
  setJobTitle,
  setTimePeriod,
  handleSubmit,
}) {
  return (
    <section className="info-fields">
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="schoolName" className="info-label">
          Company Name: 
          <input
            type="text"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            className="general-input"
          />
        </label>

        <label htmlFor="Title" className="info-label">
          Job Title:
          <input
            type="text"
            value={JobTitle}
            onChange={(event) => setJobTitle(event.target.value)}
            className="general-input"
          />
        </label>

        <label htmlFor="year" className="info-label">
          Year:{" "}
          <input
            type="text"
            value={timePeriod}
            onChange={(event) => setTimePeriod(event.target.value)}
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

function DisplayWorkData({ companyName, JobTitle, timePeriod, EditForm }) {
  return (
    <section className="display-information">
      <h1>Company name: {companyName}</h1>
      <h1>Job Title: {JobTitle}</h1>
      <h1>Time Period: {timePeriod}</h1>

      <button onClick={EditForm} className="edit-btn">
        Edit
      </button>
    </section>
  );
}

function WorkInfo() {
  const [companyName, setCompanyName] = useState("");
  const [JobTitle, setJobTitle] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
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
          companyName={companyName}
          setCompanyName={setCompanyName}
          jobTitle={JobTitle}
          setJobTitle={setJobTitle}
          timePeriod={timePeriod}
          setTimePeriod={setTimePeriod}
          handleSubmit={handleSubmit}
        />
      ) : (
        <DisplayWorkData
          companyName={companyName}
          JobTitle={JobTitle}
          timePeriod={timePeriod}
          EditForm={() => setEditing(true)}
        />
      )}
    </div>
  );
}

export { WorkInfo };

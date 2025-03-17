import { useState } from "react";

function DisplayGeneralData({ name, email, phone, EditClick }) {
  return (
    <section className="display-information">
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Phone: {phone}</h1>

      <button type="submit" className="edit-btn" onClick={EditClick}>
        Edit
      </button> 
    </section>
  );
}

function Form({
  name,
  email,
  phone,
  setName,
  setEmail,
  setPhone,
  handleSubmit,
}) {
  return (
    <section className="info-fields">
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name" className="info-label">
          Name:{" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="general-input"
            id="name"
          />
        </label>
        <label htmlFor="email" className="info-label">
          Email:{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="general-input"
            id="email"
          />
        </label>
        <label htmlFor="phone" className="info-label">
          Phone:{" "}
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="general-input"
            id="phone"
          />
        </label>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
}

function GeneralInformation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submit, isSubmited] = useState(false);
  const [edit, setEditing] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    isSubmited(true);
    setEditing(false);
  }

  return (
    <div className="info-section">
      {!submit || edit ? (
        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          handleSubmit={handleSubmit}
        />
      ) : (
        <DisplayGeneralData
          name={name}
          email={email}
          phone={phone}
          EditClick={() => setEditing(true)}
        />
      )}
    </div>
  );
}

export { GeneralInformation };

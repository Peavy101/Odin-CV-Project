import CVDisplay from "./CVDisplay";

function CVForm(formName) {
  if (formName.formName == "info") {
    console.log("Ayo!");
  }
  let FormData = {};

  console.log("formName", formName);

  return (
    <>
      <form className="CVForm">
        <div>
          <h1>{formName.formName ?? "No name"}</h1>
        </div>
        <label htmlFor="name">Name</label>
        <input type="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="phone number" id="phoneNumber" />
        <button type="submit">Submit</button>
      </form>

      <CVDisplay FormData={FormData} />
    </>
  );
}

export default CVForm;

import { useState } from "react";
import "./AlpacaForm.css";

export function AlpacaForm() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    state: "Texas",
    country: "",
    colors: []
  };

  const states = [
    "Alaska",
    "Alabama",
    "Arkansas",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    "North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming",
    "Newfoundland and Labrador"
  ];

  const [formObject, setFormObject] = useState(initialFormData);
  const [errorObject, setErrorObject] = useState({
    firstName: "",
    country: ""
  });

  function changeHandler(event) {
    if (event.target.name === "colors") {
      const colorName = event.target.id;
      if (formObject.colors.includes(colorName)) {
        setFormObject({
          ...formObject,
          colors: formObject.colors.filter((color) => color !== colorName)
        });
      } else {
        setFormObject({
          ...formObject,
          colors: [...formObject.colors, colorName]
        });
      }
    } else {
      setFormObject((previousForm) => ({
        ...previousForm,
        [event.target.name]: event.target.value
      }));
    }
  }

  function validateFirstName(event) {
    if (!event.target.value) {
      setErrorObject({
        ...errorObject,
        firstName: "First name is required"
      });
    } else {
      setErrorObject({
        ...errorObject,
        firstName: ""
      });
    }
  }

  function validateLastName(event) {
    if (!event.target.value) {
      setErrorObject({
        ...errorObject,
        lastName: "Last name is required"
      });
    } else {
      setErrorObject({
        ...errorObject,
        lastName: ""
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted:", formObject);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <div className="formgroup">
            <label htmlFor="firstName" className="required">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formObject.firstName}
              onChange={changeHandler}
              onBlur={validateFirstName}
            />
            {errorObject.firstName && (
              <>
                <br />
                <small>{errorObject.firstName}</small>
              </>
            )}
          </div>
          <div className="formgroup">
            <label htmlFor="lastName" className="required">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formObject.lastName}
              onChange={changeHandler}
              onBlur={validateLastName}
            />
            {errorObject.lastName && (
              <>
                <br />
                <small>{errorObject.lastName}</small>
              </>
            )}
          </div>
          <div className="formgroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formObject.email}
              onChange={changeHandler}
            />
          </div>
          <div className="formgroup">
            <label htmlFor="street">Street Address</label>
            <input
              type="text"
              name="street"
              id="street"
              value={formObject.street}
              onChange={changeHandler}
            />
          </div>
          <div className="formgroup">
            <label htmlFor="state">State/Province</label>
            <select
              name="state"
              id="state"
              value={formObject.state}
              onChange={changeHandler}
            >
              {states.map((singleState, index) => (
                <option key={index} value={singleState}>
                  {singleState}
                </option>
              ))}
            </select>
          </div>
          <div className="formgroup">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              value={formObject.country}
              onChange={changeHandler}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Tell us about your favorite colors!</legend>
          <p>Favorite color</p>
          <div className="formgroup">
            <label htmlFor="red">
              <input
                type="checkbox"
                name="colors"
                id="red"
                checked={formObject.colors.includes("red")}
                onChange={changeHandler}
              />
              Red
            </label>
            <label htmlFor="green">
              <input
                type="checkbox"
                name="colors"
                id="green"
                checked={formObject.colors.includes("green")}
                onChange={changeHandler}
              />
              Green
            </label>
            <label htmlFor="blue">
              <input
                type="checkbox"
                name="colors"
                id="blue"
                checked={formObject.colors.includes("blue")}
                onChange={changeHandler}
              />
              Blue
            </label>
            <label htmlFor="yellow">
              <input
                type="checkbox"
                name="colors"
                id="yellow"
                checked={formObject.colors.includes("yellow")}
                onChange={changeHandler}
              />
              Yellow
            </label>
          </div>
        </fieldset>
        <button type="submit" disabled={errorObject.firstName || errorObject.lastName}>
          Sign me up!
        </button>
      </form>
   

        </>
    )
}
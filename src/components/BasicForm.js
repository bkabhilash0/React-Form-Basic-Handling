import validator from "validator";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstnameInputHasError,
    isValid: enteredFirstNameIsValid,
    inputBlurHandler: firstnameBlurHandler,
    valueChangeHandler: firstnameChangeHandler,
    reset: resetfirstnameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastnameInputHasError,
    isValid: enteredLastNameIsValid,
    inputBlurHandler: lastnameBlurHandler,
    valueChangeHandler: lastnameChangeHandler,
    reset: resetLastnameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmailInput,
  } = useInput((value) => validator.isEmail(value));

  let formIsValid = false;
  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      !enteredFirstNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid
    ) {
      return "";
    }
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    resetfirstnameInput();
    resetLastnameInput();
    resetEmailInput();
  };

  const firstnameInputClasses = firstnameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastnameInputClasses = lastnameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler} autoComplete="off">
      <div className="control-group">
        <div className={firstnameInputClasses}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={enteredFirstName}
            onChange={firstnameChangeHandler}
            onBlur={firstnameBlurHandler}
          />
          {firstnameInputHasError && (
            <p className="error-text">Please enter you Firstname</p>
          )}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={enteredLastName}
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler}
          />
          {lastnameInputHasError && (
            <p className="error-text">Please enter you Lastname</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter you Lastname</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

function Validation(values) {
  let errors = {};

  if (values.username === "") {
    errors.username = "Username is required";
  } else {
    errors.username = "";
  }
  if (values.password === "") {
    errors.password = "Password is required";
  } else {
    errors.password = "";
  }
  return errors;
}
export default Validation;

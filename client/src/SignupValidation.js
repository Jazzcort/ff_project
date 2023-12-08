function Validation(values) {
  let errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  if (values.email === "") {
    errors.email = "Email is required";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Invalid Email";
  } else {
    errors.email = "";
  }
  return errors;
}
export default Validation;

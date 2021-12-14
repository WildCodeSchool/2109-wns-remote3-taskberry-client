interface ValidateValues {
  email: string;
  password: string;
}
interface ErrorsValues {
  email: string;
  password: string;
}

export default function validate(values: ValidateValues) {
  const errors: ErrorsValues = { email: "", password: "" };
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid motherfucker";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be 6 or more characters";
  }
  return errors;
}

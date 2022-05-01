interface ValidateValues {
  email: string;
  password: string;
}
interface ErrorsValues {
  email?: string;
  password?: string;
}

export default function validate(values: ValidateValues) {
  const errors: ErrorsValues = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (
    !new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(values.email)
  ) {
    errors.email = "Enter a valid email address";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (
    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(
      values.password
    )
  ) {
    errors.password =
      "Password should contains : 8 charaters, uppercase,lowercase and numbers";
  }
  return errors;
}

// const validate = (event, name, value) => {
//   //A function to validate each input values

//   switch (name) {
//     case "username":
//       if (value.length <= 4) {
//         // we will set the error state

//         setErrors({
//           ...errors,
//           username: "Username atleast have 5 letters",
//         });
//       } else {
//         // set the error state empty or remove the error for username input

//         //omit function removes/omits the value from given object and returns a new object
//         let newObj = omit(errors, "username");
//         setErrors(newObj);
//       }
//       break;
// };

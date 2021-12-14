// import { useState, useEffect } from "react";

// interface T {
//   email: string;
//   password: string;
// }
// const useForm = (callback: () => void, validate: any) => {
//   const [values, setValues] = useState<Partial<T>({});
//   const [errors, setErrors] = useState({ email: "", password: "" });
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//   //   console.log(isSubmitting);
//   //   console.log(errors);

//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && isSubmitting) {
//       callback();
//     }
//   }, [errors]);

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     if (event) event.preventDefault();
//     setErrors(validate(values));

//     if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
//       setIsSubmitting(true);
//       callback();
//       console.log(isSubmitting);
//     } else {
//       alert("There is an Error!");
//       setIsSubmitting(false);
//       console.log(isSubmitting);
//     }
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     event.persist();
//     setValues((values: any) => ({
//       ...values,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   return {
//     handleChange,
//     handleSubmit,
//     values,
//     errors,
//   };
// };

// export default useForm;

import React, { useState } from "react";
// import { omit } from "lodash";

const useForm = (callback: () => void) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState<any>({});
  const validate = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
    value: string
  ) => {
    switch (name) {
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          const newObj = "toto";
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const name = event.target.name;
    const val = event.target.value;
    console.log("name", name);
    console.log("val", val);
    validate(event, name, val);
    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      alert("There is an Error!");
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;

import { useState, useEffect } from "react";

interface T {
  email: string;
  password: string;
}
const useForm = (callback: () => void, validate: any) => {
  const [values, setValues] = useState<Partial<T>>({});
  const [errors, setErrors] = useState<Partial<T>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setErrors(validate(values));
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      setIsSubmitting(true);
      console.log("isSubmitting", isSubmitting);
    } else {
      setIsSubmitting(false);
      console.log("isSubmitting", isSubmitting);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setErrors(validate(values));
    setValues((values: any) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;

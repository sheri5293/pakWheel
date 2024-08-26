import { useState } from "react";

export const useFormValidation = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};

    if (!values.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      tempErrors.email = "Email is invalid";
    }

    if (!values.password) {
      tempErrors.password = "Password is required";
    } else if (values.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters long";
    }

    if (!values.confirmPassword) {
      tempErrors.confirmPassword = "Confirm Password is required";
    } else if (values.password !== values.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event, callback) => {
    event.preventDefault();
    if (validate()) {
      callback();
    }
  };

  return { values, handleChange, handleSubmit, errors };
};

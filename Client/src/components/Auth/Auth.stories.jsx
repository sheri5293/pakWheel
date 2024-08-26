/* eslint-disable no-unused-vars */
import React from "react";
import Login from "./Login";
import Signup from "./Signup";

export default {
  title: "Auth",
  component: Login,
};

export const LoginForm = () => <Login />;
export const SignupForm = () => <Signup />;

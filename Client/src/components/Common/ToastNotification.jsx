/* eslint-disable no-unused-vars */
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification = () => {
  const notify = () => toast("This is a toast notification!");

  return (
    <>
      <ToastContainer />
    </>
  );
};

export default ToastNotification;

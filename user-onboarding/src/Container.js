import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import UserForm from "./Form";
import axios from "axios";
import * as yup from "yup";

// Step 1: Determine the initial value
const initialUserForm = {
  name: "",
  age: "",
  email: "",
  password: "",
  terms: false
};

// Step 2:  Write the validation using Yup
const userFormValidation = yup.object().shape({
  name: yup.string().required("You need to supply your name"),
  age: yup
    .number()
    .min(18, "You need to be up to 18 years")
    .max(60, "You cannot be more than 60 years")
    .required("You need to put your age"),
  email: yup
    .string()
    .email("Your email is invalid")
    .required("You need to fill your email"),
  password: yup.string().required("A password is required"),
  terms: yup.boolean()
});

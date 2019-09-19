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

// Step 3: Setting placeholders values

const placeholders = {
  name: "Enter your name here...",
  age: "Enter your age here...",
  email: "Enter your email here...",
  password: "Enter your password here"
};

// Step 4: Create the Form Component with props arg

//Step 5: Call Formik Component passing initialValues and onSubmit as props. onSubmit props.onSubmit as Props

//Step 6: Creating a new compnent to send to axios

export function UserForm(props) {
  return (
    <Formik
      validationSchema={userFormValidation}
      initialValues={initialUserForm}
      onSubmit={props.onSubmit}
      render={props => {
        return (
          <form onSubmit={props.handleSubmit}>
            <div>
              <label>
                Name
                <Field
                  name="name"
                  type="text"
                  placeholder={placeholders.name}
                />
              </label>
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label>
                Age
                <Field
                  name="age"
                  type="number"
                  placeholder={placeholders.age}
                />
              </label>
              <ErrorMessage name="age" component="div" />
            </div>
            <div>
              <label>
                Email
                <Field
                  name="email"
                  type="email"
                  placeholder={placeholders.email}
                />
              </label>
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label>
                Password
                <Field
                  name="password"
                  type="password"
                  placeholder={placeholders.password}
                />
              </label>
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <label>
                Terms of Service
                <Field
                  name="terms"
                  checked={props.values.terms}
                  type="checkbox"
                />
              </label>
              <ErrorMessage name="terms" component="div" />
            </div>
            <div>
              <button disabled={!props.isValid} type="submit">
                Submit
              </button>
            </div>
          </form>
        );
      }}
    ></Formik>
  );
}

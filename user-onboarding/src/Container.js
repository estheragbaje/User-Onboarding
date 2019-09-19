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

const usersApi = "https://reqres.in/api/users";

export default function Container() {
  const [usersList, setUsersList] = useState([]);
  const [serverError, setServerError] = useState("");

  const fetchUsers = () => {
    // get those users from the api
    // and set them into the right slice of state!
    // put something in `serverError`
    axios
      .get(usersApi)
      .then(res => {
        let fetchedData = res.data.data;

        //Re-format the data to the one that matches the form
        fetchedData = fetchedData.map(user => ({
          name: user.first_name,
          email: user.email,
          id: user.id
        }));

        setUsersList(fetchedData);
      })
      .catch(err => {
        setServerError(err.message);
      });
  };

  const addUser = (formValues, actions) => {
    // THIS FUNCTION NEEDS TO COMPLY WITH FORMIK
    // REQUIREMENTS FOR ACCEPTABLE `onSubmit` FUNCTIONS!
    // It should take two args:
    //     (values) the form values (object)
    //     (actions) formik actions (object)
    // And perform a POST request to the api
    // const userToPost = {
    //   name: formValues.name,
    //   age: formValues.age,
    //   email: formValues.email,
    //   password: formValues.password,
    //   terms: formValues.terms
    // };
    // console.log(formValues);
    axios
      .post(usersApi, formValues)
      .then(res => {
        console.log(res.data);
        // res.data contains the newly created friend
        const newLyCreatedUserFromServer = res.data;
        setUsersList([...usersList, newLyCreatedUserFromServer]);
        actions.resetForm();
      })
      .catch(err => {
        debugger;
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {/* should be its own component: */}
      {serverError}

      <UserForm onSubmit={addUser} />

      {/* should be its own component: */}
      {usersList.length
        ? usersList.map(user => (
            <div key={user.id}>
              Name: {user.name}
              <br />
              Email: {user.email}
            </div>
          ))
        : "No Users. Sad!"}
    </div>
  );
}

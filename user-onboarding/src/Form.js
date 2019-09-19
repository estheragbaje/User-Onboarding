import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import Container from "./Container";

// const usersApi = "https://reqres.in/api/users";

// const initialUserForm = {
//   name: "",
//   age: "",
//   email: "",
//   password: "",
//   terms: ""
// };

// export default function Container() {
//   const [usersList, setUsersList] = useState([]);
//   const [serverError, setServerError] = useState("");

//   const fetchUsers = () => {
//     // get those users from the api
//     // and set them into the right slice of state!
//     // don't forget about the sad path: put something in `serverError`
//     axios
//       .get(usersApi)
//       .then(res => {
//         setUsersList(res.data);
//       })
//       .catch(err => {
//         setServerError(err.message);
//       });
//   };

//   // 2- THIS GOES INTO <Formik /> `onSubmit` prop
//   const addUser = (formValues, actions) => {
//     // THIS FUNCTION NEEDS TO COMPLY WITH FORMIK
//     // REQUIREMENTS FOR ACCEPTABLE `onSubmit` FUNCTIONS!
//     // It should take two args:
//     //     (values) the form values (object)
//     //     (actions) formik actions (object)
//     // And perform a POST request to the api
//     const userToPost = {
//       name: formValues.name,
//       age: formValues.age,
//       email: formValues.email,
//       password: formValues.password,
//       terms: formValues.terms
//     };
//     axios
//       .post(usersApi, userToPost)
//       .then(res => {
//         // res.data contains the newly created friend
//         const newLyCreatedUserFromServer = res.data;
//         setUsersList(usersList.concat(newLyCreatedUserFromServer));
//         actions.resetForm();
//       })
//       .catch(err => {
//         debugger;
//       });
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       {/* should be its own component: */}
//       {serverError}

//       <UserForm onSubmit={addUser} />

//       {/* should be its own component: */}
//       {usersList.length
//         ? usersList.map(fr => (
//             <div key={fr.id}>
//               {fr.name} is {fr.age}
//             </div>
//           ))
//         : "No Users. Sad!"}
//     </div>
//   );
// }

// // 3- THIS GOES INTO <Formik /> `validate` prop
// const validate = formValues => {
//   const errors = {};
//   // take a look inside those forms values
//   // and add errors if we don't like what we see
//   // return the errors object

//   // investigating the formValues.name
//   if (!formValues.name) {
//     errors.name = "You need to supply a name, dummy!";
//   } else if (formValues.name.length < 3) {
//     errors.name = "That name looks a little short";
//   }

//   // investigating the formValues.age
//   if (!formValues.age) {
//     errors.age = "We need an age!!";
//   }
//   return errors;
// };

// // 4- THIS GOES INTO <Formik /> `validationSchema` prop
// const validationSchema = yup.object().shape({
//   name: yup.string().required("GAGAHHH WE NEED NAME"),
//   age: yup
//     .number()
//     .required("NO JOY GIMME AGE")
//     .integer()
//     .positive("are you really trying to feed a negative number????")
// });

// export default function UserForm({ onSubmit }) {
//   return (
//     // needs 3 props
//     <Formik
//       validationSchema={validationSchema}
//       validate={validate}
//       initialValues={initialUserForm}
//       onSubmit={onSubmit}
//       render={props => {
//         return (
//           // we will use pre-baked components
//           // supplied by formik lib (like Formik)
//           <Form>
//             {!props.dirty && <div>time to start typing!!</div>}
//             <div>
//               <label>
//                 Name
//                 <Field name="name" type="text" placeholder="Name" />
//                 <ErrorMessage name="name" component="div" />
//               </label>
//             </div>
//             <div>
//               <label>
//                 Age
//                 <Field name="age" type="text" placeholder="Age" />
//                 <ErrorMessage name="age" component="div" />
//               </label>
//             </div>
//             <div>
//               <label>
//                 Email
//                 <Field name="email" type="email" placeholder="Email" />
//               </label>
//             </div>
//             <div>
//               <label>
//                 Password
//                 <Field name="password" type="password" placeholder="Password" />
//               </label>
//             </div>
//             <div>
//               <label>
//                 Terms of Service
//                 <Field
//                   name="terms"
//                   type="checkbox"
//                   placeholder="Terms of Service"
//                 />
//               </label>
//             </div>
//             <button type="submit">Submit</button>
//           </Form>
//         );
//       }}
//     />
//   );
// }

// export default Form;

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

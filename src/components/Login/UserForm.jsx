import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserForm = ({ formType }) => {
  // Define different validation schemas based on form type
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    ...(formType === "signup" && {
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
        .required("Mobile number is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
  });

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md my-40">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {formType === "login" ? "Login" : "Sign Up"}
      </h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
          ...(formType === "signup" && { mobile: "", confirmPassword: "" }),
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <Field
                type="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FC8E32] focus:border-[#FC8E32] sm:text-sm"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <Field
                type="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FC8E32] focus:border-[#FC8E32] sm:text-sm"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {formType === "signup" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mobile Number:
                  </label>
                  <Field
                    type="text"
                    name="mobile"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FC8E32] focus:border-[#FC8E32] sm:text-sm"
                  />
                  <ErrorMessage
                    name="mobile"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password:
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FC8E32] focus:border-[#FC8E32] sm:text-sm"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#fc8019] text-white py-2 px-4 rounded hover:bg-[#fdaa65] focus:outline-none focus:ring-2 focus:ring-[#FC8E32] focus:ring-opacity-50"
            >
              {isSubmitting
                ? "Submitting..."
                : formType === "login"
                ? "Login"
                : "Sign Up"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;

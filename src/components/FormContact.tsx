import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const infoInSchema = Yup.object().shape({
  name: Yup.string().required(" ⚠️ Please informe your name"),
  email: Yup.string().email().required(" ⚠️ Please enter your email address"),
  phone: Yup.number().required(" ⚠️ Please enter your phone number"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
};

export type FormProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const FormContact = (Props: FormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={infoInSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div>
            <h2 className="p-8">
              Fill out the details below and we'll get back to you soon.
            </h2>
            <Form >
              <div className="flex flex-col p-2">
                <label htmlFor="name">Full Name</label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className={
                    errors.name && touched.name
                      ? "border-solid border-2 border-orange p-2"
                      : "p-2"
                  }
                />
                <ErrorMessage name="name" component="span" className="error" />
              </div>

              <div className="flex flex-col p-2">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@example.com"
                  className={
                    errors.email && touched.email
                      ? "border-solid border-2 border-orange p-2"
                      : "p-2"
                  }
                />
                <ErrorMessage name="email" component="span" className="error" />
              </div>

              <div className="flex flex-col p-2">
                <label htmlFor="phone">Phone number</label>
                <Field
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="xxxx-xxxx"
                  className={
                    errors.phone && touched.phone
                      ? "border-solid border-2 border-orange p-2"
                      : "p-2"
                  }
                />
                <ErrorMessage name="phone" component="span" className="error" />
              </div>
              <div className="w-full grid place-content-center">
                <button
                  onClick={Props.onClick}
                  type="submit"
                  className={
                    !(dirty && isValid)
                      ? "w-[200px] border p-2 mt-5 rounded"
                      : "w-[200px]  bg-orange p-1 mt-5 rounded border hover:border-dark"
                  }
                  disabled={!(dirty && isValid)}
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

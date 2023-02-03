import { Formik, FormikProps} from "formik";
import React from "react";

const validate = values => {
   const errors = {};
   if (!values.firstName) {
     errors.firstName = 'Required';
   } else if (values.firstName.length > 15) {
     errors.firstName = 'Must be 15 characters or less';
   }
 
   if (!values.lastName) {
     errors.lastName = 'Required';
   } else if (values.lastName.length > 20) {
     errors.lastName = 'Must be 20 characters or less';
   }
 
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
 
   return errors;
 };

export const FormikExample = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
        component={RegistrationForm}
      />
    </div>
  );
};

let RegistrationForm: (props: FormikProps<FormModel>) => JSX.Element = ({
  handleSubmit,
  values,
  handleChange,
  errors,
  touched
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="" className="p-1">
        Full name
      </label>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={values.name}
        onChange={handleChange}
        className="p-1 rounded"
      />
      {touched.name && errors.name && <div>{}</div>}
      <label htmlFor="" className="p-1">
        Email
      </label>
      <input
        type="text"
        name="email"
        placeholder="email@example.com"
        value={values.email}
        onChange={handleChange}
        className="p-1 rounded"
      />
      <label htmlFor="" className="p-1">
        Phone number
      </label>
      <input
        type="number"
        name="phone"
        placeholder="xxxx-xxxx"
        value={values.phone}
        onChange={handleChange}
        className="p-1 rounded"
      />
      <button
        type="submit"
        className="w-[50%] self-center bg-orange p-1 mt-5 rounded hover:border-dark"
      >
        Submit
      </button>
    </form>
  );
};

import { Formik, Form } from "formik";


type FormProps ={
  name:string;
  email:string;
  phone:number;
}

export const FormContact = ({name, email, phone}: FormProps) => {

  return (
    <div>
      <h3 className="p-8">
        Enter the information below and we'll get back to you as soon as we can.
      </h3>

      <Formik
        initialValues={{ name: "", email: "", phone: "" }}
        onSubmit={(values) => alert("Message sent")}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Please enter a email";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
      >
        {({ handleSubmit, handleChange, errors }) => (
          
          <Form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="" className="p-1">
              Full name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="p-1 rounded"
            />
            <label htmlFor="" className="p-1">
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="email@example.com"
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
              onChange={handleChange}
              className="p-1 rounded"
            />
            <button
              type="submit"
              className="w-[50%] self-center bg-orange p-1 mt-5 rounded hover:border-dark"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

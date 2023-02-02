import { Formik, Form } from "formik";


export const FormContact = () => {

  return (
    <div>
        <h3>
        Enter the information below and we'll get back to you as soon as we can.
      </h3>

      <Formik
        initialValues={{ name: "", email: "", phone: "" }}
        onSubmit={(values) => alert(values.email)}
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
 
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              placeholder="email@example.com"
              onChange={handleChange}
            />
            <label htmlFor="">Phone number</label>
            <input
              type="number"
              name="phone"
              placeholder="xxxx-xxxx"
              onChange={handleChange}
            />
            <button type="submit" >Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};


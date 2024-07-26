import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("enter your name"),
    number: Yup.string().min(10, "Too Short!").required("enter 10 numbers"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div>
            <Field type="text" name="name" placeholder="Name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
          </div>

          <div>
            <Field type="text" name="number" placeholder="050 11 11 111" />
            {errors.number && touched.number ? (
              <div>{errors.number}</div>
            ) : null}
          </div>

          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

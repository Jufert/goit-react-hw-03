import React from "react";
import css from "../ContactForm/ContactForm.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddUser }) => {
  const handleSubmit = (values, actions) => {
    onAddUser(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          <span>Name</span>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          <span>Number</span>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="span" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

import { Formik, Field, Form, ErrorMessage } from "formik";
import { registerNewUser } from "../redux/usersOperation";
import { useDispatch } from "react-redux";

const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = "Required";
  } else if (values.userName.length > 15) {
    errors.userName = "Must be 15 characters or less";
  }

  if (!values.userPassword) {
    errors.userPassword = "Required";
  } else if (values.userPassword.length < 7) {
    errors.userPassword = "Must be 7 characters or more";
  } else if (values.userPassword.length > 12) {
    errors.userPassword = "Must be 20 characters or less";
  }

  if (!values.userPasswordConfirm) {
    errors.userPasswordConfirm = "Required";
  } else if (values.userPasswordConfirm !== values.userPassword) {
    errors.userPasswordConfirm = "Password and confirm password don't match";
  }

  if (!values.userEmail) {
    errors.userEmail = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)
  ) {
    errors.userEmail = "Invalid email address";
  }

  return errors;
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        userName: "",
        userEmail: "",
        userPassword: "",
        userPasswordConfirm: "",
      }}
      validate={validate}
      onSubmit={(
        { userName: name, userEmail: email, userPassword: password },
        formikBag
      ) => {
        dispatch(registerNewUser({ name, email, password }));
        formikBag.resetForm();
      }}
    >
      {({ isValid, dirty }) => (
        <Form>
          <label htmlFor="userName">Name</label>
          <Field name="userName" type="text" />
          <ErrorMessage name="userName" />

          <label htmlFor="userEmail">Email</label>
          <Field name="userEmail" type="email" />
          <ErrorMessage name="userEmail" />

          <label htmlFor="userPassword">Password</label>
          <Field name="userPassword" type="password" />
          <ErrorMessage name="userPassword" />

          <label htmlFor="userPasswordConfirm">Confirm password</label>
          <Field name="userPasswordConfirm" type="password" />
          <ErrorMessage name="userPasswordConfirm" />

          <button type="submit" disabled={!isValid || !dirty}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;

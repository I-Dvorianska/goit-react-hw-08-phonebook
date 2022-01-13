import { Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { Toaster } from "react-hot-toast";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { loginUser } from "../redux/Users/usersOperation";
import {
  Button,
  StyledForm,
  Label,
  InputField,
  InputWrapper,
  Error,
} from "../RegisterForm/RegisterForm.styled";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Required!";
  } else if (values.password.length < 7) {
    errors.password = "Must be 7 characters or more";
  } else if (values.password.length > 12) {
    errors.password = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#dc1c13",
          },
        }}
      />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={validate}
        onSubmit={({ email, password }, formikBag) => {
          dispatch(loginUser({ email, password }));
          formikBag.resetForm();
        }}
      >
        {({ isValid, dirty }) => (
          <StyledForm>
            <InputWrapper>
              <IconContext.Provider
                value={{
                  color: "#dd571c",
                  style: {
                    verticalAlign: "middle",
                    marginBottom: "4px",
                    marginRight: "4px",
                  },
                }}
              >
                <Label htmlFor="email">
                  <AiOutlineMail />
                  Email
                </Label>
              </IconContext.Provider>
              <InputField name="email" type="email" autoComplete="off" />
              <ErrorMessage name="email">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </InputWrapper>

            <InputWrapper>
              <IconContext.Provider
                value={{
                  color: "#dd571c",
                  style: {
                    verticalAlign: "middle",
                    marginBottom: "4px",
                    marginRight: "4px",
                  },
                }}
              >
                <Label htmlFor="password">
                  <AiOutlineLock />
                  Password
                </Label>
              </IconContext.Provider>
              <InputField name="password" type="password" />
              <ErrorMessage name="password">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </InputWrapper>

            <Button type="submit" disabled={!isValid || !dirty}>
              Login
            </Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;

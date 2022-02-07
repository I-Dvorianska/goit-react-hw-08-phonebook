import { Formik, ErrorMessage } from "formik";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { BackgroundIcons } from "../../components/BackgroundsIcons/BackgroundsIcons";
import { Toaster } from "react-hot-toast";
import { IconContext } from "react-icons";
import { registerNewUser } from "../../redux/Users/usersOperation";
import { useDispatch } from "react-redux";
import {
  StyledForm,
  InputWrapper,
  Label,
  InputField,
  Error,
  Button,
} from "./RegisterPage.styled";

const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = "Required!";
  } else if (values.userName.length > 15) {
    errors.userName = "Must be 15 characters or less";
  }

  if (!values.userPassword) {
    errors.userPassword = "Required!";
  } else if (values.userPassword.length < 7) {
    errors.userPassword = "Must be 7 characters or more";
  } else if (values.userPassword.length > 12) {
    errors.userPassword = "Must be 20 characters or less";
  }

  if (!values.userPasswordConfirm) {
    errors.userPasswordConfirm = "Required!";
  } else if (values.userPasswordConfirm !== values.userPassword) {
    errors.userPasswordConfirm = "Password and confirm password don't match";
  }

  if (!values.userEmail) {
    errors.userEmail = "Required!";
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
    <>
      <BackgroundIcons />
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
                <Label htmlFor="userName">
                  <AiOutlineUser /> Name
                </Label>
              </IconContext.Provider>
              <InputField name="userName" type="text" autoComplete="off" />
              <ErrorMessage name="userName">
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
                <Label htmlFor="userEmail">
                  <AiOutlineMail /> Email
                </Label>
              </IconContext.Provider>
              <InputField name="userEmail" type="email" autoComplete="off" />
              <ErrorMessage name="userEmail">
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
                <Label htmlFor="userPassword">
                  <AiOutlineLock />
                  Password
                </Label>
              </IconContext.Provider>
              <InputField name="userPassword" type="password" />
              <ErrorMessage name="userPassword">
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
                <Label htmlFor="userPasswordConfirm">
                  <AiOutlineLock />
                  Confirm password
                </Label>
              </IconContext.Provider>
              <InputField name="userPasswordConfirm" type="password" />
              <ErrorMessage name="userPasswordConfirm">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </InputWrapper>

            <Button type="submit" disabled={!isValid || !dirty}>
              Register now
            </Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;

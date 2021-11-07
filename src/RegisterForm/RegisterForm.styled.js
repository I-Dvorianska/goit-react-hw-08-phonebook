import styled from "@emotion/styled";
import { Field, Form } from "formik";

export const StyledForm = styled(Form)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "100px",
});

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  height: 80px;
  :not(:first-of-type) {
    margin-top: 20px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
`;

export const InputField = styled(Field)({
  padding: "8px 10px",
  maxWidth: "100%",
  fontSize: "14px",
});

export const Error = styled.div`
  color: #dd571c;
  font-size: 12px;
  margin-top: 2px;
`;

export const Button = styled.button`
  padding: 6px 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  background-color: #dd571c;
  border: 1px solid #dd571c;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
  :disabled {
    background-color: #ccc;
    border-color: #ccc;
    &:hover {
      cursor: auto;
    }
  }
`;

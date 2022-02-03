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
  font-size: 16px;
  margin-bottom: 4px;
`;

export const InputField = styled(Field)({
  padding: "8px 10px",
  maxWidth: "100%",
  fontSize: "14px",
});

export const Error = styled.div`
  color: #c50000;
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 8px 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  background-color: #e36414;
  border: 1px solid #e36414;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Encode Sans Condensed";
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  :disabled {
    background-color: #ccc;
    border-color: #ccc;
    &:hover {
      cursor: auto;
      transform: scale(1);
    }
  }
`;

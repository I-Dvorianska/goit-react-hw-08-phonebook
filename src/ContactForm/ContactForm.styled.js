import styled from "@emotion/styled";
import { Field, Form } from "formik";

export const StyledForm = styled(Form)({
  display: "inline-flex",
  flexDirection: "column",
  padding: "0px 30px",
  border: "1px solid #ccc",
  borderRadius: "4px",
});

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 4px;
  margin-top: 20px;
`;

export const Input = styled(Field)({
  padding: "8px 10px",
  maxWidth: "100%",
  fontSize: "14px",
});

export const Button = styled.button`
  padding: 8px 10px;
  margin: 20px auto 20px auto;
  width: fit-content;

  color: #fff;
  background-color: #e36414;
  border: 1px solid #e36414;
  border-radius: 2px;
  font-size: 14px;
  font-family: "Encode Sans Condensed";
  font-weight: 600;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Error = styled.div`
  color: #c50000;
  font-size: 14px;
`;

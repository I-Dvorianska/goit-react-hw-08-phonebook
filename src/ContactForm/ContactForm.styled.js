import styled from "@emotion/styled";
import { Field, Form } from "formik";

export const StyledForm = styled(Form)({
  display: "inline-flex",
  flexDirection: "column",
  marginLeft: "40px",
  padding: "30px",
  border: "1px solid #ccc",
  borderRadius: "4px",
});

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
`;

export const Input = styled(Field)({
  padding: "8px 10px",
  maxWidth: "100%",
  fontSize: "14px",
  marginBottom: "20px",
});

export const Button = styled.button`
  padding: 6px 8px;

  margin-bottom: 20px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  background-color: #dd571c;
  border: 1px solid #dd571c;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #ee9b4d;
    border-color: #ee9b4d;
  }
`;

export const Error = styled.div`
  color: #dd571c;
  font-size: 12px;
  margin-top: 2px;
`;

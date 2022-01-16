import styled from "@emotion/styled";

export const TableHeader = styled.th`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  :not(:first-of-type) {
    margin-left: 65px;
  }
`;

export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 4px 2px;
  border-radius: 2px;
  :nth-of-type(2n + 1) {
    background-color: beige;
  }
`;

export const Button = styled.button`
  padding: 4px 6px;
  display: block;
  margin-left: auto;
  margin-bottom: 5px;
  width: fit-content;
  color: #fff;
  background-color: #dd571c;
  border: 1px solid #dd571c;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 600;
  &:disabled {
    background-color: #ccc;
    border-color: #ccc;
  }
  &:hover {
    cursor: pointer;
    background-color: #ee9b4d;
    border-color: #ee9b4d;
  }
`;

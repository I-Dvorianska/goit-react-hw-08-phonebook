import styled from "@emotion/styled";

export const TableHeader = styled.th`
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  :not(:first-of-type) {
    margin-left: 65px;
  }
`;

export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 6px 4px;
  border-radius: 2px;
  :nth-of-type(2n + 1) {
    background-color: #ffffff;
  }
  :nth-of-type(even) {
    background-color: #ffd193a1;
  }
`;

export const Button = styled.button`
  padding: 6px 8px;
  display: block;
  margin-left: auto;
  margin-bottom: 5px;
  width: fit-content;

  color: #fff;
  background-color: #e36414;
  border: 1px solid #e36414;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 600;
  font-family: "Encode Sans Condensed";
  &:disabled {
    background-color: #ccc;
    border-color: #ccc;

    &:hover {
      transform: scale(1);
      cursor: auto;
    }
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

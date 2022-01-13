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

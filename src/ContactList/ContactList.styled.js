import styled from "@emotion/styled";

export const List = styled.ul`
  list-style-type: circle;
  margin-left: 20px;
`;

export const ListItem = styled.li`
  margin-top: 8px;
  font-size: 18px;
`;

export const Button = styled.button`
  padding: 4px;
  margin-left: 8px;

  font-size: 14px;

  color: #fff;
  background-color: #dd571c;
  border: 1px solid #dd571c;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: #ee9b4d;
    border-color: #ee9b4d;
  }
`;

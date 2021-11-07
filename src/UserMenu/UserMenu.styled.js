import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  padding: 8px 12px;
  margin-left: 20px;
  font-weight: 600;
  font-size: 16px;
  height: fit-content;
  color: #fff;
  background-color: #f5c181;
  border: 1px solid #fff;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Name = styled.p`
  margin: 0px;
  font-weight: 600;
  font-size: 20px;
  color: #fff;
`;

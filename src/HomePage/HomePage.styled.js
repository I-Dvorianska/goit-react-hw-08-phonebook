import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const Title = styled.h1`
  text-align: center;
  margin-top: 280px;
  font-size: 50px;
  color: #020202;
  text-shadow: 2px 2px #333333;
`;

export const FirstImg = styled.img`
  position: absolute;
  border-radius: 2px;
  top: 150px;
  left: 500px;
  width: 200px;
  height: 110px;
  transition-property: transform, box-shadow;
  transition-duration: 800ms;

  &:hover {
    transform: scale(1.2);
    -webkit-box-shadow: 0px 2px 12px 5px rgba(0, 0, 0, 0.54);
    box-shadow: 0px 2px 12px 5px rgba(0, 0, 0, 0.54);
  }
`;

export const SecondImg = styled.img`
  position: absolute;
  border-radius: 2px;
  top: 150px;
  left: 130px;
  width: 180px;
  height: 200px;
  transition-property: transform;
  transition-duration: 800ms;

  &:hover {
    transform: scale(1.2);
    -webkit-box-shadow: 0px 2px 12px 5px rgba(0, 0, 0, 0.54);
    box-shadow: 0px 2px 12px 5px rgba(0, 0, 0, 0.54);
  }
`;

export const ThirdImg = styled.img`
  position: absolute;
  border-radius: 2px;
  top: 150px;
  left: 920px;
  width: 200px;
  height: 100px;
  transition-property: transform;
  transition-duration: 800ms;

  &:hover {
    transform: scale(1.2);
    -webkit-box-shadow: 0px 2px 12px 5px rgba(0, 0, 0, 0.54);
    box-shadow: 0px 2px 12px 5px rgba(0, 0, 0, 0.54);
  }
`;

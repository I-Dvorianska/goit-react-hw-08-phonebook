import {
  Title,
  Wrapper,
  FirstImg,
  SecondImg,
  ThirdImg,
} from "./HomePage.styled";
import firstImg from "../images/photomin1.png";
import secondImg from "../images/photomin2.png";
import thirdImg from "../images/photomin3.png";
const HomePage = () => {
  return (
    <Wrapper>
      <FirstImg
        src={`${firstImg}`}
        alt="contacts list"
        width="250px"
        height="150px"
      />
      <SecondImg src={`${secondImg}`} alt="" width="250px" height="150px" />
      <ThirdImg src={`${thirdImg}`} alt="" width="250px" height="150px" />
      <Title> Welcome to Phonebook!</Title>
    </Wrapper>
  );
};

export default HomePage;

import { FaRegAddressBook } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CgPhone } from "react-icons/cg";
import { Title } from "./HomePage.styled";

const HomePage = () => {
  return (
    <>
      <Title> Phonebook</Title>
      <IconContext.Provider
        value={{
          style: {
            zIndex: "-1",
            position: "absolute",
            color: "#cccccc40",
          },
        }}
      >
        <div>
          <CgPhone
            style={{
              right: "50px",
              top: "380px",
              width: "290px",
              height: "290px",
              transform: "rotateZ(-100deg)",
            }}
          />
          <FaRegAddressBook
            style={{
              left: "30px",
              top: "90px",
              width: "290px",
              height: "290px",
            }}
          />
        </div>
      </IconContext.Provider>
    </>
  );
};

export default HomePage;

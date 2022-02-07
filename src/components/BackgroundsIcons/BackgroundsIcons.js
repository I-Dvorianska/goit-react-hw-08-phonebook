import { FaRegAddressBook } from "react-icons/fa";
import { TiPhoneOutline } from "react-icons/ti";
import { CgPhone } from "react-icons/cg";
import { BsPersonCheckFill } from "react-icons/bs";
import { VscPersonAdd } from "react-icons/vsc";
import { IconContext } from "react-icons";

export const BackgroundIcons = () => {
  return (
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
        <FaRegAddressBook
          style={{
            right: "75px",
            top: "200px",
            transform: "rotateZ(-30deg)",
            width: "40px",
            height: "46px",
          }}
        />
        <FaRegAddressBook
          style={{
            left: "280px",
            top: "360px",
            transform: "rotateZ(30deg)",
            width: "90px",
            height: "90px",
          }}
        />
        <TiPhoneOutline
          style={{
            right: "330px",
            top: "600px",
            transform: "rotateZ(90deg)",
            width: "80px",
            height: "80px",
          }}
        />
        <TiPhoneOutline
          style={{
            left: "440px",
            top: "115px",
            transform: "rotateZ(-70deg)",
            width: "60px",
            height: "60px",
          }}
        />
        <CgPhone
          style={{
            left: "80px",
            top: "500",
            width: "50px",
            height: "70px",
          }}
        />
        <CgPhone
          style={{
            right: "325px",
            top: "110px",
            width: "60px",
            height: "60px",
            transform: "rotateZ(-98deg)",
          }}
        />
        <BsPersonCheckFill
          style={{
            left: "90px",
            top: "150px",
            width: "120px",
            height: "120px",
            transform: "rotateZ(-30deg)",
          }}
        />
        <BsPersonCheckFill
          style={{
            right: "120px",
            top: "460",
            width: "70px",
            height: "70px",
            transform: "rotateZ(-10deg)",
          }}
        />
        <VscPersonAdd
          style={{
            right: "250px",
            top: "280px",
            width: "130px",
            height: "130px",
            transform: "rotateZ(10deg)",
          }}
        />
        <VscPersonAdd
          style={{
            left: "330px",
            top: "580px",
            width: "90px",
            height: "90px",
          }}
        />
      </div>
    </IconContext.Provider>
  );
};

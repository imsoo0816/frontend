import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as H2 from "../styles/BookHeaderStyles";
import Hanger from "../assets/hanger.png";
import MingleLogo from "../assets/minglelogowhite1.png";

const Book = () => {
  const navigate = useNavigate();

  const HangerPage = () => {
    navigate("/bookitem");
  };

  return (
    <H2.Container>
      <H2.Hanger>
        <div id="Hanger">
          <img
            src={Hanger}
            onClick={HangerPage}
            alt="Back Button"
            style={{ height: "30px", width: "35px" }}
          />
        </div>
      </H2.Hanger>
      <H2.MingleLogo>
        <img id="MingleLogo" src={MingleLogo}></img>
      </H2.MingleLogo>
    </H2.Container>
  );
};
export default Book;

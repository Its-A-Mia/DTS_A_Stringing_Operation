import React from "react";
import { useState } from "react";
import Scheduling from "./Scheduling";
import Tension from "../SchedulingComponents/Tension";
import NameAndContact from "../SchedulingComponents/NameAndContact";
import Optionals from "../SchedulingComponents/Optionals";
import StringType from "../SchedulingComponents/StringType";
import ExtraComments from "../SchedulingComponents/ExtraComments";
import OpenAptOption from "../SchedulingComponents/NavComponents/OpenAptOption";
import BackBtn from "../SchedulingComponents/NavComponents/BackBtn";
import NextBtn from "../SchedulingComponents/NavComponents/NextBtn";
import ReviewAndSubmit from "../SchedulingComponents/NavComponents/ReviewAndSubmit";
import OpenAptOptionsMenu from "../SchedulingComponents/NavComponents/OpenAptOptionsMenu";
import ReviewAndSubmitBtn from "../SchedulingComponents/NavComponents/ReviewAndSubmitBtn";
import StartBtn from "../HomeComponents/StartBtn";
import Racket from "../../images/home-racket.png";

const Home = (props) => {
  // grabs input values from forms as states to be shown on review and submit section (default values are passed in if applicable)
  // string type input values
  const [mainsStringType, setMainsStringType] = useState("RPMBlast, 17 ga.");
  const [crossesStringType, setCrossesStringType] = useState(
    "RPMBlast, 17 ga."
  );

  // tension input values
  const [mainsTensionInput, setMainsTensionInput] = useState("");
  const [mainsUnit, setMainsUnit] = useState("lbs");
  const [crossesTensionInput, setCrossesTensionInput] = useState("");
  const [crossesUnit, setCrossesUnit] = useState("lbs");

  // optionals input values
  const [stencilInput, setStencilInput] = useState("No");
  const [regripInput, setRegripInput] = useState("No");

  // name and contact input values
  const [nameInput, setNameInput] = useState("");
  const [phoneNumberInput, setPhoneNumberInput] = useState(" ");
  const [emailInput, setEmailInput] = useState("");

  // scheduling input values
  const [dropOffInput, setDropOffInput] = useState("");
  const [pickUpInput, setPickUpInput] = useState("");

  // comments input values
  const [commentsInput, setCommentsInput] = useState("");

  //hides apt options menu if wrapper is clicked
  const handleChangeOptionBtnsWrapperClick = (e) => {
    document.documentElement.style.setProperty("--aptBackerHeight", `${26}%`);
    document.documentElement.style.setProperty(
      "--reviewAndSubmitBtnBottom",
      `${25}%`
    );
  };

  const pos = { x: 0, y: 0 };

  const saveCursorPosition = function(x, y) {
    pos.x = (x / window.innerWidth).toFixed(2);
    pos.y = (y / window.innerHeight).toFixed(2);

    const scaleValue = 5;
    //vvv converts raw positions to usable degress and scaled up to create more movement vvv
    //for y position
    if (pos.y >= 0.5 && pos.x < 0.5) {
      pos.y = scaleValue * (0.5 - pos.y);
    } else if (pos.y < 0.5 && pos.x >= 0.5) {
      pos.y = -scaleValue * (0.5 - pos.y);
    } else if (pos.y < 0.5 && pos.x < 0.5) {
      pos.y = scaleValue * (0.5 - pos.y);
    } else {
      pos.y = -scaleValue * (0.5 - pos.y);
    }

    //for x position
    if (pos.x < 0.5) {
      pos.x = scaleValue * (0.5 - pos.x);
    } else {
      pos.x = -(scaleValue * (pos.x - 0.5));
    }

    //defines custom properties in styles
    document.documentElement.style.setProperty("--mousePosX", pos.x + "deg");
    document.documentElement.style.setProperty("--mousePosY", pos.y + "deg");
  };

  const handleStartBtnClick = () => {
    const racketWrapper = document.getElementById("racketWrapper");
    const greeting = document.getElementById("greeting");
    const home = document.getElementById("homeBackground");
    racketWrapper.style.opacity = 0; //make the racket and startbtn disappear
    setTimeout(() => {
      racketWrapper.style.display = "none";
      greeting.style.display = "block";
    }, 1000);
    // ^^^ ensures the racketWrapper doesn't mess with the appearing divs, then starts phase two starting 1 second ^^^
    setTimeout(() => {
      home.style.filter = `brightness(${30}%)`;
    }, 2000); //dims background starting 2 seconds
    setTimeout(() => {
      greeting.style.opacity = 0;
      setTimeout(() => {
        greeting.style.display = "none";
      }, 1000);
    }, 4500); //removes greeting starting 4.5s
    setTimeout(() => {
      document.documentElement.style.setProperty("--aptOptionsDisplay", "flex");
      document.documentElement.style.setProperty(
        "--reviewAndSubmitBtnDisplay",
        "block"
      );
    }, 5000); //shows aptOptions starting 5s
  };

  return (
    <div className="home" id="home">
      <div className="homeBackground" id="homeBackground"></div>

      {/* Phase one */}
      <main className="mainContainer">
        <div
          className="racketWrapper"
          id="racketWrapper"
          onMouseMove={(e) => {
            saveCursorPosition(e.clientX, e.clientY);
          }}
        >
          <div className="racket">
            <img src={Racket} alt=""></img>
          </div>
          <StartBtn handleStartBtnClick={handleStartBtnClick} />
        </div>
      </main>

      {/* Phase two */}
      <div className="greeting" id="greeting">
        Let's set up an appointment
      </div>

      {/* review and submit btn */}

      {/* Houses all necessary mechanisms for Options */}
      <div className="appointmentOptionsContainer">
        <div className="appointmentOptionsBacker">
          {/* Houses buttons to navigate optiions */}
          <div className="changeOptionBtnsWrapper">
            {/* passing props into OpenAptOption: className, titles, which displays to turn to 'none', which option buttons to focus (changes color to black). Initial Color is the landing option */}
            <OpenAptOption
              btnIdName="aptOptnBtn"
              btnClassName="stringTypeOptnBtn"
              title="String"
              displayNoneArr={[
                "--tensionDisplay",
                "--optionalsDisplay",
                "--nameAndContactDisplay",
                "--schedulingDisplay",
                "--commentsDisplay",
                "--reviewAndSubmitDisplay",
              ]}
              unfocusArr={[
                "--nameAndContactColor",
                "--tensionColor",
                "--optionalsColor",
                "--schedulingColor",
                "--commentsColor",
                "--reviewAndSubmitColor",
              ]}
              display="--stringTypeDisplay"
              toFocus="--stringTypeColor"
              initialColor="black"
            />
            {">"}
            <OpenAptOption
              btnIdName="aptOptnBtn"
              btnClassName="tensionOptnBtn"
              title="Tension"
              displayNoneArr={[
                "--stringTypeDisplay",
                "--optionalsDisplay",
                "--nameAndContactDisplay",
                "--schedulingDisplay",
                "--commentsDisplay",
                "--reviewAndSubmitDisplay",
              ]}
              unfocusArr={[
                "--nameAndContactColor",
                "--stringTypeColor",
                "--optonalsColor",
                "--schedulingColor",
                "--commentsColor",
                "--reviewAndSubmitColor",
              ]}
              display="--tensionDisplay"
              toFocus="--tensionColor"
            />
            {">"}
            <OpenAptOption
              btnIdName="aptOptnBtn"
              btnClassName="optionalsOptnBtn"
              title="Optionals"
              displayNoneArr={[
                "--tensionDisplay",
                "--stringTypeDisplay",
                "--nameAndContactDisplay",
                "--schedulingDisplay",
                "--commentsDisplay",
                "--reviewAndSubmitDisplay",
              ]}
              unfocusArr={[
                "--nameAndContactColor",
                "--tensionColor",
                "--stringTypeColor",
                "--schedulingColor",
                "--commentsColor",
                "--reviewAndSubmitColor",
              ]}
              display="--optionalsDisplay"
              toFocus="--optionalsColor"
            />
            {">"}
            <OpenAptOption
              btnIdName="aptOptnBtn"
              btnClassName="nameAndContactOptnBtn"
              title="Contact"
              displayNoneArr={[
                "--tensionDisplay",
                "--optionalsDisplay",
                "--stringTypeDisplay",
                "--schedulingDisplay",
                "--commentsDisplay",
                "--reviewAndSubmitDisplay",
              ]}
              unfocusArr={[
                "--stringTypeColor",
                "--tensionColor",
                "--optionalsColor",
                "--schedulingColor",
                "--commentsColor",
                "--reviewAndSubmitColor",
              ]}
              display="--nameAndContactDisplay"
              toFocus="--nameAndContactColor"
            />
            {">"}
            <OpenAptOption
              btnIdName="aptOptnBtn"
              btnClassName="schedulingOptnBtn"
              title="Scheduling"
              displayNoneArr={[
                "--tensionDisplay",
                "--optionalsDisplay",
                "--nameAndContactDisplay",
                "--stringTypeDisplay",
                "--commentsDisplay",
                "--reviewAndSubmitDisplay",
              ]}
              unfocusArr={[
                "--nameAndContactColor",
                "--tensionColor",
                "--optionalsColor",
                "--stringTypeColor",
                "--commentsColor",
                "--reviewAndSubmitColor",
              ]}
              display="--schedulingDisplay"
              toFocus="--schedulingColor"
            />
            {">"}
            <OpenAptOption
              btnClassName="commentsOptnBtn"
              btnIdName="aptOptnBtn"
              title="Requests"
              displayNoneArr={[
                "--tensionDisplay",
                "--optionalsDisplay",
                "--nameAndContactDisplay",
                "--schedulingDisplay",
                "--stringTypeDisplay",
                "--reviewAndSubmitDisplay",
              ]}
              unfocusArr={[
                "--nameAndContactColor",
                "--tensionColor",
                "--optionalsColor",
                "--schedulingColor",
                "--stringTypeColor",
                "--reviewAndSubmitColor",
              ]}
              display="--commentsDisplay"
              toFocus="--commentsColor"
            />
            &emsp; &emsp;
            <ReviewAndSubmitBtn
              btnClassName="reviewAndSubmitBtn"
              btnIdName="aptOptnBtn"
              displayNoneArr={[
                "--tensionDisplay",
                "--optionalsDisplay",
                "--nameAndContactDisplay",
                "--schedulingDisplay",
                "--stringTypeDisplay",
                "--commentsDisplay",
              ]}
              unfocusArr={[
                "--nameAndContactColor",
                "--tensionColor",
                "--optionalsColor",
                "--schedulingColor",
                "--stringTypeColor",
                "--commentsColor",
              ]}
              display="--reviewAndSubmitDisplay"
              toFocus="--reviewAndSubmitColor"
              // passing in tension values
              mainsTensionInput={mainsTensionInput}
              crossesTensionInput={crossesTensionInput}
              // name and contact input values
              nameInput={nameInput}
              phoneNumberInput={phoneNumberInput}
              emailInput={emailInput}
              // scheduling input values
              dropOffInput={dropOffInput}
              pickUpInput={pickUpInput}
              // comments input value
              commentsInput={commentsInput}
            />
          </div>
        </div>
        {/* Houses the option content; composed of four main components */}
        <div
          className="stringTypeWrapper"
          id="aptOptionWrapper"
          onClick={(e) => handleChangeOptionBtnsWrapperClick()}
        >
          <OpenAptOptionsMenu />
          <BackBtn
            toFocus="--commentsColor"
            previousOption="--commentsDisplay"
            currentOption="--stringTypeDisplay"
            unfocus="--stringTypeColor"
          />
          <StringType
            setMainsStringType={setMainsStringType}
            setCrossesStringType={setCrossesStringType}
          />
          <NextBtn
            toFocus="--tensionColor"
            nextOption="--tensionDisplay"
            currentOption="--stringTypeDisplay"
            unfocus="--stringTypeColor"
          />
        </div>
        <div
          className="tensionWrapper"
          id="aptOptionWrapper"
          onClick={(e) => handleChangeOptionBtnsWrapperClick()}
        >
          <OpenAptOptionsMenu />
          <BackBtn
            toFocus="--stringTypeColor"
            previousOption="--stringTypeDisplay"
            currentOption="--tensionDisplay"
            unfocus="--tensionColor"
          />
          <Tension
            setMainsTensionInput={setMainsTensionInput}
            setMainsUnit={setMainsUnit}
            mainsUnit={mainsUnit}
            setCrossesTensionInput={setCrossesTensionInput}
            setCrossesUnit={setCrossesUnit}
            crossesUnit={crossesUnit}
          />
          <NextBtn
            toFocus="--optionalsColor"
            nextOption="--optionalsDisplay"
            currentOption="--tensionDisplay"
            unfocus="--tensionColor"
          />
        </div>
        <div
          className="optionalsWrapper"
          id="aptOptionWrapper"
          onClick={(e) => handleChangeOptionBtnsWrapperClick()}
        >
          <OpenAptOptionsMenu />
          <BackBtn
            toFocus="--tensionColor"
            previousOption="--tensionDisplay"
            currentOption="--optionalsDisplay"
            unfocus="--optionalsColor"
          />
          <Optionals
            stencilInput={stencilInput}
            regripInput={regripInput}
            setStencilInput={setStencilInput}
            setRegripInput={setRegripInput}
          />
          <NextBtn
            toFocus="--nameAndContactColor"
            nextOption="--nameAndContactDisplay"
            currentOption="--optionalsDisplay"
            unfocus="--optionalsColor"
          />
        </div>
        <div
          className="nameAndContactWrapper"
          id="aptOptionWrapper"
          onClick={(e) => handleChangeOptionBtnsWrapperClick()}
        >
          <OpenAptOptionsMenu />
          <BackBtn
            toFocus="--optionalsColor"
            previousOption="--optionalsDisplay"
            currentOption="--nameAndContactDisplay"
            unfocus="--nameAndContactColor"
          />
          <NameAndContact
            setNameInput={setNameInput}
            setPhoneNumberInput={setPhoneNumberInput}
            setEmailInput={setEmailInput}
          />
          <NextBtn
            toFocus="--schedulingColor"
            nextOption="--schedulingDisplay"
            currentOption="--nameAndContactDisplay"
            unfocus="--nameAndContactColor"
          />
        </div>
        <div
          className="schedulingWrapper"
          id="aptOptionWrapper"
          onClick={(e) => handleChangeOptionBtnsWrapperClick()}
        >
          <OpenAptOptionsMenu />
          <BackBtn
            toFocus="--nameAndContactColor"
            previousOption="--nameAndContactDisplay"
            currentOption="--schedulingDisplay"
            unfocus="--schedulingColor"
          />
          <Scheduling
            setDropOffInput={setDropOffInput}
            setPickUpInput={setPickUpInput}
          />
          <NextBtn
            toFocus="--commentsColor"
            nextOption="--commentsDisplay"
            currentOption="--schedulingDisplay"
            unfocus="--schedulingColor"
          />
        </div>
        <div
          className="commentsWrapper"
          id="aptOptionWrapper"
          onClick={(e) => handleChangeOptionBtnsWrapperClick()}
        >
          <OpenAptOptionsMenu />
          <BackBtn
            toFocus="--schedulingColor"
            previousOption="--schedulingDisplay"
            currentOption="--commentsDisplay"
            unfocus="--commentsColor"
          />
          <ExtraComments setCommentsInput={setCommentsInput} />
          <NextBtn
            toFocus="--stringTypeColor"
            nextOption="--stringTypeDisplay"
            currentOption="--commentsDisplay"
            unfocus="--commentsColor"
          />
        </div>
        <div className="reviewAndSubmitWrapper" id="aptOptionWrapper">
          <ReviewAndSubmit
            // passing in string type values
            mainsStringType={mainsStringType}
            crossesStringType={crossesStringType}
            // passing in tension values
            mainsTensionInput={mainsTensionInput}
            mainsUnit={mainsUnit}
            crossesTensionInput={crossesTensionInput}
            crossesUnit={crossesUnit}
            // passing in optionals values
            stencilInput={stencilInput}
            regripInput={regripInput}
            // name and contact input values
            nameInput={nameInput}
            phoneNumberInput={phoneNumberInput}
            emailInput={emailInput}
            // scheduling input values
            dropOffInput={dropOffInput}
            pickUpInput={pickUpInput}
            // comments input value
            commentsInput={commentsInput}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./ToiletFirstFloor.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useSound from "use-sound";
import error from "../SoundEffects/error.mp3";
import LightOn from "../images/LightOn.png";
import LightOff from "../images/LightOff.png";
import FanOff from "../images/FanOff.png";
import FanOn from "../images/FanOn.png";
import HairDry_D from "../images/HairDry_D.png";
import HairDryOff from "../images/HairDryOff.png";
import HairDryOn from "../images/HairDryOn.png";
import FanOff_D from "../images/FanOff_D.png"
import LightOff_D from "../images/LightOff_D.png"
import { SwalBreakerOff, SwalDisconnected } from "../../../Components/SwalModules";
import { useNavigate } from "react-router-dom";

const ToiletFirstFloor = (props) => {
  const navigate = useNavigate();
  const [errorSound] = useSound(error);
  const [hover, setHover] = useState("");
  const disconnectHandler = (val) => {
    if (val === 7) {
      props.setToiletLight("disconnect");
    }
    if (val === 8) {
      props.setToiletLight02("disconnect");
    }
    if (val === 9) {
      props.setToiletFan("disconnect");
    }
    if (val === 10) {
      props.setToiletLight03("disconnect");
    }
    if (props.rndGroupFour === val) {
      props.setGroupFourCorruptDevice(0);
      props.setGroupFourBreakerType("black");
    }
  };

  const connectHandler = (val) => {
    if (props.rndGroupFour === val && props.groupFourBreakerType === "red") {
      props.setGroupFourBreakerType("black");
      errorSound();
      props.setIsGroupFourBreaker(false);
      SwalBreakerOff()
      props.setFirstFloorTrial(props.firstFloorTrial + 1);
      localStorage.setItem('state-first', JSON.stringify(props.firstFloorTrial +1))
    }
    props.setGroupFourCorruptDevice(val);
    if (val === 7) {
      props.setToiletLight("connected");
    }
    if (val === 8) {
      props.setToiletLight02("connected");
    }
    if (val === 9) {
      props.setToiletFan("connected");
    }
    if (val === 10) {
      props.setToiletLight03("connected");
    }
  };

  return (
    <>
      {props.gamePhaseGroup4 === "toilet" ? (
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),url(${
              process.env.PUBLIC_URL + "/images/FullToiletFirst.png"
            })`,
            height: "100%",
            width: "100%",
            border: "2px dotted white",
          }}
          className="bath-main-div curl"
        >
          {/* image main div .......................  */}
          <div className="d-flex img-div">
            {/* light div ................. */}
            <div
              className={
                props.isGroupFourBreaker === true &&
                props.toiletLight === "connected"
                  ? "div-light01-firstFloor-on"
                  : "div-light01-firstFloor"
              }
            >
              <img
                src={
                  props.isGroupFourBreaker === true &&
                  props.toiletLight === "connected"
                  
                    ? LightOn
                    : props.toiletLight === "disconnect"
                    ? LightOff_D
                    : LightOff
                    
                    // ? LightOff : props.toiletLight === "disconnect" ? LightOff_D
                    // : LightOff
                }
                // className={
                //   props.toiletLight === "disconnect" ? "disconnected" : ""
                // }
                style={{
                  height:
                    props.isGroupFourBreaker === true &&
                    props.toiletLight === "connected"
                      ? "24vh"
                      : "24vh",
                }}
                alt=""
              />
              <>
                {props.toiletLight === "disconnect" ? (
                  <button
                    className="btn btn-danger btn-sm active btn-font "
                    onClick={() => connectHandler(7)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    className="btn btn-success btn-sm active btn-font"
                    onClick={() => disconnectHandler(7)}
                  >
                    Disconnect
                  </button>
                )}
              </>
            </div>
            {/* light 02 div ................. */}
            <div
              className={
                props.isGroupFourBreaker === true &&
                props.toiletLight02 === "connected"
                  ? "div-light02-firstFloor-on"
                  : "div-light02-firstFloor"
              }
            >
              <img
                src={
                  props.isGroupFourBreaker === true &&
                  props.toiletLight02 === "connected"
                    ? HairDryOn
                    : props.toiletLight02 === "disconnect"
                    ? HairDry_D
                    : HairDryOff
                }
                // className={
                //   props.toiletLight02 === "disconnect" ? "disconnected" : ""
                // }
                style={{
                  height:
                    props.isGroupFourBreaker === true &&
                    props.toiletLight02 === "connected"
                      ? "12vh"
                      : "12vh",
                }}
                alt=""
              />
              <>
                {props.toiletLight02 === "disconnect" ? (
                  <button
                    className="btn btn-danger btn-sm active btn-font set-btn-top"
                    onClick={() => connectHandler(8)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    className="btn btn-success btn-sm active btn-font set-btn-top"
                    onClick={() => disconnectHandler(8)}
                  >
                    Disconnect
                  </button>
                )}
              </>
            </div>



 {/* start my code 12/29...................... */}

 <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-btns-first-toilet"}

              onMouseEnter={() => {
                // setBtnPhase("attic")
                // setfirstBtn('')
              }}
            
              // onMouseLeave={()=> setBtnPhase("")}
              onClick={() => {
                // setShowAttic(true)
                navigate("/first-floor");
              }}
            >
         Go Back
            </button>
            {/* end my code 12/29...................... */}




            {/* fan div .............. */}
            <div className={"div-fan-On-firstFloor "}>
              <img
                src={
                  props.isGroupFourBreaker === true &&
                  props.toiletFan === "connected"
                    // ? FanOn
                    // : FanOff
                    ? FanOn : props.toiletFan === "disconnect" ? FanOff_D
                    : FanOff
                }
                alt=""
                // className={
                //   props.toiletFan === "disconnect" ? "disconnected" : ""
                // }
                style={{
                  height:
                    props.isGroupFourBreaker === true &&
                    props.toiletFan === "connected"
                      ? "12vh"
                      : "12vh",
                }}
              />

              <>
                {props.toiletFan === "disconnect" ? (
                  <button
                    className="btn btn-danger btn-sm active mt-4 ms-1 btn-font"
                    onClick={() => connectHandler(9)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    className="btn btn-success btn-sm active mt-4 ms-1 btn-font"
                    onClick={() => disconnectHandler(9)}
                  >
                    Disconnect
                  </button>
                )}
              </>
            </div>
            {/* light 03 div ................. */}
            <div
              className={
                props.isGroupFourBreaker === true &&
                props.toiletLight03 === "connected"
                  ? "div-light03-firstFloor-on"
                  : "div-light03-firstFloor"
              }
            >
              <img
                src={
                  props.isGroupFourBreaker === true &&
                  props.toiletLight03 === "connected"
                  
                    ? LightOn
                    : props.toiletLight03 === "disconnect"
                    ? LightOff_D
                    : LightOff
                  // ? LightOff : props.toiletLight03 === "disconnect" ? LightOff_D
                  // : LightOff
                }
                // className={
                //   props.toiletLight03 === "disconnect" ? "disconnected" : ""
                // }
                style={{
                  height:
                    props.isGroupFourBreaker === true &&
                    props.toiletLight03 === "connected"
                      ? "24vh"
                      : "24vh",
                }}
                alt=""
              />
              <>
                {props.toiletLight03 === "disconnect" ? (
                  <button
                    className="btn btn-danger btn-sm active btn-font "
                    onClick={() => connectHandler(10)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    className="btn btn-success btn-sm active btn-font"
                    onClick={() => disconnectHandler(10)}
                  >
                    Disconnect
                  </button>
                )}
              </>
            </div>
          </div>
          <div className="position-heading-bottom">
            <h1 className="heading-bottom">Toilet</h1>
          </div>
        </div>
      ) : (
        <div
          style={{ border: "2px solid white", height: "100%", width: "106%" }}
        >
          <div
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/BathFirstFloor.png"
              })`,
              height: "100%",
              width: "100%",
              border: "2px solid white",
            }}
            className="bath-main-div disconnected"
          ></div>
        </div>
      )}
    </>
  );
};

export default ToiletFirstFloor;

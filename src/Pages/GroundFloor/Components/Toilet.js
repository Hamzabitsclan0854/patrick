import React from "react";
import FanOff from "../images/FanOff.png";
import FanOff_D from "../images/FanOff_D.png";
import FanOn from "../images/FanOn.png";
import bathBulbOff from "../images/bathBulbOff.png";
import bathBulbOff_D from "../images/bathBulbOff_D.png";
import bathBulbOn from "../images/bathBulbOn.png";

import "./Toilet.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useSound from "use-sound";
import error from "../SoundEffects/error.mp3";
import { SwalBreakerOff, SwalDisconnected } from "../../Components/SwalModules";
import { useNavigate } from "react-router-dom";


const Toilet = (props) => {
  const navigate = useNavigate();

  const [errorSound] = useSound(error);

  const [hover, setHover] = useState("");

  const disconnectHandler = (val) => {
    if (val === 1) {
      props.setToiletFan("disconnect");
    }
    if (val === 2) {
      props.setToiletLight("disconnect");
    }
    if (props.completeRnd === val) {
      props.setCompleteCorruptDevice(0);
      props.setFirstGroupBreakerType("black");
    }
  };

  const connectHandler = (val) => {
    if (props.completeRnd === val && props.firstGroupBreakerType === 'red') {
      props.setFirstGroupBreakerType("black");

      errorSound();
      props.setIsFirstGroupBreaker(false);
      SwalBreakerOff()
      props.setGroundFloorTrial(props.groundFloorTrial + 1);
      localStorage.setItem('state', JSON.stringify(props.groundFloorTrial +1))

      console.log("trial of toilet",props.groundFloorTrial);
    }
    props.setCompleteCorruptDevice(val);
    if (val === 1) {
      props.setToiletFan("connected");
    }
    if (val === 2) {
      props.setToiletLight("connected");
    }
   
   
  };
//   useEffect(() => {
//    if (props.toiletFan === "disconnect" && props.toiletLight === "disconnect") {
//  SwalDisconnected()
//    }
//   }, [props.toiletFan, props.toiletLight])
  


  return (
    <>
      {/* {props.gamePhase === "toilet" ? ( */}
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/images/wash-room-ground.png"})`,
            height: "100%",
            width: "100%",
            border:'2px dotted white',
          }}
          className="bath-main-div curl"
        >
          {/* image main div .......................  */}
          <div className=" d-flex img-div">
            {/* fan div .............. */}
            <div className={"div-fan-On "}>
              <img
                src={
                  props.isFirstGroupBreaker === true &&
                  props.toiletFan === "connected"
                    ? FanOn
                    : props.toiletFan === "disconnect"
                    ? FanOff_D
                    : FanOff
                }
                alt=""
                className={
                  props.toiletFan === "disconnect" ? "" : ""
                }
                style={{
                  height:
                    props.isFirstGroupBreaker === true &&
                    props.toiletFan === "connected"
                      ? "16vh"
                      : "16vh",
                }}
                // onMouseEnter={() => setHover("fan")}
                // onMouseLeave={() => setHover("")}
              />

              <>
                {props.toiletFan === "disconnect" ? (
                  <button
                    // onMouseEnter={() => setHover("fan")}
                    // onMouseLeave={() => setHover("")}
                    className="btn btn-danger btn-sm active mt-4 ms-1 btn-font"
                    onClick={() => connectHandler(1)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    // onMouseEnter={() => setHover("fan")}
                    // onMouseLeave={() => setHover("")}
                    className="btn btn-success btn-sm active mt-4 ms-1 btn-font"
                    onClick={() => disconnectHandler(1)}
                  >
                    Disconnect
                  </button>
                )}
              </>
            </div>

              {/* start my code 12/29...................... */}

         <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-btns-toilet-back"}

              onMouseEnter={() => {
                // setBtnPhase("attic")
                // setfirstBtn('')
              }}
            
              // onMouseLeave={()=> setBtnPhase("")}
              onClick={() => {
                // setShowAttic(true)
                navigate("/ground-floor");
              }}
            >
           Go Back
            </button>
            {/* end my code 12/29...................... */}

            {/* light div ................. */}
            <div
              className={
                props.isFirstGroupBreaker === true &&
                props.toiletLight === "connected"
                  ? "div-light-On"
                  : "div-light"
              }
            >
              {/* {hover === "light" ? ( */}
              <>
                {props.toiletLight === "disconnect" ? (
                  <button
                    // onMouseEnter={() => setHover("light")}
                    // onMouseLeave={() => setHover("")}
                    className="btn btn-danger btn-sm active btn-font "
                    onClick={() => connectHandler(2)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    // onMouseEnter={() => setHover("light")}
                    // onMouseLeave={() => setHover("")}
                    className="btn btn-success btn-sm active btn-font"
                    onClick={() => disconnectHandler(2)}
                  >
                    Disconnect
                  </button>
                )}
              </>
              {/* ) : (
            ""
          )} */}
              <img
                src={
                  props.isFirstGroupBreaker === true &&
                  props.toiletLight === "connected"
                    ? bathBulbOn
                    : props.toiletLight === "disconnect"
                    ? bathBulbOff_D
                    : bathBulbOff
                }
                className={
                  props.toiletLight === "disconnect" ? "" : ""
                }
                style={{
                  height:
                    props.isFirstGroupBreaker === true &&
                    props.toiletLight === "connected"
                      ? "28vh"
                      : "28vh",
                }}
                alt=""
              />
            </div>
          </div>
          <div className="position-heading-bottom">
            <h1 className='heading-bottom' >
                Toilet
            </h1>
          </div>
        </div>
       {/* ) : ( */}
       <div style={{border:'2px solid white',  height: "100%",
       width: "106%",}}>
         <div
           style={{
             backgroundImage: `url(${process.env.PUBLIC_URL + "/BathRoom.png"})`,
             height: "100%",
             width: "100%",
             border:'2px solid white'
           }}
           className="bath-main-div disconnected"
         ></div>

       </div>
        
      {/* )} */}
    </>
  );
};

export default Toilet;
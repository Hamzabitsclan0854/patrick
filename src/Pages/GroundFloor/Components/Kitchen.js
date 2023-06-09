import React from "react";
import "./Kitchen.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useSound from "use-sound";
import error from "../SoundEffects/error.mp3";
import KitchenBulbOnIMG from "../images/KitchenBulbOnIMG.png";
import KitchenBulbOffIMG from "../images/KitchenBulbOffIMG.png";
import KitchenBulbOnIMG_D from "../images/KitchenBulbOnIMG_D.png"
import KitchebBulbOn_D from "../images/KitchebBulbOn_D.png"
import OvenOnIMG from "../images/OvenOnIMG.png";
import OvenOffIMG from "../images/OvenOffIMG.png";
import MixtureOnIMG from "../images/MixtureOnIMG.png";
import MixtureOffIMG from "../images/MixtureOffIMG.png";
import TosterOnIMG from "../images/TosterOnIMG.png";
import KitchebBulbOn_DD from "../images/KitchebBulbOn_DD.png"
import TosterOffIMG from "../images/TosterOffIMG.png";
import TosterOffIMG_D from "../images/TosterOffIMG_D.png"
import MixtureOffIMG_D from '../images/MixtureOffIMG_D.png'
import KitchenBlbOff_d from "../images/KitchenBlbOff_d.png"
import SmookOn from "../images/SmookOn.png"
import { useNavigate } from "react-router-dom";


import 'antd/dist/antd.css';
import { SwalBreakerOff, SwalDisconnected } from "../../Components/SwalModules";

const Kitchen = (props) => {
  const navigate = useNavigate();

  const [errorSound] = useSound(error);

  const disconnectHandler = (val) => {
    if (val === 1) {
      props.setKitchenMixture("disconnect");
    }
    if (val === 2) {
      props.setKitchenOven("disconnect");
    }
    if (val === 3) {
      props.setKitchenLight01("disconnect");
    }
    if (val === 4) {
      props.setKitchenLight02("disconnect");
    }
    if (val === 5) {
      props.setKitchenLight03("disconnect");
    }
    if (val === 6) {
      props.setKitchenToster("disconnect");
    }
    if (props.rndKitchen === val) {
      props.setKitchenCorruptDevice(0);
      props.setKitchenBreakerType("black");
    }
  };

  const connectHandler = (val) => {
      if (props.rndKitchen === val && props.kitchenBreakerType === "red") {
      props.setKitchenBreakerType("black");

        props.setIsKitchenBreaker(false);
       SwalBreakerOff()
        errorSound();
        props.setGroundFloorTrial(props.groundFloorTrial + 1);
      localStorage.setItem('state', JSON.stringify(props.groundFloorTrial +1))

      }
      props.setKitchenCorruptDevice(val);
      if (val === 1) {
        props.setKitchenMixture("connected");
      }
      if (val === 6) {
        props.setKitchenToster("connected");
      }
      if (val === 2) {
        props.setKitchenOven("connected");
      }
      if (val === 3) {
        props.setKitchenLight01("connected");
      }
      if (val === 4) {
        props.setKitchenLight02("connected");
      }
      if (val === 5) {
        props.setKitchenLight03("connected");
      }
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),url(${process.env.PUBLIC_URL + "/images/kitchen-ground.png"})`,

       
        height: "100%",
        width: "100%",
        border: "2px dotted white",
      }}
      className="kitchen-main-div"
    >
      <div className=" d-flex img-div">
        {/* lamp div .............. */}
        <div
          className={
            props.isKitchenBreaker === true &&
            props.kitchenMixture === "connected"
              ? "div-mixture-On"
              : "div-mixture"
          }
        >
          <img
            src={
              props.isKitchenBreaker === true &&
                  props.kitchenMixture === "connected"
                    ? MixtureOnIMG
                    : props.kitchenMixture === "disconnect"
                    ? MixtureOffIMG_D
                    : MixtureOffIMG
                  //   ? MixtureOnIMG : props.kitchenMixture === "disconnect" ? MixtureOnIMG_D
                  //   : MixtureOnIMG
            }
            alt=""
            // className={
            //   props.kitchenMixture === "disconnect" ? "disconnected" : ""
            // }
            style={{
              height:
                props.isKitchenBreaker === true &&
                props.kitchenMixture === "connected"
                  ? "15vh"
                  : "15vh",
            }}
          />

          <>
            {props.kitchenMixture === "disconnect" ? (
              <button
                className="btn btn-danger btn-sm active btn-font"
                onClick={() => connectHandler(1)}
              >
                Connect
              </button>
            ) : (
              <button
                className="btn btn-success btn-sm active btn-font"
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
              className={"btn-maskGroup set-btns-kitchen-ground"}

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

        {/* oven div ................. */}
        <div
          className={
            props.isKitchenBreaker === true && props.kitchenOven === "connected"
              ? "div-oven"
              : "div-oven"
          }
        >
          <img
            src={
              props.isKitchenBreaker === true &&
              props.kitchenOven === "connected"
                ? OvenOnIMG
                : OvenOffIMG
                // ? OvenOnIMG : props.kitchenOven === "disconnect" ? OvenOffIMG
                // : OvenOnIMG
            }
            className={props.kitchenOven === "disconnect" ? "disconnected-my" : ""}
            style={{
              height:
                props.isKitchenBreaker === true &&
                props.kitchenOven === "connected"
                  ? "15vh"
                  : "15vh",
            }}
            alt=""
          />

          <>
            {props.kitchenOven === "disconnect" ? (
              <button
                className="btn btn-danger btn-sm active btn-font"
                onClick={() => connectHandler(2)}
              >
                Connect
              </button>
            ) : (
              <button
                className="btn btn-success btn-sm active btn-font"
                onClick={() => disconnectHandler(2)}
              >
                Disconnect
              </button>
            )}
          </>
        </div>

        {/* first light div ................. */}
        <div
          className={
            props.isKitchenBreaker === true &&
            props.kitchenLight01 === "connected"
              ? "div-kitchenLight01-On"
              : "div-kitchenLight01"
          }
        >
          <img
            src={
              props.isKitchenBreaker === true &&
              props.kitchenLight01 === "connected"
              ? KitchenBulbOnIMG
              : props.kitchenLight01 === "disconnect"
              ? KitchenBlbOff_d
              : KitchenBulbOffIMG
            }
            // className={
            //   props.kitchenLight01 === "disconnect" ? "disconnected" : ""
            // }
            style={{
              height:
                props.isKitchenBreaker === true &&
                props.kitchenLight01 === "connected"
                  ? "30vh"
                  : "30vh",
            }}
          />

          <>
            {props.kitchenLight01 === "disconnect" ? (
              <button
                className="btn btn-danger btn-sm active btn-font"
                onClick={() => connectHandler(3)}
              >
                Connect
              </button>
            ) : (
              <button
                className="btn btn-success btn-sm active btn-font"
                onClick={() => disconnectHandler(3)}
              >
                Disconnect
              </button>
            )}
          </>
        </div>

        {/* padestal div .............. */}
        <div
          className={
            props.isKitchenBreaker === true &&
            props.kitchenLight02 === "connected"
              ? "div-kitchenLight02-On"
              : "div-kitchenLight02"
          }
        >
          <>
            {props.kitchenLight02 === "disconnect" ? (
              <button
                className="btn btn-danger btn-sm active btn-font set-top-btn-ab"
                onClick={() => connectHandler(4)}
              >
                Connect
              </button>
            ) : (
              <button
                className="btn btn-success btn-sm active btn-font set-top-btn-ab"
                onClick={() => disconnectHandler(4)}
              >
                Disconnect
              </button>
            )}
          </>

          <img
            src={
              props.isKitchenBreaker === true &&
              props.kitchenLight02 === "connected"
                // ? KitchenBulbOnIMG
                // : KitchenBulbOffIMG
                ? SmookOn :  props.kitchenLight02 === "disconnect" ? ""
                : SmookOn
            }
            alt=""
            // className={
            //   props.kitchenLight02 === "disconnect" ? "disconnected" : ""
            // }
            // style={{
            //   height:
            //     props.isKitchenBreaker === true &&
            //     props.kitchenLight02 === "connected"
            //     ? "33.7vh"
            //     : "23vh",
            // }}
          />
        </div>

        {/* light 03 div .............. */}
        <div
          className={
            props.isKitchenBreaker === true &&
            props.kitchenLight03 === "connected"
              ? "div-kitchenLight03-On"
              : "div-kitchenLight03"
          }
        >
          <>
            {props.kitchenLight03 === "disconnect" ? (
              <button
                className="btn btn-danger btn-sm active btn-font"
                onClick={() => connectHandler(5)}
              >
                Connect
              </button>
            ) : (
              <button
                className="btn btn-success btn-sm active btn-font"
                onClick={() => disconnectHandler(5)}
              >
                Disconnect
              </button>
            )}
          </>

          <img
            src={
              props.isKitchenBreaker === true &&
              props.kitchenLight03 === "connected"
              ? KitchenBulbOnIMG
              : props.kitchenLight03 === "disconnect"
              ? KitchenBlbOff_d
              : KitchenBulbOffIMG
              // ? KitchenBulbOffIMG : props.kitchenLight03 === "disconnect" ? KitchenBlbOff_d
              // : KitchenBulbOffIMG
            }
            alt=""
            // className={
            //   props.kitchenLight03 === "disconnect" ? "disconnected" : ""
            // }
            style={{
              height:
                props.isKitchenBreaker === true &&
                props.kitchenLight03 === "connected"
                ? "30vh"
                : "30vh",
            }}
          />
        </div>

        {/* toster div .............. */}
        <div
          className={
            props.isKitchenBreaker === true &&
            props.kitchenToster === "connected"
              ? "div-toster-On"
              : "div-toster"
          }
        >
          <>
            {props.kitchenToster === "disconnect" ? (
              <button
                className="btn btn-danger btn-sm active btn-font"
                onClick={() => connectHandler(6)}
              >
                Connect
              </button>
            ) : (
              <button
                className="btn btn-success btn-sm active btn-font"
                onClick={() => disconnectHandler(6)}
              >
                Disconnect
              </button>
            )}
          </>

          <img
            src={
              props.isKitchenBreaker === true &&
              props.kitchenToster === "connected"

                ? TosterOnIMG
                : props.kitchenToster === "disconnect"
                ? TosterOffIMG_D
                : TosterOffIMG
                
                // ? TosterOffIMG : props.kitchenToster === "disconnect" ? TosterOffIMG_D
                // : TosterOffIMG
            }
            alt=""
            // className={
            //   props.kitchenToster === "disconnect" ? "disconnected" : ""
            // }
            style={{
              height:
                props.isKitchenBreaker === true &&
                props.kitchenToster === "connected"
                  ? "28vh"
                  : "28vh",
            }}
          />
        </div>
      </div>
      <div className="position-heading-bottom">
        <h1 className="heading-bottom">Kitchen</h1>
      </div>
    </div>
  );
};

export default Kitchen;

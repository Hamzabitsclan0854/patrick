import React from "react";
import "../index.css";
import { useState, useEffect } from "react";
import ErrorPage from "../../404/ErrorPage";
import SecondRightNavBar from "./RightNavBar/SecondRightNavBar";
import RightNavBar from "../../GroundFloor/Components/RightNavBar"
import LivingRoomTwo from "./LivingRoomTwo/LivingRoomTwo";
import LivingRoomOne from "./LivingRoomOne/LivingRoomOne";
import ToiletFirstFloor from "./ToiletFirstFloor/ToiletFirstFloor";
import BedRoomFirstFloor from "./BedRoomFirstFloor/BedRoomFirstFloor";
import HallFirstFloor from "./HallFirstFloor/HallFirstFloor";
import Confetti from 'react-confetti'
import { useSelector } from "react-redux";

import FirstFloorModel from "../../../PopUpModels/FirstFloorModel";



const LivingRoomTwoIndex = (props) => {

  const [firstFloorTrial, setFirstFloorTrial] = useState(-5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  // Right navbar states and functions......................................
  const [meterType, setMeterType] = useState("meterBoardClose");
  const [groupFirstFloor, setGroupFirstFloor] = useState("");
  const [breaker, setBreaker] = useState("");
  const [gamePhase, setGamePhase] = useState("livingTwo");
  const [gamePhaseGroup4, setGamePhaseGroup4] = useState('toilet');
  const [showFirstFloor,setshowFirstFloor] = useState(false)

  const isHurray = useSelector((state) => state.HurrayReducer.hurry)

  return (
    <>
      <div className="error-page">
        <ErrorPage />
      </div>
      <div className="container-fluid m-0 main-groundFloor-div">
      {
        isHurray ? (
          <Confetti
          numberOfPieces={1000}
        height={'1000px'}
        width={'3000px'}
        gravity={2}
        />
        ):""
      }
        <div className="row" style={{height:'100vh'}}>
          <div className="col-lg-2 navbar-background2">
            <RightNavBar
            // navbar .............................
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              firstFloorTrial={firstFloorTrial}
              setFirstFloorTrial={setFirstFloorTrial}
              meterType={meterType}
              setMeterType={setMeterType}
              breaker={breaker}
              setBreaker={setBreaker}
              setGamePhase={setGamePhase}
              gamePhase={gamePhase}
              groupFirstFloor={groupFirstFloor}
              setGroupFirstFloor={setGroupFirstFloor}
              // livingone .............................
              livingOneLignt01={props.livingOneLignt01}
              setLivingOneLignt01={props.setLivingOneLignt01}
              livingOneLignt02={props.livingOneLignt02}
              setLivingOneLignt02={props.setLivingOneLignt02}
              livingOneLignt03={props.livingOneLignt03}
              setLivingOneLignt03={props.setLivingOneLignt03}
              livingOneFan={props.livingOneFan}
              setLivingOneFan={props.setLivingOneFan}
              livingOneTV={props.livingOneTV}
              setLivingOneTV={props.setLivingOneTV}
                // living two
              livingTwoLignt01={props.livingTwoLignt01}
              setLivingTwoLignt01={props.setLivingTwoLignt01}
              livingTwoLignt02={props.livingTwoLignt02}
              setLivingTwoLignt02={props.setLivingTwoLignt02}
              livingTwoSmallLamp={props.livingTwoSmallLamp}
              setLivingTwoSmallLamp={props.setLivingTwoSmallLamp}
              livingTwoFan={props.livingTwoFan}
              setLivingTwoFan={props.setLivingTwoFan}

              groupThreeCorruptDevice={props.groupThreeCorruptDevice}
              setGroupThreeCorruptDevice={props.setGroupThreeCorruptDevice}
              rndGroupThree={props.rndGroupThree}
              setRndGroupThree={props.setRndGroupThree}
              groupThreeBreakerType={props.groupThreeBreakerType}
              setGroupThreeBreakerType={props.setGroupThreeBreakerType}
              isGroupThreeBreaker={props.isGroupThreeBreaker}
              setIsGroupThreeBreaker={props.setIsGroupThreeBreaker}    
            />
          </div>
          <div
            className="col-lg-10"
            style={{ background: "#B33759", height: "100vh" }}
          >
            <div className="col-lg-12">
                <>
                  <div className="row ">
                    <div className="col-lg-12 " style={{ height: "100vh" }}>
                      <LivingRoomTwo 
                        firstFloorTrial={firstFloorTrial}
                        setFirstFloorTrial={setFirstFloorTrial}
                        meterType={meterType}
                        setMeterType={setMeterType}
                        breaker={breaker}
                        setBreaker={setBreaker}
                        setGamePhase={setGamePhase}
                        gamePhase={gamePhase}
                        groupFirstFloor={groupFirstFloor}
                        setGroupFirstFloor={setGroupFirstFloor}
                        //  second living room
                        livingTwoLignt01={props.livingTwoLignt01}
                        setLivingTwoLignt01={props.setLivingTwoLignt01}
                        livingTwoLignt02={props.livingTwoLignt02}
                        setLivingTwoLignt02={props.setLivingTwoLignt02}
                        livingTwoSmallLamp={props.livingTwoSmallLamp}
                        setLivingTwoSmallLamp={props.setLivingTwoSmallLamp}
                        livingTwoFan={props.livingTwoFan}
                        setLivingTwoFan={props.setLivingTwoFan}

                        groupThreeCorruptDevice={props.groupThreeCorruptDevice}
                        setGroupThreeCorruptDevice={props.setGroupThreeCorruptDevice}
                        rndGroupThree={props.rndGroupThree}
                        setRndGroupThree={props.setRndGroupThree}
                        groupThreeBreakerType={props.groupThreeBreakerType}
                        setGroupThreeBreakerType={props.setGroupThreeBreakerType}
                        isGroupThreeBreaker={props.isGroupThreeBreaker}
                        setIsGroupThreeBreaker={props.setIsGroupThreeBreaker}                    
                      />
                    </div>
                  </div>
                </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LivingRoomTwoIndex;

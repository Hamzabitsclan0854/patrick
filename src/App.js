import GroundFloor from "./Pages/GroundFloor/index";
import Home from "./Pages/HomePage/Home";
import MaskGroup from "./Pages/MaskGroup/MaskGroup";
import { Routes, Route, Link } from "react-router-dom";
import FirstFloor from "./Pages/FirstFloor";
import "./index.css";
import Attic from "./Pages/Attic";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import LivingIndex from "./Pages/GroundFloor/Components/LivingIndex";
import ToiletIndex from "./Pages/GroundFloor/Components/ToiletIndex";
import KitchenIndex from "./Pages/GroundFloor/Components/KitchenIndex";
import LivingRoomTwoIndex from "./Pages/FirstFloor/Components/LivingRoomTwoIndex";
import BedRoomIndex from "./Pages/FirstFloor/Components/BedRoomIndex";
import ToiletIndexFirst from "./Pages/FirstFloor/Components/ToiletIndexFirst";
import StudyRoomIndex from "./Pages/Attic/Component/StudyRoomIndex";
import StorageRoomIndex from "./Pages/Attic/Component/StorageRoomIndex";
import LaundaryIndex from "./Pages/Attic/Component/LaundaryIndex";
import LivingRoomOneIndex from "./Pages/FirstFloor/Components/LivingRoomOneIndex";
import GuestRoomIndexAttic from "./Pages/Attic/Component/GuestRoomIndexAttic";
import { SwalBreakerOff, SwalDisconnected } from "./Pages/Components/SwalModules"

function App() {
  const userName = useSelector((state) => state.UserReducer.userName);

  // ***********************************
  // GROUP 1
  // ***********************************
  // toilet section code ...................................................
  const [toiletFan, setToiletFan] = useState("connected");
  const [toiletLight, setToiletLight] = useState("connected");
  // Hall section code ...................................................
  const [hallLight01, setHallLight01] = useState("connected");
  const [hallLight02, setHallLight02] = useState("connected");
  const [hallLamp, setHallLamp] = useState("connected");
  // LivingRoom section code ...................................................
  const [livingLight01, setLivingLight01] = useState("connected");
  const [livingLight03, setLivingLight03] = useState("connected");
  const [livingAC, setLivingAC] = useState("connected");
  const [livingRadio, setLivingRadio] = useState('connected')
  // GROUP 1 BREAKER
  const [allCorruptDevice, setAllCorruptDevice] = useState(0);
  const [rndAll, setRndAll] = useState(0);
  const [firstGroupBreakerType, setFirstGroupBreakerType] = useState("black");
  const [isFirstGroupBreaker, setIsFirstGroupBreaker] = useState();

  useEffect(() => {
    setRndAll(Math.floor(Math.random() * 9) + 1);
  }, []);
  useEffect(() => {
    setAllCorruptDevice(rndAll);
  }, [rndAll]);

  useEffect(() => {
    if (
      toiletFan === "disconnect" &&
      toiletLight === "disconnect" &&
      hallLight01 === "disconnect" &&
      hallLight02 === "disconnect" &&
      hallLamp === "disconnect" &&
      livingRadio === "disconnect" &&
      livingLight01 === "disconnect" &&
      livingAC === "disconnect" &&
      livingLight03 === "disconnect"
    ) {
     SwalDisconnected()
    }
  }, [
    toiletFan,
    toiletLight,
    hallLight01,
    hallLight02,
    hallLamp,
    livingRadio,
    livingLight01,
    livingAC,
    livingLight03
  ]);
  // console.log("something" + rndAll)
  // ***********************************
  // GROUP 2
  // ***********************************
  const [kitchenLight01, setKitchenLight01] = useState("connected");
  const [kitchenLight02, setKitchenLight02] = useState("connected");
  const [kitchenLight03, setKitchenLight03] = useState("connected");
  const [kitchenMixture, setKitchenMixture] = useState('connected')
  const [kitchenOven, setKitchenOven] = useState('connected');
  const [kitchenToster, setKitchenToster] = useState('connected')

  const [kitchenCorruptDevice, setKitchenCorruptDevice] = useState(0);
  const [rndKitchen, setRndKitchen] = useState(0);
  const [kitchenBreakerType, setKitchenBreakerType] = useState("black");
  const [isKitchenBreaker, setIsKitchenBreaker] = useState("");

  useEffect(() => {
    setRndKitchen(Math.floor(Math.random() * 5) + 1);
  }, []);

  useEffect(() => {
    setKitchenCorruptDevice(rndKitchen);
  }, [rndKitchen]);

  useEffect(() => {
    if (
      kitchenLight01 === "disconnect" &&
      kitchenLight02 === "disconnect" &&
      kitchenLight03 === "disconnect" &&
      kitchenMixture === "disconnect" &&
      kitchenOven === "disconnect" &&
      kitchenToster === "disconnect"
    ) {
      SwalDisconnected()
    }
  }, [
    kitchenLight01,
    kitchenLight02,
    kitchenLight03,
    kitchenMixture,
    kitchenOven,
    kitchenToster,
  ]);

  // ***********************************
  // GROUP 3
  // ***********************************
  // livingOne section code .......................................................
  const [livingOneLignt01, setLivingOneLignt01] = useState('connected');
  const [livingOneLignt02, setLivingOneLignt02] = useState('connected');
  const [livingOneLignt03, setLivingOneLignt03] = useState('connected');
  const [livingOneFan, setLivingOneFan] = useState('connected');
  const [livingOneTV, setLivingOneTV] = useState('connected');
  // livingTwo section code .......................................................
  const [livingTwoLignt01, setLivingTwoLignt01] = useState('connected');
  const [livingTwoLignt02, setLivingTwoLignt02] = useState('connected');
  const [livingTwoSmallLamp, setLivingTwoSmallLamp] = useState('connected');
  const [livingTwoFan, setLivingTwoFan] = useState('connected');
  // GROUP 3 BREAKER
  const [groupThreeCorruptDevice, setGroupThreeCorruptDevice] = useState(0);
  const [rndGroupThree, setRndGroupThree] = useState(0);
  const [groupThreeBreakerType, setGroupThreeBreakerType] = useState("black");
  const [isGroupThreeBreaker, setIsGroupThreeBreaker] = useState();

  useEffect(() => {
    setRndGroupThree(Math.floor(Math.random() * 9) + 1);
  }, []);

  useEffect(() => {
    setGroupThreeCorruptDevice(rndGroupThree);
  }, [rndGroupThree]);

  useEffect(() => {
    if (
      livingOneLignt01 === "disconnect" &&
      livingOneLignt02 === "disconnect" &&
      livingOneLignt03 === "disconnect" &&
      livingOneFan === "disconnect" &&
      livingOneTV === 'disconnect' &&

      livingTwoLignt01 === "disconnect" &&
      livingTwoSmallLamp === "disconnect" &&
      livingTwoLignt02 === "disconnect" &&
      livingTwoFan === "disconnect" 
    ) {
      SwalDisconnected()
    }
  }, [
    livingOneLignt01,
    livingOneLignt02,
    livingOneLignt03,
    livingOneFan,
    livingOneTV,

    livingTwoLignt01,
    livingTwoSmallLamp,
    livingTwoLignt02,
    livingTwoFan
  ]);
  // ***********************************
  // GROUP 4
  // ***********************************
  // Hall section code ...................................................
  const [hallLight01First, setHallLight01First] = useState("connected"); //check
  const [hallLight02First, setHallLight02First] = useState("connected"); //check
  const [hallLedTv, setHallLedTv] = useState("connected");
  // BED room section code ...................................................
  const [bedRoomLight01, setBedRoomLight01] = useState("connected"); //check
  const [bedRoomLight02, setBedRoomLight02] = useState("connected"); //check
  const [livingSilingFan, setLivingSilingFan] = useState('connected');
  // toilet section code ...................................................
  const [toiletFanFirst, setToiletFanFirst] = useState("connected"); //check
  const [toiletLightFirst, setToiletLightFirst] = useState("connected"); //check
  const [toiletLight02, setToiletLight02] = useState("connected");
  const [toiletLight03, setToiletLight03] = useState("connected");

  const [groupFourCorruptDevice, setGroupFourCorruptDevice] = useState(0);
  const [rndGroupFour, setRndGroupFour] = useState(0);
  const [groupFourBreakerType, setGroupFourBreakerType] = useState("black");
  const [isGroupFourBreaker, setIsGroupFourBreaker] = useState("");

  useEffect(() => {
    setRndGroupFour(Math.floor(Math.random() * 10) + 1);
  }, []);

  useEffect(() => {
    setGroupFourCorruptDevice(rndGroupFour);
  }, [rndGroupFour]);

  useEffect(() => {
    if (
      hallLedTv === "disconnect" &&
      hallLight01First === "disconnect" &&
      hallLight02First === "disconnect" &&

      bedRoomLight01 === "disconnect" &&
      bedRoomLight02 === "disconnect" &&
      livingSilingFan === "disconnect" &&

      toiletLightFirst === "disconnect" &&
      toiletLight02 === "disconnect" &&
      toiletFanFirst === "disconnect" &&
      toiletLight03 === "disconnect"
    ) {
     SwalDisconnected()
    }
  }, [
    hallLedTv,
    hallLight01First,
    hallLight02First,

    bedRoomLight01,
    bedRoomLight02,
    livingSilingFan,

    toiletLightFirst,
    toiletLight02,
    toiletFanFirst,
    toiletLight03,
  ]);

  // ***********************************
  // GROUP 5
  // ***********************************
  // Hall section code .......................................................
  const [hallLight01Five, setHallLight01Five] = useState("connected");
  const [hallLight02Five, setHallLight02Five] = useState("connected");
  const [hallLampFive, setHallLampFive] = useState("connected");
  //   gestroom section code .................................................
  const [guestLamp, setGuestLamp] = useState("connected");
  const [guestRadio, setGuestRadio] = useState("connected");
  const [guestFan, setGuestFan] = useState("connected");
  const [guestLED, setGuestLED] = useState("connected");
  // Study section code ......................................................
  const [studyLamp, setStudyLamp] = useState("connected");
  const [studyLamp02, setStudyLamp02] = useState("connected");
  // store section code .......................................................
  const [livingOneLignt01Five, setLivingOneLignt01Five] = useState('connected');
  const [livingOneLignt02Five, setLivingOneLignt02Five] = useState('connected');
  const [livingOneLignt03Five, setLivingOneLignt03Five] = useState('connected');

  const [groupFiveCorruptDevice, setGroupFiveCorruptDevice] = useState(0);
  const [rndGroupFive, setRndGroupFive] = useState(0);
  const [groupFiveBreakerType, setgroupFiveBreakerType] = useState("black");
  const [isGroupFiveBreaker, setIsGroupFiveBreaker] = useState("");

  useEffect(() => {
    setRndGroupFive(Math.floor(Math.random() * 12) + 1);
  }, []);

  useEffect(() => {
    setGroupFiveCorruptDevice(rndGroupFive);
  }, [rndGroupFive]);

  useEffect(() => {
    if (
      hallLampFive === "disconnect" &&
      hallLight01Five === "disconnect" &&
      hallLight02Five === "disconnect" &&

      guestLamp === "disconnect" &&
      guestRadio === "disconnect" &&
      guestFan === "disconnect" &&
      guestLED === "disconnect" &&

      studyLamp === "disconnect" &&
      studyLamp02 === "disconnect" &&
      // store
      livingOneLignt01Five === "disconnect" &&
      livingOneLignt03Five === "disconnect" &&
      livingOneLignt02Five === "disconnect" 
     
    ) {
     SwalDisconnected()
    }
  }, [
    hallLampFive,
    hallLight01Five,
    hallLight02Five,

    guestLamp,
    guestRadio, 
    guestFan,
    guestLED,

    studyLamp, 
    studyLamp02,
    // store
    livingOneLignt01Five,
    livingOneLignt03Five,
    livingOneLignt02Five,
  ]);
  // ***********************************
  // GROUP 6
  // ***********************************
  // laundary section code ...................................................
  const [laundaryLight01, setLaundaryLight01] = useState("connected");
  const [laundaryLight02, setLaundaryLight02] = useState("connected");
  const [laundaryWashing, setLaundaryWashing] = useState("connected");

  const [laundaryCorruptDevice, setLaundaryCorruptDevice] = useState(0);
  const [rndLaundary, setRndLaundary] = useState(0);
  const [laundaryBreakerType, setLaundaryBreakerType] = useState("black");
  const [isLaundaryBreaker, setIsLaundaryBreaker] = useState("");


  useEffect(() => {
    setRndLaundary(Math.floor(Math.random() * 3) + 1);
  }, []);

  useEffect(() => {
    setLaundaryCorruptDevice(rndLaundary);
  }, [rndLaundary]);

  useEffect(() => {
    if (
      laundaryWashing === "disconnect" &&
      laundaryLight01 === "disconnect" &&
      laundaryLight02 === "disconnect" 
    ) {
      SwalDisconnected()
    }
  }, [
    laundaryWashing,
    laundaryLight01,
    laundaryLight02,
  ]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ground-floor" element={<GroundFloor 

            toiletFan={toiletFan}
            toiletLight={toiletLight}
            setToiletFan={setToiletFan}
            setToiletLight={setToiletLight}

            hallLamp={hallLamp}
            setHallLamp={setHallLamp}
            hallLight01={hallLight01}
            setHallLight01={setHallLight01}
            hallLight02={hallLight02}
            setHallLight02={setHallLight02}

            livingLight01={livingLight01}
            setLivingLight01={setLivingLight01}
            livingLight03={livingLight03}
            setLivingLight03={setLivingLight03}
            livingAC={livingAC}
            setLivingAC={setLivingAC}
            livingRadio={livingRadio}
            setLivingRadio={setLivingRadio}
            
            rndAll={rndAll}
            allCorruptDevice={allCorruptDevice}
            setAllCorruptDevice={setAllCorruptDevice}
            firstGroupBreakerType={firstGroupBreakerType}
            setFirstGroupBreakerType={setFirstGroupBreakerType}
            isFirstGroupBreaker={isFirstGroupBreaker}
            setIsFirstGroupBreaker={setIsFirstGroupBreaker}
          />} />
          <Route path="/mask-group" element={<MaskGroup />} />
          <Route path="/first-floor" element={<FirstFloor 
            // Toilet 
            setToiletFan={setToiletFanFirst}
            toiletFan={toiletFanFirst}
            setToiletLight={setToiletLightFirst}
            toiletLight={toiletLightFirst}
            setToiletLight02={setToiletLight02}
            toiletLight02={toiletLight02}
            setToiletLight03={setToiletLight03}
            toiletLight03={toiletLight03}
            //bedroom ...................
            livingLight01={bedRoomLight01}
            setLivingLight01={setBedRoomLight01}
            livingLight02={bedRoomLight02}
            setLivingLight02={setBedRoomLight02}
            livingSilingFan={livingSilingFan}
            setLivingSilingFan={setLivingSilingFan}
            // hall 
            hallLedTv={hallLedTv}
            setHallLedTv={setHallLedTv}
            hallLight01={hallLight01First}
            setHallLight01={setHallLight01First}
            hallLight02={hallLight02First}
            setHallLight02={setHallLight02First}

            rndGroupFour={rndGroupFour}
            setGroupFourCorruptDevice={setGroupFourCorruptDevice}
            groupFourCorruptDevice={groupFourCorruptDevice}
            setGroupFourBreakerType={setGroupFourBreakerType}
            groupFourBreakerType={groupFourBreakerType}
            setIsGroupFourBreaker={setIsGroupFourBreaker}
            isGroupFourBreaker={isGroupFourBreaker}
          />} />
          <Route path="/attic" element={<Attic 
            // hall
            hallLampFive={hallLampFive}
            setHallLampFive={setHallLampFive}
            hallLight01Five={hallLight01Five}
            setHallLight01Five={setHallLight01Five}
            hallLight02Five={hallLight02Five}
            setHallLight02Five={setHallLight02Five}
            // guest room
            setGuestLamp={setGuestLamp}
            guestLamp={guestLamp}
            setGuestRadio={setGuestRadio}
            guestRadio={guestRadio}
            setGuestFan={setGuestFan}
            guestFan={guestFan}
            setGuestLED={setGuestLED}
            guestLED={guestLED}
            // study room
            studyLamp={studyLamp}
            setStudyLamp={setStudyLamp}
            studyLamp02={studyLamp02}
            setStudyLamp02={setStudyLamp02}
            // store
            livingOneLignt01={livingOneLignt01Five}
            setLivingOneLignt01={setLivingOneLignt01Five}
            livingOneLignt02={livingOneLignt02Five}
            setLivingOneLignt02={setLivingOneLignt02Five}
            livingOneLignt03={livingOneLignt03Five}
            setLivingOneLignt03={setLivingOneLignt03Five}

            groupFiveCorruptDevice={groupFiveCorruptDevice}
            setGroupFiveCorruptDevice={setGroupFiveCorruptDevice}
            rndGroupFive={rndGroupFive}
            groupFiveBreakerType={groupFiveBreakerType}
            setgroupFiveBreakerType={setgroupFiveBreakerType}
            isGroupFiveBreaker={isGroupFiveBreaker}
            setIsGroupFiveBreaker={setIsGroupFiveBreaker}
          />} />
          <Route path="/ground-floor/living-room" element={<LivingIndex 
            toiletFan={toiletFan}
            toiletLight={toiletLight}
            setToiletFan={setToiletFan}
            setToiletLight={setToiletLight}

            hallLamp={hallLamp}
            setHallLamp={setHallLamp}
            hallLight01={hallLight01}
            setHallLight01={setHallLight01}
            hallLight02={hallLight02}
            setHallLight02={setHallLight02}

            livingLight01={livingLight01}
            setLivingLight01={setLivingLight01}
            livingLight03={livingLight03}
            setLivingLight03={setLivingLight03}
            livingAC={livingAC}
            setLivingAC={setLivingAC}
            livingRadio={livingRadio}
            setLivingRadio={setLivingRadio}

            rndAll={rndAll}
            allCorruptDevice={allCorruptDevice}
            setAllCorruptDevice={setAllCorruptDevice}
            firstGroupBreakerType={firstGroupBreakerType}
            setFirstGroupBreakerType={setFirstGroupBreakerType}
            isFirstGroupBreaker={isFirstGroupBreaker}
            setIsFirstGroupBreaker={setIsFirstGroupBreaker}
          />} />
          <Route path="/ground-floor/toilet" element={<ToiletIndex 
            toiletFan={toiletFan}
            toiletLight={toiletLight}
            setToiletFan={setToiletFan}
            setToiletLight={setToiletLight}

            hallLamp={hallLamp}
            setHallLamp={setHallLamp}
            hallLight01={hallLight01}
            setHallLight01={setHallLight01}
            hallLight02={hallLight02}
            setHallLight02={setHallLight02}

            livingLight01={livingLight01}
            setLivingLight01={setLivingLight01}
            livingLight03={livingLight03}
            setLivingLight03={setLivingLight03}
            livingAC={livingAC}
            setLivingAC={setLivingAC}
            livingRadio={livingRadio}
            setLivingRadio={setLivingRadio}

            rndAll={rndAll}
            allCorruptDevice={allCorruptDevice}
            setAllCorruptDevice={setAllCorruptDevice}
            firstGroupBreakerType={firstGroupBreakerType}
            setFirstGroupBreakerType={setFirstGroupBreakerType}
            isFirstGroupBreaker={isFirstGroupBreaker}
            setIsFirstGroupBreaker={setIsFirstGroupBreaker}
          />} />
          <Route path="/ground-floor/kitchen" element={<KitchenIndex 
            // kitchen states ..........
            kitchenLight01={kitchenLight01}
            setKitchenLight01={setKitchenLight01}
            kitchenLight02={kitchenLight02}
            setKitchenLight02={setKitchenLight02}
            kitchenLight03={kitchenLight03}
            setKitchenLight03={setKitchenLight03}
            kitchenMixture={kitchenMixture}
            setKitchenMixture={setKitchenMixture}
            kitchenOven={kitchenOven}
            setKitchenOven={setKitchenOven}
            kitchenToster={kitchenToster}
            setKitchenToster={setKitchenToster}

            kitchenCorruptDevice={kitchenCorruptDevice}
            setKitchenCorruptDevice={setKitchenCorruptDevice}
            rndKitchen={rndKitchen}
            // setRndKitchen={setRndKitchen}
            kitchenBreakerType={kitchenBreakerType}
            setKitchenBreakerType={setKitchenBreakerType}
            isKitchenBreaker={isKitchenBreaker}
            setIsKitchenBreaker={setIsKitchenBreaker}
          />} />
          <Route path="/first-floor/living-room02" element={<LivingRoomTwoIndex 
            // livingone .............................
            livingOneLignt01={livingOneLignt01}
            setLivingOneLignt01={setLivingOneLignt01}
            livingOneLignt02={livingOneLignt02}
            setLivingOneLignt02={setLivingOneLignt02}
            livingOneLignt03={livingOneLignt03}
            setLivingOneLignt03={setLivingOneLignt03}
            livingOneFan={livingOneFan}
            setLivingOneFan={setLivingOneFan}
            livingOneTV={livingOneTV}
            setLivingOneTV={setLivingOneTV} 
            // living two
            livingTwoLignt01={livingTwoLignt01}
            setLivingTwoLignt01={setLivingTwoLignt01}
            livingTwoLignt02={livingTwoLignt02}
            setLivingTwoLignt02={setLivingTwoLignt02}
            livingTwoSmallLamp={livingTwoSmallLamp}
            setLivingTwoSmallLamp={setLivingTwoSmallLamp}
            livingTwoFan={livingTwoFan}
            setLivingTwoFan={setLivingTwoFan}

            groupThreeCorruptDevice={groupThreeCorruptDevice}
            setGroupThreeCorruptDevice={setGroupThreeCorruptDevice}
            rndGroupThree={rndGroupThree}
            setRndGroupThree={setRndGroupThree}
            groupThreeBreakerType={groupThreeBreakerType}
            setGroupThreeBreakerType={setGroupThreeBreakerType}
            isGroupThreeBreaker={isGroupThreeBreaker}
            setIsGroupThreeBreaker={setIsGroupThreeBreaker}
          />} />
          <Route path="/first-floor/bed-room" element={<BedRoomIndex 
            // Toilet 
            setToiletFan={setToiletFanFirst}
            toiletFan={toiletFanFirst}
            setToiletLight={setToiletLightFirst}
            toiletLight={toiletLightFirst}
            setToiletLight02={setToiletLight02}
            toiletLight02={toiletLight02}
            setToiletLight03={setToiletLight03}
            toiletLight03={toiletLight03}
            //bedroom ...................
            livingLight01={bedRoomLight01}
            setLivingLight01={setBedRoomLight01}
            livingLight02={bedRoomLight02}
            setLivingLight02={setBedRoomLight02}
            livingSilingFan={livingSilingFan}
            setLivingSilingFan={setLivingSilingFan}
            // hall 
            hallLedTv={hallLedTv}
            setHallLedTv={setHallLedTv}
            hallLight01={hallLight01First}
            setHallLight01={setHallLight01First}
            hallLight02={hallLight02First}
            setHallLight02={setHallLight02First}

            rndGroupFour={rndGroupFour}
            setGroupFourCorruptDevice={setGroupFourCorruptDevice}
            groupFourCorruptDevice={groupFourCorruptDevice}
            setGroupFourBreakerType={setGroupFourBreakerType}
            groupFourBreakerType={groupFourBreakerType}
            setIsGroupFourBreaker={setIsGroupFourBreaker}
            isGroupFourBreaker={isGroupFourBreaker}
          />} />
          <Route path="/first-floor/toilet" element={<ToiletIndexFirst 
            // Toilet 
            setToiletFan={setToiletFanFirst}
            toiletFan={toiletFanFirst}
            setToiletLight={setToiletLightFirst}
            toiletLight={toiletLightFirst}
            setToiletLight02={setToiletLight02}
            toiletLight02={toiletLight02}
            setToiletLight03={setToiletLight03}
            toiletLight03={toiletLight03}
            //bedroom ...................
            livingLight01={bedRoomLight01}
            setLivingLight01={setBedRoomLight01}
            livingLight02={bedRoomLight02}
            setLivingLight02={setBedRoomLight02}
            livingSilingFan={livingSilingFan}
            setLivingSilingFan={setLivingSilingFan}
            // hall 
            hallLedTv={hallLedTv}
            setHallLedTv={setHallLedTv}
            hallLight01={hallLight01First}
            setHallLight01={setHallLight01First}
            hallLight02={hallLight02First}
            setHallLight02={setHallLight02First}

            rndGroupFour={rndGroupFour}
            setGroupFourCorruptDevice={setGroupFourCorruptDevice}
            groupFourCorruptDevice={groupFourCorruptDevice}
            setGroupFourBreakerType={setGroupFourBreakerType}
            groupFourBreakerType={groupFourBreakerType}
            setIsGroupFourBreaker={setIsGroupFourBreaker}
            isGroupFourBreaker={isGroupFourBreaker}
          />} />
          <Route path="/first-floor/living-room01" element={<LivingRoomOneIndex 
            // livingone .............................
            livingOneLignt01={livingOneLignt01}
            setLivingOneLignt01={setLivingOneLignt01}
            livingOneLignt02={livingOneLignt02}
            setLivingOneLignt02={setLivingOneLignt02}
            livingOneLignt03={livingOneLignt03}
            setLivingOneLignt03={setLivingOneLignt03}
            livingOneFan={livingOneFan}
            setLivingOneFan={setLivingOneFan}
            livingOneTV={livingOneTV}
            setLivingOneTV={setLivingOneTV} 
            // living two
            livingTwoLignt01={livingTwoLignt01}
            setLivingTwoLignt01={setLivingTwoLignt01}
            livingTwoLignt02={livingTwoLignt02}
            setLivingTwoLignt02={setLivingTwoLignt02}
            livingTwoSmallLamp={livingTwoSmallLamp}
            setLivingTwoSmallLamp={setLivingTwoSmallLamp}
            livingTwoFan={livingTwoFan}
            setLivingTwoFan={setLivingTwoFan}

            groupThreeCorruptDevice={groupThreeCorruptDevice}
            setGroupThreeCorruptDevice={setGroupThreeCorruptDevice}
            rndGroupThree={rndGroupThree}
            setRndGroupThree={setRndGroupThree}
            groupThreeBreakerType={groupThreeBreakerType}
            setGroupThreeBreakerType={setGroupThreeBreakerType}
            isGroupThreeBreaker={isGroupThreeBreaker}
            setIsGroupThreeBreaker={setIsGroupThreeBreaker}
          />} />
          <Route path="/attic/study-room" element={<StudyRoomIndex 
            // hall
            hallLampFive={hallLampFive}
            setHallLampFive={setHallLampFive}
            hallLight01Five={hallLight01Five}
            setHallLight01Five={setHallLight01Five}
            hallLight02Five={hallLight02Five}
            setHallLight02Five={setHallLight02Five}
            // guest room
            setGuestLamp={setGuestLamp}
            guestLamp={guestLamp}
            setGuestRadio={setGuestRadio}
            guestRadio={guestRadio}
            setGuestFan={setGuestFan}
            guestFan={guestFan}
            setGuestLED={setGuestLED}
            guestLED={guestLED}
            // study room
            studyLamp={studyLamp}
            setStudyLamp={setStudyLamp}
            studyLamp02={studyLamp02}
            setStudyLamp02={setStudyLamp02}
            // store
            livingOneLignt01={livingOneLignt01Five}
            setLivingOneLignt01={setLivingOneLignt01Five}
            livingOneLignt02={livingOneLignt02Five}
            setLivingOneLignt02={setLivingOneLignt02Five}
            livingOneLignt03={livingOneLignt03Five}
            setLivingOneLignt03={setLivingOneLignt03Five}

            groupFiveCorruptDevice={groupFiveCorruptDevice}
            setGroupFiveCorruptDevice={setGroupFiveCorruptDevice}
            rndGroupFive={rndGroupFive}
            groupFiveBreakerType={groupFiveBreakerType}
            setgroupFiveBreakerType={setgroupFiveBreakerType}
            isGroupFiveBreaker={isGroupFiveBreaker}
            setIsGroupFiveBreaker={setIsGroupFiveBreaker}
          />} />
          <Route path="/attic/guest-room" element={<GuestRoomIndexAttic 
            // hall
            hallLampFive={hallLampFive}
            setHallLampFive={setHallLampFive}
            hallLight01Five={hallLight01Five}
            setHallLight01Five={setHallLight01Five}
            hallLight02Five={hallLight02Five}
            setHallLight02Five={setHallLight02Five}
            // guest room
            setGuestLamp={setGuestLamp}
            guestLamp={guestLamp}
            setGuestRadio={setGuestRadio}
            guestRadio={guestRadio}
            setGuestFan={setGuestFan}
            guestFan={guestFan}
            setGuestLED={setGuestLED}
            guestLED={guestLED}
            // study room
            studyLamp={studyLamp}
            setStudyLamp={setStudyLamp}
            studyLamp02={studyLamp02}
            setStudyLamp02={setStudyLamp02}
            // store
            livingOneLignt01={livingOneLignt01Five}
            setLivingOneLignt01={setLivingOneLignt01Five}
            livingOneLignt02={livingOneLignt02Five}
            setLivingOneLignt02={setLivingOneLignt02Five}
            livingOneLignt03={livingOneLignt03Five}
            setLivingOneLignt03={setLivingOneLignt03Five}

            groupFiveCorruptDevice={groupFiveCorruptDevice}
            setGroupFiveCorruptDevice={setGroupFiveCorruptDevice}
            rndGroupFive={rndGroupFive}
            groupFiveBreakerType={groupFiveBreakerType}
            setgroupFiveBreakerType={setgroupFiveBreakerType}
            isGroupFiveBreaker={isGroupFiveBreaker}
            setIsGroupFiveBreaker={setIsGroupFiveBreaker}
          />} />
          <Route path="/attic/storage-room" element={<StorageRoomIndex 
            // hall
            hallLampFive={hallLampFive}
            setHallLampFive={setHallLampFive}
            hallLight01Five={hallLight01Five}
            setHallLight01Five={setHallLight01Five}
            hallLight02Five={hallLight02Five}
            setHallLight02Five={setHallLight02Five}
            // guest room
            setGuestLamp={setGuestLamp}
            guestLamp={guestLamp}
            setGuestRadio={setGuestRadio}
            guestRadio={guestRadio}
            setGuestFan={setGuestFan}
            guestFan={guestFan}
            setGuestLED={setGuestLED}
            guestLED={guestLED}
            // study room
            studyLamp={studyLamp}
            setStudyLamp={setStudyLamp}
            studyLamp02={studyLamp02}
            setStudyLamp02={setStudyLamp02}
            // store
            livingOneLignt01={livingOneLignt01Five}
            setLivingOneLignt01={setLivingOneLignt01Five}
            livingOneLignt02={livingOneLignt02Five}
            setLivingOneLignt02={setLivingOneLignt02Five}
            livingOneLignt03={livingOneLignt03Five}
            setLivingOneLignt03={setLivingOneLignt03Five}

            groupFiveCorruptDevice={groupFiveCorruptDevice}
            setGroupFiveCorruptDevice={setGroupFiveCorruptDevice}
            rndGroupFive={rndGroupFive}
            groupFiveBreakerType={groupFiveBreakerType}
            setgroupFiveBreakerType={setgroupFiveBreakerType}
            isGroupFiveBreaker={isGroupFiveBreaker}
            setIsGroupFiveBreaker={setIsGroupFiveBreaker}
          />} />
          <Route path="/attic/laundary" element={<LaundaryIndex 
            // laundary
            laundaryWashing={laundaryWashing}
            setLaundaryWashing={setLaundaryWashing}
            laundaryLight01={laundaryLight01}
            setLaundaryLight01={setLaundaryLight01}
            laundaryLight02={laundaryLight02}
            setLaundaryLight02={setLaundaryLight02}

            laundaryCorruptDevice={laundaryCorruptDevice}
            setLaundaryCorruptDevice={setLaundaryCorruptDevice}
            rndLaundary={rndLaundary}
            laundaryBreakerType={laundaryBreakerType}
            setLaundaryBreakerType={setLaundaryBreakerType}
            isLaundaryBreaker={isLaundaryBreaker}
            setIsLaundaryBreaker={setIsLaundaryBreaker}
          />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

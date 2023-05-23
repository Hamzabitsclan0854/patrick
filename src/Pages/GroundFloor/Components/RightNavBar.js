import React from "react";
import Meter from "../images/Meter.png";
import meterGroup from "../images/meterGroup.png";
import breakerOffIMG from "../images/breakerOffIMG.png";
import breakerOnIMG from "../images/breakerOnIMG.png";
import beep from "../SoundEffects/beep.mp3";
import hurray from "../SoundEffects/hurray.wav";
import { useEffect } from "react";
import "./RightNavBar.css";
import useSound from "use-sound";
import { useLocation, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import ResultModel from "../../Components/ResultModel";
import Avator from "../../Components/Avator";
import { useDispatch } from "react-redux";
import { isHurray, resultGroundFloor } from "../../../Redux/Action";
import { useState } from "react";
import FrontScreenModel from "../../Components/FrontScreenModel";
import AtticModel from "../../../PopUpModels/AtticModel"
import FirstFloorModel from "../../../PopUpModels/FirstFloorModel";
import GroundFloorModel from "../../../PopUpModels/GroundFloorModel"
import { Link } from "react-router-dom";
import {

  SwalHurray,
  SwalBreakerOn,
  SwalInitial,
} from "../../Components/SwalModules";
const RightNavBar = (props) => {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const location = useLocation()

  const [showAttic,setShowAttic] = useState(false)
  const [showFirstFloor,setshowFirstFloor] = useState(false)
  const [showGroundFloor,setshowGroundFloor] = useState(false)

  const [btnHover, setBtnHover] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // toilet section breaker .......................................................................................
  const [beepSound] = useSound(beep);
  const [hurraySound] = useSound(hurray);

  useEffect(()=>{
    dispatch(isHurray(false)); 
  },[])

  // ***********************************
  // GROUP 1 
  // ***********************************
  const firstGroupPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 3000);

    setTimeout(() => {
      SwalHurray("one", "one");
    }, 30);

    setTimeout(() => {
      props.setFirstGroupBreakerType("black");
      props.setIsFirstGroupBreaker(false);
    }, 3000);
  };
  
  const groupFirstBreakerHandlerOff = () => {
    //for sending on next level code ................
    if (
      props.completeRnd === 1 &&
      props.toiletFan === "disconnect" &&
      props.toiletLight === "connected" &&
      props.hallLamp === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      props.livingRadio === "connected" &&
      props.livingLight01 === "connected" &&
      props.livingAC === "connected" &&
      props.livingLight03 === "connected"
    ) {
      firstGroupPass();
    }
    if (
      props.completeRnd === 2 &&
      props.toiletFan === "connected" &&
      props.toiletLight === "disconnect" &&
      props.hallLamp === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      props.livingRadio === "connected" &&
      props.livingLight01 === "connected" &&
      props.livingAC === "connected" &&
      props.livingLight03 === "connected"
    ) {
      firstGroupPass();
    }
    if (
      props.completeRnd === 3 &&
      props.toiletFan === "connected" &&
      props.toiletLight === "connected" &&
      props.hallLamp === "disconnect" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      props.livingRadio === "connected" &&
      props.livingLight01 === "connected" &&
      props.livingAC === "connected" &&
      props.livingLight03 === "connected"
    ) {
      firstGroupPass();
    }
    if (
      props.completeRnd === 4 &&
      props.toiletFan === "connected" &&
      props.toiletLight === "connected" &&
      props.hallLamp === "connected" &&
      props.hallLight01 === "disconnect" &&
      props.hallLight02 === "connected" &&
      props.livingRadio === "connected" &&
      props.livingLight01 === "connected" &&
      props.livingAC === "connected" &&
      props.livingLight03 === "connected"
    ) {
      firstGroupPass();
    }
    if (
      props.completeRnd === 5 &&
      props.toiletFan === "connected" &&
      props.toiletLight === "connected" &&
      props.hallLamp === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "disconnect" &&
      props.livingRadio === "connected" &&
      props.livingLight01 === "connected" &&
      props.livingAC === "connected" &&
      props.livingLight03 === "connected"
    ) {
      firstGroupPass();
    }
    if (
      props.completeRnd === 6 &&
      props.toiletFan === "connected" &&
      props.toiletLight === "connected" &&
      props.hallLamp === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      props.livingRadio === "disconnect" &&
      props.livingLight01 === "connected" &&
      props.livingAC === "connected" &&
      props.livingLight03 === "connected"
    ) {
      firstGroupPass();
    }
    if (
      props.completeRnd === 7 &&
      props.toiletFan === "connected" &&
      props.toiletLight === "connected" &&
      props.hallLamp === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      props.livingRadio === "connected" &&
      props.livingLight01 === "disconnect" &&
      props.livingAC === "connected" &&
      props.livingLight03 === "connected"
    ) {
      firstGroupPass();
    }
    if (
      props.completeRnd === 8 &&
      props.toiletFan === "connected" &&
      props.toiletLight === "connected" &&
      props.hallLamp === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      props.livingRadio === "connected" &&
      props.livingLight01 === "connected" &&
      props.livingAC === "disconnect" &&
      props.livingLight03 === "connected"
    ) {
      firstGroupPass();
    }
    if (
      props.completeRnd === 9 &&
      props.toiletFan === "connected" &&
      props.toiletLight === "connected" &&
      props.hallLamp === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      props.livingRadio === "connected" &&
      props.livingLight01 === "connected" &&
      props.livingAC === "connected" &&
      props.livingLight03 === "disconnect"
    ) {
      firstGroupPass();

    }
    
    if (props.completeCorruptDevice === props.completeRnd) {
      SwalInitial();
      props.setIsFirstGroupBreaker(false);
    } else {
      props.setFirstGroupBreakerType("red");
      props.setIsFirstGroupBreaker(true);
      if (
        props.toiletFan === "disconnect" &&
        props.toiletLight === "disconnect" &&
        props.hallLamp === "disconnect" &&
        props.hallLight01 === "disconnect" &&
        props.hallLight02 === "disconnect" &&
        props.livingRadio === "disconnect" &&
        props.livingLight01 === "disconnect" &&
        props.livingAC === "disconnect" &&
        props.livingLight03 === "disconnect"
      ) {
        SwalBreakerOn();
      }

       //start my code for breaker pop up
    if(
      (props.completeRnd === 1 &&  props.toiletFan === "connected") || 
      (props.completeRnd === 2 &&  props.toiletLight =="connected") || 
      (props.completeRnd === 3 &&  props.hallLamp === "connected") || 
      (props.completeRnd === 4 &&  props.hallLight01 === "connected") || 
      (props.completeRnd === 5 &&  props.hallLight02 === "connected") || 
      (props.completeRnd === 6 &&  props.livingRadio === "connected") || 
      (props.completeRnd === 7 &&  props.livingLight01 === "connected") || 
      (props.completeRnd === 8 &&  props.livingAC === "connected") || 
      (props.completeRnd === 9 &&  props.livingLight03 === "connected")
     )
     {
      props.setFirstGroupBreakerType("black");
      props.setIsFirstGroupBreaker(false);
      SwalInitial()
    }
    // end my code for breaker pop up
    }

    //start my code for breaker pop up 
    if (
      props.toiletFan === "connected" &&
      props.toiletLight === "connected" &&
      props.hallLamp === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      props.livingRadio === "connected" &&
      props.livingLight01 === "connected" &&
      props.livingAC === "connected" &&
      props.livingLight03 === "connected"
    
    ) {
      props.setFirstGroupBreakerType("black");
      props.setIsFirstGroupBreaker(false);
      SwalInitial()
    
    }
  };

  const groupFirstBreakerHandlerOn = () => {
    props.setFirstGroupBreakerType("black");
    props.setIsFirstGroupBreaker(false);
  };

  // ***********************************
  // GROUP 2
  // ***********************************
  // kitchen section Breaker...........................................................................................
  // const lastAssignmentPass = () => {
  //   props.setIsModalOpen(true);
  //   dispatch(resultGroundFloor(props.groundFloorTrial));
  //   setTimeout(() => {
  //     SwalHurray('four','two')
  //   }, 30);

  // };
  const lastAssignmentPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 3000);

    setTimeout(() => {
      SwalHurray("one", "one");
    }, 30);

    setTimeout(() => {
      props.setKitchenBreakerType("black");
      props.setIsKitchenBreaker(false);
    }, 3000);
  };

  const kitchenBreakerHandlerOff = () => {
    if (
      props.rndKitchen === 1 &&
      props.kitchenMixture === "disconnect" &&
      props.kitchenOven === "connected" &&
      props.kitchenLight01 === "connected" &&
      props.kitchenLight02 === "connected" &&
      props.kitchenLight03 === "connected" &&
      props.kitchenToster === "connected"
    ) {
      lastAssignmentPass();
    }
    if (
      props.rndKitchen === 2 &&
      props.kitchenMixture === "connected" &&
      props.kitchenOven === "disconnect" &&
      props.kitchenLight01 === "connected" &&
      props.kitchenLight02 === "connected" &&
      props.kitchenLight03 === "connected" &&
      props.kitchenToster === "connected"
    ) {
      lastAssignmentPass();
    }
    if (
      props.rndKitchen === 3 &&
      props.kitchenMixture === "connected" &&
      props.kitchenOven === "connected" &&
      props.kitchenLight01 === "disconnect" &&
      props.kitchenLight02 === "connected" &&
      props.kitchenLight03 === "connected" &&
      props.kitchenToster === "connected"
    ) {
      lastAssignmentPass();
    }
    if (
      props.rndKitchen === 4 &&
      props.kitchenMixture === "connected" &&
      props.kitchenOven === "connected" &&
      props.kitchenLight01 === "connected" &&
      props.kitchenLight02 === "disconnect" &&
      props.kitchenLight03 === "connected" &&
      props.kitchenToster === "connected"
    ) {
      lastAssignmentPass();
    }
    if (
      props.rndKitchen === 5 &&
      props.kitchenMixture === "connected" &&
      props.kitchenOven === "connected" &&
      props.kitchenLight01 === "connected" &&
      props.kitchenLight02 === "connected" &&
      props.kitchenLight03 === "disconnect" &&
      props.kitchenToster === "connected"
    ) {
      lastAssignmentPass();
    }
    if (
      props.rndKitchen === 6 &&
      props.kitchenMixture === "connected" &&
      props.kitchenOven === "connected" &&
      props.kitchenLight01 === "connected" &&
      props.kitchenLight02 === "connected" &&
      props.kitchenLight03 === "connected" &&
      props.kitchenToster === "disconnect"
    ) {
      lastAssignmentPass();
    }

    if (props.kitchenCorruptDevice === props.rndKitchen) {
      SwalInitial();
      props.setIsKitchenBreaker(false);
    } else {
      props.setKitchenBreakerType("red");
      props.setIsKitchenBreaker(true);
      if (
        props.kitchenLight01 === "disconnect" &&
        props.kitchenLight02 === "disconnect" &&
        props.kitchenLight03 === "disconnect" &&
        props.kitchenMixture === "disconnect" &&
        props.kitchenOven === "disconnect" &&
        props.kitchenToster === "disconnect"
      ) {
        SwalBreakerOn();
      }

       //start my code for breaker pop up
    if(
      (props.rndKitchen === 1 && props.kitchenMixture === "connected") || 
     (props.rndKitchen === 2 && props.kitchenOven === "connected")   ||
     (props.rndKitchen ===3 && props.kitchenLight01 === "connected")     ||
     (props.rndKitchen ===4 && props.kitchenLight02 === "connected")      ||
     (props.rndKitchen ===5 && props.kitchenLight03 === "connected")      ||
     (props.rndKitchen ===6 &&  props.kitchenToster === "connected")        
     
     )
     {
      props.setKitchenBreakerType("black");
      props.setIsKitchenBreaker(false);
      SwalInitial()
    }
    // end my code for breaker pop up
    
    }
    //start my code for breaker pop up 
    if (
      // props.livingRadio === "connected" &&
      props.kitchenLight01 === "connected" &&
      props.kitchenLight02 =="connected" &&
      props.kitchenLight03 =="connected"  &&
      props.kitchenMixture =="connected"  &&
      props.kitchenOven =="connected"     &&
      props.kitchenToster =="connected"  
    ) {
      props.setKitchenBreakerType("black");
      props.setIsKitchenBreaker(false);
      SwalInitial()
    }
    //end my code for breaker pop up
  };

  const kitchenBreakerHandlerOn = () => {
    props.setKitchenBreakerType("black");
    props.setIsKitchenBreaker(false);
  };
  // ***********************************
  // GROUP 3 
  // ***********************************
  const thirdGroupPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 3000);

    setTimeout(() => {
      SwalHurray("one", "one");
    }, 30);

    setTimeout(() => {
      props.setGroupThreeBreakerType("black");
      props.setIsGroupThreeBreaker(false);
    }, 3000);
  };
  const groupThreeBreakerHandlerOff = () => {
    if (
      props.rndGroupThree === 1 &&
      props.livingOneLignt01 === "disconnect" &&
      props.livingOneLignt02 === "connected" &&
      props.livingOneFan === "connected" &&
      props.livingOneLignt03 === "connected" &&
      props.livingOneTV === "connected" &&

      props.livingTwoLignt01 === "connected" &&
      props.livingTwoFan === "connected" &&
      props.livingTwoLignt02 === "connected" &&
      props.livingTwoSmallLamp === "connected"
    ) {
      thirdGroupPass();
    }
    if (
      props.rndGroupThree === 2 &&
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt02 === "disconnect" &&
      props.livingOneFan === "connected" &&
      props.livingOneLignt03 === "connected" &&
      props.livingOneTV === "connected" &&

      props.livingTwoLignt01 === "connected" &&
      props.livingTwoFan === "connected" &&
      props.livingTwoLignt02 === "connected" &&
      props.livingTwoSmallLamp === "connected"
    ) {
      thirdGroupPass();
    }
    if (
      props.rndGroupThree === 3 &&
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt02 === "connected" &&
      props.livingOneLignt03 === "disconnect" &&
      props.livingOneFan === "connected" &&
      props.livingOneTV === "connected" &&

      props.livingTwoLignt01 === "connected" &&
      props.livingTwoFan === "connected" &&
      props.livingTwoLignt02 === "connected" &&
      props.livingTwoSmallLamp === "connected"
    ) {
      thirdGroupPass();
    }
    if (
      props.rndGroupThree === 4 &&
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt02 === "connected" &&
      props.livingOneLignt03 === "connected" &&
      props.livingOneFan === "disconnect" &&
      props.livingOneTV === "connected" &&

      props.livingTwoLignt01 === "connected" &&
      props.livingTwoFan === "connected" &&
      props.livingTwoLignt02 === "connected" &&
      props.livingTwoSmallLamp === "connected"
    ) {
      thirdGroupPass();
    }
    if (
      props.rndGroupThree === 5 &&
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt02 === "connected" &&
      props.livingOneFan === "connected" && 
      props.livingOneLignt03 === "connected" &&
      props.livingOneTV === "disconnect" &&

      props.livingTwoLignt01 === "connected" &&
      props.livingTwoFan === "connected" &&
      props.livingTwoLignt02 === "connected" &&
      props.livingTwoSmallLamp === "connected"
    ) {
      thirdGroupPass();
    }
    if (
      props.rndGroupThree === 6 &&
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt02 === "connected" &&
      props.livingOneFan === "connected" && 
      props.livingOneLignt03 === "connected" &&
      props.livingOneTV === "connected" &&

      props.livingTwoLignt01 === "disconnect" &&
      props.livingTwoFan === "connected" &&
      props.livingTwoLignt02 === "connected" &&
      props.livingTwoSmallLamp === "connected"
    ) {
      thirdGroupPass();
    }
    if (
      props.rndGroupThree === 7 &&
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt02 === "connected" &&
      props.livingOneFan === "connected" && 
      props.livingOneLignt03 === "connected" &&
      props.livingOneTV === "connected" &&

      props.livingTwoLignt01 === "connected" &&
      props.livingTwoFan === "disconnect" &&
      props.livingTwoLignt02 === "connected" &&
      props.livingTwoSmallLamp === "connected"
    ) {
      thirdGroupPass();
    }
    if (
      props.rndGroupThree === 8 &&
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt02 === "connected" &&
      props.livingOneFan === "connected" && 
      props.livingOneLignt03 === "connected" &&
      props.livingOneTV === "connected" &&

      props.livingTwoLignt01 === "connected" &&
      props.livingTwoFan === "connected" &&
      props.livingTwoLignt02 === "disconnect" &&
      props.livingTwoSmallLamp === "connected"
    ) {
      thirdGroupPass();
    }
    if (
      props.rndGroupThree === 9 &&
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt02 === "connected" &&
      props.livingOneFan === "connected" && 
      props.livingOneLignt03 === "connected" &&
      props.livingOneTV === "connected" &&

      props.livingTwoLignt01 === "connected" &&
      props.livingTwoFan === "connected" &&
      props.livingTwoLignt02 === "connected" &&
      props.livingTwoSmallLamp === "disconnect"
    ) {
      thirdGroupPass();
    }
   

    if (props.groupThreeCorruptDevice === props.rndGroupThree) {
      SwalInitial();
      props.setIsGroupThreeBreaker(false);
    } else {
      props.setGroupThreeBreakerType("red");
      props.setIsGroupThreeBreaker(true);
      if (
        props.livingOneLignt01 === "disconnect" &&
        props.livingOneLignt03 === "disconnect" &&
        props.livingOneLignt02 === "disconnect" &&
        props.livingOneFan === "disconnect" &&
        props.livingOneTV === "disconnect" &&

        props.livingTwoLignt01 === "disconnect" &&
        props.livingTwoFan === "disconnect" &&
        props.livingTwoLignt02 === "disconnect" &&
        props.livingTwoSmallLamp === "disconnect"
      ) {
        SwalBreakerOn();
      }
      //start my code for breaker pop up
      if(
        (props.rndGroupThree === 1 && props.livingOneLignt01 === "connected") || 
        (props.rndGroupThree === 2 && props.livingOneLignt02 =="connected")  ||
        (props.rndGroupThree === 3 && props.livingOneLignt03 === "connected") ||
        (props.rndGroupThree === 4 && props.livingOneFan =="connected" ) ||
        (props.rndGroupThree === 5 && props.livingOneTV =="connected") ||
        (props.rndGroupThree === 6 && props.livingTwoLignt01 =="connected") ||
        (props.rndGroupThree === 7 && props.livingTwoFan =="connected") ||
        (props.rndGroupThree === 8 && props.livingTwoLignt02 =="connected") ||
        (props.rndGroupThree === 9 && props.livingTwoSmallLamp =="connected")
      )
      {
        props.setGroupThreeBreakerType("black");
        props.setIsGroupThreeBreaker(false);
        SwalInitial()
      }
      // end my code for breaker pop up
    }
    //start my code for breaker pop up 
    if (
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt03 === "connected" &&
      props.livingOneLignt02 =="connected" &&
      props.livingOneFan =="connected" &&
      props.livingOneTV =="connected" &&
      
      props.livingTwoLignt01 === "connected" &&
      props.livingTwoFan === "connected" &&
      props.livingTwoLignt02 === "connected" &&
      props.livingTwoSmallLamp === "connected"
    ) {
      props.setGroupThreeBreakerType("black");
      props.setIsLivingOneBreaker(false);
      SwalInitial()
    }
  //end my code for breaker pop up
  };

  const groupThreeBreakerHandlerOn = () => {
    props.setGroupThreeBreakerType("black");
    props.setIsGroupThreeBreaker(false);
  };

  // ***********************************
  // GROUP 4 
  // ***********************************
  const forthGroupPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 3000);

    setTimeout(() => {
      SwalHurray("one", "one");
    }, 30);

    setTimeout(() => {
      props.setGroupFourBreakerType("black");
      props.setIsGroupFourBreaker(false);
    }, 3000);
  };
  const groupFourBreakerHandlerOff = () => {
    if (
      props.rndGroupFour === 1 &&
      props.hallLedTv === "disconnect" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      
      props.livingLight01 === "connected" &&
      props.livingLight02 === "connected" &&
      props.livingSilingFan === "connected" &&

      props.toiletLight === "connected" &&
      props.toiletLight02 === "connected" &&
      props.toiletFan === "connected" &&
      props.toiletLight03 === "connected"

    ) {
      forthGroupPass();
    }
    if (
      props.rndGroupFour === 2 &&
      props.hallLedTv === "connected" &&
      props.hallLight01 === "disconnect" &&
      props.hallLight02 === "connected" &&
      
      props.livingLight01 === "connected" &&
      props.livingLight02 === "connected" &&
      props.livingSilingFan === "connected" &&

      props.toiletLight === "connected" &&
      props.toiletLight02 === "connected" &&
      props.toiletFan === "connected" &&
      props.toiletLight03 === "connected"

    ) {
      forthGroupPass();
    }
    if (
      props.rndGroupFour === 3 &&
      props.hallLedTv === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "disconnect" &&
      
      props.livingLight01 === "connected" &&
      props.livingLight02 === "connected" &&
      props.livingSilingFan === "connected" &&

      props.toiletLight === "connected" &&
      props.toiletLight02 === "connected" &&
      props.toiletFan === "connected" &&
      props.toiletLight03 === "connected"

    ) {
      forthGroupPass();
    }
    if (
      props.rndGroupFour === 4 &&
      props.hallLedTv === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      
      props.livingLight01 === "disconnect" &&
      props.livingLight02 === "connected" &&
      props.livingSilingFan === "connected" &&

      props.toiletLight === "connected" &&
      props.toiletLight02 === "connected" &&
      props.toiletFan === "connected" &&
      props.toiletLight03 === "connected"

    ) {
      forthGroupPass();
    }
    if (
      props.rndGroupFour === 5 &&
      props.hallLedTv === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      
      props.livingLight01 === "connected" &&
      props.livingLight02 === "disconnect" &&
      props.livingSilingFan === "connected" &&

      props.toiletLight === "connected" &&
      props.toiletLight02 === "connected" &&
      props.toiletFan === "connected" &&
      props.toiletLight03 === "connected"

    ) {
      forthGroupPass();
    }
    if (
      props.rndGroupFour === 6 &&
      props.hallLedTv === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      
      props.livingLight01 === "connected" &&
      props.livingLight02 === "connected" &&
      props.livingSilingFan === "disconnect" &&

      props.toiletLight === "connected" &&
      props.toiletLight02 === "connected" &&
      props.toiletFan === "connected" &&
      props.toiletLight03 === "connected"

    ) {
      forthGroupPass();
    }
    if (
      props.rndGroupFour === 7 &&
      props.hallLedTv === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      
      props.livingLight01 === "connected" &&
      props.livingLight02 === "connected" &&
      props.livingSilingFan === "connected" &&

      props.toiletLight === "disconnect" &&
      props.toiletLight02 === "connected" &&
      props.toiletFan === "connected" &&
      props.toiletLight03 === "connected"

    ) {
      forthGroupPass();
    }
    if (
      props.rndGroupFour === 8 &&
      props.hallLedTv === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      
      props.livingLight01 === "connected" &&
      props.livingLight02 === "connected" &&
      props.livingSilingFan === "connected" &&

      props.toiletLight === "connected" &&
      props.toiletLight02 === "disconnect" &&
      props.toiletFan === "connected" &&
      props.toiletLight03 === "connected"

    ) {
      forthGroupPass();
    }
    if (
      props.rndGroupFour === 9 &&
      props.hallLedTv === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      
      props.livingLight01 === "connected" &&
      props.livingLight02 === "connected" &&
      props.livingSilingFan === "connected" &&

      props.toiletLight === "connected" &&
      props.toiletLight02 === "connected" &&
      props.toiletFan === "disconnect" &&
      props.toiletLight03 === "connected"

    ) {
      forthGroupPass();
    }
    if (
      props.rndGroupFour === 10 &&
      props.hallLedTv === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected" &&
      
      props.livingLight01 === "connected" &&
      props.livingLight02 === "connected" &&
      props.livingSilingFan === "connected" &&

      props.toiletLight === "connected" &&
      props.toiletLight02 === "connected" &&
      props.toiletFan === "connected" &&
      props.toiletLight03 === "disconnect"

    ) {
      forthGroupPass();
    }

    if (props.groupFourCorruptDevice === props.rndGroupFour) {
      SwalInitial();
      props.setIsGroupFourBreaker(false);
    } else {
      props.setGroupFourBreakerType("red");
      props.setIsGroupFourBreaker(true);
      if (
        props.hallLight01 === "disconnect" &&
        props.hallLight02 === "disconnect" &&
        props.hallLedTv === "disconnect" &&

        props.livingLight01 === "disconnect" &&
        props.livingLight02 === "disconnect" &&
        props.livingSilingFan === "disconnect" &&

        props.toiletLight === "disconnect" &&
        props.toiletLight02 === "disconnect" &&
        props.toiletFan === "disconnect" &&
        props.toiletLight03 === "disconnect"
      ) {
        SwalBreakerOn();
      }

       //start my code for breaker pop up
    if(
      (props.rndGroupFour === 1 && props.hallLedTv =="connected") || 
      (props.rndGroupFour === 2 &&  props.hallLight01 === "connected" )  ||
      (props.rndGroupFour ===3 &&  props.hallLight02 =="connected") ||

      (props.rndGroupFour ===4 &&  props.livingLight01 =="connected") ||
      (props.rndGroupFour ===5 &&  props.livingLight02 =="connected") ||
      (props.rndGroupFour ===6 &&  props.livingSilingFan =="connected") ||

      (props.rndGroupFour ===7 &&  props.toiletLight =="connected") ||
      (props.rndGroupFour ===8 &&  props.toiletLight02 =="connected") ||
      (props.rndGroupFour ===9 &&  props.toiletFan =="connected") ||
      (props.rndGroupFour ===10 &&  props.toiletLight03 =="connected")
    )
      {
        props.setGroupFourBreakerType("black");
        props.setIsGroupFourBreaker(false);
        SwalInitial()
      }
    // end my code for breaker pop up
    }

     //start my code for breaker pop up 
     if (
      // props.livingRadio === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 =="connected" &&
      props.hallLedTv =="connected" &&
      
      props.livingLight01 =="connected" &&
      props.livingLight02 =="connected" &&
      props.livingSilingFan =="connected" &&

      props.toiletLight =="connected" &&
      props.toiletLight02 =="connected" &&
      props.toiletFan =="connected" &&
      props.toiletLight03 =="connected"
    ) {
      props.setGroupFourBreakerType("black");
      props.setIsGroupFourBreaker(false);
      SwalInitial()
    
    }
  };
  const groupFourBreakerHandlerOn = () => {
    props.setGroupFourBreakerType("black");
    props.setIsGroupFourBreaker(false);
  };

  // ***********************************
  // GROUP 5 
  // ***********************************
    const fifthGroupPass = () => {
      dispatch(isHurray(true));
      hurraySound();

      setTimeout(() => {
        dispatch(isHurray(false));
      }, 3000);

      setTimeout(() => {
        SwalHurray("one", "one");
      }, 30);

      setTimeout(() => {
        props.setgroupFiveBreakerType("black");
        props.setIsGroupFiveBreaker(false);
      }, 3000);
    };

    const groupFifthBreakerHandlerOff = () => {
      if (
        props.rndGroupFive === 1 &&
        props.hallLampFive === "disconnect" &&
        props.hallLight01Five === "connected" &&
        props.hallLight02Five === "connected" &&
        props.guestLamp === "connected" &&
        props.guestRadio === "connected" &&
        props.guestFan === "connected" &&
        props.guestLED === "connected" &&
        props.studyLamp === "connected" &&
        props.studyLamp02 === "connected" &&
        props.livingOneLignt01 === "connected" &&
        props.livingOneLignt03 === "connected" &&
        props.livingOneLignt02 === "connected"
      ) {
        fifthGroupPass();
      }
      if (
        props.rndGroupFive === 2 &&
        props.hallLampFive === "connected" &&
        props.hallLight01Five === "disconnect" &&
        props.hallLight02Five === "connected" &&
        props.guestLamp === "connected" &&
        props.guestRadio === "connected" &&
        props.guestFan === "connected" &&
        props.guestLED === "connected" &&
        props.studyLamp === "connected" &&
        props.studyLamp02 === "connected" &&
        props.livingOneLignt01 === "connected" &&
        props.livingOneLignt03 === "connected" &&
        props.livingOneLignt02 === "connected"
      ) {
        fifthGroupPass();
      }
      if (
        props.rndGroupFive === 3 &&
        props.hallLampFive === "connected" &&
        props.hallLight01Five === "connected" &&
        props.hallLight02Five === "disconnect" &&
        props.guestLamp === "connected" &&
        props.guestRadio === "connected" &&
        props.guestFan === "connected" &&
        props.guestLED === "connected" &&
        props.studyLamp === "connected" &&
        props.studyLamp02 === "connected" &&
        props.livingOneLignt01 === "connected" &&
        props.livingOneLignt03 === "connected" &&
        props.livingOneLignt02 === "connected"
      ) {
        fifthGroupPass();
      }
      if (
        props.rndGroupFive === 4 &&
        props.hallLampFive === "connected" &&
        props.hallLight01Five === "connected" &&
        props.hallLight02Five === "connected" &&
        props.guestLamp === "disconnect" &&
        props.guestRadio === "connected" &&
        props.guestFan === "connected" &&
        props.guestLED === "connected" &&
        props.studyLamp === "connected" &&
        props.studyLamp02 === "connected" &&
        props.livingOneLignt01 === "connected" &&
        props.livingOneLignt03 === "connected" &&
        props.livingOneLignt02 === "connected"
      ) {
        fifthGroupPass();
      }
      if (
        props.rndGroupFive === 5 &&
        props.hallLampFive === "connected" &&
        props.hallLight01Five === "connected" &&
        props.hallLight02Five === "connected" &&
        props.guestLamp === "connected" &&
        props.guestRadio === "disconnect" &&
        props.guestFan === "connected" &&
        props.guestLED === "connected" &&
        props.studyLamp === "connected" &&
        props.studyLamp02 === "connected" &&
        props.livingOneLignt01 === "connected" &&
        props.livingOneLignt03 === "connected" &&
        props.livingOneLignt02 === "connected"
      ) {
        fifthGroupPass();
      }
      if (
        props.rndGroupFive === 6 &&
        props.hallLampFive === "connected" &&
        props.hallLight01Five === "connected" &&
        props.hallLight02Five === "connected" &&
        props.guestLamp === "connected" &&
        props.guestRadio === "connected" &&
        props.guestFan === "disconnect" &&
        props.guestLED === "connected" &&
        props.studyLamp === "connected" &&
        props.studyLamp02 === "connected" &&
        props.livingOneLignt01 === "connected" &&
        props.livingOneLignt03 === "connected" &&
        props.livingOneLignt02 === "connected"
      ) {
        fifthGroupPass();
      }
      if (
        props.rndGroupFive === 7 &&
        props.hallLampFive === "connected" &&
        props.hallLight01Five === "connected" &&
        props.hallLight02Five === "connected" &&
        props.guestLamp === "connected" &&
        props.guestRadio === "connected" &&
        props.guestFan === "connected" &&
        props.guestLED === "disconnect" &&
        props.studyLamp === "connected" &&
        props.studyLamp02 === "connected" &&
        props.livingOneLignt01 === "connected" &&
        props.livingOneLignt03 === "connected" &&
        props.livingOneLignt02 === "connected"
      ) {
        fifthGroupPass();
      }
      if (
        props.rndGroupFive === 8 &&
        props.hallLampFive === "connected" &&
        props.hallLight01Five === "connected" &&
        props.hallLight02Five === "connected" &&
        props.guestLamp === "connected" &&
        props.guestRadio === "connected" &&
        props.guestFan === "connected" &&
        props.guestLED === "connected" &&
        props.studyLamp === "disconnect" &&
        props.studyLamp02 === "connected" &&
        props.livingOneLignt01 === "connected" &&
        props.livingOneLignt03 === "connected" &&
        props.livingOneLignt02 === "connected"
      ) {
        fifthGroupPass();
      }
      if (
        props.rndGroupFive === 9 &&
        props.hallLampFive === "connected" &&
        props.hallLight01Five === "connected" &&
        props.hallLight02Five === "connected" &&
        props.guestLamp === "connected" &&
        props.guestRadio === "connected" &&
        props.guestFan === "connected" &&
        props.guestLED === "connected" &&
        props.studyLamp === "connected" &&
        props.studyLamp02 === "disconnect" &&
        props.livingOneLignt01 === "connected" &&
        props.livingOneLignt03 === "connected" &&
        props.livingOneLignt02 === "connected"
      ) {
        fifthGroupPass();
      }
      if (
        props.rndGroupFive === 10 &&
        props.hallLampFive === "connected" &&
        props.hallLight01Five === "connected" &&
        props.hallLight02Five === "connected" &&
        props.guestLamp === "connected" &&
        props.guestRadio === "connected" &&
        props.guestFan === "connected" &&
        props.guestLED === "connected" &&
        props.studyLamp === "connected" &&
        props.studyLamp02 === "connected" &&
        props.livingOneLignt01 === "disconnect" &&
        props.livingOneLignt03 === "connected" &&
        props.livingOneLignt02 === "connected"
      ) {
        fifthGroupPass();
      }
      if (
        props.rndGroupFive === 11 &&
        props.hallLampFive === "connected" &&
        props.hallLight01Five === "connected" &&
        props.hallLight02Five === "connected" &&
        props.guestLamp === "connected" &&
        props.guestRadio === "connected" &&
        props.guestFan === "connected" &&
        props.guestLED === "connected" &&
        props.studyLamp === "connected" &&
        props.studyLamp02 === "connected" &&
        props.livingOneLignt01 === "connected" &&
        props.livingOneLignt03 === "connected" &&
        props.livingOneLignt02 === "disconnect"
      ) {
        fifthGroupPass();
      }
      if (
        props.rndGroupFive === 12 &&
        props.hallLampFive === "connected" &&
        props.hallLight01Five === "connected" &&
        props.hallLight02Five === "connected" &&
        props.guestLamp === "connected" &&
        props.guestRadio === "connected" &&
        props.guestFan === "connected" &&
        props.guestLED === "connected" &&
        props.studyLamp === "connected" &&
        props.studyLamp02 === "connected" &&
        props.livingOneLignt01 === "connected" &&
        props.livingOneLignt03 === "disconnect" &&
        props.livingOneLignt02 === "connected"
      ) {
        fifthGroupPass();
      }


      if (props.groupFiveCorruptDevice === props.rndGroupFive) {
        SwalInitial();
        props.setIsGroupFiveBreaker(false);
      }   
        else {
        props.setgroupFiveBreakerType("red");
        props.setIsGroupFiveBreaker(true);
        if (
          props.hallLight01Five === "disconnect" &&
          props.hallLight02Five === "disconnect" &&
          props.hallLampFive === "disconnect" &&
          props.guestLamp === "disconnect" &&
          props.guestRadio === "disconnect" &&
          props.guestFan === "disconnect" &&
          props.guestLED === "disconnect" &&
          props.studyLamp === "disconnect" &&
          props.studyLamp02 === "disconnect" &&
          props.livingOneLignt01 === "disconnect" &&
          props.livingOneLignt03 === "disconnect" &&
          props.livingOneLignt02 === "disconnect"
        ) {
          SwalBreakerOn();
        }
        if(
          (props.rndGroupFive === 1 && props.hallLampFive === "connected")   ||
          (props.rndGroupFive === 2 && props.hallLight01Five === "connected") ||
          (props.rndGroupFive === 3 && props.hallLight02Five === "connected") ||
          (props.rndGroupFive === 4 && props.guestLamp === "connected") ||
          (props.rndGroupFive === 5 && props.guestRadio === "connected") ||
          (props.rndGroupFive === 6 && props.guestFan === "connected") ||
          (props.rndGroupFive === 7 && props.guestLED === "connected") ||
          (props.rndGroupFive === 8 && props.studyLamp === "connected") ||
          (props.rndGroupFive === 9 && props.studyLamp02 === "connected") ||
          (props.rndGroupFive === 10 && props.livingOneLignt01 === "connected") ||
          (props.rndGroupFive === 11 && props.livingOneLignt02 === "connected") ||
          (props.rndGroupFive === 12 && props.livingOneLignt03 === "connected")
        ) {
          SwalInitial();
          props.setgroupFiveBreakerType("black");
          props.setIsGroupFiveBreaker(false);
          
        }  
      }
      //start my code for breaker pop up
      if (
        props.hallLight02Five === "connected" &&
        props.hallLight01Five === "connected" &&
        props.hallLampFive === "connected" &&
        props.guestLamp === "connected" &&
        props.guestRadio === "connected" &&
        props.guestFan === "connected" &&
        props.guestLED === "connected" &&
        props.studyLamp === "connected" &&
        props.studyLamp02 === "connected" &&
        props.livingOneLignt01 === "connected" &&
        props.livingOneLignt02 === "connected" &&
        props.livingOneLignt03 === "connected"
      ) {
        props.setgroupFiveBreakerType("black");
        props.setIsGroupFiveBreaker(false);
        SwalInitial();
      }
    };
  
    const groupFifthBreakerHandlerOn = () => {
      props.setgroupFiveBreakerType("black");
      props.setIsGroupFiveBreaker(false);
    };
    // ***********************************
    // GROUP 6 
    // ***********************************
    const sixGroupPass = () => {
      dispatch(isHurray(true));
      hurraySound();

      setTimeout(() => {
        dispatch(isHurray(false));
      }, 3000);

      setTimeout(() => {
        SwalHurray("one", "one");
      }, 30);

      setTimeout(() => {
        props.setLaundaryBreakerType("black");
        props.setIsLaundaryBreaker(false);
      }, 3000);
    };

    const laundaryBreakerHandlerOff = () => {
      if (
        props.rndLaundary === 1 &&
        props.laundaryWashing === "disconnect" &&
        props.laundaryLight01 === "connected" &&
        props.laundaryLight02 === "connected"
      ) {
        sixGroupPass();
      }
      if (
        props.rndLaundary === 2 &&
        props.laundaryWashing === "connected" &&
        props.laundaryLight01 === "disconnect" &&
        props.laundaryLight02 === "connected"
      ) {
        sixGroupPass();
      }
      if (
        props.rndLaundary === 3 &&
        props.laundaryWashing === "connected" &&
        props.laundaryLight01 === "connected" &&
        props.laundaryLight02 === "disconnect"
      ) {
        sixGroupPass();
      }
  
      if (props.laundaryCorruptDevice === props.rndLaundary) {
        SwalInitial();
        props.setIsLaundaryBreaker(false);
      } else {
        props.setLaundaryBreakerType("red");
        props.setIsLaundaryBreaker(true);
        if (
          props.laundaryLight01 === "disconnect" &&
          props.laundaryLight02 === "disconnect" &&
          props.laundaryWashing === "disconnect"
        ) {
          SwalBreakerOn();
        }
        //start my code for breaker pop up
      if (
       ( props.rndLaundary === 1 && props.laundaryWashing === "connected") ||
        (props.rndLaundary === 2 &&  props.laundaryLight01 === "connected") ||
      (  props.rndLaundary === 3 &&  props.laundaryLight02 === "connected")
      ) {
        props.setLaundaryBreakerType("black");
        props.setIsLaundaryBreaker(false);
        SwalInitial();
      }
      // end my code for breaker pop up
      }
      //start my code for breaker pop up
      if (
        props.laundaryLight01 === "connected" &&
        props.laundaryLight02 === "connected" &&
        props.LaundaryWashing == "connected"
      ) {
        props.setLaundaryBreakerType("black");
        props.setIsLaundaryBreaker(false);
        SwalInitial();
      }
      
      //end my code for breaker pop up
    };
  
    const laundaryBreakerHandlerOn = () => {
      props.setLaundaryBreakerType("black");
      props.setIsLaundaryBreaker(false);
    };

  return (
    <div>
      <div className=" text-center">
        <div style={{ display: "none" }}>
          <ResultModel
            isModalOpen={props.isModalOpen}
            setIsModalOpen={props.setIsModalOpen}
            trial={props.groundFloorTrial}
            setTrial={props.setGroundFloorTrial}
            floor={"groundFloor"}
          />
        </div>
        <div
          className="check-exercise-div"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/mask-group");
          }}
        >
          <Avator phase={"game"} />
        </div>
        
        <hr style={{ marginTop: "2%" }} />
        <div className="legend">
          {/* GROUP 1 */}
          <div className="set-legend-text">
            <p>Group&nbsp;1:</p> 
            <p className="grp-detail">Hall, Toilet, Living room</p>
          </div>
          {/* GROUP 2 */}
          <div className="set-legend-text">
            <p>Group&nbsp;2:</p> 
            <p className="grp-detail">Kitchen</p>
          </div>
          {/* GROUP 3 */}
          <div className="set-legend-text">
            <p>Group&nbsp;3:</p> 
            <p className="grp-detail">Bedroom 01, Bedroom 02</p>
          </div>
          {/* GROUP 4 */}
          <div className="set-legend-text">
            <p>Group&nbsp;4:</p> 
            <p className="grp-detail">Hall, Toilet, Bedroom 03</p>
          </div>
          {/* GROUP 5 */}
          <div className="set-legend-text">
            <p>Group&nbsp;5:</p> 
            <p className="grp-detail">hall, guest room, study room, storage room</p>
          </div>
          {/* GROUP 6 */}
          <div className="set-legend-text">
            <p>Group&nbsp;6:</p> 
            <p className="grp-detail">laundry</p>
          </div>
          {/* END GROUP */}
        </div>
        <div className="set-main-flex-container" style={{marginTop:'2rem'}}>
          <div
            className="meter-inner-img"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/meterGroup.png"
              })`,
            }}
          >
            <>
              {/* MAIN .................................................................. */}
              <div className="groupA">
                  <div className="d-flex justify-content-center">
                      <>
                        {props.firstGroupBreakerType === "black" ||
                        props.completeRnd === props.allCorruptDevice ? (
                          <button
                            className="group-btn position-Bath font-height-width btn-shadow"
                            onClick={groupFirstBreakerHandlerOff}
                          >
                            <img
                              src={breakerOffIMG}
                              alt=""
                              className="breakerImg"
                            />
                          </button>
                        ) : (
                          <button
                            className="group-btn position-Bath font-height-width btn-shadow"
                            onClick={groupFirstBreakerHandlerOn}
                          >
                            <img
                              src={breakerOnIMG}
                              alt=""
                              className="breakerImg"
                            />
                          </button>
                        )}
                      </>
                      <>
                          {props.kitchenBreakerType === "black" ||
                          props.rndKitchen === props.kitchenCorruptDevice ? (
                            <button
                              className="group-btn position-living font-height-width btn-shadow"
                              onClick={kitchenBreakerHandlerOff}
                            >
                              <img
                                src={breakerOffIMG}
                                alt=""
                                className="breakerImg"
                              />
                            </button>
                          ) : (
                            <button
                              className="group-btn position-living font-height-width btn-shadow"
                              onClick={kitchenBreakerHandlerOn}
                            >
                              <img
                                src={breakerOnIMG}
                                alt=""
                                className="breakerImg"
                              />
                            </button>
                          )}
                        </>
                        <>
                          {props.groupThreeBreakerType === "black" ||
                          props.rndGroupThree === props.groupThreeCorruptDevice ? (
                            <button
                              className="group-btn position-living font-height-width btn-shadow"
                              onClick={groupThreeBreakerHandlerOff}
                            >
                              <img
                                src={breakerOffIMG}
                                alt=""
                                className="breakerImg"
                              />
                            </button>
                          ) : (
                            <button
                              className="group-btn position-living font-height-width btn-shadow"
                              onClick={groupThreeBreakerHandlerOn}
                            >
                              <img
                                src={breakerOnIMG}
                                alt=""
                                className="breakerImg"
                              />
                            </button>
                          )}
                        </>
                  </div>
              </div>

              {/* Group Two .................................................................. */}
              <div className="groupB">
                  <>
                    {props.groupFourBreakerType === "black" ||
                    props.rndGroupFour === props.groupFourCorruptDevice ? (
                      <button
                        className="group-btn position-Hall font-height-width  btn-shadow"
                        onClick={groupFourBreakerHandlerOff}
                      >
                      <img
                        src={breakerOffIMG}
                        alt=""
                        className="breakerImg"
                      />
                      </button>
                      ) : (
                      <button
                        className="group-btn position-Hall font-height-width  btn-shadow"
                        onClick={groupFourBreakerHandlerOn}
                      >
                        <img
                          src={breakerOnIMG}
                          alt=""
                          className="breakerImg"
                        />
                      </button>
                      )}
                  </>
                  <>
                    {props.groupFiveBreakerType === "black" ||
                    props.rndGroupFive === props.groupFiveCorruptDevice ? (
                      <button
                        className="group-btn position-Hall font-height-width  btn-shadow"
                        onClick={groupFifthBreakerHandlerOff}
                      >
                      <img
                        src={breakerOffIMG}
                        alt=""
                        className="breakerImg"
                      />
                      </button>
                      ) : (
                      <button
                        className="group-btn position-Hall font-height-width  btn-shadow"
                        onClick={groupFifthBreakerHandlerOn}
                      >
                        <img
                          src={breakerOnIMG}
                          alt=""
                          className="breakerImg"
                        />
                      </button>
                      )}
                  </>
                  <>
                    {props.laundaryBreakerType === "black" ||
                    props.rndLaundary === props.laundaryCorruptDevice ? (
                      <button
                        className="group-btn position-Hall font-height-width  btn-shadow"
                        onClick={laundaryBreakerHandlerOff}
                      >
                      <img
                        src={breakerOffIMG}
                        alt=""
                        className="breakerImg"
                      />
                      </button>
                      ) : (
                      <button
                        className="group-btn position-Hall font-height-width  btn-shadow"
                        onClick={laundaryBreakerHandlerOn}
                      >
                        <img
                          src={breakerOnIMG}
                          alt=""
                          className="breakerImg"
                        />
                      </button>
                      )}
                  </>
                {/* {props.groupGroundFloor === "GroupTwo" && location.pathname ==="/ground-floor/kitchen" ? ( */}
                  <>
                    {/* {props.breaker === "kitchen" ? ( */}
                      {/* <>
                        {props.kitchenBreakerType === "black" ||
                        props.rndKitchen === props.kitchenCorruptDevice ? (
                          <button
                            className="group-btn position-Kitchen font-height-width-groupB btn-shadow"
                            onClick={groupFifthBreakerHandlerOff}
                          >
                            <img
                              src={breakerOffIMG}
                              alt=""
                              className="breakerImg"
                            />
                          </button>
                        ) : (
                          <button
                            className="group-btn position-Kitchen font-height-width-groupB btn-shadow"
                            onClick={groupFifthBreakerHandlerOn}
                          >
                            <img
                              src={breakerOnIMG}
                              alt=""
                              className="breakerImg"
                            />
                          </button>
                        )}
                      </> */}
                    {/* ) : ( */}
                      {/* <button
                        className="group-btn position-Kitchen font-height-width-groupB "
                        disabled={location.pathname !=="/ground-floor/kitchen"}

                        onClick={() => {
                          props.setBreaker("kitchen");
                        }}
                      >
                        Kitchen
                      </button> */}
                    {/* )} */}
                  </>
                {/*}) : (
                  <button
                    className="group-btn position-set2"
                    onClick={() => props.setGroupGroundFloor("GroupTwo")}
                  >
                    Group 2
                  </button>
                )} */}
              </div>
            </>
          </div>
        {/*// ) : (
        //   ""
        // )} */}
      </div>
      <h3 className="set-floor-title">Gound Floor</h3>
      <hr />
      </div>
      {/* to open attic model */}
      {
        showAttic && (
          <AtticModel isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          
            /> 

        )
      }

      {/* to open first floor model  */}

      {
        showFirstFloor && (
          <FirstFloorModel isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
           
            
            /> 

        )
      }

      {/* to open ground floor model  */}

      {/* {
        showGroundFloor && (
          <GroundFloorModel isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}/> 

        )
      } */}

      

      <div className="check-exercise-div d-none-btns-sidebar">
       
        <button
          className={
            btnHover === "attic"
              ? "btn-Check-Exercise btnHover"
              : "btn-Check-Exercise"
          }
          onClick={() => {  
            // setShowAttic(true)
             navigate("/attic"); 
          }}
          onMouseEnter={() => setBtnHover("attic")}
          onMouseLeave={() => setBtnHover("")}
        >
          Attic
        </button>
      </div>
      <div className="check-exercise-div d-none-btns-sidebar">
        <button
          className={
            btnHover === "firstFloor"
              ? "btn-Check-Exercise btnHover"
              : "btn-Check-Exercise"
          }
          onClick={() => {
            // setshowFirstFloor(true)
            navigate("/first-floor");
          }}
          onMouseEnter={() => setBtnHover("firstFloor")}
          onMouseLeave={() => setBtnHover("")}
        >
          First Floor
        </button>
      </div>
      <div className="check-exercise-div d-none-btns-sidebar">
        <button
          className={
            btnHover === "groundFloor"
              ? "btn-Check-Exercise btnHover"
              : "btn-Check-Exercise"
          }
          style={{ background: "white", color: "#b41c1c" }}
          onClick={() => {
            // setshowGroundFloor(true)

            navigate("/ground-floor");
            console.log("on ground floor");

          }}
          onMouseEnter={() => setBtnHover("groundFloor")}
          onMouseLeave={() => setBtnHover("")}
        >
          Ground Floor
        </button>
      </div>
    </div>
  );
};

export default RightNavBar;

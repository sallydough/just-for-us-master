// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";

// import { BsLightbulbFill, BsLightbulb } from "react-icons/bs";
// import "./lights.css";
// import { ChevronLeftIcon, ChevronRightIcon } from "../components/icons";
// import styled from "styled-components";

// const CustomArrowButton = styled.div`
//   width: 80px;
//   height: 80px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 1;

//   &:active {
//     transform: translateY(-50%), scale(0.95);
//   }
// `;

// const contactList = [
//   {
//     id: 1,
//     name: "LIVING ROOM LIGHTS",
//     pathway: "/home",
//     call: "Turn lights on?",
//     icon: <BsLightbulbFill size={230} className="nav-icon" />,
//   },
//   {
//     id: 2,
//     name: "KITCHEN LIGHTS",
//     pathway: "/iotControls",
//     call: "Turn lights on?",
//     icon: <BsLightbulbFill size={230} className="nav-icon" />,
//   },
//   {
//     id: 3,
//     name: "BATHROOM LIGHTS",
//     pathway: "/entertainment",
//     call: "Turn lights off?",
//     icon: <BsLightbulbFill size={230} className="nav-icon" />,
//   },
//   {
//     id: 4,
//     name: "BATHROOM LIGHTS",
//     pathway: "/calendar",
//     call: "Turn lights off?",
//     icon: <BsLightbulbFill size={230} className="nav-icon" />,
//   },
// ];

// const Lights = () => {
//   const [cardIndex, setCardIndex] = useState(0);
//   const [isYellow, setIsYellow] = useState(false);
//   const sliderRef = useRef(null);

//   const toggleColor = () => {
//     setIsYellow((prevIsYellow) => !prevIsYellow);
//   };

//   const CustomNextArrow = () => (
//     <CustomArrowButton
//       onClick={() => {
//         setCardIndex((prevIndex) => (prevIndex + 1) % contactList.length);
//         sliderRef.current.slickNext();
//       }}
//       style={{ right: -100 }}>
//       <ChevronRightIcon />
//     </CustomArrowButton>
//   );

//   const CustomPrevArrow = () => (
//     <CustomArrowButton
//       onClick={() => {
//         setCardIndex(
//           (prevIndex) =>
//             (prevIndex - 1 + contactList.length) % contactList.length
//         );
//         sliderRef.current.slickPrev();
//       }}
//       style={{ left: -100 }}>
//       <ChevronLeftIcon />
//     </CustomArrowButton>
//   );

//   const slidesSettings = {
//     infinite: true,
//     lazyLoad: true,
//     speed: 300,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: 0,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//     beforeChange: (current, next) => setCardIndex(next),
//   };

//   const lightsRef = useRef(null);

//   useEffect(() => {
//     // Ensure focus on the Lights component for keyboard navigation
//     lightsRef.current.focus();
//   }, []);

//   const handleKeyDown = (event) => {
//     if (event.key === "ArrowLeft") {
//       setCardIndex(
//         (prevIndex) => (prevIndex - 1 + contactList.length) % contactList.length
//       );
//       sliderRef.current.slickPrev();
//     } else if (event.key === "ArrowRight") {
//       setCardIndex((prevIndex) => (prevIndex + 1) % contactList.length);
//       sliderRef.current.slickNext();
//     } else if (event.key === "Enter") {
//       // Handle the logic to toggle light on or off for the selected card
//       console.log("Toggle light for card:", contactList[cardIndex].name);
//       toggleColor(); // Toggle light color
//     }
//   };

//   return (
//     <div
//       id="lights"
//       className="settings"
//       onKeyDown={handleKeyDown}
//       tabIndex="0"
//       ref={lightsRef}>
//       {/* <Link to="/" className="linkStyle">
//         <div className="up-arrow">
//           <IoIosArrowUp size={90} className="arrow-up" />
//         </div>
//         <div className="down-arrow">
//           <IoIosArrowDown size={90} className="arrow-down" />
//         </div>
//       </Link> */}
//       <div className="slider-call-1">
//         <div className="slider">
//           <Slider className="linkStyle" {...slidesSettings} ref={sliderRef}>
//             {contactList.map((card, idx) => (
//               <div
//                 key={card.id}
//                 className={idx === cardIndex ? "slide activeSlide" : "slide"}>
//                 {isYellow ? (
//                   <BsLightbulbFill
//                     size={230}
//                     color="yellow"
//                     onClick={toggleColor}
//                   />
//                 ) : (
//                   <BsLightbulb size={230} color="white" onClick={toggleColor} />
//                 )}
//                 <h1 className="card-name">{card.name}</h1>
//               </div>
//             ))}
//           </Slider>
//         </div>
//         <div className="promptLights">
//           <h1>{contactList[cardIndex].call}</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Lights;

import React, { useState } from "react";
import Slider from "react-slick";
import { BsLightbulbFill, BsLightbulb } from "react-icons/bs";
import "./lights.css";
import { ChevronLeftIcon, ChevronRightIcon } from "../components/icons";
import styled from "styled-components";

const CustomArrowButton = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  &:active {
    transform: translateY(-50%), scale(0.95);
  }
`;

const contactList = [
  {
    id: 1,
    name: "LIVING ROOM LIGHTS",
    pathway: "/home",
    call: "Turn lights on?",
    icon: <BsLightbulbFill size={50} className="nav-icon" />,
  },
  {
    id: 2,
    name: "KITCHEN LIGHTS",
    pathway: "/iotControls",
    call: "Turn lights on?",
    icon: <BsLightbulbFill size={120} className="nav-icon" />,
  },
  {
    id: 3,
    name: "BATHROOM LIGHTS",
    pathway: "/entertainment",
    call: "Turn lights off?",
    icon: <BsLightbulbFill size={120} className="nav-icon" />,
  },
  {
    id: 4,
    name: "BATHROOM LIGHTS",
    pathway: "/calendar",
    call: "Turn lights off?",
    icon: <BsLightbulbFill size={120} className="nav-icon" />,
  },
];

const Lights = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isYellow, setIsYellow] = useState(false);

  const toggleColor = () => {
    setIsYellow((prevIsYellow) => !prevIsYellow);
  };

  const CustomNextArrow = ({ onClick }) => (
    <CustomArrowButton
      onClick={() => {
        setCardIndex((prevIndex) => (prevIndex + 1) % contactList.length);
        onClick();
      }}
      style={{ right: -100 }}>
      <ChevronRightIcon />
    </CustomArrowButton>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <CustomArrowButton
      onClick={() => {
        setCardIndex(
          (prevIndex) =>
            (prevIndex - 1 + contactList.length) % contactList.length
        );
        onClick();
      }}
      style={{ left: -100 }}>
      <ChevronLeftIcon />
    </CustomArrowButton>
  );

  const slidesSettings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => setCardIndex(next),
  };

  return (
    <div id="lights" className="settings">
      <div className="slider-call-1">
        <div className="slider">
          <Slider {...slidesSettings}>
            {contactList.map((card, idx) => (
              <div
                key={card.id}
                className={idx === cardIndex ? "slide activeSlide" : "slide"}>
                {isYellow ? (
                  <BsLightbulbFill
                    size={120}
                    color="yellow"
                    onClick={toggleColor}
                  />
                ) : (
                  <BsLightbulb size={100} color="white" onClick={toggleColor} />
                )}
                <h1 className="name-lights">{card.name}</h1>
              </div>
            ))}
          </Slider>
        </div>
        <div className="promptLights">
          <h1>{contactList[cardIndex].call}</h1>
        </div>
      </div>
    </div>
  );
};

export default Lights;

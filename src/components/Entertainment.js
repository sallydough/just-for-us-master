// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// import { FaUserAlt } from "react-icons/fa";

// import { ChevronLeftIcon, ChevronRightIcon } from "../components/icons";
// import styled from "styled-components";
// import "./entertainment.css";

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
//     name: "JEOPARDY",
//     pathway: "/home",
//     call: "Watch Jeopardy?",
//     icon: <FaUserAlt size={230} className="nav-icon" />,
//   },
//   {
//     id: 2,
//     name: "SURPRISE ME",
//     pathway: "/iotControls",
//     call: "Watch something random?",
//     icon: <FaUserAlt size={230} className="nav-icon" />,
//   },
//   {
//     id: 3,
//     name: "HOLLYWOOD SQUARES",
//     pathway: "/entertainment",
//     call: "Watch Hollywood Squares?",
//     icon: <FaUserAlt size={230} className="nav-icon" />,
//   },
//   {
//     id: 4,
//     name: "IRON CHEF",
//     pathway: "/calendar",
//     call: "Watch Iron Chef?",
//     icon: <FaUserAlt size={230} className="nav-icon" />,
//   },
//   {
//     id: 5,
//     name: "WHEEL OF FORTUNE",
//     pathway: "/calendar",
//     call: "Watch Wheel Of Fortune?",
//     icon: <FaUserAlt size={230} className="nav-icon" />,
//   },
//   {
//     id: 6,
//     name: "GOLDEN GIRLS",
//     pathway: "/calendar",
//     call: "Watch Golden Girls?",
//     icon: <FaUserAlt size={230} className="nav-icon" />,
//   },
// ];

// const Entertainment = () => {
//   const [cardIndex, setCardIndex] = useState(0);
//   const sliderRef = useRef(null);

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

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       switch (event.key) {
//         case "ArrowLeft":
//           setCardIndex(
//             (prevIndex) =>
//               (prevIndex - 1 + contactList.length) % contactList.length
//           );
//           sliderRef.current.slickPrev();
//           break;

//         case "ArrowRight":
//           setCardIndex((prevIndex) => (prevIndex + 1) % contactList.length);
//           sliderRef.current.slickNext();
//           break;

//         default:
//           break;
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   return (
//     <>
//       <div id="entertainment" className="settings" tabIndex="0">
//         {/* <Link to="/" className="linkStyle">
//           <div className="arrow-container">
//             <div className="up-arrow">
//               <IoIosArrowUp size={90} className="arrow-up" />
//             </div>
//             <div className="down-arrow">
//               <IoIosArrowDown size={90} className="arrow-down" />
//             </div>
//           </div>
//         </Link> */}
//         <div className="slider-call-1">
//           <div className="slider">
//             <Slider className="linkStyle" {...slidesSettings} ref={sliderRef}>
//               {contactList.map((card, idx) => (
//                 <div
//                   key={card.id}
//                   onClick={() => console.log(card)}
//                   className={idx === cardIndex ? "slide activeSlide" : "slide"}>
//                   {card.icon}
//                   <h1 className="card-name">{card.name}</h1>
//                 </div>
//               ))}
//             </Slider>
//           </div>

//           <div className="promptEntertainment">
//             <h1>{contactList[cardIndex].call}</h1>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Entertainment;

import React, { useState } from "react";
import Slider from "react-slick";
import { FaUserAlt } from "react-icons/fa";
import { ChevronLeftIcon, ChevronRightIcon } from "../components/icons";
import styled from "styled-components";
import "./entertainment.css";

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
    name: "JEOPARDY",
    pathway: "/home",
    call: "Watch Jeopardy?",
    icon: <FaUserAlt size={230} color="white" className="nav-icon" />,
  },
  {
    id: 2,
    name: "SURPRISE ME",
    pathway: "/iotControls",
    call: "Watch something random?",
    icon: <FaUserAlt size={230} color="white" className="nav-icon" />,
  },
  {
    id: 3,
    name: "HOLLYWOOD SQUARES",
    pathway: "/entertainment",
    call: "Watch Hollywood Squares?",
    icon: <FaUserAlt size={230} color="white" className="nav-icon" />,
  },
  {
    id: 4,
    name: "IRON CHEF",
    pathway: "/calendar",
    call: "Watch Iron Chef?",
    icon: <FaUserAlt size={230} color="white" className="nav-icon" />,
  },
  {
    id: 5,
    name: "WHEEL OF FORTUNE",
    pathway: "/calendar",
    call: "Watch Wheel Of Fortune?",
    icon: <FaUserAlt size={230} color="white" className="nav-icon" />,
  },
  {
    id: 6,
    name: "GOLDEN GIRLS",
    pathway: "/calendar",
    call: "Watch Golden Girls?",
    icon: <FaUserAlt size={230} color="white" className="nav-icon" />,
  },
];

const Entertainment = () => {
  const [cardIndex, setCardIndex] = useState(0);

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
    <>
      <div id="entertainment" className="settings">
        <div className="slider-call-1">
          <div className="slider">
            <Slider {...slidesSettings}>
              {contactList.map((card, idx) => (
                <div
                  key={card.id}
                  onClick={() => console.log(card)}
                  className={idx === cardIndex ? "slide activeSlide" : "slide"}>
                  {card.icon}
                  <h1 className="card-name">{card.name}</h1>
                </div>
              ))}
            </Slider>
          </div>

          <div className="promptEntertainment">
            <h1>{contactList[cardIndex].call}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entertainment;

// import { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";

// import { FaUserAlt } from "react-icons/fa";
// import { ChevronLeftIcon, ChevronRightIcon } from "../components/icons";
// import styled from "styled-components";
// import "./contacts.css";

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
//     name: "JOHN",
//     pathway: "/home",
//     call: "Call John?",
//     icon: <FaUserAlt size={230} className="nav-icon" />,
//   },
//   {
//     id: 2,
//     name: "MATTHEW",
//     pathway: "/iotControls",
//     call: "Call Matthew?",
//     icon: <FaUserAlt size={230} className="nav-icon" />,
//   },
//   {
//     id: 3,
//     name: "SALLY",
//     pathway: "/entertainment",
//     call: "Call Sally?",
//     icon: <FaUserAlt size={230} className="nav-icon" />,
//   },
//   {
//     id: 4,
//     name: "MESERET",
//     pathway: "/calendar",
//     call: "Call Meseret?",
//     icon: <FaUserAlt size={230} className="nav-icon" />,
//   },
//   {
//     id: 5,
//     name: "PRAPTI",
//     pathway: "/calendar",
//     call: "Call Prapti?",
//     icon: <FaUserAlt size={230} className="nav-icon" />,
//   },
//   {
//     id: 6,
//     name: "MARK",
//     pathway: "/calendar",
//     call: "Call Mark?",
//     icon: <FaUserAlt size={230} className="nav-icon" />,
//   },
// ];

// const Contacts = () => {
//   const [cardIndex, setCardIndex] = useState(0);
//   const contactsRef = useRef(null);

//   const CustomNextArrow = ({ onClick }) => (
//     <CustomArrowButton
//       onClick={() =>
//         setCardIndex((prevIndex) => (prevIndex + 1) % contactList.length)
//       }
//       style={{ right: -100 }}>
//       <ChevronRightIcon />
//     </CustomArrowButton>
//   );

//   const CustomPrevArrow = ({ onClick }) => (
//     <CustomArrowButton
//       onClick={() =>
//         setCardIndex(
//           (prevIndex) =>
//             (prevIndex - 1 + contactList.length) % contactList.length
//         )
//       }
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
//       if (contactsRef.current) {
//         switch (event.key) {
//           case "ArrowLeft":
//             contactsRef.current.slickPrev();
//             break;
//           case "ArrowRight":
//             contactsRef.current.slickNext();
//             break;
//           case "Enter":
//             console.log("Initiate call for:", contactList[cardIndex].name);
//             break;
//           default:
//             break;
//         }
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [cardIndex]);

//   return (
//     <>
//       <div id="contacts" className="settings" tabIndex="0">
//         {/* <Link to="/" className="linkStyle">
//           <div className="up-arrow">
//             <IoIosArrowUp size={90} className="arrow-up" />
//           </div>
//           <div className="down-arrow">
//             <IoIosArrowDown size={90} className="arrow-down" />
//           </div>
//         </Link> */}
//         <div className="slider-call-1">
//           <div className="slider">
//             <Slider className="linkStyle" {...slidesSettings} ref={contactsRef}>
//               {contactList.map((card, idx) => (
//                 <div
//                   key={card.id}
//                   onClick={() => console.log(`Clicked on ${card.name}`)}
//                   className={idx === cardIndex ? "slide activeSlide" : "slide"}>
//                   {card.icon}
//                   <h1 className="card-name">{card.name}</h1>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//           <div className="promptLights">
//             <h1>{contactList[cardIndex].call}</h1>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contacts;

import React, { useState } from "react";
import Slider from "react-slick";
import { FaUserAlt } from "react-icons/fa";
import { ChevronLeftIcon, ChevronRightIcon } from "../components/icons";
import styled from "styled-components";
import "./contacts.css";

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
    name: "JOHN",
    pathway: "/home",
    call: "Call John?",
    icon: <FaUserAlt size={230} color="white" className="nav-icon" />,
  },
  {
    id: 2,
    name: "MATTHEW",
    pathway: "/iotControls",
    call: "Call Matthew?",
    icon: <FaUserAlt size={230} color="white" className="nav-icon" />,
  },
  {
    id: 3,
    name: "SALLY",
    pathway: "/entertainment",
    call: "Call Sally?",
    icon: <FaUserAlt size={230} color="white" className="nav-icon" />,
  },
  {
    id: 4,
    name: "MESERET",
    pathway: "/calendar",
    call: "Call Meseret?",
    icon: <FaUserAlt size={230} color="white" className="nav-icon" />,
  },
  {
    id: 5,
    name: "PRAPTI",
    pathway: "/calendar",
    call: "Call Prapti?",
    icon: <FaUserAlt size={230} color="white" className="nav-icon" />,
  },
  {
    id: 6,
    name: "MARK",
    pathway: "/calendar",
    call: "Call Mark?",
    icon: <FaUserAlt size={230} color="white" className="nav-icon" />,
  },
];

const Contacts = () => {
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
      <div id="contacts" className="settings">
        <div className="slider-call-1">
          <div className="slider">
            <Slider {...slidesSettings}>
              {contactList.map((card, idx) => (
                <div
                  key={card.id}
                  onClick={() => console.log(`Clicked on ${card.name}`)}
                  className={idx === cardIndex ? "slide activeSlide" : "slide"}>
                  {card.icon}
                  <h1 className="card-name">{card.name}</h1>
                </div>
              ))}
            </Slider>
          </div>
          <div className="promptLights">
            <h1>{contactList[cardIndex].call}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;

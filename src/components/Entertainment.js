// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import { FaUserAlt } from "react-icons/fa";
// import Modal from "react-modal";
// import { Link } from "react-router-dom";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// import "./entertainment.css";
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

// // Custom hook for handling the modal
// const useContactModal = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedContact, setSelectedContact] = useState(null);

//   const openModal = (contact) => {
//     setSelectedContact(contact);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return {
//     modalIsOpen,
//     selectedContact,
//     openModal,
//     closeModal,
//   };
// };

// const Entertainment = React.forwardRef((props, ref) => {
//   const { modalIsOpen, selectedContact, openModal, closeModal } =
//     useContactModal();
//   const [cardIndex, setCardIndex] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Call using window
//   const contactCall = () => {
//     if (selectedContact) {
//       const phoneNumber = "+1234556778";
//       window.location.href = `tel:${phoneNumber}`;
//       closeModal(); // Close the modal after initiating the call
//     }
//   };

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

//   // Function to handle cycling through the array
//   const nextContact = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % contactList.length);
//   };

//   // Function to handle cycling through the array
//   const prevContact = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + contactList.length) % contactList.length
//     );
//   };

//   //slides effect
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

//   // Attach the ref to the component
//   React.useImperativeHandle(ref, () => ({
//     prevContact,
//     // Add more methods if needed
//   }));

//   useEffect(() => {
//     // Ensure currentIndex is updated when cardIndex changes
//     setCurrentIndex(cardIndex);
//   }, [cardIndex]);

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       switch (event.key) {
//         case "ArrowLeft":
//           prevContact();
//           break;

//         case "ArrowRight":
//           nextContact();
//           break;

//         case "Enter":
//           openModal(contactList[currentIndex]);
//           break;

//         default:
//           break;
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [currentIndex, openModal]);

//   return (
//     <>
//       <div id="entertainment" className="settings">
//         <Link to="/" className="linkStyle">
//           <div className="arrow-container">
//             <div className="up-arrow">
//               <IoIosArrowUp size={90} className="arrow-up" />
//             </div>
//             <div className="down-arrow">
//               <IoIosArrowDown size={90} className="arrow-down" />
//             </div>
//           </div>
//         </Link>
//         <div className="slider-call-1">
//           <div className="slider">
//             <Slider className="linkStyle" {...slidesSettings}>
//               {contactList.map((card, idx) => (
//                 <div
//                   key={card.id}
//                   onClick={() => openModal(card)}
//                   className={idx === cardIndex ? "slide activeSlide" : "slide"}>
//                   {card.icon}
//                   <h1 className="card-name">{card.name}</h1>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//           <div className="prompt">
//             <h1>{contactList[currentIndex].call}</h1>
//           </div>
//         </div>
//       </div>

//       {/* Pop Up Window to verify call */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Call Modal"
//         className="custom-modal centered-modal">
//         {selectedContact && (
//           <div>
//             <h2>{`Do you want to call ${selectedContact.name}?`}</h2>
//             <button onClick={contactCall}>Yes</button>
//             <button onClick={closeModal}>No</button>
//           </div>
//         )}
//       </Modal>
//     </>
//   );
// });

// export default Entertainment;
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
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
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 2,
    name: "SURPRISE ME",
    pathway: "/iotControls",
    call: "Watch something random?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 3,
    name: "HOLLYWOOD SQUARES",
    pathway: "/entertainment",
    call: "Watch Hollywood Squares?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 4,
    name: "IRON CHEF",
    pathway: "/calendar",
    call: "Watch Iron Chef?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 5,
    name: "WHEEL OF FORTUNE",
    pathway: "/calendar",
    call: "Watch Wheel Of Fortune?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 6,
    name: "GOLDEN GIRLS",
    pathway: "/calendar",
    call: "Watch Golden Girls?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
];

const Entertainment = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const sliderRef = useRef(null);

  const CustomNextArrow = () => (
    <CustomArrowButton
      onClick={() => {
        setCardIndex((prevIndex) => (prevIndex + 1) % contactList.length);
        sliderRef.current.slickNext();
      }}
      style={{ right: -100 }}>
      <ChevronRightIcon />
    </CustomArrowButton>
  );

  const CustomPrevArrow = () => (
    <CustomArrowButton
      onClick={() => {
        setCardIndex(
          (prevIndex) =>
            (prevIndex - 1 + contactList.length) % contactList.length
        );
        sliderRef.current.slickPrev();
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          setCardIndex(
            (prevIndex) =>
              (prevIndex - 1 + contactList.length) % contactList.length
          );
          sliderRef.current.slickPrev();
          break;

        case "ArrowRight":
          setCardIndex((prevIndex) => (prevIndex + 1) % contactList.length);
          sliderRef.current.slickNext();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div id="entertainment" className="settings" tabIndex="0">
        {/* <Link to="/" className="linkStyle">
          <div className="arrow-container">
            <div className="up-arrow">
              <IoIosArrowUp size={90} className="arrow-up" />
            </div>
            <div className="down-arrow">
              <IoIosArrowDown size={90} className="arrow-down" />
            </div>
          </div>
        </Link> */}
        <div className="slider-call-1">
          <div className="slider">
            <Slider className="linkStyle" {...slidesSettings} ref={sliderRef}>
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

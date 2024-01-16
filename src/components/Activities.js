// import { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// // import Modal from "react-modal";
// import { Link } from "react-router-dom";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// import { GrYoga } from "react-icons/gr";
// import { GiTeacher, GiRollingDices } from "react-icons/gi";
// import { ChevronLeftIcon, ChevronRightIcon } from "../components/icons";
// import styled from "styled-components";

// import "./activities.css";

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
//     name: "CHAIR YOGA 9:00AM TODAY",
//     pathway: "/home",
//     call: "JOIN NOW",
//     icon: <GrYoga size={170} className="nav-icon" />,
//   },
//   {
//     id: 2,
//     name: "CHEESECAKE WITH COURTNEY 3:00PM TODAY",
//     pathway: "/iotControls",
//     call: "",
//     icon: <GiTeacher size={170} className="nav-icon" />,
//   },
//   {
//     id: 3,
//     name: "SPOT THE DIFFERENCE 4:00PM TODAY ",
//     pathway: "/entertainment",
//     call: "",
//     icon: <GiRollingDices size={170} className="nav-icon" />,
//   },
//   {
//     id: 4,
//     name: "TRAVEL STORY WITH JEN 5:00PM TODAY",
//     pathway: "/calendar",
//     call: "",
//     icon: <GiTeacher size={170} className="nav-icon" />,
//   },
//   {
//     id: 5,
//     name: "FAMILY FEUD 6:00PM TODAY",
//     pathway: "/calendar",
//     call: "",
//     icon: <GiRollingDices size={170} className="nav-icon" />,
//   },
//   {
//     id: 6,
//     name: "VIEW COMPLETED CLASSES",
//     pathway: "/calendar",
//     call: "",
//     icon: "",
//   },
// ];

// // const useContactModal = () => {
// //   const [modalIsOpen, setModalIsOpen] = useState(false);
// //   const [selectedContact, setSelectedContact] = useState(null);

// //   const openModal = (contact) => {
// //     setSelectedContact(contact);
// //     setModalIsOpen(true);
// //   };

// //   const closeModal = () => {
// //     setModalIsOpen(false);
// //   };

// //   return {
// //     modalIsOpen,
// //     selectedContact,
// //     openModal,
// //     closeModal,
// //   };
// // };

// // ... (imports and styled components)

// const Activities = () => {
//   // const { modalIsOpen, selectedContact, openModal, closeModal } =
//   //   useContactModal();
//   // const [cardIndex, setCardIndex] = useState(0);

//   // const contactCall = () => {
//   //   if (selectedContact) {
//   //     const phoneNumber = "+1234556778";
//   //     window.location.href = `tel:${phoneNumber}`;
//   //     closeModal();
//   //   }
//   // };

//   const generateRefs = () => contactList.map(() => useRef(null));
//   // const modalRefs = generateRefs();

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

//   const [currentIndex] = useState(0);
//   const activitiesRef = useRef(null);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (activitiesRef.current) {
//         switch (event.key) {
//           // Check if activitiesRef.current is truthy before using it

//           case "ArrowLeft":
//             activitiesRef.current.slickPrev();
//             break;
//           case "ArrowRight":
//             activitiesRef.current.slickNext();
//             break;
//           // case "Enter":
//           //   openModal(contactList[currentIndex]);
//           //   break;
//           // case "Escape":
//           //   closeModal();
//           //   break;
//           default:
//             break;
//         }
//       }

//     //   // Check if modal is open and handle keyboard navigation inside the modal
//     //   if (modalIsOpen && modalRefs[currentIndex].current) {
//     //     switch (event.key) {
//     //       case "ArrowLeft":
//     //         // Handle left arrow inside the modal
//     //         // ...
//     //         break;
//     //       case "ArrowRight":
//     //         // Handle right arrow inside the modal
//     //         // ...
//     //         break;
//     //       case "Enter":
//     //         // Handle selection inside the modal
//     //         if (
//     //           modalRefs[currentIndex].current.contains(document.activeElement)
//     //         ) {
//     //           // Check if focus is inside the modal
//     //           if (document.activeElement.tagName === "BUTTON") {
//     //             // If focus is on a button, execute its click handler
//     //             document.activeElement.click();
//     //           }
//     //         }
//     //         break;
//     //       default:
//     //         break;
//     //     }
//     //   }
//     };

//     // Add event listener for keyboard navigation
//     window.addEventListener("keydown", handleKeyDown);

//     // Remove event listener when component unmounts
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [cardIndex, modalIsOpen, currentIndex];) // Include modalRefs in the dependency array

//   return (
//     <>
//       <div id="activities" className="settings">
//         <Link to="/" className="linkStyle">
//           <div className="up-arrow">
//             <IoIosArrowUp size={90} className="arrow-up" />
//           </div>
//           <div className="down-arrow">
//             <IoIosArrowDown size={90} className="arrow-down" />
//           </div>
//         </Link>
//         <div className="slider-call-1">
//           <div className="slider">
//             <Slider
//               className="linkStyle"
//               {...slidesSettings}
//               ref={activitiesRef}>
//               {contactList.map((card, idx) => (
//                 <div
//                   key={card.id}
//                   onClick={() =>}
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

//     </>
//   );
// };

// export default Activities;

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GrYoga } from "react-icons/gr";
import { GiTeacher, GiRollingDices } from "react-icons/gi";
import { ChevronLeftIcon, ChevronRightIcon } from "../components/icons";
import styled from "styled-components";

import "./activities.css";

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
    name: "CHAIR YOGA 9:00AM TODAY",
    pathway: "/home",
    call: "JOIN NOW",
    icon: <GrYoga size={170} className="nav-icon" />,
  },
  {
    id: 2,
    name: "CHEESECAKE WITH COURTNEY 3:00PM TODAY",
    pathway: "/iotControls",
    call: "",
    icon: <GiTeacher size={170} className="nav-icon" />,
  },
  {
    id: 3,
    name: "SPOT THE DIFFERENCE 4:00PM TODAY ",
    pathway: "/entertainment",
    call: "",
    icon: <GiRollingDices size={170} className="nav-icon" />,
  },
  {
    id: 4,
    name: "TRAVEL STORY WITH JEN 5:00PM TODAY",
    pathway: "/calendar",
    call: "",
    icon: <GiTeacher size={170} className="nav-icon" />,
  },
  {
    id: 5,
    name: "FAMILY FEUD 6:00PM TODAY",
    pathway: "/calendar",
    call: "",
    icon: <GiRollingDices size={170} className="nav-icon" />,
  },
  {
    id: 6,
    name: "VIEW COMPLETED CLASSES",
    pathway: "/calendar",
    call: "",
    icon: "",
  },
];

const Activities = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const CustomNextArrow = ({ onClick }) => (
    <CustomArrowButton
      onClick={() =>
        setCardIndex((prevIndex) => (prevIndex + 1) % contactList.length)
      }
      style={{ right: -100 }}>
      <ChevronRightIcon />
    </CustomArrowButton>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <CustomArrowButton
      onClick={() =>
        setCardIndex(
          (prevIndex) =>
            (prevIndex - 1 + contactList.length) % contactList.length
        )
      }
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

  const [currentIndex] = useState(0);
  const activitiesRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (activitiesRef.current) {
        switch (event.key) {
          case "ArrowLeft":
            activitiesRef.current.slickPrev();
            break;
          case "ArrowRight":
            activitiesRef.current.slickNext();
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cardIndex]);

  return (
    <>
      <div id="activities" className="settings">
        {/* <Link to="/" className="linkStyle">
          <div className="up-arrow activitiesArrowUp">
            <IoIosArrowUp size={90} className="arrow-up" />
          </div>
          <div className="down-arrow activitiesArrowDown">
            <IoIosArrowDown size={90} className="arrow-down" />
          </div>
        </Link> */}
        <div className="slider-call-1">
          <div className="slider">
            <Slider
              className="linkStyle"
              {...slidesSettings}
              ref={activitiesRef}>
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
          <div className="prompt">
            <h1>{contactList[currentIndex].call}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;

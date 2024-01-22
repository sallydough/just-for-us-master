import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

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

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { ChevronLeftIcon, ChevronRightIcon, TvIcon } from "../components/icons";
import CallHelpButtonComponent from "../components/CallHelpButton";
import Contacts from "../components/Contacts";
import { GiFilmSpool } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";

import { IoMdPhotos } from "react-icons/io";
import { GiWeightLiftingUp } from "react-icons/gi";

import { FaLightbulb } from "react-icons/fa";
import Lights from "../components/Lights";
import Entertainment from "../components/Entertainment";
import Television from "../components/Tv";
import Activities from "../components/Activities";
// Imports for react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeContainer = styled.div`
  position: relative;
  top: 80px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  min-height: 42vh;
  text-align: center;
`;
const WelcomeWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const CarouselWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  max-height: 700px;
  justify-content: center;
  display: unset;
  place-items: center;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  border-radius: 85px;
  transition: border 0.3s ease, opacity 0.3s ease;

  &:hover,
  &:active,
  &:focus,
  &:touch {
    cursor: pointer;
  }
`;

const tabletMediaQuery = `
  @media only screen and (min-width: 600px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;

const phoneMediaQuery = `
  @media only screen and (max-width: 599px) {
     font-size: 16px;
     display: grid;
  }
`;

const CardColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;

  &:hover,
  &:active,
  &:focus,
  &:touch {
    cursor: pointer;
  }

  ${tabletMediaQuery} {
    // Add additional styles for tablets
  }

  ${phoneMediaQuery} {
    // Add additional styles for phones
  }
`;

const CustomArrowButton = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  z-index: 1;

  &:active {
    transform: translateY(-50%), scale(0.95);
  }
`;

const StyledProfileCard = styled(ProfileCard)`
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
  display: flex;
  color: black;
  font-size: 25px;
  margin: 80px;

  &:active,
  &:focus,
  &:touch {
    cursor: pointer;
  }
  &:hover {
    transform: scale(1.1);
    .icon-container {
      svg {
        fill: black;
      }
    }
  }

  &.slick-center {
    transform: scale(1.5);
    cursor: pointer;
    background: yellow;
    .icon-container {
      svg {
        fill: #000;
      }
    }
  }

  &.active-card {
    opacity: 1;
    cursor: pointer;
  }

  &.inactive-card {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const CustomNextArrow = ({ onClick }) => (
  <CustomArrowButton onClick={onClick} style={{ right: -100 }}>
    <ChevronRightIcon />
  </CustomArrowButton>
);

const CustomPrevArrow = ({ onClick }) => (
  <CustomArrowButton onClick={onClick} style={{ left: -100 }}>
    <ChevronLeftIcon />
  </CustomArrowButton>
);

const TextBelowCard = styled.h1`
  margin: 0;
  width: 300px;
  font-size: 26px;
  color: #2e3e5e;
  position: relative;
  left: 0%;
  top: 95%;
  display: flex;
`;

const SpaceBeforeBelowCard = styled.h1`
  margin: 0;
  font-size: 46px;
  color: #fcf8e3;
  position: relative;
  left: 0%;
  top: 95%;
  display: flex;
`;

const PromptDiv = styled.h1`
  display: flex;
  width: 100vw;
  text-align: center;
`;

const cardData = [
  {
    icon: <TvIcon size={50} />,
    title: "TV",
    spaceBeforeBelowCard: ".....",
    textBelowCard: "Watch TV?",
    page: <Television />,
  },
  {
    icon: <GiWeightLiftingUp size={50} />,
    title: "ACTIVITIES",
    spaceBeforeBelowCard: "..",
    textBelowCard: "Join an Activity?",
    page: <Activities />,
  },
  {
    icon: <GiFilmSpool size={50} />,
    title: "ENTERTAINMENT",
    spaceBeforeBelowCard: "",
    textBelowCard: "Watch Entertainment?",
    page: <Entertainment />,
  },
  {
    icon: <IoMdPhotos size={50} />,
    title: "GALLERY",
    spaceBeforeBelowCard: ". .",
    textBelowCard: "View Gallery?",
  },
  {
    icon: <FaPhoneAlt size={50} />,
    title: "VIDEO CALL",
    spaceBeforeBelowCard: "..",
    textBelowCard: "Make a Video Call?",
    page: <Contacts />,
  },
  {
    icon: <FaLightbulb size={50} />,
    title: "LIGHTS",
    spaceBeforeBelowCard: "...",
    textBelowCard: "Change Lights?",
    page: <Lights />,
  },
];

const CarouselDivBox = styled.div`
  display: block;
  justify-content: center;
`;

const Home = ({ enteredName }) => {
  const sliderRef = useRef(null);
  const activitiesRef = useRef(null);
  const tvRef = useRef(null);
  const entertainmentRef = useRef(null);
  const contactsRef = useRef(null);
  const lightsRef = useRef(null);

  const settings = {
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    speed: 250,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow data-clickable="true" />,
    prevArrow: <CustomPrevArrow data-clickable="true" />,
    beforeChange: () => {
      // Disable hover effect for all cards
      setDisableHover(true);
    },
    afterChange: (current) => {
      // Enable hover effect for the center card
      setDisableHover(false);
      // Update the index of the center card
      setCenterCardIndex(current);
    },
  };

  const [disableHover, setDisableHover] = useState(false);
  const [centerCardIndex, setCenterCardIndex] = useState(0);
  const [activeCarousel, setActiveCarousel] = useState("cardData");

  const handleCarouselChange = (current) => {
    setDisableHover(true);
    setActiveCarousel(current);
  };

  useEffect(() => {
    // Remove event listener on component unmount
    return () => {};
  }, []);

    // react-toastify function that invokes a notification
    const showToastMessage = () => {
      toast.success("Your Zoom Activity starts in 10 minutes. Please Join Now.", {
        position: toast.POSITION,
      });
    };

  return (
    <>
      <section id="home">
        {/* Wrapper for Welcome and username */}
        <WelcomeWrapper>
          <div>
            <span
              style={{
                color: "#333",
                fontSize: "2rem",
                fontWeight: "bold",
              }}>
              Welcome
            </span>
          </div>

          <div>
            <span
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "#0066cc",
              }}>
              {enteredName}
            </span>
          </div>
        </WelcomeWrapper>    
        <div>
      <button onClick={showToastMessage}>Notify</button>
      <ToastContainer position="top-right" />
    </div>
        <HomeContainer disableHover={disableHover}>
          {/* Card Carousel */}
          <CarouselWrapper
            active={activeCarousel === "cardData"}
            onClick={() => handleCarouselChange("cardData")}
            onTouchStart={() => handleCarouselChange("cardData")}>
            <CarouselDivBox active={activeCarousel === "cardData"}>
              <Slider
                {...settings}
                ref={sliderRef}
                beforeChange={() => handleCarouselChange("cardData")}>
                {cardData.map((card, index) => (
                  <CardColumn key={index}>
                    <StyledProfileCard
                      link={card.link}
                      icon={card.icon}
                      title={card.title}
                      active={index === centerCardIndex}
                      className={
                        activeCarousel === "cardData"
                          ? "active-card"
                          : "inactive-card"
                      }
                    />
                    <PromptDiv>
                      {index === centerCardIndex && (
                        <SpaceBeforeBelowCard>
                          {card.spaceBeforeBelowCard}
                        </SpaceBeforeBelowCard>
                      )}
                      {index === centerCardIndex && (
                        <TextBelowCard>{card.textBelowCard}</TextBelowCard>
                      )}
                    </PromptDiv>
                  </CardColumn>
                ))}
              </Slider>
            </CarouselDivBox>
          </CarouselWrapper>
        </HomeContainer>
        {/* Component Carousel */}
        <CarouselWrapper
          active={activeCarousel === "componentData"}
          onClick={() => handleCarouselChange("componentData")}
          onTouchStart={() => handleCarouselChange("componentData")}>
          {centerCardIndex === 0 && <Television ref={tvRef} />}
          {centerCardIndex === 1 && (
            <Activities ref={activitiesRef} enteredName={enteredName} />
          )}
          {centerCardIndex === 2 && <Entertainment ref={entertainmentRef} />}
          {centerCardIndex === 4 && <Contacts ref={contactsRef} />}
          {centerCardIndex === 5 && <Lights ref={lightsRef} />}
          {/* ... add more components if needed */}
        </CarouselWrapper>

        <CallHelpButtonComponent />

        {/* Display Hello and the logged-in person's name */}
      </section>
    </>
  );
};

export default Home;

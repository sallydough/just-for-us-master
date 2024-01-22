// // Home.js
// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from "styled-components";
// import ProfileCard from "../components/ProfileCard/ProfileCard";
// import {
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   ContactsIcon,
//   HealthIcon,
//   TvIcon,
//   ServicesIcon,
//   SettingsIcon,
//   ScheduleIcon,
//   ShortcutIcon,
//   GardenLoftIcon,
// } from "../components/icons";
// import CallHelpButtonComponent from "../components/CallHelpButton";
// import LocationIndicator from "../components/LocationIndicator";
// import BroadcastIcon from "../components/icons/BroadcastIcon";

// export const HomeContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   min-height: 100vh;
//   text-align: center;

//   div.slick-slide.slick-active.slick-center.slick-current {
//     .profile-card-div {
//       background: #f3b717;
//       transform: scale(1.2);
//       transition: transform 0.5s ease;
//       padding: 20px;
//     }
//     .icon-container {
//       svg {
//         fill: #e9ebf8;
//       }
//     }
//   }
// `;

// export const CarouselWrapper = styled.div`
//   margin: 0 auto;
//   max-width: 2000px; /* Adjust the max-width as needed */
//   justify-content: space-around;

//   .slick-dots li {
//     margin: 0 15px;
//     button:before {
//       font-size: 35px;
//       position: absolute;
//       top: 0;
//       left: 0;
//       text-align: center;
//       color: #e8e8e4;
//       opacity: 1;
//       margin-top: 30px;
//     }
//   }

//   li.slick-active button:before {
//     opacity: 1;
//     color: #7f8181;
//   }
// `;

// export const CardColumn = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
// `;

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
//     transform: translateY(-50%), scale(0.95); // Add a scaling effect for the pressed state
//     box-shadow: 0 0 0; // Remove box shadow for a pressed effect
//   }
// `;

// const StyledProfileCard = styled(ProfileCard)`
//   // Add any additional styles here
// `;

// export const CustomNextArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ right: -100 }}>
//     <ChevronRightIcon />
//   </CustomArrowButton>
// );

// export const CustomPrevArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ left: -100 }}>
//     <ChevronLeftIcon />
//   </CustomArrowButton>
// );

// const Home = () => {
//   const cardData = [
//     // {
//     //   link: "/garden-loft-app/shortcuts",
//     //   icon: <ShortcutIcon />,
//     //   title: "shortcuts",
//     // },

//     {
//       link: "/garden-loft-app/entertainment",
//       icon: <TvIcon />,
//       title: "entertainment",
//     },
//     { icon: <ScheduleIcon />, title: "activity" },
//     {
//       link: "/garden-loft-app/services",
//       icon: <ServicesIcon />,
//       title: "services",
//     },
//     { icon: <ContactsIcon />, title: "my contacts" },
//     // { icon: <HealthIcon />, title: "my health" },
//     // { icon: <SettingsIcon />, title: "settings" },
//     {
//       link: "/garden-loft-app/smart-loft",
//       icon: <BroadcastIcon />,
//       title: "loft controls",
//     },
//     // Add more cards here
//   ];

//   const settings = {
//     centerMode: true,
//     centerPadding: "0",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     dots: true,
//     nextArrow: <CustomNextArrow data-clickable="true" />,
//     prevArrow: <CustomPrevArrow data-clickable="true" />,
//   };

//   const sliderRef = React.createRef();
//   const [disableHover, setDisableHover] = useState(false);

//   return (
//     <>
//       {/* <GardenLoftIcon /> */}
//       <HomeContainer disableHover={disableHover}>
//         <CarouselWrapper>
//           <Slider ref={sliderRef} {...settings}>
//             {cardData.map((card, index) => (
//               <CardColumn key={index}>
//                 <StyledProfileCard
//                   link={card.link}
//                   icon={card.icon}
//                   backgroundColor={card.backgroundColor}
//                   disableHover={true}
//                 />
//                 <div className="profile-card-title">{card.title}</div>
//               </CardColumn>
//             ))}
//           </Slider>
//         </CarouselWrapper>
//       </HomeContainer>
//       {/* <LocationIndicator currentPage={"home"} /> */}
//       <CallHelpButtonComponent />
//     </>
//   );
// };

// export default Home;

// Home.js
// Home.js
// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from "styled-components";
// import ProfileCard from "../components/ProfileCard/ProfileCard";
// import {
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   ContactsIcon,
//   // HealthIcon,
//   TvIcon,
//   ServicesIcon,
//   // SettingsIcon,
//   ScheduleIcon,
//   // ShortcutIcon,
//   // GardenLoftIcon,
// } from "../components/icons";
// import CallHelpButtonComponent from "../components/CallHelpButton";
// import BroadcastIcon from "../components/icons/BroadcastIcon";
// import Contacts from "../components/Contacts";

// export const HomeContainer = styled.div`
//   position: relative;
//   top: 150px; /* Adjust the top value to position it below the "Call Help" button */
//   left: 0;
//   right: 0;
//   display: flex;
//   justify-content: center;
//   min-height: 50vh; /* Adjust to ensure it takes the remaining height */
//   text-align: center;
// `;

// export const CarouselWrapper = styled.div`
//   margin: 0 auto;
//   max-width: 2500px; /* Adjust the max-width as needed */
//   justify-content: center;
// `;

// export const CardColumn = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;

//   &:hover {
//     transform: scale(1.1);
//     .icon-container {
//       svg {
//         fill: black;
//       }
//     }
//   }
// `;

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

// const StyledProfileCard = styled(ProfileCard)`
//   transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
//   display: flex;
//   color: black;

//   &:hover {
//     transform: scale(1.1);
//     .icon-container {
//       svg {
//         fill: black;
//       }
//     }
//   }

//   &.slick-center {
//     transform: scale(1.5); // Adjust the scale as needed for the center card
//     background: yellow; // Adjust the color as needed for the center card
//   }
// `;

// export const CustomNextArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ right: -100 }}>
//     <ChevronRightIcon />
//   </CustomArrowButton>
// );

// export const CustomPrevArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ left: -100 }}>
//     <ChevronLeftIcon />
//   </CustomArrowButton>
// );

// // const Home = () => {
// //   const cardData = [
// //     {
// //       link: "/garden-loft-app/entertainment",
// //       icon: <TvIcon />,
// //       title: "TV",
// //     },
// //     { icon: <ScheduleIcon />, title: "ACTIVITIES" },
// //     {
// //       link: "/garden-loft-app/services",
// //       icon: <ServicesIcon />,
// //       title: "ENTERTAINMENT",
// //     },
// //     { icon: <ContactsIcon />, title: "VIDEO CALL" },
// //     {
// //       link: "/garden-loft-app/smart-loft",
// //       icon: <BroadcastIcon />,
// //       title: "LIGHTS",
// //     },
// //     {
// //       link: "/garden-loft-app/services",
// //       icon: <ServicesIcon />,
// //       title: "SETTINGS",
// //     },
// //   ];

// //   const settings = {
// //     centerMode: true,
// //     centerPadding: "0",
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 5,
// //     slidesToScroll: 1,
// //     dots: true,
// //     nextArrow: <CustomNextArrow data-clickable="true" />,
// //     prevArrow: <CustomPrevArrow data-clickable="true" />,
// //   };

// //   const sliderRef = React.createRef();
// //   const [disableHover] = useState(false);

// //   return (
// //     <>
// //       {/* <GardenLoftIcon /> */}
// //       <HomeContainer disableHover={disableHover}>
// //         <CarouselWrapper>
// //           <CustomNextArrow />
// //           <CustomPrevArrow />
// //           <Slider ref={sliderRef} {...settings}>
// //             {cardData.map((card, index) => (
// //               <CardColumn key={index}>
// //                 <StyledProfileCard
// //                   link={card.link}
// //                   icon={card.icon}
// //                   backgroundColor={card.backgroundColor}
// //                   title={card.title} // Pass the title to the ProfileCard component
// //                   textBelowCard={card.textBelowCard} // Pass the text below the card
// //                 />
// //               </CardColumn>
// //             ))}
// //           </Slider>
// //         </CarouselWrapper>
// //       </HomeContainer>
// //       {/* <LocationIndicator currentPage={"home"} /> */}
// //       <CallHelpButtonComponent />
// //       <Contacts />
// //     </>
// //   );
// // };

// // export default Home;

// const Home = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const settings = {
//     centerMode: true,
//     centerPadding: "0",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     dots: true,
//     nextArrow: <CustomNextArrow data-clickable="true" />,
//     prevArrow: <CustomPrevArrow data-clickable="true" />,
//     afterChange: (current) => setCurrentIndex(current),
//   };

//   return (
//     <>
//       <HomeContainer>
//         <CarouselWrapper>
//           <CustomNextArrow />
//           <CustomPrevArrow />
//           <Slider {...settings}>
//             {cardData.map((card, index) => (
//               <CardColumn key={index}>
//                 <StyledProfileCard
//                   icon={card.icon}
//                   title={card.title}
//                   textBelowCard={card.textBelowCard}
//                   className={`${index === currentIndex ? "slick-center" : ""}`}
//                 />
//                 {index === currentIndex && (
//                   <TextBelowCard>{card.textBelowCard}</TextBelowCard>
//                 )}
//               </CardColumn>
//             ))}
//           </Slider>
//         </CarouselWrapper>
//       </HomeContainer>
//       <CallHelpButtonComponent />
//       <Contacts />
//     </>
//   );
// };

// export default Home;

// <<<<<<< Updated upstream
// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from "styled-components";
// import ProfileCard from "../components/ProfileCard/ProfileCard";
// import { ChevronLeftIcon, ChevronRightIcon, TvIcon } from "../components/icons";
// import CallHelpButtonComponent from "../components/CallHelpButton";
// import Contacts from "../components/Contacts";
// import { GiFilmSpool } from "react-icons/gi";
// import { FaPhoneAlt } from "react-icons/fa";
// import { GrGallery } from "react-icons/gr";
// import { GrYoga } from "react-icons/gr";
// import { FaLightbulb } from "react-icons/fa";
// // import { MdOutlineSportsMartialArts } from "react-icons/md";
// import Lights from "../components/Lights";
// import Entertainment from "../components/Entertainment";
// import Television from "../components/Tv";
// import Activities from "../components/Activities";

// const HomeContainer = styled.div`
//   position: relative;
//   top: 150px;
//   left: 0;
//   right: 0;
//   display: flex;
//   justify-content: center;
//   min-height: 50vh;
//   text-align: center;
// `;

// const CarouselWrapper = styled.div`
//   margin: 0 auto;
//   max-width: 2500px;
//   justify-content: center;
//   display: block;
// `;

// const CardColumn = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
// `;

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

// const StyledProfileCard = styled(ProfileCard)`
//   transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
//   display: flex;
//   color: black;

//   &:hover {
//     transform: scale(1.1);
//     .icon-container {
//       svg {
//         fill: black;
//       }
//     }
//   }

//   &.slick-center {
//     transform: scale(1.5);
//     background: yellow;
//     .icon-container {
//       svg {
//         fill: #000; /* Change the icon color for the center card */
//       }
//     }
//   }
// `;

// const CustomNextArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ right: -100 }}>
//     <ChevronRightIcon />
//   </CustomArrowButton>
// );

// const CustomPrevArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ left: -100 }}>
//     <ChevronLeftIcon />
//   </CustomArrowButton>
// );

// const TextBelowCard = styled.h1`
//   margin:0;
//   font-size: 46px;
//   color: #2e3e5e;
//   position:relative;
//   left: 0%;
//   top: 95%;
//   display: flex;

// `;
// const SpaceBeforeBelowCard = styled.h1`
//   margin:0;
//   font-size: 46px;
//   color: #FCF8E3;
//   position:relative;
//   left: 0%;
//   top: 95%;
//   display: flex;

// `;
// const PromptDiv = styled.h1`

//   display: flex;

// `;

// const isIconActive = true;
// const cardData = [
//   {
//     // link: "/garden-loft-app/entertainment",
//     icon: <TvIcon />,
//     title: "TV",
//     spaceBeforeBelowCard: ".. ..",
//     textBelowCard: "Watch TV?",
//     page: <Television />,
//   },
//   {
//     icon: <GrYoga size={150} color={isIconActive ? "black" : "yellow"} />,
//     title: "ACTIVITIES",
//     textBelowCard: "Join an Activity?",
//     page: <Activities />,
//   },
//   {
//     // link: "/garden-loft-app/services",
//     icon: <GiFilmSpool size={150} />,
//     title: "ENTERTAINMENT",
//     textBelowCard: "Watch Entertainment?",
//     page: <Entertainment />,
//   },
//   {
//     // link: "/garden-loft-app/services",
//     icon: <GrGallery size={150} color={isIconActive ? "black" : "yellow"} />,
//     title: "GALLERY",
//     spaceBeforeBelowCard: "..",
//     textBelowCard: "View Gallery?",
//   },
//   {
//     icon: <FaPhoneAlt size={150} />,
//     title: "VIDEO CALL",
//     textBelowCard: "Make a Video Call?",
//     page: <Contacts />,
//   },
//   {
//     // link: "/garden-loft-app/smart-loft",
//     icon: <FaLightbulb size={150} />,
//     title: "LIGHTS",
//     textBelowCard: "Change Lights?",
//     page: <Lights />,
//   },
// ];

// const Home = () => {
//   const settings = {
//     centerMode: true,
//     centerPadding: "0",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     // dots: true,
//     nextArrow: <CustomNextArrow data-clickable="true" />,
//     prevArrow: <CustomPrevArrow data-clickable="true" />,
//     beforeChange: (current, next) => {
//       // Disable hover effect for all cards
//       setDisableHover(true);
//     },
//     afterChange: (current) => {
//       // Enable hover effect for the center card
//       setDisableHover(false);
//       // Update the index of the center card
//       setCenterCardIndex(current);
//     },
//   };

//   const [disableHover, setDisableHover] = useState(false);
//   const [centerCardIndex, setCenterCardIndex] = useState(0);

//   return (
//     <>
//       <HomeContainer disableHover={disableHover}>
//         <CarouselWrapper>
//           <Slider {...settings}>
//             {cardData.map((card, index) => (
//               <CardColumn key={index}>
//                 <StyledProfileCard
//                   link={card.link}
//                   icon={card.icon}
//                   title={card.title}
//                   active={index === centerCardIndex}
//                 />
//                 <PromptDiv>{index === centerCardIndex && (
//                   <SpaceBeforeBelowCard>{card.spaceBeforeBelowCard}</SpaceBeforeBelowCard>
//                 )}
//                 {index === centerCardIndex && (
//                   <TextBelowCard>{card.textBelowCard}</TextBelowCard>
//                 )}</PromptDiv>

//               </CardColumn>
//             ))}
//           </Slider>
//         </CarouselWrapper>
//       </HomeContainer>
//       {centerCardIndex === 0 && <Television />}
//       {centerCardIndex === 1 && <Activities />}
//       {centerCardIndex === 2 && <Entertainment />}

//       {centerCardIndex === 5 && <Lights />}
//       {centerCardIndex === 4 && <Contacts />}
//       <CallHelpButtonComponent />
//     </>
//   );
// };

// export default Home;

// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from "styled-components";
// import ProfileCard from "../components/ProfileCard/ProfileCard";
// import { ChevronLeftIcon, ChevronRightIcon, TvIcon } from "../components/icons";
// import CallHelpButtonComponent from "../components/CallHelpButton";
// import Contacts from "../components/Contacts";
// import { GiFilmSpool } from "react-icons/gi";
// import { FaPhoneAlt } from "react-icons/fa";
// // import { GrYoga } from "react-icons/gr";
// import { IoSettings } from "react-icons/io5";
// import { FaLightbulb } from "react-icons/fa";
// import { MdOutlineSportsMartialArts } from "react-icons/md";
// import Lights from "../components/Lights";
// import Entertainment from "../components/Entertainment";
// import Television from "../components/Tv";
// import Activities from "../components/Activities";

// const HomeContainer = styled.div`
//   position: relative;
//   top: 150px;
//   left: 0;
//   right: 0;
//   display: flex;
//   justify-content: center;
//   min-height: 50vh;
//   text-align: center;
// `;

// const CarouselWrapper = styled.div`
//   margin: 0 auto;
//   max-width: 2500px;
//   justify-content: center;
//   display: block;
// `;

// const CardColumn = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
// `;

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

// const StyledProfileCard = styled(ProfileCard)`
//   transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
//   display: flex;
//   color: black;

//   &:hover {
//     transform: scale(1.1);
//     .icon-container {
//       svg {
//         fill: black;
//       }
//     }
//   }

//   &.slick-center {
//     transform: scale(1.5);
//     background: yellow;
//     .icon-container {
//       svg {
//         fill: #000; /* Change the icon color for the center card */
//       }
//     }
//   }
// `;

// const CustomNextArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ right: -100 }}>
//     <ChevronRightIcon />
//   </CustomArrowButton>
// );

// const CustomPrevArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ left: -100 }}>
//     <ChevronLeftIcon />
//   </CustomArrowButton>
// );

// const TextBelowCard = styled.h1`
//   margin: 10px;
//   font-size: 46px;
//   color: #2e3e5e;
//   position: initial;
//   display: flex;
// `;

// const cardData = [
//   {
//     // link: "/garden-loft-app/entertainment",
//     icon: <TvIcon />,
//     title: "TV",
//     textBelowCard: "Watch TV?",
//     page: <Television />,
//   },
//   {
//     icon: <MdOutlineSportsMartialArts size={150} />,
//     title: "ACTIVITIES",
//     textBelowCard: "Join an Activity?",
//     page: <Activities />,
//   },
//   {
//     // link: "/garden-loft-app/services",
//     icon: <GiFilmSpool size={150} />,
//     title: "ENTERTAINMENT",
//     textBelowCard: "Watch Entertainment?",
//     page: <Entertainment />,
//   },
//   {
//     // link: "/garden-loft-app/services",
//     icon: <IoSettings size={150} />,
//     title: "SETTINGS",
//     textBelowCard: "Change Settings?",
//   },
//   {
//     icon: <FaPhoneAlt size={150} />,
//     title: "VIDEO CALL",
//     textBelowCard: "Make a Video Call?",
//     page: <Contacts />,
//   },
//   {
//     // link: "/garden-loft-app/smart-loft",
//     icon: <FaLightbulb size={150} />,
//     title: "LIGHTS",
//     textBelowCard: "Change Lights?",
//     page: <Lights />,
//   },
// ];

// const Home = () => {
//   const settings = {
//     centerMode: true,
//     centerPadding: "0",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     // dots: true,
//     nextArrow: <CustomNextArrow data-clickable="true" />,
//     prevArrow: <CustomPrevArrow data-clickable="true" />,
//     beforeChange: (current, next) => {
//       // Disable hover effect for all cards
//       setDisableHover(true);
//     },
//     afterChange: (current) => {
//       // Enable hover effect for the center card
//       setDisableHover(false);
//       // Update the index of the center card
//       setCenterCardIndex(current);
//     },
//   };

//   const [disableHover, setDisableHover] = useState(false);
//   const [centerCardIndex, setCenterCardIndex] = useState(0);

//   return (
//     <>
//       <HomeContainer disableHover={disableHover}>
//         <CarouselWrapper>
//           <Slider {...settings}>
//             {cardData.map((card, index) => (
//               <CardColumn key={index}>
//                 <StyledProfileCard
//                   link={card.link}
//                   icon={card.icon}
//                   title={card.title}
//                   active={index === centerCardIndex}
//                 />
//                 {index === centerCardIndex && (
//                   <TextBelowCard>{card.textBelowCard}</TextBelowCard>
//                 )}
//               </CardColumn>
//             ))}
//           </Slider>
//         </CarouselWrapper>
//       </HomeContainer>
//       {centerCardIndex === 0 && <Television />}
//       {centerCardIndex === 1 && <Activities />}
//       {centerCardIndex === 2 && <Entertainment />}

//       {centerCardIndex === 5 && <Lights />}
//       {centerCardIndex === 4 && <Contacts />}
//       <CallHelpButtonComponent />
//     </>
//   );
// };

// export default Home;

// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from "styled-components";
// import ProfileCard from "../components/ProfileCard/ProfileCard";
// import { ChevronLeftIcon, ChevronRightIcon, TvIcon } from "../components/icons";
// import CallHelpButtonComponent from "../components/CallHelpButton";
// import Contacts from "../components/Contacts";
// import { GiFilmSpool } from "react-icons/gi";
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoSettings } from "react-icons/io5";
// import { FaLightbulb } from "react-icons/fa";
// import { MdOutlineSportsMartialArts } from "react-icons/md";
// import Lights from "../components/Lights";
// import Entertainment from "../components/Entertainment";
// import Television from "../components/Tv";
// import Activities from "../components/Activities";

// const HomeContainer = styled.div`
//   position: relative;
//   top: 150px;
//   left: 0;
//   right: 0;
//   display: flex;
//   justify-content: center;
//   min-height: 50vh;
//   text-align: center;
// `;

// const CarouselWrapper = styled.div`
//   margin: 0 auto;
//   max-width: 2500px;
//   max-height: 800px;
//   justify-content: center;
//   display: block;

//   transition: border 0.3s ease, opacity 0.3s ease;
// `;

// const CardColumn = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
// `;
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

// const StyledProfileCard = styled(ProfileCard)`
//   transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
//   display: flex;
//   color: black;

//   &:hover {
//     transform: scale(1.1);
//     .icon-container {
//       svg {
//         fill: black;
//       }
//     }
//   }

//   &.slick-center {
//     transform: scale(1.5);
//     background: yellow;
//     .icon-container {
//       svg {
//         fill: #000; /* Change the icon color for the center card */
//       }
//     }
//   }
// `;

// const CustomNextArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ right: -100 }}>
//     <ChevronRightIcon />
//   </CustomArrowButton>
// );

// const CustomPrevArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ left: -100 }}>
//     <ChevronLeftIcon />
//   </CustomArrowButton>
// );

// const TextBelowCard = styled.h1`
//   margin: 10px;
//   font-size: 46px;
//   color: #2e3e5e;
//   position: initial;
//   display: flex;
// `;

// const cardData = [
//   {
//     // link: "/garden-loft-app/entertainment",
//     icon: <TvIcon />,
//     title: "TV",
//     textBelowCard: "Watch TV?",
//     page: <Television />,
//   },
//   {
//     icon: <MdOutlineSportsMartialArts size={150} />,
//     title: "ACTIVITIES",
//     textBelowCard: "Join an Activity?",
//     page: <Activities />,
//   },
//   {
//     // link: "/garden-loft-app/services",
//     icon: <GiFilmSpool size={150} />,
//     title: "ENTERTAINMENT",
//     textBelowCard: "Watch Entertainment?",
//     page: <Entertainment />,
//   },
//   {
//     // link: "/garden-loft-app/services",
//     icon: <IoSettings size={150} />,
//     title: "SETTINGS",
//     textBelowCard: "Change Settings?",
//   },
//   {
//     icon: <FaPhoneAlt size={150} />,
//     title: "VIDEO CALL",
//     textBelowCard: "Make a Video Call?",
//     page: <Contacts />,
//   },
//   {
//     // link: "/garden-loft-app/smart-loft",
//     icon: <FaLightbulb size={150} />,
//     title: "LIGHTS",
//     textBelowCard: "Change Lights?",
//     page: <Lights />,
//   },
// ];

// const CarouselDivBox = styled.div`
//   display: block;
//   justify-content: center;
//   border: ${(props) => (props.active ? "5px solid yellow" : "none")};
//   opacity: ${(props) => (props.active ? 1 : 0.5)};
// `;

// const Home = () => {
//   const settings = {
//     centerMode: true,
//     centerPadding: "0",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     // dots: true,
//     nextArrow: <CustomNextArrow data-clickable="true" />,
//     prevArrow: <CustomPrevArrow data-clickable="true" />,
//     beforeChange: (current, next) => {
//       // Disable hover effect for all cards
//       setDisableHover(true);
//     },
//     afterChange: (current) => {
//       // Enable hover effect for the center card
//       setDisableHover(false);
//       // Update the index of the center card
//       setCenterCardIndex(current);
//     },
//   };

//   const [disableHover, setDisableHover] = useState(false);
//   const [centerCardIndex, setCenterCardIndex] = useState(0);
//   const [activeCarousel, setActiveCarousel] = useState("cardData");

//   const handleCarouselChange = (current) => {
//     setDisableHover(true);
//     setActiveCarousel(current);
//   };

//   return (
//     <>
//       <HomeContainer disableHover={disableHover}>
//         <CarouselWrapper>
//           <CarouselDivBox active={activeCarousel === "cardData"}>
//             <Slider
//               {...settings}
//               beforeChange={() => handleCarouselChange("cardData")}>
//               {cardData.map((card, index) => (
//                 <CardColumn key={index}>
//                   <StyledProfileCard
//                     link={card.link}
//                     icon={card.icon}
//                     title={card.title}
//                     active={index === centerCardIndex}
//                   />
//                   {index === centerCardIndex && (
//                     <TextBelowCard>{card.textBelowCard}</TextBelowCard>
//                   )}
//                 </CardColumn>
//               ))}
//             </Slider>
//           </CarouselDivBox>
//         </CarouselWrapper>
//       </HomeContainer>
//       {centerCardIndex === 0 && <Television />}
//       {centerCardIndex === 1 && <Activities />}
//       {centerCardIndex === 2 && <Entertainment />}

//       {centerCardIndex === 5 && <Lights />}
//       {centerCardIndex === 4 && <Contacts />}
//       <CallHelpButtonComponent />
//     </>
//   );
// };

// export default Home;
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
// import { MdOutlineSportsMartialArts } from "react-icons/md";
import Lights from "../components/Lights";
import Entertainment from "../components/Entertainment";
import Television from "../components/Tv";
import Activities from "../components/Activities";

const HomeContainer = styled.div`
  position: relative;
  top: 150px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
`;
const CarouselWrapper = styled.div`
  margin: 0 auto;
  max-width: 2500px;
  max-height: 800px;
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

// Media query for tablets (landscape and portrait)
const tabletMediaQuery = `
  @media only screen and (min-width: 600px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;

// Media query for phones
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
    /* Add additional styles for tablets */
    // Example:
    // font-size: 18px;
  }
  ${phoneMediaQuery} {
    /* Add additional styles for phones */
    // Example:
    // font-size: 14px;
  }
`;

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
        fill: #000; /* Change the icon color for the center card */
      }
    }
  }

  /* Add new styles for opacity and border */
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
  font-size: 46px;
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
`;
const cardData = [
  {
    icon: <TvIcon />,
    title: "TV",
    spaceBeforeBelowCard: "..... ....",
    textBelowCard: "Watch TV?",
    page: <Television />,
  },
  {
    icon: <GiWeightLiftingUp size={150} />,

    title: "ACTIVITIES",
    spaceBeforeBelowCard: "......",
    textBelowCard: "Join an Activity?",
    page: <Activities />,
  },
  {
    icon: <GiFilmSpool size={150} />,
    title: "ENTERTAINMENT",
    spaceBeforeBelowCard: "..",
    textBelowCard: "Watch Entertainment?",
    page: <Entertainment />,
  },
  {
    icon: <IoMdPhotos size={150} />,
    title: "GALLERY",
    spaceBeforeBelowCard: ".... ....",

    textBelowCard: "View Gallery?",
  },
  {
    icon: <FaPhoneAlt size={150} />,
    title: "VIDEO CALL",
    spaceBeforeBelowCard: ".....",
    textBelowCard: "Make a Video Call?",
    page: <Contacts />,
  },
  {
    icon: <FaLightbulb size={150} />,
    title: "LIGHTS",
    spaceBeforeBelowCard: ".... ..",
    textBelowCard: "Change Lights?",
    page: <Lights />,
  },
];

const CarouselDivBox = styled.div`
  display: block;
  justify-content: center;
`;

const Home = () => {
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
    speed: 150,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow data-clickable="true" />,
    prevArrow: <CustomPrevArrow data-clickable="true" />,
    beforeChange: (current, next) => {
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
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          if (activeCarousel === "cardData") {
            sliderRef.current.slickPrev();
          } else if (activeCarousel === "componentData") {
            // Handle left arrow key for the component carousel
            switch (centerCardIndex) {
              case 0:
                tvRef.current.prevTv();
                break;
              case 1:
                activitiesRef.current.prevContact();
                break;
              case 2:
                if (entertainmentRef.current) {
                  entertainmentRef.current.prevContact();
                }
                break;
              case 3:
                if (lightsRef.current) {
                  lightsRef.current.prevContact();
                }
                break;
              // ... (add more cases for other components if needed)
              default:
                break;
            }
          }
          break;

        case "ArrowRight":
          if (activeCarousel === "cardData") {
            sliderRef.current.slickNext();
          } else if (activeCarousel === "componentData") {
            // Handle right arrow key for the component carousel
            switch (centerCardIndex) {
              case 0:
                tvRef.current.nextTv();
                break;
              case 1:
                activitiesRef.current.nextContact();
                break;
              case 2:
                if (
                  entertainmentRef.current &&
                  typeof entertainmentRef.current.nextContact === "function"
                ) {
                  entertainmentRef.current.nextContact();
                } else {
                  console.error(
                    "nextContact function is not available on entertainmentRef.current"
                  );
                }
                break;
              case 3:
                // Handle right arrow key for the Lights component
                if (
                  lightsRef.current &&
                  typeof lightsRef.current.nextContact === "function"
                ) {
                  lightsRef.current.nextContact();
                } else {
                  console.error(
                    "nextContact function is not available on lightsRef.current"
                  );
                }
                break;
              // ... add more cases for other components if needed
              default:
                break;
            }
          }
          break;

        case "ArrowDown":
          // Handle down arrow key
          if (activeCarousel === "cardData") {
            console.log("Navigate down to component carousel");
            setActiveCarousel("componentData");
          }
          break;

        case "ArrowUp":
          // Handle up arrow key
          if (activeCarousel === "componentData") {
            console.log("Navigate up to card carousel");
            setActiveCarousel("cardData");
          }
          break;

        case "Enter":
          // Handle Enter key
          if (activeCarousel === "cardData") {
            // Perform action for card carousel
          } else if (activeCarousel === "componentData") {
            // Perform action for component carousel
            switch (centerCardIndex) {
              case 1:
                activitiesRef.current.openModal();
                break;
              case 2:
                if (entertainmentRef.current) {
                  entertainmentRef.current.openModal();
                }
                break;
              case 3:
                if (lightsRef.current) {
                  lightsRef.current.openModal();
                }
                break;
              // ... add more cases for other components if needed
              default:
                break;
            }
          }
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    centerCardIndex,
    activeCarousel,
    sliderRef,
    tvRef,
    activitiesRef,
    entertainmentRef,
    lightsRef,
    setActiveCarousel,
  ]);

  return (
    <>
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
        {centerCardIndex === 1 && <Activities ref={activitiesRef} />}
        {centerCardIndex === 2 && <Entertainment ref={entertainmentRef} />}
        {centerCardIndex === 4 && <Contacts ref={contactsRef} />}
        {centerCardIndex === 5 && <Lights ref={lightsRef} />}
        {/* ... add more components if needed */}
      </CarouselWrapper>
      <CallHelpButtonComponent />
    </>
  );
};

export default Home;

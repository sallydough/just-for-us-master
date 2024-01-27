// import React, { useState, useEffect} from "react";
// import Slider from "react-slick";
// import axios from "axios";
// import { FaUserAlt } from "react-icons/fa";
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

// const Activities = React.forwardRef((props, ref) => {
//   const [loading, setLoading] = useState(true);
//   const [cardIndex, setCardIndex] = useState(0);
//   const [error, setError] = useState(null);
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchSignUpGeniusData = async () => {
//       try {
//         const response = await axios.get("https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09");
//         console.log("API Response:", response.data);

//         const formattedData = response.data.data.signup.map((item) => ({
//           id: item.signupid,
//           name: `${item.firstname} ${item.lastname}`,
//           item: item.item,
//           startDateString: item.startdatestring,
//           zoomLink: item.location === "Online" ? "https://us06web.zoom.us/j/87666824017?pwd=RUZLSFVabjhtWjJVSm1CcDZsZXcrUT09" : null, // Assuming the location indicates it's an online event

//           // Add other properties as needed
//         }));

//         setEvents(formattedData);
//       } catch (error) {
//         console.error("Error fetching SignUpGenius data:", error);
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSignUpGeniusData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   const navigateToZoomLink = (link) => {
//     if (link) {
//       //removes pop-ups when redirecting to link
//       window.location.replace(link,)
//     } else {
//       console.log("No Zoom link available for this event.");
//     }
//   };

//   const CustomNextArrow = ({ onClick }) => (
//     <CustomArrowButton
//       onClick={() => {
//         setCardIndex((prevIndex) => (prevIndex + 1) % events.length);
//         onClick();
//       }}
//       style={{ right: -100 }}>
//       <ChevronRightIcon />
//     </CustomArrowButton>
//   );

//   const CustomPrevArrow = ({ onClick }) => (
//     <CustomArrowButton
//       onClick={() => {
//         setCardIndex(
//           (prevIndex) =>
//             (prevIndex - 1 + events.length) % events.length
//         );
//         onClick();
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

//   return (
//     <>
//       <div ref={ref} id="activities" color="white" className="settings">
//         <div color="white" className="slider-call-1">
//           <div color="white" className="slider">
//             <Slider {...slidesSettings}>
//               {events.map((event, idx) => (
//                 <div
//                   key={event.id}
//                   // onClick={() => console.log(`Clicked on ${event.name}`)}
//                   onClick={() => navigateToZoomLink(event.zoomLink)}
//                   color="white"
//                   className={idx === cardIndex ? "slide activeSlide" : "slide"}>
//                   {/* Render your event data here */}

// <FaUserAlt size={130} color="white" className="nav-icon" />
//                   <h1 >{event.item}</h1>
//                    <p color="white" className="card-name">
//                     {event.name}
//                   </p>
//                   <p>{event.startDateString}</p>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//           <div color="white" className="prompt">
//             {/* Display other properties if needed */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// });

// export default Activities;
// Activities.js

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "./activities.css";

const Activities = React.forwardRef((props, ref) => {
  const { enteredName } = props;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09"
        );

        if (!response.data.success) {
          throw new Error("Failed to retrieve signed-up activities.");
        }

        const signUpData = response.data.data.signup;

        const userEvents = signUpData.filter(
          (item) =>
            item.firstname.trim().toLowerCase() ===
              enteredName.trim().toLowerCase() ||
            item.lastname.trim().toLowerCase() ===
              enteredName.trim().toLowerCase()
        );

        const eventData = userEvents.map((item) => ({
          id: item.signupid,
          name: `${item.firstname} ${item.lastname}`,
          item: item.item,
          startDateString: item.startdatestring,
          zoomLink:
            item.location === "Online"
              ? "https://us06web.zoom.us/j/87666824017?pwd=RUZLSFVabjhtWjJVSm1CcDZsZXcrUT09"
              : null,
        }));

        setEvents(eventData);
      } catch (error) {
        console.error("Error fetching signed-up activities:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (enteredName) {
      fetchEvents();
    }
  }, [enteredName]);

  const navigateToZoomLink = (link) => {
    if (link) {
      window.location.replace(link);
    } else {
      console.log("No Zoom link available for this event.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div ref={ref} id="activities" className="settings">
        <div className="slider-call-1">
          <div className="slider">
            <Slider
              infinite
              lazyLoad
              speed={300}
              slidesToShow={3}
              centerMode
              centerPadding={0}>
              {events.map((event, idx) => (
                <div
                  key={event.id}
                  onClick={() => navigateToZoomLink(event.zoomLink)}
                  className={idx === 0 ? "slide activeSlide" : "slide"}>
                  <h1>{event.item}</h1>
                  <p className="card-name">{event.name}</p>
                  <p>{event.startDateString}</p>
                </div>
              ))}
            </Slider>
          </div>
          <div className="prompt">
            {/* Display other properties if needed */}
          </div>
        </div>
      </div>
    </>
  );
});

export default Activities;

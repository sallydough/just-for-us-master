// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import axios from "axios";
// import "./activities.css";
// import { ChevronLeftIcon, ChevronRightIcon } from "../components/icons";
// import styled from "styled-components";

// // Create a new Slider component with its specific settings
// const CustomSlider = ({ events, navigateToZoomLink }) => {
//   const CustomArrowButton = styled.div`
//     width: 80px;
//     height: 80px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     z-index: 1;

//     &:active {
//       transform: translateY(-50%), scale(0.95);
//     }
//   `;

//   // const CustomNextArrow = ({ onClick }) => (
//   //   <CustomArrowButton onClick={onClick} style={{ right: -100 }}>
//   //     <ChevronRightIcon />
//   //   </CustomArrowButton>
//   // );

//   // const CustomPrevArrow = ({ onClick }) => (
//   //   <CustomArrowButton onClick={onClick} style={{ left: -100 }}>
//   //     <ChevronLeftIcon />
//   //   </CustomArrowButton>
//   // );

//   const [cardIndex, setCardIndex] = useState(0);

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

//   const settings = {
//     centerMode: true,
//     infinite: true,
//     lazyLoad: true,
//     speed: 300,
//     slidesToShow: 3,
//     centerPadding: 0,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//   };

//   return (
//     <CustomSlider {...settings}>
//       {events.map((event, idx) => (
//         <div
//           key={event.id}
//           onClick={() => navigateToZoomLink(event.zoomLink)}
//           className={idx === cardIndex ? "slide activeSlide" : "slide"}
//         >
//           <h1>{event.item}</h1>
//           <p className="card-name">{event.name}</p>
//           <p>{event.startDateString}</p>
//         </div>
//       ))}
//     </CustomSlider>
//   );
// };

// // Define the Activities component
// const Activities = React.forwardRef((props, ref) => {
//   const { enteredName } = props;
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [events, setEvents] = useState([]);

//   const navigateToZoomLink = (link) => {
//     if (link) {
//       window.location.replace(link);
//     } else {
//       console.log("No Zoom link available for this event.");
//     }
//   };

//   useEffect(() => {
//     const fetchEvents = async () => {
//       let eventData = [];

//       try {
//         const response = await axios.get(
//           "https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09"
//         );

//         console.log("API Response:", response);

//         if (!response.data.success) {
//           throw new Error("Failed to retrieve signed-up activities.");
//         }

//         const signUpData = response.data.data.signup;

//         eventData = signUpData
//           .filter((item) => {
//             const lowerEnteredName =
//               enteredName && enteredName.trim().toLowerCase();
//             const lowerFirstName = item.firstname.trim().toLowerCase();
//             const lowerLastName = item.lastname.trim().toLowerCase();

//             const matchFirstName = lowerFirstName.includes(lowerEnteredName);
//             const matchLastName = lowerLastName.includes(lowerEnteredName);

//             return matchFirstName || matchLastName;
//           })
//           .map((item) => ({
//             id: item.signupid,
//             name: `${item.firstname} ${item.lastname}`,
//             item: item.item,
//             // startDateString: item.startdatestring,
//             startDate: new Date(item.startdatestring), // Convert the start date to a Date object
//             zoomLink:
//               item.location === "Zoom Meeting"
//                 ? "https://us06web.zoom.us/j/87666824017?pwd=RUZLSFVabjhtWjJVSm1CcDZsZXcrUT09"
//                 : null,
//           }));

//         console.log("Filtered Events:", eventData);
//       } catch (error) {
//         console.error("Error fetching signed-up activities:", error.message);
//         setError(
//           "Failed to retrieve signed-up activities. Please try again later."
//         );
//       } finally {
//         setEvents(eventData);
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, [enteredName]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <>
//       <div ref={ref} id="activities" className="settings">
//         <div className="slider-call-1">
//           <div className="slider">
//             <Slider
//               infinite
//               lazyLoad
//               speed={300}
//               slidesToShow={1}
//               centerPadding={0}>
//               {events.map((event, idx) => (
//                 <div
//                   key={event.id}
//                   onClick={() => navigateToZoomLink(event.zoomLink)}
//                   className={idx === 0 ? "slide activeSlide" : "slide"}>
//                   <h1>{event.item}</h1>
//                   <p className="card-name"style={{ fontSize: 50}}>{event.name}</p>
//                   {/* <p>{event.startDateString}</p> */}
//                   <p className="card-name" style={{ fontSize: 50}}>{event.startDate.toLocaleString('en-US',
//                   { timeZone: 'America/Edmonton',
//                    weekday: 'long',
//                    year: 'numeric',
//                    month: 'long',
//                    day: 'numeric',
//                    hour: 'numeric',
//                    minute: 'numeric'
//                     })}</p>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//           <div className="prompt">
//             {/* Display other properties if needed */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// });

// // Export the Activities component
// export default Activities;




import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { format } from 'date-fns';
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
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

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Activities = React.forwardRef((props, ref) => {
  const { enteredName } = props;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true); // Set loading to true before fetching data

      try {
        const response = await axios.get(
          "https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09"
        );

        if (!response.data.success) {
          throw new Error("Failed to retrieve signed-up activities.");
        }

        const signUpData = response.data.data.signup;

        const eventData = signUpData
          .filter((item) => {
            const lowerEnteredName =
              enteredName && enteredName.trim().toLowerCase();
            const lowerFirstName = item.firstname.trim().toLowerCase();
            const lowerLastName = item.lastname.trim().toLowerCase();

            const matchFirstName = lowerFirstName.includes(lowerEnteredName);
            const matchLastName = lowerLastName.includes(lowerEnteredName);

            return matchFirstName || matchLastName;
          })
          .map((item) => ({
            id: item.signupid,
            name: `${item.firstname} ${item.lastname}`,
            item: item.item,
            startDate: moment(new Date(item.startdatestring)).format('dddd MMMM Do, h:mm a'),
            zoomLink:
              item.location === "Zoom Meeting"
                ? "https://us06web.zoom.us/j/87666824017?pwd=RUZLSFVabjhtWjJVSm1CcDZsZXcrUT09"
                : null,
          }));

        setEvents(eventData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching signed-up activities:", error.message);
        setError(
          "Failed to retrieve signed-up activities. Please try again later."
        );
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchEvents();
  }, [enteredName]);

  const navigateToZoomLink = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <ClipLoader css={override} color="#36D7B7" loading={loading} size={50} />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const CustomNextArrow = ({ onClick }) => (
    <CustomArrowButton
      onClick={() => {
        setCardIndex((prevIndex) => (prevIndex + 1) % events.length);
        onClick();
      }}
      style={{ right: -100 }}
    >
      <ChevronRightIcon />
    </CustomArrowButton>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <CustomArrowButton
      onClick={() => {
        setCardIndex(
          (prevIndex) => (prevIndex - 1 + events.length) % events.length
        );
        onClick();
      }}
      style={{ left: -100 }}
    >
      <ChevronLeftIcon />
    </CustomArrowButton>
  );

  const settings = {
    centerMode: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerPadding: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => setCardIndex(next),
  };

  return (
    <>
      <div ref={ref} id="activities" className="settings">
        <div className="slider-call-1">
          <div className="slider">
            <Slider {...settings}>
              {events.map((event, idx) => (
                <div
                  key={event.id}
                  onClick={() => navigateToZoomLink(event)}
                  className={idx === cardIndex ? "slide activeSlide" : "slide"}
                >
                  <h1>{event.item}</h1>
                  <p className="card-name" style={{ fontSize: 34 }}>
                    {event.startDate ? (
                      format(event.startDate, "EEEE, MMMM d, yyyy h:mm a", { timeZone: "America/Edmonton" })
                    ) : (
                      "Date Not Available"
                    )}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
          <div className="prompt">
            {/* Display other properties if needed */}
          </div>
        </div>
      </div>

      {isModalOpen && selectedEvent && (
        <div className="overlay">
          <div className="modal">
            <div>
              <h1 style={{ fontSize: 50 }}>{selectedEvent.item}</h1>
              <p className="card-name" style={{ fontSize: 50 }}>
                {selectedEvent.startDate.toLocaleString("en-US", {
                  timeZone: "America/Edmonton",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </p>

              {/* Conditional rendering based on event availability */}
              {selectedEvent.startDate > new Date() ? (
                <>
                  <button
                    onClick={() => window.open(selectedEvent.zoomLink, '_blank')}
                    style={{ fontSize: 50 }}
                  >
                    Join Now
                  </button>
                  <p style={{ fontSize: 50 }}>
                    Apologies, the event is not available.
                  </p>
                </>
              ) : (
                <p style={{ fontSize: 50 }}>
                  Apologies, the event is not available.
                </p>
              )}
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default Activities;












// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import axios from "axios";
// import { format } from 'date-fns';
// import "./activities.css";
// import { ChevronLeftIcon, ChevronRightIcon } from "../components/icons";
// import styled from "styled-components";

// // const CustomSlider = ({ events, navigateToZoomLink }) => {
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

// //   return (
// //     <CustomSlider {...settings}>
// //       {events.map((event, idx) => (
// //         <div
// //           key={event.id}
// //           onClick={() => navigateToZoomLink(event.zoomLink)}
// //           className={idx === cardIndex ? "slide activeSlide" : "slide"}>
// //           <h1>{event.item}</h1>
// //           <p className="card-name" style={{ fontSize: 25 }}>
// //             {event.name}
// //           </p>
// //           <p className="card-name" style={{ fontSize: 25 }}>
// //             {event.startDate.toLocaleString("en-US", {
// //               timeZone: "America/Edmonton",
// //               day: "numeric",
// //               hour: "numeric",
// //               minute: "numeric",
// //             })}
// //           </p>
// //         </div>
// //       ))}
// //     </CustomSlider>
// //   );
// // };

// const Activities = React.forwardRef((props, ref) => {
//   const { enteredName } = props;
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [events, setEvents] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [cardIndex, setCardIndex] = useState(0);

//   const formattedDate = format(event.startDate, "EEEE, MMMM d, yyyy h:mm a", { timeZone: "America/Edmonton" });

//   const navigateToZoomLink = (event) => {
//     setSelectedEvent(event);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEvent(null);
//   };

//   useEffect(() => {
//     const fetchEvents = async () => {
//       let eventData = [];

//       try {
//         const response = await axios.get(
//           "https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09"
//         );

//         if (!response.data.success) {
//           throw new Error("Failed to retrieve signed-up activities.");
//         }

//         const signUpData = response.data.data.signup;

//         eventData = signUpData
//           .filter((item) => {
//             const lowerEnteredName =
//               enteredName && enteredName.trim().toLowerCase();
//             const lowerFirstName = item.firstname.trim().toLowerCase();
//             const lowerLastName = item.lastname.trim().toLowerCase();

//             const matchFirstName = lowerFirstName.includes(lowerEnteredName);
//             const matchLastName = lowerLastName.includes(lowerEnteredName);

//             return matchFirstName || matchLastName;
//           })
//           .map((item) => ({
//             id: item.signupid,
//             name: `${item.firstname} ${item.lastname}`,
//             item: item.item,
//             startDate: new Date(item.startdatestring),
//             zoomLink:
//               item.location === "Zoom Meeting"
//                 ? "https://us06web.zoom.us/j/87666824017?pwd=RUZLSFVabjhtWjJVSm1CcDZsZXcrUT09"
//                 : null,
//           }));
//       } catch (error) {
//         console.error("Error fetching signed-up activities:", error.message);
//         setError(
//           "Failed to retrieve signed-up activities. Please try again later."
//         );
//       } finally {
//         setEvents(eventData);
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, [enteredName]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

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
//           (prevIndex) => (prevIndex - 1 + events.length) % events.length
//         );
//         onClick();
//       }}
//       style={{ left: -100 }}>
//       <ChevronLeftIcon />
//     </CustomArrowButton>
//   );

//   const settings = {
//     centerMode: true,
//     infinite: true,
//     lazyLoad: true,
//     speed: 300,
//     slidesToShow: 3,
//     centerPadding: 0,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//     beforeChange: (current, next) => setCardIndex(next),
//   };

//   return (
//     <>
//       <div ref={ref} id="activities" className="settings">
//         <div className="slider-call-1">
//           <div className="slider">
//             <Slider {...settings}>
//               {events.map((event, idx) => (
//                 <div
//                   key={event.id}
//                   onClick={() => navigateToZoomLink(event)}
              
//                   className={idx === cardIndex ? "slide activeSlide" : "slide"}>
//                   <h1>{event.item}</h1>
//                   {/* <p className="card-name" style={{ fontSize: 20 }}>
//                     {event.name}
//                   </p> */}
//                   {/* <p>{event.startDateString}</p> */}
//                   {/* <p className="card-name" style={{ fontSize: 34 }}>
//                     {event.startDate.toLocaleString("en-US", {
//                       timeZone: "America/Edmonton",
//                       weekday: "long",
//                       month: "long",
//                       day: "numeric",
//                       year: "numeric",
//                       hour: "numeric",
//                       minute: "numeric",
//                     })}
//                   </p> */}
//                   <p className="card-name" style={{ fontSize: 34 }}>
//                      {event.startDate ? (format(event.startDate, "EEEE, MMMM d, yyyy h:mm a", { timeZone: "America/Edmonton" })
//                      ) : ("Date Not Available" )}
//                   </p>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//           <div className="prompt">
//             {/* Display other properties if needed */}
//           </div>
//         </div>
//       </div>

//       {isModalOpen && selectedEvent && (
//   <div className="overlay">
//     <div className="modal">
//       <div>
//         <h1 style={{ fontSize: 50 }}>{selectedEvent.item}</h1>
//         <p className="card-name" style={{ fontSize: 50 }}>
//           {selectedEvent.startDate.toLocaleString("en-US", {
//             timeZone: "America/Edmonton",
//             hour: "numeric",
//             minute: "numeric",
//           })}
//         </p>

//         {/* Conditional rendering based on event availability */}
//         {selectedEvent.startDate > new Date() ? (
//           <>
//             <button
//               onClick={() => window.open(selectedEvent.zoomLink, '_blank')}
//               style={{ fontSize: 50 }}
//             >
//               Join Now
//             </button>
//             <p style={{ fontSize: 50 }}>
//               Apologies, the event is not available.
//             </p>
//           </>
//         ) : (
//           <p style={{ fontSize: 50 }}>
//             Apologies, the event is not available.
//           </p>
//         )}
//         <button onClick={closeModal}>Close</button>
//       </div>
//     </div>
//   </div>
// )}

//     </>
//   );
// });

// export default Activities;



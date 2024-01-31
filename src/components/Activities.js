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

// Import necessary dependencies
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "./activities.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

// Define a separate Card component for rendering items
const Card = ({ item, name, startDateString,onClick, className }) => (
  <div onClick={onClick} className={`card ${className}`}>
    <h1>{item}</h1>
    <p className="card-name">{name}</p>
    <p>{startDateString}</p>
  </div>
);

// Define the Activities component
const Activities = React.forwardRef((props, ref) => {
  const { enteredName } = props;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);
  const [itemsArray, setItemsArray] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [upcomingEvent, setUpcomingEvent] = useState(null);

  // Function to navigate to Zoom link on card click
  const navigateToZoomLink = (link) => {
    if (link) {
      window.location.replace(link);
    } else {
      console.log("No Zoom link available for this event.");
    }
  };

  // Function to show the modal with countdown
  const showCountdownModal = (event) => {
    setUpcomingEvent(event);
    setShowModal(true);
  };

  // Fetch events based on the enteredName
  useEffect(() => {
    const fetchEvents = async () => {
      let eventData = []; // Declare eventData outside the try block

      try {
        const response = await axios.get(
          "https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09"
        );

        console.log("API Response:", response);

        if (!response.data.success) {
          throw new Error("Failed to retrieve signed-up activities.");
        }

        const signUpData = response.data.data.signup;

        // Update the eventData variable inside the try block
        eventData = signUpData
          .filter((items) => {
            const lowerEnteredName =
              enteredName && enteredName.trim().toLowerCase();
            const lowerFirstName = items.firstname.trim().toLowerCase();
            const lowerLastName = items.lastname.trim().toLowerCase();

            const matchFirstName = lowerFirstName.includes(lowerEnteredName);
            const matchLastName = lowerLastName.includes(lowerEnteredName);

            return matchFirstName || matchLastName;
          })
          .map((items) => ({
            id: items.signupid,
            name: `${items.firstname} ${items.lastname}`,
            items: items.item,
            startDateString: items.startdatestring,
            zoomLink:
              items.location === "Online"
                ? "https://us06web.zoom.us/j/87666824017?pwd=RUZLSFVabjhtWjJVSm1CcDZsZXcrUT09"
                : null,
          }));

        console.log("Filtered Events:", eventData);

        const upcomingEvent = eventData.find((event) => {
          const eventStartDate = new Date(event.startDateString);
          const currentDate = new Date();
          return eventStartDate > currentDate;
        });

        if (upcomingEvent) {
          showCountdownModal(upcomingEvent);
        }
      } catch (error) {
        console.error("Error fetching signed-up activities:", error.message);
        setError(
          "Failed to retrieve signed-up activities. Please try again later."
        );
      } finally {
        // Set the events state using setEvents
        setEvents(eventData);
        setLoading(false);
      }
    };

    fetchEvents();
  }, [enteredName]);

  // Helper function to calculate time until the event
  const calculateTimeUntilEvent = (event) => {
    const eventStartDate = new Date(event.startDateString);
    const currentDate = new Date();
    const timeUntilEvent = eventStartDate - currentDate;

    const seconds = Math.floor((timeUntilEvent / 1000) % 60);
    const minutes = Math.floor((timeUntilEvent / 1000 / 60) % 60);
    const hours = Math.floor((timeUntilEvent / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeUntilEvent / (1000 * 60 * 60 * 24));

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };

  // Render the component based on loading and error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const CustomNextArrow = ({ onClick }) => (
    <div
      onClick={() => {
        setCardIndex((prevIndex) => (prevIndex + 1) % events.length);
        onClick();
      }}
      className="next"
    >
      <FaChevronRight />
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div
      onClick={() => {
        setCardIndex(
          (prevIndex) => (prevIndex - 1 + events.length) % events.length
        );
        onClick();
      }}
      className="prev"
    >
      <FaChevronLeft />
    </div>
  );

  const slidesSettings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    dots: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => setCardIndex(next),
  };

  // Render the Slider component with the filtered activities
  return (
    <>
      <div ref={ref} id="activities" className="settings">
        <div className="slider-call-1">
          <div className="slider">
            <Slider {...slidesSettings}>
              {events.map((event, idx) => (
                <Card
                  key={event.id}
                  item={event.items}
                  name={event.name}
                  startDateString={event.startDateString}
                  zoomLink={event.zoomLink}
                  onClick={() => navigateToZoomLink(event.zoomLink)}
                  className={idx === 0 ? "slide activeSlide" : "slide"}
                />
              ))}
            </Slider>
          </div>
          <div className="prompt">
            {/* Display other properties if needed */}
          </div>
        </div>
      </div>

      {/* Render the itemsArray as cards */}
      <div ref={ref} id="activities" className="settings">
        <div className="slider-call-1">
          <div className="slider">
            <Slider
              infinite
              lazyLoad
              speed={300}
              slidesToShow={1}
              centerMode={true}
              centerPadding={0}
              dots={true}
            >
              {itemsArray.length > 0 && (
                <div className="items-container">
                  {setItemsArray.map((item, index) => (
                    <Card
                      key={item.id}
                      item={item.items}
                      name={item.name}
                      startDateString={item.startDateString}
                      zoomLink={item.zoomLink}
                      onClick={() => navigateToZoomLink(item.zoomLink)}
                      className={index === 0 ? "slide activeSlide" : "slide"}
                    />
                  ))}
                </div>
              )}
            </Slider>
          </div>
        </div>
      </div>

      {upcomingEvent && showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Upcoming Event Countdown</h2>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
            <div className="modal-body">
              <p>Event: {upcomingEvent.items}</p>
              <p>Starts in: {calculateTimeUntilEvent(upcomingEvent)}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

// Export the Activities component
export default Activities;


// Define the Activities component
// const Activities = React.forwardRef((props, ref) => {
//   const { enteredName } = props;
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [events, setEvents] = useState([]);
//   const [itemsArray, setItemsArray] = useState([]);
//   const [cardIndex, setCardIndex] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [upcomingEvent, setUpcomingEvent] = useState(null);

//   // Function to navigate to Zoom link on card click
//   const navigateToZoomLink = (link) => {
//     if (link) {
//       window.location.replace(link);
//     } else {
//       console.log("No Zoom link available for this event.");
//     }
//   };

 
//   // Function to show the modal with countdown
//   const showCountdownModal = (event) => {
//     setUpcomingEvent(event);
//     setShowModal(true);

  
//   // Fetch events based on the enteredName
//   useEffect(() => {
//     const fetchEvents = async () => {
//   let eventData = []; // Declare eventData outside the try block

//       try {
//         const response = await axios.get(
//           "https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09"
//         );

//         console.log("API Response:", response);

//         if (!response.data.success) {
//           throw new Error("Failed to retrieve signed-up activities.");
//         }

//         const signUpData = response.data.data.signup;

//         // Update the eventData variable inside the try block
//         eventData = signUpData
//           .filter((items) => {
//             const lowerEnteredName =
//               enteredName && enteredName.trim().toLowerCase();
//             const lowerFirstName = items.firstname.trim().toLowerCase();
//             const lowerLastName = items.lastname.trim().toLowerCase();

//             console.log("Entered Name:", lowerEnteredName);
//             console.log("Lower First Name:", lowerFirstName);
//             console.log("Lower Last Name:", lowerLastName);

//             const matchFirstName = lowerFirstName.includes(lowerEnteredName);
//             const matchLastName = lowerLastName.includes(lowerEnteredName);

//             console.log("Match First Name:", matchFirstName);
//             console.log("Match Last Name:", matchLastName);

//             return matchFirstName || matchLastName;
//           })

//           .map((items) => ({
//             id: items.signupid,
//             name: `${items.firstname} ${items.lastname}`,
//             items: items.item,
//             startDateString: items.startdatestring,
//             zoomLink:
//               items.location === "Online"
//                 ? "https://us06web.zoom.us/j/87666824017?pwd=RUZLSFVabjhtWjJVSm1CcDZsZXcrUT09"
//                 : null,
//           }));

//         console.log("Filtered Events:", eventData);
        
        
//         const upcomingEvent = eventData.find((event) => {
//           const eventStartDate = new Date(event.startDateString);
//           const currentDate = new Date();
//           return eventStartDate > currentDate;
//         });

//         if (upcomingEvent) {
//           showCountdownModal(upcomingEvent);
//         }
        
        
//       } catch (error) {
//         console.error("Error fetching signed-up activities:", error.message);
//         setError(
//           "Failed to retrieve signed-up activities. Please try again later."
//         );
//       } finally {
//         // Set the events state using setEvents
//         setEvents(eventData);
//         setLoading(false);
//       }
//     };

   

//     fetchEvents();
//   }, [enteredName]);

//   // Helper function to calculate time until the event
//   const calculateTimeUntilEvent = (event) => {
//     const eventStartDate = new Date(event.startDateString);
//     const currentDate = new Date();
//     const timeUntilEvent = eventStartDate - currentDate;

//     const seconds = Math.floor((timeUntilEvent / 1000) % 60);
//     const minutes = Math.floor((timeUntilEvent / 1000 / 60) % 60);
//     const hours = Math.floor((timeUntilEvent / (1000 * 60 * 60)) % 24);
//     const days = Math.floor(timeUntilEvent / (1000 * 60 * 60 * 24));

//     return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
//   };

//   // Render the component based on loading and error states
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }
    
  
//     const CustomNextArrow = ({ onClick }) => (
//       <div
//         onClick={() => {
//           setCardIndex((prevIndex) => (prevIndex + 1) % events.length);
//           onClick();
//         }}
//         className="next"
  
//       >
//         <FaChevronRight />
//         {/* Customize the arrow component as needed */}
//       </div>
//     );
  
//     const CustomPrevArrow = ({ onClick }) => (
//       <div
//         onClick={() => {
//           setCardIndex(
//             (prevIndex) =>
//               (prevIndex - 1 + events.length) % events.length
//           );
//           onClick();
//         }}
//         className="prev"
        
//       >
//         <FaChevronLeft />
//         {/* Customize the arrow component as needed */}
//       </div>
//     );
  
//     const slidesSettings = {
//       infinite: true,
//       lazyLoad: true,
//       speed: 300,
//       slidesToShow: 1,
//       centerMode: true,
//       centerPadding: 0,
//       dots: true,
//       nextArrow: <CustomNextArrow />,
//       prevArrow: <CustomPrevArrow />,
//       beforeChange: (current, next) => setCardIndex(next),
//     };
  
//   // Render the Slider component with the filtered activities
//   return (
//     <>
//       <div ref={ref} id="activities" className="settings">
//         <div className="slider-call-1">
//           <div className="slider">
//             <Slider  {...slidesSettings}>
//              {events.map((event, idx) => (
//                <Card
//                  key={event.id}
//                  item={event.items}
//                  name={event.name}
//                  startDateString={event.startDateString}
//                  zoomLink={event.zoomLink}
//                  onClick={() => navigateToZoomLink(event.zoomLink)}
//                  className={idx === 0 ? "slide activeSlide" : "slide"}
//                  />
//                ))}
//             </Slider>
//           </div>
//           <div className="prompt">
  
//             {/* Display other properties if needed */}
//           </div>
//         </div>
//       </div>
//       {/* Render the itemsArray as cards */}
//       <div ref={ref} id="activities" className="settings">
//       <div className="slider-call-1">
//         <div className="slider">
//           <Slider
//             infinite
//             lazyLoad
//             speed={300}
//             slidesToShow={1}
//             centerMode= {true}
//             centerPadding={0}
//             dots= {true}>
//             {itemsArray.length > 0 && (
//               <div className="items-container">
//                 {setItemsArray.map((item, index) => (
//                   <Card
//                     key={item.id}
//                     item={item.items}
//                     name={item.name}
//                     startDateString={item.startDateString}
//                     zoomLink={item.zoomLink}
//                     onClick={() => navigateToZoomLink(item.zoomLink)}
//                     className={index === 0 ? "slide activeSlide" : "slide"}
//                   />
//                 ))}
//               </div>
//             )}
//           </Slider>
//         </div>
//       </div>
//     </div>
//     {upcomingEvent && showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <div className="modal-header">
//               <h2>Upcoming Event Countdown</h2>
//               <button onClick={() => setShowModal(false)}>Close</button>
//             </div>
//             <div className="modal-body">
//               <p>Event: {upcomingEvent.itemname}</p>
//               <p>Starts in: {calculateTimeUntilEvent(upcomingEvent)}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
//  });

// // Export the Activities component
// export default Activities;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "./activities.css";
import { ChevronLeftIcon, ChevronRightIcon } from "../components/icons";
import styled from "styled-components";

// Create a new Slider component with its specific settings
const CustomSlider = ({ events, navigateToZoomLink }) => {
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

  const [cardIndex, setCardIndex] = useState(0);

  const CustomNextArrow = ({ onClick }) => (
    <CustomArrowButton
      onClick={() => {
        setCardIndex((prevIndex) => (prevIndex + 1) % events.length);
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
          (prevIndex) => (prevIndex - 1 + events.length) % events.length
        );
        onClick();
      }}
      style={{ left: -100 }}>
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
  };

  return (
    <Slider {...settings}>
      {events.map((event, idx) => (
        <div
          key={event.id}
          onClick={() => navigateToZoomLink(event.zoomLink)}
          className={idx === cardIndex ? "slide activeSlide" : "slide"}>
          <h1>{event.item}</h1>
          <p className="card-name">{event.name}</p>
          <p>{event.startDateString}</p>
        </div>
      ))}
    </Slider>
  );
};

// Define the Activities component
const Activities = React.forwardRef((props, ref) => {
  const { enteredName } = props;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);

  const navigateToZoomLink = (link) => {
    if (link) {
      window.location.replace(link);
    } else {
      console.log("No Zoom link available for this event.");
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      let eventData = [];

      try {
        const response = await axios.get(
          "https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09"
        );

        console.log("API Response:", response);

        if (!response.data.success) {
          throw new Error("Failed to retrieve signed-up activities.");
        }

        const signUpData = response.data.data.signup;

        eventData = signUpData
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
            // startDateString: item.startdatestring,
            startDate: new Date(item.startdatestring), // Convert the start date to a Date object
            zoomLink:
              item.location === "Zoom Meeting"
                ? "https://us06web.zoom.us/j/87666824017?pwd=RUZLSFVabjhtWjJVSm1CcDZsZXcrUT09"
                : null,
          }));

        console.log("Filtered Events:", eventData);
      } catch (error) {
        console.error("Error fetching signed-up activities:", error.message);
        setError(
          "Failed to retrieve signed-up activities. Please try again later."
        );
      } finally {
        setEvents(eventData);
        setLoading(false);
      }
    };

    fetchEvents();
  }, [enteredName]);

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
              slidesToShow={1}
              centerPadding={0}>
              {events.map((event, idx) => (
                <div
                  key={event.id}
                  onClick={() => navigateToZoomLink(event.zoomLink)}
                  className={idx === 0 ? "slide activeSlide" : "slide"}>
                  <h1>{event.item}</h1>
                  <p className="card-name" style={{ fontSize: 50 }}>
                    {event.name}
                  </p>
                  {/* <p>{event.startDateString}</p> */}
                  <p className="card-name" style={{ fontSize: 50 }}>
                    {event.startDate.toLocaleString("en-US", {
                      timeZone: "America/Edmonton",
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    })}
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
    </>
  );
});

// Export the Activities component
export default Activities;

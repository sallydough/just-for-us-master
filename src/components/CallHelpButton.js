import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Modal from "react-modal";
import TelephoneIcon from "./icons/TelephoneIcon";
// // import { AmbulanceIcon, AmbulanceSideIcon, NoAmbulanceIcon } from "./icons";
// import { FaPlus } from "react-icons/fa";

// handle Help Button
// const handleHelpVideo = () => {
//   const phoneNumber = "+14036201992";
//   const userChoice = window.confirm("Do you want to call or send an SMS?");

//   if (userChoice) {
//     window.location.href = `tel:${phoneNumber}`;
//   } else {
//     window.location.href = `sms:${phoneNumber}`;
//   }
//   const telUrl = `tel:${phoneNumber}`;
//   window.location.href = telUrl;
// };

const StyledButtonAlignment = styled(Typography)`
  margin-top: 30px;
  position: absolute;
  bottom: 80px;
  display: flex;
  justify-content: "space-between";
`;

const CallHelpButton = styled.button`
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: ${({ active }) => (active ? "#ff4d4d" : "#59acce")};
  color: ${({ active }) => (active ? "white" : "#2d3e5f")};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 2rem;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  font-family: "Roboto";
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    // background-color: #ff4d4d; /* Red background on hover */
    transform: scale(1.05); /* Scale up on hover */
  }

  &:active {
    background-color: #ff4d4d; /* Red background on click */
    color: white;
    transform: scale(0.95);
    box-shadow: 0 0 0;
  }
`;

const BottomCenterButtonContainer = styled.div`
  position: fixed;
  top: 10px;

  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
`;

const ModalButton = styled.button`
  background-color: #59acce;
  color: #2d3e5f;
  border: none;
  border-radius: 25px;
  margin-right: 50px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 40px;
  font-weight: 550;
`;

const CallHelpButtonComponent = ({ onClick }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNestedModalOpen, setNestedModalOpen] = useState(false);
  const [isCancelNestedModalOpen, setCancelNestedModalOpen] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    setButtonClicked(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setButtonClicked(false);
  };

  const openNestedModal = () => {
    setModalOpen(false);
    setNestedModalOpen(true);
  };

  const openCancelNestedModal = () => {
    setModalOpen(false);
    setCancelNestedModalOpen(true);
  };

  const closeNestedModal = () => {
    setNestedModalOpen(false);
    setButtonClicked(false);
  };

  const closeCancelNestedModal = () => {
    setCancelNestedModalOpen(false);
    setButtonClicked(false);
  };

  useEffect(() => {
    return () => {
      Modal.setAppElement(null);
    };
  }, []);

  const handleCallHelpButtonComponent = async () => {
    try {
      await fetch("http://localhost:3001/call-help");
      console.log("Call initiated!");
    } catch (error) {
      console.error("Error initiating the call:", error);
    }
  };

  const handleConfirm = async () => {
    closeModal();
    openNestedModal();
    const shouldInitiateCall = true;
    if (shouldInitiateCall) {
      handleCallHelpButtonComponent();
    }
  };

  const handleCancel = async () => {
    closeModal();
    openCancelNestedModal();
  };

  const handleConfirmVideo = () => {
    // handleHelpVideo();
    handleConfirm();
  };

  return (
    <BottomCenterButtonContainer>
      <CallHelpButton
        id="top-right-button"
        primary
        onClick={openModal}
        active={isButtonClicked}>
        <Typography
          fontSize={"30px"}
          fontWeight="700"
          style={{ display: "flex", alignItems: "center", padding: "0 20px" }}>
          <TelephoneIcon size={30} />
          <div style={{ paddingLeft: "10px" }}>CALL HELP</div>
        </Typography>
      </CallHelpButton>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#FFFCE7",
            opacity: 0.9,
            borderRadius: "25px",
            textAlign: "left",
            color: "white",
            fontSize: "40px",
            border: "none",
            width: "912px",
            height: "480px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
        }}>
        <Typography
          style={{ paddingLeft: "60px" }}
          fontSize={"55px"}
          fontWeight="700"
          mb={3}
          color="#2D3E5F"
          display="flex"
          alignItems="center">
          Help request
          <div style={{ paddingLeft: "20px" }}>
            {/* <AmbulanceSideIcon size={120} /> */}
          </div>
        </Typography>
        <Typography
          style={{ paddingLeft: "60px" }}
          fontSize={"48px"}
          fontWeight="500"
          color="#2D3E5F">
          Call for assistance
        </Typography>
        <StyledButtonAlignment style={{ paddingLeft: "60px" }}>
          <ModalButton onClick={handleConfirmVideo}>
            Yes, I need help
          </ModalButton>
          <ModalButton
            style={{
              background: "none",
              border: "solid",
              borderColor: "#2d3e5f",
              borderRadius: "25px",
            }}
            onClick={handleCancel}>
            Cancel request
          </ModalButton>
        </StyledButtonAlignment>
      </Modal>

      <Modal
        isOpen={isNestedModalOpen}
        onRequestClose={closeModal}
        contentLabel="Nested Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#FFFCE7",
            opacity: 0.9,
            borderRadius: "25px",
            textAlign: "left",
            color: "white",
            fontSize: "40px",
            border: "none",
            width: "912px",
            height: "480px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
        }}>
        <Typography
          style={{ paddingLeft: "60px" }}
          fontSize={"55px"}
          fontWeight="700"
          mb={3}
          color="#2D3E5F"
          display="flex"
          alignItems="center">
          Help request sent
          <div style={{ paddingLeft: "20px" }}>
            {/* <AmbulanceIcon size={120} /> */}
          </div>
        </Typography>
        <Typography
          style={{ paddingLeft: "60px" }}
          fontSize={"48px"}
          fontWeight="500"
          mb={1}
          color="#2D3E5F">
          Help is on the way,
        </Typography>
        <Typography
          style={{ paddingLeft: "60px" }}
          fontSize={"48px"}
          fontWeight="500"
          mb={6}
          color="#2D3E5F">
          your family has been notified.
        </Typography>
        <StyledButtonAlignment style={{ paddingLeft: "60px" }}>
          <ModalButton
            style={{
              background: "none",
              border: "solid",
              borderColor: "#2d3e5f",
              borderRadius: "25px",
            }}
            onClick={closeNestedModal}>
            Press to close
          </ModalButton>
        </StyledButtonAlignment>
      </Modal>

      <Modal
        isOpen={isCancelNestedModalOpen}
        onRequestClose={closeModal}
        contentLabel="Nested Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#FFFCE7",
            opacity: 0.9,
            borderRadius: "25px",
            textAlign: "left",
            color: "white",
            fontSize: "40px",
            border: "none",
            width: "912px",
            height: "480px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
        }}>
        <Typography
          style={{ paddingLeft: "60px" }}
          fontSize={"55px"}
          fontWeight="700"
          mb={3}
          color="#2D3E5F"
          display="flex"
          alignItems="center">
          Help request cancelled
          <div style={{ paddingLeft: "20px" }}>
            {/* <NoAmbulanceIcon size={120} /> */}
          </div>
        </Typography>
        <Typography
          style={{ paddingLeft: "60px" }}
          fontSize={"48px"}
          fontWeight="550"
          color="#2D3E5F">
          Your request to call is cancelled.
        </Typography>
        <StyledButtonAlignment style={{ paddingLeft: "60px" }}>
          <ModalButton
            style={{
              background: "none",
              border: "solid",
              borderColor: "#2d3e5f",
              borderRadius: "25px",
            }}
            onClick={closeCancelNestedModal}>
            Press to close
          </ModalButton>
        </StyledButtonAlignment>
      </Modal>
    </BottomCenterButtonContainer>
  );
};

export default CallHelpButtonComponent;

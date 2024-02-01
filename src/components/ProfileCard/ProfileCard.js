

// ProfileCard.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../ProfileCard/ProfileCard.css";

const ProfileCardLink = styled(Link)`
  text-decoration: none;
`;

const ProfileCardContainer = styled.div`
  width: ${(props) => (props.active ? "130px" : "120px")};
  height: ${(props) => (props.active ? "130px" : "130px")};
  background: ${(props) =>
    props.active ? "#f3b717" : props.backgroundColor || "#7F8181"};
  border-radius: ${(props) =>
    props.active ? "30%" : props.borderRadius || "38px"};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin: 30px 40px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: transform 0.3s, background 0.3s, border-radius 0.3s;
  

  &.slick-center {
    transform: scale(1.2);
    background: #f3b717;

    h3 {
      color: #2f302e;
      font-size: 15px;
      
    }

    .icon-container svg {
      fill: #2f302e;
    }
  }
`;


const CardContent = styled.div`
  .icon-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;

    svg {
      fill: #f3b717;
    }
  }

  h3 {
    margin: 15px;
    margin-left: 10px;
    padding-left: 5px;
    color: #f3b717;
    font-size: 15px;
  }
`;

const TextBelowCard = styled.h1`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  display: ${(props) => (props.active ? "block" : "none")};
`;
const ProfileCardDisplay = styled.div`
  display: unset;
`;

const ProfileCard = ({
  link,
  icon,
  onClick,
  title,
  textBelowCard,
  backgroundColor,
  borderRadius,
  disableHover,
  active,
}) => {
  const handleCardClick = () => {
    // Call the onClick prop when the card is clicked
    if (onClick) {
      onClick();
    }
  };

  return (
    <ProfileCardDisplay>
      <ProfileCardLink to={link}>
        <ProfileCardContainer
          className={`profile-card-div ${active ? "slick-center" : ""}`}
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          disableHover={disableHover}
          onClick={handleCardClick}
          active={active}>
          <CardContent>
            <div className="icon-container">{icon}</div>
            <h3>{title}</h3>
          </CardContent>
          <TextBelowCard active={active}>{textBelowCard}</TextBelowCard>
        </ProfileCardContainer>
      </ProfileCardLink>
    </ProfileCardDisplay>
  );
};

export default ProfileCard;

import React from "react";
import styled from "styled-components";
// import resume from "../img/DP1.png";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src="../img/avatar.jpg" alt="" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Bandari Etesh Kumar</span>
        </h4>
        <p className="paragraph">
          I am a self-motivated and hardworking person seeking for an
          opportunity to work in a challenging environment and I am a person who
          constantly strive to upgrade my skills and get better.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Bandari Etesh Kumar</p>
            <p>: 22</p>
            <p>: Indian</p>
            <p>: English, Telugu, Marathi, Hindi </p>
            <p>: Andhra Pradesh, India </p>
            <p>: Full-stack web developer</p>
          </div>
        </div>
        <a href="EteshResume.pdf" target="_blank" download>
          <PrimaryButton title={"Download Cv"} />
        </a>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 75%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;

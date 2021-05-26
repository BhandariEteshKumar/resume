import React from "react";
import styled from "styled-components";
import LinkedinIcon from "@material-ui/icons/LinkedIn";

import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";
import Particle from "../Components/Particle";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Ravi Teja Reddy</span>
        </h1>
        <p>
          I am full-stack web developer,proficient in MERN stack and did many
          freelance projects as UI/UX designer.
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/ravireddy1998/"
            className="icon i-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/ravihagane"
            className="icon i-github"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UCkZiL_tspUQ6p7Vjvp8yFvQ"
            className="icon i-youtube"
            target="_blank"
            rel="noreferrer"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;

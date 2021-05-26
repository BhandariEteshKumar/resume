import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ServiceCard from "../Components/ServiceCard";
// import design from "../img/design.svg";
// import intelligence from "../img/intelligence.svg";
// import fullstack from "../img/web.svg";
// import globe from "../img/globe.svg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            // image={}
            title={"Web Design"}
            paragraph={
              "I design clean User Interface for both Mobile and websites, I use Figma and Adobe Xd as tools."
            }
          />
          <div className="mid-card">
            <ServiceCard
              // image={}
              title={"Front-end Development"}
              paragraph={
                "I am Good at front-end technologies like React and Redux, I build responsive websites."
              }
            />
          </div>
          <ServiceCard
            // image={}
            title={"Full Stack Development"}
            paragraph={
              "I build Full stack web applications using MERN stack, which is feature loaded."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;

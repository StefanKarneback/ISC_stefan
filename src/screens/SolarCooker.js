import "../App.css";
import "./SolarCooker.css";
import GlobalStyle, { ContainerCol } from "../GlobalStyles";
import React from "react";
import SlidingImage from "../components/SlidingImage";
import HowToCook from "../components/HowToCook";
import HowToUse from "../components/HowToUse";
import Types from "../components/Types";
import SidebarMenu from "../components/SidebarMenu";

function SolarCookerScreen(props) {
  return (
    <>
      <GlobalStyle />
      {props.isOpen ? <SidebarMenu /> : <></>}

      <ContainerCol className="landingDiv">
        <SlidingImage></SlidingImage>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div className="SlidingText">
            <HowToCook />
            <hr class="mt-2 mb-3" />
            <HowToUse />
            <hr class="mt-2 mb-3" />
            <Types />
          </div>
        </div>
      </ContainerCol>
    </>
  );
}

export default SolarCookerScreen;

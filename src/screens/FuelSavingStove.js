import "../App.css";
import "./SolarCooker.css";
import GlobalStyle, { ContainerCol } from "../GlobalStyles";
import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import "../screens/LandingScreen.css";

function FuelSavingStove(props) {
  return (
    <>
      <GlobalStyle />
      {props.isOpen ? <SidebarMenu /> : <></>}

      <ContainerCol className="landingDiv">
        <div
          className={"LandingBackgroundFuel"}
          style={{ width: "100%", height: "25em" }}
        ></div>{" "}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div className="SlidingText">
            <div
              style={{
                marginTop: "3em",
                marginBottom: "3em",
                paddingLeft: "100px",
                paddingRight: "100px",
              }}
            >
              <h2 id="FuelSavingCooker">Fuel Saving Stove (Rocket Stove)</h2>
              <div style={{ marginBottom: "1em" }}>
                When the sun doesn't shine you need another way to cook. You can
                use gas or ethanol (Koko oil) but for wood or charcoal a fuel
                saving stove (rocket stove) is preferable. Rocket stoves are
                available in different models. You can also build your own from
                e.g. bricks. A fuel saving stove uses the fuel more efficiently
                than an open fire. The temperature is higher and therefore less
                smoke is formed. Usually you need to use only small pieces of
                wood. Always consider if a fireless cooker can reduce your fuel
                consumption. A fuel saving stove can be self made or bought and
                is often a first step to reduce your fuel cost and the first
                unit in your Integrated Solar Kitchen. <br /> Watch this{" "}
                <a href="https://www.youtube.com/watch?v=r66jjYdBmg8">
                  link
                </a>{" "}
                on how you can produce A simple Rocket Stove that saves fuel.
              </div>
            </div>
          </div>
        </div>
      </ContainerCol>
    </>
  );
}

export default FuelSavingStove;

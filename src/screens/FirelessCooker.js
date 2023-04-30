import "../App.css";
import "./SolarCooker.css";
import GlobalStyle, { ContainerCol } from "../GlobalStyles";
import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import "../screens/LandingScreen.css";

function Fireless(props) {
  return (
    <>
      <GlobalStyle />
      {props.isOpen ? <SidebarMenu /> : <></>}

      <ContainerCol className="landingDiv">
        <div
          className={"LandingBackgroundFireless"}
          style={{ width: "100%", height: "25em" }}
        ></div>
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
              <h2 id="FirelessCooker HEEEEJ">Fireless Cooker</h2>
              <div style={{ marginBottom: "1em" }}>
                A fireless cooker, e.g. a well insulated basket which will keep
                the food hot, is necessary. If the food is well at boiling
                temperature it will continue to cook in the basket. You need
                about twice the time to finish cooking in the fireless cooker
                than if you boil it ready on fire. The fireless cooker is also
                useful to keep food warm until the evening when you have used
                your solar cooker during daytime. <br />
                Watch this{" "}
                <a href="https://drive.google.com/drive/u/2/folders/1qREHSgUhwrSkZqJkQNaCpEsL_gQ9Klfk">
                  link
                </a>{" "}
                on how you can produce your own fireless cooker that saves fuel!
              </div>
            </div>
          </div>
        </div>
      </ContainerCol>
    </>
  );
}

export default Fireless;

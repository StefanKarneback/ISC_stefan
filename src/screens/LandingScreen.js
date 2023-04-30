import "../App.css";
import { ContainerCol, ContainerRow } from "../GlobalStyles";
import React from "react";
import NavigationBar from "../components/NavigationBar";
import SlidingImage from "../components/SlidingImage";
import p1 from "../images/q1.png";

function LandingScreen() {
  return (
    <>
      <NavigationBar />
      <ContainerCol style={{ paddingBottom: "3em" }}>
        <div className={"LandingBackground"}>
          <h1 className={"LadningTitle"}>Integrated Solar Cooking</h1>
        </div>
        <div style={{ marginTop: "2em", fontSize: "24px" }}>
          Integrated solar cooking (ISC) can improve both health and economy for
          families that use firewood, charcoal, kerosene or gas for cooking. A
          transition to ISC will reduce deforestation and also reduce carbon
          emission and thus reduce global warming.
          <br />
          <br />
          This web site target people in Kenya. You get the following
          information:
          <ul>
            <li>How the cookers work and how they are used.</li>
            <li>
              How you combine them when the sun does not shine (Integrated Solar
              cooking, ISC).
            </li>
            <li>Where you can buy the equipment.</li>
            <li>How to build your own solar cooker and a fireless cooker.</li>
            <li>You can get more information using these links: **LINKS**</li>
          </ul>
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={p1} alt="logo" style={{ height: "10em" }} />
              Solar Cooker
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={p1} alt="logo" style={{ height: "10em" }} />
              Fireless Cooker{" "}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={p1} alt="logo" style={{ height: "10em" }} />
              Fuel Saving Stove{" "}
            </div>
          </div>
          <br />
          <b>
            If you sell equipment for integrated solar cooking and want your
            products to be seen on this web site send an e-mail to ….
          </b>
        </div>
      </ContainerCol>
    </>
  );
}

export default LandingScreen;

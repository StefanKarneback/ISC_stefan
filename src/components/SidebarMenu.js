import { ContainerCol } from "../GlobalStyles";
import { useNavigate } from "react-router-dom";
import "./SidebarMenu.css";
import { useState } from "react";

export default function SidebarMenu() {
  const navigate = useNavigate();
  const [SolarCookerOpen, setSolarCookerOpen] = useState(false);

  return (
    <div style={{ paddingTop: "50px" }}>
      <ContainerCol
        className="LogoTitle"
        onClick={() => navigate("/Integratedsolarcooking")}
      >
        {/* <img src={ewblogo} alt="Logo" style={{ height: "2.5em" }} /> */}
        <p style={{ fontSize: "24px", color: "#38ba7d" }}>
          Integrated Solar Cooking
        </p>
      </ContainerCol>
      <ContainerCol className="sidebardiv">
        <div
          className="sidebartitle"
          onClick={() => navigate("/FirelessCooker")}
        >
          {" "}
          Fireless Cooker
        </div>
      </ContainerCol>
      <ContainerCol className="sidebardiv">
        <div
          className="sidebartitle"
          onClick={() => navigate("/FuelSavingStove")}
        >
          {" "}
          Fuel Saving Stove{" "}
        </div>
      </ContainerCol>
      <ContainerCol className="sidebardiv">
        <div
          className="sidebartitle"
          onClick={() => {
            navigate("/SolarCooker");
            setSolarCookerOpen(!SolarCookerOpen);
            console.log(SolarCookerOpen);
          }}
        >
          {" "}
          Solar Cooker
        </div>
        {window.location.href.includes("/SolarCooker") == true ? (
          <>
            <div
              className="subsidebartitle"
              onClick={() =>
                (window.location.href = "/SolarCooker#HowtheSolarCookersWork")
              }
            >
              {" "}
              How the Solar Cookers Work
            </div>
            <div
              className="subsidebartitle"
              onClick={() => (window.location.href = "/SolarCooker#HowtoUse")}
            >
              {" "}
              How To Use a Solar Cooker
            </div>
            <div
              className="subsidebartitle"
              onClick={() =>
                (window.location.href = "/SolarCooker#TypeofSolarCooker")
              }
            >
              {" "}
              Type of Solar Cooker
            </div>
          </>
        ) : (
          <></>
        )}
      </ContainerCol>

      <ContainerCol className="sidebardiv">
        <div className="sidebartitle" onClick={() => navigate("/Products")}>
          {" "}
          Where to Buy
        </div>{" "}
        {window.location.href.includes("/Products") == true ? (
          <>
            <div
              className="subsidebartitle"
              onClick={() => (window.location.href = "/Products#VendorMap")}
            >
              {" "}
              Map of ISC Vendors in Kenya
            </div>
            <div
              className="subsidebartitle"
              onClick={() => navigate("/Vendors")}
            >
              {" "}
              List of Vendors in Kenya
            </div>
          </>
        ) : (
          <></>
        )}
        {/* <DropdownButtonProduct title={"Product"}></DropdownButtonProduct> */}
      </ContainerCol>
      <ContainerCol className="sidebardiv">
        <div className="sidebartitle" onClick={() => navigate("/Contact")}>
          Contact
        </div>
      </ContainerCol>
      <ContainerCol className="sidebardiv">
        <div
          className="sidebartitle"
          onClick={() => navigate("/AdditionalInfo")}
        >
          Read More
        </div>
      </ContainerCol>
    </div>
  );
}

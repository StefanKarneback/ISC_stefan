import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingScreen from "./screens/LandingScreen2";
import FirelessCooker from "./screens/FirelessCooker";
import SolarCookerScreen from "./screens/SolarCooker";
import React from "react";
import ProductsScreen from "./screens/Products";
import ContactScreen from "./screens/ContactScreen";
import Hamburger from "hamburger-react";
import { useState } from "react";
import FuelSavingStove from "./screens/FuelSavingStove";
import AdditionalInfo from "./screens/ReadMore";
import VendorTable from "./components/VendorsTable";

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="Hamburger hamPosition">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Router>
          <Routes>
            <Route
              path="/Integratedsolarcooking"
              element={<LandingScreen isOpen={isOpen} />}
            />
            <Route
              path="/FirelessCooker"
              element={<FirelessCooker isOpen={isOpen} />}
            />
            <Route
              path="/SolarCooker"
              element={<SolarCookerScreen isOpen={isOpen} />}
            />
            <Route
              path="/FuelSavingStove"
              element={<FuelSavingStove isOpen={isOpen} />}
            />
            <Route
              path="/Products"
              element={<ProductsScreen isOpen={isOpen} />}
            />
            <Route
              path="/Contact"
              element={<ContactScreen isOpen={isOpen} />}
            />
            <Route
              path="/AdditionalInfo"
              element={<AdditionalInfo isOpen={isOpen} />}
            />
            <Route path="/Vendors" element={<VendorTable isOpen={isOpen} />} />
            <Route
              path="/*"
              element={<Navigate to="/Integratedsolarcooking" replace />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

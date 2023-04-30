import React, { useState } from "react";
import { Button, ContainerRow } from "../GlobalStyles";
import Dropdown from "react-bootstrap/Dropdown";

const AboutUs_list = ["EWB", "Solar Cooker"];
const Product_list = ["Entrepreneurs", "Map", "Product"];
const Donate_list = ["Become a Donator", "Donate"];

export function DropdownButton(props) {
  const NavigateToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      style={{ width: "8em", justifyContent: "start" }}
    >
      {children}
    </Button>
  ));

  const NavigateMenu = React.forwardRef(
    ({ children, style, className }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div ref={ref} style={style} className={className}>
          <ul className="list-unstyled" style={{ fontSize: "1.5em" }}>
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );
  return (
    <Dropdown>
      <Dropdown.Toggle as={NavigateToggle} id="dropdown-basic">
        <p className="NavButton"> {props.title}</p>
      </Dropdown.Toggle>

      <Dropdown.Menu as={NavigateMenu}>
        {AboutUs_list.map((i) => {
          return (
            <Dropdown.Item href="/SolarCooker" key={i}>
              {i}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButton;

export function DropdownButtonProduct(props) {
  const NavigateToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      style={{ width: "8em", justifyContent: "start" }}
    >
      {children}
    </Button>
  ));

  const NavigateMenu = React.forwardRef(
    ({ children, style, className }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div ref={ref} style={style} className={className}>
          <ul className="list-unstyled" style={{ fontSize: "1.5em" }}>
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );
  return (
    <Dropdown>
      <Dropdown.Toggle as={NavigateToggle} id="dropdown-basic">
        <p className="NavButton"> {props.title}</p>
      </Dropdown.Toggle>

      <Dropdown.Menu as={NavigateMenu}>
        {Product_list.map((i) => {
          return (
            <Dropdown.Item href="/Products" key={i}>
              {i}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export function DropdownButtonDonate(props) {
  const NavigateToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      style={{ width: "8em", justifyContent: "start" }}
    >
      {children}
    </Button>
  ));

  const NavigateMenu = React.forwardRef(
    ({ children, style, className }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div ref={ref} style={style} className={className}>
          <ul className="list-unstyled" style={{ fontSize: "1.5em" }}>
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );
  return (
    <Dropdown>
      <Dropdown.Toggle as={NavigateToggle} id="dropdown-basic">
        <p className="NavButton"> {props.title}</p>
      </Dropdown.Toggle>

      <Dropdown.Menu as={NavigateMenu}>
        {Donate_list.map((i) => {
          return (
            <Dropdown.Item href="/SolarCooker" key={i}>
              {i}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

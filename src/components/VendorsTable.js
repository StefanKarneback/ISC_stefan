import React, { useState } from "react";
import { ContainerCol } from "../GlobalStyles";
import SidebarMenu from "../components/SidebarMenu";
import GlobalStyle from "../GlobalStyles";
import Table from "react-bootstrap/Table";
import data from "../data/Vendors.json";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./VendorTable.css";
import CloseButton from "react-bootstrap/CloseButton";

function PopUpWindow(props) {
  console.log(props.data[props.idx]);
  const data = props.data[props.idx];
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "absolute" }}
    >
      <Modal show={props.show}>
        <Modal.Header>
          <Modal.Title>More Information</Modal.Title>
          <button className="button" onClick={(e) => props.setShow(false)}>
            <CloseButton />
          </button>
        </Modal.Header>

        <Modal.Body>
          <div className="display-linebreak">{data.MoreInfo}</div>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
function CreateTable() {
  const [show, setShow] = useState(false);
  const [itemIndex, setItemIndex] = useState();
  function handleShow(idx) {
    setItemIndex(idx);
    setShow(!show);
    console.log(show);
    console.log(idx);
  }
  console.log(show);
  return (
    <div style={{ padding: "2.5em", width: "100%" }}>
      <Table striped>
        <thead>
          <tr>
            <th></th>
            <th>Entrepreneur</th>
            <th>Organisation</th>
            <th>Enterprise</th>
            <th>Phone No.</th>
            <th>Address</th>
            <th>Location</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            return (
              <tr>
                <td>{idx}</td>
                <td>{item.Entrepreneur}</td>
                <td>{item.Organisation}</td>
                <td>{item.Enterprise}</td>
                <td>{item.PhoneNo}</td>
                <td>{item.Address.join(", ")}</td>
                <td>{item.Location}</td>
                <td>
                  <button className="button" onClick={(e) => handleShow(idx)}>
                    Click here
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {show ? (
        <>
          <PopUpWindow
            show={show}
            setShow={setShow}
            data={data}
            idx={itemIndex}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

function VendorTable(props) {
  return (
    <>
      <GlobalStyle />
      {props.isOpen ? <SidebarMenu /> : <></>}
      <ContainerCol className="landingDiv">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "50px",
          }}
        >
          {" "}
          <h2>List of Vendors in Kenya</h2>
          <CreateTable />
        </div>
      </ContainerCol>
    </>
  );
}

export default VendorTable;

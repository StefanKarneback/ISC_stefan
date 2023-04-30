import { ContainerCol } from "../GlobalStyles";
import GlobalStyle from "../GlobalStyles";
import SidebarMenu from "../components/SidebarMenu";

function ContactScreen(props) {
  return (
    <>
      <GlobalStyle />
      {props.isOpen ? <SidebarMenu /> : <></>}

      <ContainerCol className="landingDiv">
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
              <h2>Contacts</h2>
              <div style={{ marginBottom: "1em" }}>
                Contact persons and additional links
              </div>
            </div>
          </div>
        </div>
      </ContainerCol>
    </>
  );
}

export default ContactScreen;

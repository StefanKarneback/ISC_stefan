import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import p1 from "../images/q1.png";
import p2 from "../images/q2.png";
import p3 from "../images/q3.png";
import p4 from "../images/q4.png";
import p5 from "../images/q5.png";
import p6 from "../images/q6.png";
import p7 from "../images/q7.png";

function Types() {
  return (
    <div
      style={{
        marginTop: "3em",
        marginBottom: "3em",
        paddingLeft: "100px",
        paddingRight: "100px",
      }}
    >
      <h2 id="TypeofSolarCooker">Type of Solar Cooker</h2>
      <div style={{ marginBottom: "1em" }}>
        There are different types of solar cookers. Complexity and prices vary a
        lot. The principles are explained below and if you want to learn more,
        have a look at the
        <a
          href="https://solarcooking.fandom.com/wiki/Introduction_to_solar_cooking"
          target="_blank"
        >
          {" "}
          Wiki page
        </a>{" "}
        of Solar Cookers International.
      </div>
      <br />
      <div>
        <Row>
          <Col>
            <div>
              <h3 id="Box ovens">Box ovens</h3>
              <text>
                This type of cooker has the advantage of slow, even cooking of
                large quantities of food. Variations include slanting the face
                toward the sun and the number of reflectors.
                <br />
              </text>
              <br />
              <Row>
                <Col>
                  <text style={{ fontWeight: "bold" }}>Advantage</text>
                  <ul>
                    <li>
                      Some large enough to cook with multiple{" "}
                      <a
                        href="https://solarcooking.fandom.com/wiki/Solar_cooking_pots"
                        target="_blank"
                        rel="noreferrer"
                      >
                        pots
                      </a>
                      , also great for baking and slow cooking.
                    </li>
                    <li>
                      Can be constructed with simple materials, several
                      high quality commercial designs also available.
                    </li>
                  </ul>
                </Col>

                <Col>
                  <text style={{ fontWeight: "bold" }}>Disadvantage</text>
                  <li>
                    The box design may block light entering the cooking chamber
                    unless the unit is tipped.
                  </li>
                  <li>
                    Cannot fry foods. Cooking temperature range is 135 - 200 °C
                    (275 - 392 °F).
                  </li>
                </Col>
              </Row>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={p1}
                  alt="logo"
                  style={{ height: "20em", paddingTop: "2em" }}
                />{" "}
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h3 id="The Conical Cooker">The Conical Cooker</h3>
              <text>
                A conical solar cooker has a large cooking power and is
                relatively cheap. It consists of a piece of iron bent into a
                conical shape, which is covered at the inside by reflecting
                aluminum foil. Inside the conus there is a platform of blackened
                iron on which a blackened pan is placed. The sun rays reflect
                from the aluminum foil onto the pan and platform, which absorb
                the radiation and thus are heated. Putting a transparent sleeve
                or plastic bag around the pan yields higher maximum temperatures
                and thus faster cooking. When using a conical cooker with a
                diameter of 80 cm, 1 liter of water can be brought to boiling in
                about 20 minutes, and when baking bread, temperatures in excess
                of 150 °C can be reached. The vertically oriented version as
                shown works fine when the sun is high (70 - 90 degrees) above
                the horizon. The cooker was designed by Mr. Samuel Odhiambo of
                Asulma Centre, Nairobi, Kenya in collaboration with Mr. Henk
                Blok from the foundation Solar Cooking Kozon, The Netherlands.
              </text>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={p2}
                  alt="logo"
                  style={{ height: "20em", paddingTop: "2em" }}
                />{" "}
              </div>
            </div>
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            <div>
              <h3 id="Box ovens">Panel ovens</h3>
              <text>
                In this design, flat panels concentrate the sun's rays onto a
                pot inside a plastic bag or under a glass bowl. To produce a
                panel oven you need cardboard, aluminum foil and some glue.
                Guidelines can be found
                <a
                  href="https://solarcooking.fandom.com/wiki/Category:Solar_panel_cooker_designs"
                  target="_blank"
                  rel="noreferrer"
                >
                  here.
                </a>
                <br />
              </text>
              <br />

              <Row>
                <Col>
                  <text style={{ fontWeight: "bold" }}>Advantage</text>
                  <ul>
                    <li>
                      Inexpensive to build or buy, and typically can be
                      collapsed for storage or transport.
                    </li>
                    <li>
                      Slow cooking retains flavors and nutrients, and requires
                      little, if any, reorientation to the sun.
                    </li>
                  </ul>
                </Col>
                <Col>
                  <text style={{ fontWeight: "bold" }}>Disadvantage</text>
                  <li>
                    Achieves usually not more than 110 - 170 °C (230 - 340 °F),
                    and cannot fry foods.
                  </li>
                  <li>
                    Homemade units are difficult to weatherproof, thus needs
                    stabilizing after a while, or replacement.
                  </li>
                </Col>
              </Row>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={p3}
                  alt="logo"
                  style={{ height: "20em", paddingTop: "2em" }}
                />{" "}
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h3 id="Parabolic cookers">Parabolic cookers</h3>
              <text>
                These are usually concave disks that focus the light onto the
                bottom of a pot. The advantage is that foods cook about as fast
                as on a conventional stove. The disadvantage is that they are
                complicated to make, they must be turned often to follow the
                sun.
                <br />
              </text>
              <br />
              <Row>
                <Col>
                  <text style={{ fontWeight: "bold" }}>Advantage</text>
                  <ul>
                    <li>
                      Cooking times are similar to a traditional stovetop.
                    </li>
                    <li>
                      High temperatures allow for food to be fried and grilled,
                      typically 120 - 230 °C (248 - 446 °F).
                    </li>
                  </ul>
                </Col>
                <Col>
                  <text style={{ fontWeight: "bold" }}>Disadvantage</text>
                  <li>
                    Requires periodic reorientation, often every fifteen
                    minutes, which may be done with a mechanical
                    <a
                      href="https://solarcooking.fandom.com/wiki/Solar_tracking"
                      target="_blank"
                      rel="noreferrer"
                    >
                      solar tracking
                    </a>
                    apparatus or manually.
                  </li>
                  <li>
                    Generally more expensive than panel and box cookers, and
                    require more storage space.
                  </li>
                </Col>
              </Row>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={p4} alt="logo" style={{ height: "20em" }} />{" "}
              </div>
            </div>
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            <div>
              <h3 id="Fresnel Lens Cookers">Fresnel Lens Cookers</h3>
              <text>
                A Fresnel lens can be produced in soft plastic material. Thus it
                can be rolled and easy to transport. Heliac AS in Denmark
                produces one lens and has constructed a solar cooker where you
                can actually cook standing up. We are being warned that due to
                the risk of fire it is preferred to be constructed in steel and
                not wood.
                <br />
              </text>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={p5}
                  alt="logo"
                  style={{ height: "20em", paddingTop: "2em" }}
                />{" "}
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h3 id="Scheffler reflector">Scheffler reflector</h3>
              <text>
                The Scheffler reflector (named after Wolfgang Scheffler who
                invented it) is a special cooker which needs a sun tracker and
                is mainly used for institutional cooking. A great advantage is
                that you can cook indoors.See:
                http://www.solare-bruecke.org/index.php/en/die-scheffler-reflektoren
                <br />
              </text>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={p6}
                  alt="logo"
                  style={{ height: "20em", paddingTop: "2em" }}
                />{" "}
              </div>
            </div>
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            <div>
              <h3 id="Evacuated tube cookers">Evacuated tube cookers</h3>
              <text>
                Evacuated tube means that the cooking chamber is constructed of
                two layers of blown glass in the shape of a tube, where the air
                has been removed between the layers. Heat loss happens primarily
                by conduction and convection through a medium. With no air
                between the layers of glass the chamber is effectively
                insulated, well suited for retaining cooking heat. The chamber
                is so effective it often does not require a large reflector to
                capture sunlight. A slender cooking tray can be inserted from
                one end. The opposite end is either sealed with a stopper, or
                has been sealed during the manufacturing process. Improvements
                in glass technology is allowing for larger diameter tubes to be
                fabricated, which will allow larger cooking trays to be inserted
                inside.
                <br />
              </text>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={p7}
                  alt="logo"
                  style={{ height: "20em", paddingTop: "2em" }}
                />{" "}
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
}

export default Types;

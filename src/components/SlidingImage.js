import Carousel from "react-bootstrap/Carousel";
import testImg from "../images/b.jpg";
import img2 from "../images/solarslide2.jpg";
import img3 from "../images/solarslide3.jpg";

export default function SlidingImage() {
  return (
    <Carousel>
      <Carousel.Item interval={3000} style={{ height: "25em" }}>
        <img className="d-block w-100  " src={testImg} alt="First slide" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ height: "25em" }}>
        <img className="d-block w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ height: "25em" }}>
        <img className="d-block w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export function SlidingImage1() {
  return (
    <Carousel style={{ marginTop: "5em" }}>
      <Carousel.Item interval={3000} style={{ height: "25em" }}>
        <img className="d-block w-100" src={testImg} alt="First slide" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ height: "25em" }}>
        <img className="d-block w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ height: "25em" }}>
        <img className="d-block w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

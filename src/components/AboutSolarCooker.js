import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function AboutSolarCooker() {
  return (
    <div style={{ marginTop: "3em", marginBottom: "3em" }}>
      <h1 id="History of Cooking Tools">History of Cooking Tools</h1>
      <VerticalTimeline layout={"1-column-left"} lineColor={"#777777"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ border: "1px solid #8ccca6" }}
          contentArrowStyle={{ borderRight: "7px solid  #8ccca6" }}
        >
          <h2
            className="vertical-timeline-element-title"
            style={{ fontSize: "20px" }}
            id="Rocket stove or fuel saving stove"
          >
            Rocket stove or fuel saving stove
          </h2>
          <h4 className="vertical-timeline-element-subtitle">
            When the sun doesn't shine you need another way to cook. You can use
            gas or ethanol (Koko oil) but for wood or charcoal a fuel saving
            stove is preferable. A fuel saving stove uses the fuel more
            efficiently than an open fire. The temperature is higher and
            therefore less smoke is formed. Usually you need to use only small
            pieces of wood. Always consider if a fireless cooker can reduce your
            fuel consumption. A fuel saving stove can be self made or bought and
            is often a first step to reduce your fuel cost and the first unit in
            your Integrated Solar Kitchen.
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ border: "1px solid #8ccca6" }}
          contentArrowStyle={{ borderRight: "7px solid  #8ccca6" }}
        >
          <h2
            className="vertical-timeline-element-title"
            style={{ fontSize: "20px" }}
            id="The fireless cooker"
          >
            The fireless cooker
          </h2>
          <h4 className="vertical-timeline-element-subtitle">
            A fireless cooker, e.g. a well insulated basket which will keep the
            food hot, is necessary. If the food is well at boiling temperature
            it will continue to cook in the basket. You need about twice the
            time to finish cooking in the fireless cooker than if you boil it
            ready on fire. The fireless cooker is also useful to keep food warm
            until the evening when you have used your solar cooker during
            daytime.
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ border: "1px solid #8ccca6" }}
          contentArrowStyle={{ borderRight: "7px solid  #8ccca6" }}
        >
          <h2
            className="vertical-timeline-element-title"
            style={{ fontSize: "20px" }}
            id="The solar cooker"
          >
            The solar cooker
          </h2>
          <h4 className="vertical-timeline-element-subtitle">
            There are different types of solar cookers. Complexity and prices
            vary a lot. The principles are explained below and if you want to
            learn more, have a look at the{" "}
            <a
              href="https://solarcooking.fandom.com/wiki/Introduction_to_solar_cooking"
              target="_blank"
              rel="noreferrer"
            >
              Wiki page
            </a>{" "}
            of solar cookers international. Since most inexpensive solar cookers
            are quite slow it is important to plan ahead. If you put a kettle
            with water in the cooker before starting to prepare your
            ingredients, you save time by using this water in your casserole or
            soup. If you need to leave your cooker you can turn it to where the
            sun will be later. In this way you can have your meal ready when you
            come home. A big advantage is that you do not need to look after the
            dish while cooking. It will not burn and this will also make the
            cleaning easy. By using your cooker you will learn from your
            mistakes and adjust your methods to the time of the year and the
            weather.
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

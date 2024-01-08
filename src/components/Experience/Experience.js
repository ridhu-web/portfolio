import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import uic from "../../img/uic.png";
import regions from "../../img/regions-bank.png";
import hpe from "../../img/hpe.png";
export default function () {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="September 2023 - December 2023"
        icon={<img src={uic} />}
      >
        <h3 className="vertical-timeline-element-title">
          Software Engineering Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Birmingham, AL</h4>
        <p>C#, .NET, ASP.NET, Azure, SQL.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2023 - August 2023"
        iconStyle={{
          background: "#fff",
          color: "#fff",
          borderRadius: "0",
          height: "auto",
          boxShadow: "none",
          WebkitBoxShadow: "none",
        }}
        icon={<img src={regions} />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan 2020 - April 2022"
        iconStyle={{
          background: "#fff",
          color: "#fff",
          borderRadius: "0",
          height: "auto",
          boxShadow: "none",
          WebkitBoxShadow: "none",
        }}
        icon={<img src={hpe} style={{ width: "auto", height: "auto" }} />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

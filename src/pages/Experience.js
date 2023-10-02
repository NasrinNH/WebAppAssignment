import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { PiStudentDuotone } from "react-icons/pi";

import { GrUserWorker } from "react-icons/gr";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2004 - 2008"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<PiStudentDuotone />}
        >
          <h3 className="vertical-timeline-element-title">
            Farzanegan Highschool, Mashhad - Iran
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008 - 2012"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<PiStudentDuotone />}
        >
          <h3 className="vertical-timeline-element-title">
            Azad University of Mashhad, Mashhad - Iran
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012 - 2017"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<GrUserWorker />}
        >
          <h3 className="vertical-timeline-element-title">
            Network Administrator, Faranegaran Company
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Mashhad - Iran</h4>
          <p>Maintained and upgraded networks and servers</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<PiStudentDuotone />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Web Developer Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Montreal, QC, Canada
          </h4>
          <p>Vanier College</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;

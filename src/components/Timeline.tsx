import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

import ntu_logo from '../assets/logo/ntu_logo.png';

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Work experience & Education</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<img src={ntu_logo} width="100%"></img>}
          >
            <h3 className="vertical-timeline-element-title">National Taiwan University</h3>
            <h4 className="vertical-timeline-element-subtitle">Taipei, Taiwan</h4>
            <p>
              Research Assistant, Civil Engineering Department
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - 2024"
            iconStyle={{ background: '##ca0000', color: 'rgb(39, 40, 34)' }}
            icon={<img src={ntu_logo} width="100%"></img>}
          >
            <h3 className="vertical-timeline-element-title">National Taiwan University</h3>
            <h4 className="vertical-timeline-element-subtitle">Taipei, Taiwan</h4>
            <p>
              Master of Science, Civil Engineering Department, Computer-aided Division
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<img src={ntu_logo} width="100%"></img>}
          >
            <h3 className="vertical-timeline-element-title">National Taiwan University</h3>
            <h4 className="vertical-timeline-element-subtitle">Taipei, Taiwan</h4>
            <p>
              Bachelor of Science, Civil Engineering Department, Computer-aided Division
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
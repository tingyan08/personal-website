import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

// Import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Work Experience & Education</h1>
        <VerticalTimeline>
          
          {/* PhD */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2025 - Present"
            iconStyle={{ background: '#ca0000', color: '#fff' }}
            // Using the Icon instead of the Image
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Purdue University</h3>
            <h4 className="vertical-timeline-element-subtitle">West Lafayette, Indiana</h4>
            <p>Ph.D Student, Lyles School of Civil and Construction Engineering</p>
          </VerticalTimelineElement>          

          {/* Work Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            // Using the Icon instead of the Image
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">National Taiwan University</h3>
            <h4 className="vertical-timeline-element-subtitle">Taipei, Taiwan</h4>
            <p>Research Assistant, Civil Engineering Department</p>
          </VerticalTimelineElement>

          {/* Master's Degree */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            // Fixed the double hash typo below
            iconStyle={{ background: '#ca0000', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
            date="2022 - 2024"
          >
            <h3 className="vertical-timeline-element-title">National Taiwan University</h3>
            <h4 className="vertical-timeline-element-subtitle">Taipei, Taiwan</h4>
            <p>Master of Science, Civil Engineering Department, Computer-aided Division</p>
          </VerticalTimelineElement>

          {/* Bachelor's Degree */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2022"
            iconStyle={{ background: '#ca0000', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">National Taiwan University</h3>
            <h4 className="vertical-timeline-element-subtitle">Taipei, Taiwan</h4>
            <p>Bachelor of Science, Civil Engineering Department, Computer-aided Division</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
import React from "react";
import logo from './egate logo 1.png'

import logoo from "../Egate landing page/browser-removebg-preview.png";
import "./EgateL.css";
export const Egate = () => {
  return (
    <div>
            <div className='Egate_logo_with_Link'>
          <div className='Egate_landing_header-e6578i'>
            {/* This perticular div was responsible only for the "logo image tag" */}
            <div className='Egate_logo_hjurnfh'>
              <img src={logo} alt="" />
            </div>
            {/* This perticular div was responsible only for the "egradtutor publication anchor tag" */}
            {/* <div className='Publications' onClick={handlepublicationpop_up}>
              <p style={{ color: '#000' }} >eGRADTutor Publications</p>
            </div> */}
          </div>
        </div>
      <section className="EGATE_eLanding_Container">
        <div className="Egate_landing">
          <div className="EGATE_landingE">
            {/* This perticular div was responsible only for about "logo image tag" */}
            <div className="Egate_loge_landing">
              <img src={logoo} alt="" />
            </div>
            {/* This perticular div was responsible only for "heading tag" and for "paragraph tag" */}
            <div className="Egate_landiing_ojnkl">
              <h2>Welcome to eGRADTutor</h2>
              {/* <p>eGRADTutor is an Edtech firm started with a vision to blend the boundaries in education and take best-in-class courses and teachers virtually to every corner of the country. Our courses are developed by the alumni of IIT/IISc with an intent to enhance the student's abilities to face some of the toughest exams of the country. Our offerings not just provide a deeper understanding of the subjects to the students, but they also make them exam ready.</p> */}
              <p>...tutoring by grads from IIT's/IISc</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

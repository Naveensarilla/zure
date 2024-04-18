import React from 'react'

export const Neet_Eligibility = () => {
  return (
    <div>
      <ul className='ExamsUl_list'>
        <b>NATIONALITY:</b>
        <li>Indian citizen can apply. OCI/NRI candidates may also eligible to apply.</li>
        <li>andidates belonging to J&K/AP/Telangana states are eligible to apply for All India 15% quota seats on the basis of self-declaration.</li>

        <br />
        <b>REQUIREMENT OF AADHAAR CARD</b>
        <li>It is must for all Indian National students to have an Aadhaar Number in order to apply for NEET exam.</li>

        <br />
        <b>AGE CRITERIA:</b>
        {/* <li>The minimum age limit for NEET UG 2023 is 17 years as on or before 31st December of the year of admission.</li> */}
        {/* <li>The maximum age limit is 25 years. There will be 5 years relaxation in upper age limit for candidates belonging to reserved category.</li> */}
        <li>He/she has completed 17 years of age at the time of admission or will complete that age on or
          before 31 December of the year of his/her admission to the first year of the Undergraduate
          Medical Course</li>
        <ul>
          <li><b>Accordingly, the lower age limit shall be as under:</b></li>
          <li>For Candidates of General (UR)/General-EWS : <b>born on or before 31.12.2007</b></li>
          <li>For Candidates of SC/ST/OBC-NCL/PwBD Category : <b>born on or before 31.12.2007</b></li>
          <li><b>Upper age limit: As per Letter No. U-11022/2/2022-UGMEB, dated 09 March 2022 received
            from National Medical Commission (NMC), Under Graduate Medical Education Board
            (UGMEB) regarding the upper age limit, there is no upper age limit.</b></li>
        </ul>
        <br />
        <b>REQUIRED QUALIFICATION:</b>
        <li> Candidates should have cleared 12th or equivalent examination with Chemistry, Physics, and Biology/Biotechnology with English as mandatory subjects.</li>
        <li>They need to pass the qualifying examination with scoring minimum 50% marks (45% marks for general-PH and 40% marks for candidates from SC/ST & OBC).</li>
        <li>Candidates appearing in the qualifying examination are also eligible to apply.</li>
      </ul>
    </div>
  )
}

import React from 'react'
import Header from './Header'
import { useState } from 'react'
import './IITjee.css'
import table1 from '../UG/Images/mhcetimg1.png'
import tabimg from './Images/mhcetimg2.png'
import tabimg1 from './Images/mhcetimg3.png'
import tabimg5 from './Images/mhcetimg4.png'
import { Link } from 'react-router-dom'
import logo from './logo2.jpg'
import livecls from './Images/live class.png'
// import onlinets from './Images/online test seires.png'
import onlinets from './Images/online test seires.png'

import recordedmc from './infographic/live class.png'

// MHCET exam pages
import { Mhcet_examPattern } from './UGExamPages/mhcet/Mhcet_examPattern'
import { Mhcet_Eligibility } from './UGExamPages/mhcet/Mhcet_Eligibility'
import { Mhcet_Syllabus } from './UGExamPages/mhcet/Mhcet_Syllabus'
import { Mhcet_impDates } from './UGExamPages/mhcet/Mhcet_impDates'
import Footer from './Footer'
import Examheader from './Examheader'


export const MhcetExam = () => {
  const [selected, setSelected] = useState(null)
  const toggle2 = (i1) => {
    // return i
    if (selected === i1) {
      return setSelected(null)

    }
    setSelected(i1)
  }
  return (
    <div className='iitjeebody'>
      {/* import logo from './logo2.jpg' */}
      <Examheader />

      <div className='otsh1' id='MHCET-exampage'>
        <h1 style={{color:'#000'}}>MHCET EXAM</h1>
      </div>

      <div className='FAQCONTENT' id='faq'>
        <div className="wrapper-3 container">


          <div className='sdfsf'>
            <div className='examdiv'>
              <button id='MHCETExamLink' className='exambtn'><a href="https://cetcell.mahacet.org/" target='_blank'>Official Webpage</a></button>
            </div>

            <div className="accordion">
              {sixtoten.map((item, i2) => (
                <div className="item2">
                  <div className="title" id='MHCETExamLink' onClick={() => toggle2(i2)}>
                    <h2>{item.Qustion}</h2>
                    <span>{selected === i2 ? '-' : '+'}</span>
                  </div>
                  <div className={selected === i2 ? 'content-show2' : 'content2'}>
                    <div>
                      <div className='imagessg'>{item.answer}
                        {/* <img src={item.ansIMG} alt="" /> */}
                      </div>


                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>







      <div class="neetcourses" id='MHCETExamLink'>
        <div class="courses_heading">
          <h1 className=''>MHCET COURSES</h1>
        </div>

        <div class="online_courses" > 
          <div class="courses1 courses1-img" id='MHCETcourses1'>
            <div class="test_btn ots_btn" id='MHCETExamLink'>
              <h3 className='MHCETExamtext'>ONLINE TEST SERIES</h3>
              <img src={onlinets} alt="" />
              <div class="btn-neet">

                <button>
                  <a href="/MHCET_OTS_PAGE">Explore <i class="uil uil-angle-right icon"></i></a></button>

              </div>

            </div>
          </div>


          <div class="courses1" id='MHCETcourses1'>
            <div class="test_btn ots_btn" id='MHCETExamLink'>
              <h3 className='MHCETExamtext' >RECORDED MINI COURSES</h3>
              <img src={recordedmc} alt="" />
              <div class="btn-neet">
                <button id='MHCETExamLink'>
                  <a href="">Coming Soon <i class="uil uil-angle-right icon"></i></a></button>
              </div>
            </div>
          </div>

          {/* <div class="courses1">
        <div class="test_btn ots_btn">
          <h3>LIVE CLASSES</h3>
          <img src={livecls} alt="" />
          <div class="btn-neet"> 
            <button>
              <a href="">Explore <i class="uil uil-angle-right icon"></i></a></button>
          </div>

        </div>
      </div> */}

        </div>
      </div>








      <Footer />
    </div>
  )
}



const sixtoten = [
  {
    Qustion: "CONDUCTING AUTHORITY",
    answer: "State Common Entrance Test Cell, Maharashtra"
  },
  // Exam Pattern ==========================
  {
    Qustion: "EXAM PATTERN",
    answer: [<Mhcet_examPattern />],


  },
  // ELIGIBILITY ==========================================
  {
    Qustion: "ELIGIBILITY",
    answer: [<Mhcet_Eligibility />],

  },
  // syllabus ================================
  {
    Qustion: "SYLLABUS",
    answer: [<Mhcet_Syllabus />],

  },

  {
    Qustion: "IMPORTANT DATES",
    answer: [<Mhcet_impDates />],
  },
]





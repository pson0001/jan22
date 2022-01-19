import React, { useContext, useEffect } from 'react'
import coursemapper from './../../assets/coursemapper.png'
import './project.scss'
import { ImgPosition } from '../../utils/ImgWrapper'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import Icon from '../../assets/Icon'
import research from './../../assets/coursemapper/research.png'
import concept from './../../assets/coursemapper/concept.png'
import brainstormone from './../../assets/coursemapper/brainstormone.png'
import brainstormtwo from './../../assets/coursemapper/brainstormtwo.png'

const Coursemapper = () => {
  const transition = { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] }
  const { position } = useContext(ImgPosition)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="projectContainer">
      <motion.div>
        {position ? (
          <motion.img
            initial={{
              x: position.x + 'px',
              y: position.y + 'px',
              width: 800 + 'px',
              height: 500 + 'px',
              borderRadius: 16 + 'px',
            }}
            animate={{
              x: 0,
              y: '120px',
              width: '100%',
              height: '100%',
              borderRadius: 0 + 'px',
            }}
            transition={transition}
            src={coursemapper}
            alt="course mapper"
          />
        ) : (
          <motion.img
            initial={{
              x: 0,
              y: '120px',
              width: '100%',
              height: '100%',
            }}
            animate={{
              x: 0,
              y: '120px',
              width: '100%',
              height: '100%',
            }}
            transition={transition}
            src={coursemapper}
            alt="course mapper"
          ></motion.img>
        )}
      </motion.div>
      <div className="projectContentContainer">
        <motion.div
          className="projectIntroContainer"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 0.6, ...transition }}
        >
          <div className="projectTitle">
            <div className="label">
              <span className="subLabel">PROJECT NAME</span>
              <span className="title">Course Mapper</span>
            </div>
            <div className="label">
              <span className="subLabel">RESPONSIBILITY</span>
              <span className="subTitle">
                UX/UI Design, Frontend Development, User Testing
              </span>
            </div>
          </div>
          <div className="projectIntro">
            <span>
              By the start of 2020, international travelling became not easy.
              Not surprising that students need more guides on how they pick
              their units and complete their degrees. Student service desks were
              overwhelmed with the course advice enquiries.
            </span>
            <span>
              Our team was tasked to deliver a solution in 2 months. Course
              Mapper was born and it assisted Course Advisers in efficiently
              providing course advice.
            </span>
            <span>
              Since July 2021, Course Mapper has produced 100k+ personalised
              course plans for students.
            </span>
          </div>
        </motion.div>
        <div className="line"></div>

        <div className="projectContent">
          <div>
            <span className="sectionTitle">Problem Statement</span>
            <p>
              Our goal for the project was to transform a paper-based, manual
              and time-consuming course mapping progress to a smooth, seamless
              and easy online experience.
            </p>

            <div className="sectionContentContainer">
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.Layout />
                </div>
                <span className="itemTitle">Information fragmentation</span>
                <span>//</span>
              </div>
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.Dots />
                </div>
                <span className="itemTitle">
                  Vary information display formats
                </span>
                <span>/////</span>
              </div>
            </div>
            <div className="sectionContentContainer">
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.Layout />
                </div>
                <span className="itemTitle">
                  Infinite opened tabs (Web pages and local files)
                </span>
                <span>////</span>
              </div>
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.Dots />
                </div>
                <span className="itemTitle">Inconsistent output</span>
                <span>/////</span>
              </div>
            </div>
          </div>

          <div className="line"></div>

          <div>
            <span className="sectionTitle">My Role</span>
            <p>I led the design of the</p>
            <ul>
              <li>Conducted user interviews to gather pain points</li>
              <li>
                Organised and hosted brainstorming sessions with other designers
              </li>

              <li>Documented user flows and ideas</li>
              <li>
                Guided and worked with other designers to create a full set of
                design solutions
              </li>
              <li>Conducted usability testing via Figma prototype</li>
              <li>Implemented several features as a frontend developer</li>
              <li>Conducted usability testing via the web applications</li>

              <li>
                Follow up with end-users feedback to continue iterating app
                features
              </li>
              <li>
                Conduct workshops to all course advisors (Student service desk
                and all faculties)
              </li>
            </ul>
          </div>

          <div className="line"></div>

          {/* Research */}

          <div>
            <span className="sectionTitle">Expectations</span>

            <div className="sectionContentContainer">
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.People />
                </div>
                <span className="itemTitle">Reduce Handling Time</span>
                <span>
                  It takes course advisors 20+ minutes to create a personalised
                  course map.
                </span>
              </div>
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.Computer />
                </div>
                <span className="itemTitle">Elimate Mannul Efforts </span>
                <span>
                  During the research stage, I noticed that course advisors
                  spent significate time on copying, checking and comparing
                  information.
                </span>
              </div>
            </div>
          </div>
          <div className="line"></div>
          {/* Analyse */}

          <div>
            <span className="sectionTitle">Research</span>

            <div className="sectionContentContainer">
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.Path />
                </div>
                <span className="itemTitle">
                  User Interviews and User Journey Mapping
                </span>
                <span>
                  I conducted many interviews with end-users to understand the
                  current review process, pain points, opportunities and their
                  expectations about the app.
                </span>
              </div>
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.Sign />
                </div>
                <span className="itemTitle">Enquiries Analysis</span>
                <span>
                  I conducted many interviews with end-users to understand the
                  current review process, pain points, opportunities and their
                  expectations about the app.
                </span>
              </div>
            </div>
            <div className="imgContainer">
              <img src={research} alt="research"></img>
            </div>
          </div>
          <div className="line"></div>

          <div>
            <span className="sectionTitle">Brainstorm</span>
            <div className="sectionContentContainer">
              <div className="sectionContentItem sectionContentItemFull">
                <span>
                  As a team, we ran multiple brainstrom sessions and iterated
                  our ideas together.
                </span>
                <div className="imgContainer">
                  <img src={concept} alt="concept"></img>
                </div>
                <div className="imgContainer">
                  <img src={brainstormone} alt="brainstorm one"></img>
                </div>
                <div className="imgContainer">
                  <img src={brainstormtwo} alt="brainstorm two"></img>
                </div>
              </div>
            </div>
          </div>

          <div className="line"></div>
          {/* DLS */}

          <div>
            <span className="sectionTitle">Put every together</span>

            <div className="sectionContentContainer">
              <div className="sectionContentItem sectionContentItemFull">
                <span>
                  With the unique feature of this app, I proposed a design style
                  that may not be seen very often in a university project. I am
                  happy to say that my design direction was approved for
                  implementation.
                </span>
                <iframe
                  src="https://drive.google.com/file/d/1aVB5vu2ieN7mtR_kJ8SRz_UQRakUzDuI/preview"
                  width={window.innerWidth - 240}
                  height={window.innerWidth / 2}
                ></iframe>
              </div>
            </div>
          </div>

          <div className="line"></div>

          <div className="navigateButton right">
            {/* <Link to="/project/coursemapper" className="buttonItem previous">
              <span className="arrow"></span>
              <span className="arrowLine"></span>
              <span className="arrowText">Course Mapper</span>
            </Link> */}
            <Link to="/project/peerview" className="buttonItem next">
              <span className="arrowText">Next</span>
              <span className="arrowLine"></span>
              <span className="arrow"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coursemapper

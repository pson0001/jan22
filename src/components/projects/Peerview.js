import React, { useContext, useEffect } from 'react'
import peerview from './../../assets/peerview.png'
import { Link } from 'react-router-dom'
import './project.scss'
import { ImgPosition } from '../../utils/ImgWrapper'
import { motion } from 'framer-motion'
import Icon from '../../assets/Icon'
import myprocess from './../../assets/peerview/myprocess.png'
import sitemap from './../../assets/peerview/sitemap.png'
import userflow from './../../assets/peerview/userflow.png'
import wireframe from './../../assets/peerview/wireframe.png'
import ui from './../../assets/peerview/ui.png'
import dls from './../../assets/peerview/dls.png'
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
            src={peerview}
            alt="peerview"
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
            src={peerview}
            alt="peerview"
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
              <span className="title">Peerview</span>
            </div>
            <div className="label">
              <span className="subLabel">RESPONSIBILITY</span>
              <span className="subTitle">UX/UI Design</span>
            </div>
          </div>
          <div className="projectIntro">
            <span>
              Monash University is one of Australia's leading universities and
              ranks among the world's top 100. We help change lives through
              research and education.
            </span>
            <span>
              This application designed and developed for academic staff to
              request review from their peers. It digitalise the experience and
              process.
            </span>
            <span>
              I am happy to say that my design direction was approved for
              implementation. It was very exciting to see how the product
              evolved and improved with each update during a short time. The
              final application has been implemented and delivered.
            </span>
          </div>
        </motion.div>
        <div className="line"></div>
        {/* Background */}
        <div className="projectContent">
          <div>
            <span className="sectionTitle">Background</span>
            <p>
              Peer review of teaching is one of a number of methods or
              techniques that can be used to gather evidence about one's
              teaching. It is recognised as an important contributor to the
              ongoing evaluation and enhancement of learning and teaching, as
              well as a process to recognise excellence.
            </p>

            <div className="sectionContentContainer">
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.Print />
                </div>
                <span className="itemTitle">
                  Paper based process, hard to mantain and retrieve
                </span>
                <span>
                  The review process is entirely paper-based. The paper-based
                  process made the information harder to process, maintain and
                  retrieve when academics needed.
                </span>
              </div>
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.Timer />
                </div>
                <span className="itemTitle">Long turn around time</span>
                <span>
                  There are many tasks involved in the process(eg, request
                  review, book a review session, gather the feedback, evaluate
                  the feedback). Without the help of a digital platform, one
                  review process takes longer than it should be.
                </span>
              </div>
            </div>
          </div>

          <div className="line"></div>
          {/* My Process */}

          <div>
            <span className="sectionTitle">My Process</span>

            <div>
              <img src={myprocess} alt="myprocess"></img>
            </div>
          </div>

          <div className="line"></div>
          {/* Research */}

          <div>
            <span className="sectionTitle">Research</span>

            <div className="sectionContentContainer">
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.People />
                </div>
                <span className="itemTitle">
                  User and stakeholder Interviews
                </span>
                <span>
                  I conducted many interviews with end-users and stakeholder to
                  understand the current review process, pain points,
                  opportunities and their expectations about the app.
                </span>
              </div>
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.Computer />
                </div>
                <span className="itemTitle">Competitor Research</span>
                <span>
                  By understanding that the users will not compare the new
                  review app to other universities’ apps but the apps that they
                  commonly use (eg, Netflix, Facebook). I simply treat this
                  university exclusive app as any modern review app that can
                  compete with any of the review apps that are accessible to the
                  public.
                </span>
              </div>
            </div>
          </div>
          <div className="line"></div>
          {/* Analyse */}

          <div>
            <span className="sectionTitle">Analyse</span>

            <div className="sectionContentContainer">
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.Path />
                </div>
                <span className="itemTitle">User Journey Mapping</span>
                <span>
                  Through interviews, I mapped out the current user journey that
                  identified gaps and painpoints between each steps of the
                  process.
                </span>
              </div>
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.Sign />
                </div>
                <span className="itemTitle">Problem Statement</span>
                <span>
                  I created a few key problem statement that guide me throughout
                  the creation journey.
                </span>
              </div>
            </div>
          </div>
          <div className="line"></div>
          {/* Prototype */}
          <div>
            <span className="sectionTitle">Prototype</span>

            <div className="sectionContentContainer">
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.Layout />
                </div>
                <span className="itemTitle">Project Sitemap</span>
                <span>
                  Working on a sitemap allowed me to understand the goal(s) of
                  every page
                </span>
                <div>
                  <img src={sitemap} alt="sitemap"></img>
                </div>
              </div>
              <div className="sectionContentItem">
                <div className="icon">
                  <Icon.Dots />
                </div>
                <span className="itemTitle">User Flow</span>
                <span>
                  Building user flow helps the whole process of creating new
                  features
                </span>
                <div>
                  <img src={userflow} alt="userflow"></img>
                </div>
              </div>
            </div>
            <div className="sectionContentContainer">
              <div className="sectionContentItem sectionContentItemFull">
                <div className="icon">
                  <Icon.Page />
                </div>
                <span className="itemTitle">Wireframe</span>
                <span>
                  There are two critical features that I illustrated with high
                  level wireframe.
                </span>
                <div>
                  <img src={wireframe} alt="wireframe"></img>
                </div>
              </div>
            </div>
            <div className="sectionContentContainer">
              <div className="sectionContentItem sectionContentItemFull">
                <div className="icon">
                  <Icon.Color />
                </div>
                <span className="itemTitle">UI Design</span>
                <span>
                  Create user interface components that consistently throughout
                  the application
                </span>
                <div>
                  <img src={ui} alt="ui"></img>
                </div>
              </div>
            </div>
          </div>

          <div className="line"></div>
          {/* Build */}

          <div>
            <span className="sectionTitle">Build</span>
            <div className="sectionContentContainer">
              <div className="sectionContentItem sectionContentItemFull">
                <div className="icon">
                  <Icon.Color />
                </div>
                <span className="itemTitle">Design Review with Developers</span>
                <span>
                  I conducted frequent design review sessions with developers to
                  ensure that the interactions and features perform as expected.
                </span>
              </div>
            </div>
          </div>

          <div className="line"></div>
          {/* DLS */}

          <div>
            <span className="sectionTitle">Design System</span>

            <div className="sectionContentContainer">
              <div className="sectionContentItem sectionContentItemFull">
                <span>
                  With the unique feature of this app, I proposed a design style
                  that may not be seen very often in a university project. I am
                  happy to say that my design direction was approved for
                  implementation.
                </span>
                <div>
                  <img src={dls} alt="dls"></img>
                </div>
              </div>
            </div>
          </div>

          <div className="line"></div>

          <div className="navigateButton">
            <Link to="/project/coursemapper" className="buttonItem previous">
              <span className="arrow"></span>
              <span className="arrowLine"></span>
              <span className="arrowText">Course Mapper</span>
            </Link>
            {/* <Link to="/" className="buttonItem next">
              <span className="arrowText">Next</span>
              <span className="arrowLine"></span>
              <span className="arrow"></span>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coursemapper

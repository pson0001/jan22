import React, { useContext, useEffect } from 'react'
import coursemapper from './../../assets/coursemapper.png'
import './project.scss'
import { ImgPosition } from '../../utils/ImgWrapper'
import { motion } from 'framer-motion'

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
      <motion.div
        className="projectContentContainer"
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
            <span className="title">Course mapper</span>
          </div>
          <div className="label">
            <span className="subLabel">RESPONSIBILITY</span>
            <span className="subTitle">
              Research, UX/UI Design, Frontend Development
            </span>
          </div>
        </div>
        <div className="projectIntro">
          <span>
            Monash University is one of Australia's leading universities and
            ranks among the world's top 100. We help change lives through
            research and education.
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default Coursemapper

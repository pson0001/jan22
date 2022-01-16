import './projects.scss'
import coursemapper from './../../assets/coursemapper.png'
import peerview from './../../assets/peerview.png'
import { ImgPosition } from './../../utils/ImgWrapper'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import Icon from '../../assets/Icon'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import bomb from './../../assets/bomb.png'
import pencil from './../../assets/pencil.png'

const Projects = () => {
  const { setPosition } = useContext(ImgPosition)
  const transition = { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] }
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 2000], [0, 100])

  return (
    <motion.div className="projectsContainer">
      <motion.div className="wrapper">
        <motion.div
          className="title"
          exit={{ opacity: 0 }}
          transition={transition}
        >
          Selected projects
        </motion.div>
        <div className="project">
          <motion.img
            exit={{ opacity: 0 }}
            transition={transition}
            src={bomb}
            alt="bomb"
            className="bomb"
            style={{ y: y1 }}
          />
          <Link
            to="/project/coursemapper"
            onClick={(e) => {
              setPosition({
                x: e.target.getBoundingClientRect().x,
                y: e.target.getBoundingClientRect().y,
              })
            }}
          >
            <div>
              <img src={coursemapper} alt="course mapper" />
              <motion.div
                className="titleContainer"
                exit={{ opacity: 0 }}
                transition={transition}
              >
                <h3>Course Mapper</h3> <Icon.ArrowRight />
              </motion.div>
              <motion.p exit={{ opacity: 0 }} transition={transition}>
                All-in-one course advice tool
              </motion.p>
            </div>
          </Link>
        </div>
        <div className="project right">
          <motion.img
            src={pencil}
            alt="pencil"
            className="pencil"
            style={{ y: y1 }}
            exit={{ opacity: 0 }}
            transition={transition}
          />
          <Link
            to="/project/peerview"
            onClick={(e) => {
              setPosition({
                x: e.target.getBoundingClientRect().x,
                y: e.target.getBoundingClientRect().y,
              })
            }}
          >
            <div>
              <img src={peerview} alt="peerview" />
              <motion.div
                className="titleContainer"
                exit={{ opacity: 0 }}
                transition={transition}
              >
                <h3>PeerView</h3> <Icon.ArrowRight />
              </motion.div>
              <motion.p exit={{ opacity: 0 }} transition={transition}>
                Deliver digital experience to academic peer review
              </motion.p>
            </div>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}
export default Projects

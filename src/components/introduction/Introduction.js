import './introduction.scss'
import Icon from '../../assets/Icon'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import person from './../../assets/person.png'
import bulb from './../../assets/bulb.png'
import computer from './../../assets/computer.png'
import pen from './../../assets/pen.png'
const Introduction = () => {
  // Title intro animation
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }

  const Header = {
    initial: {
      y: 0,
    },
    animation: {
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  }

  const title = {
    initial: {
      y: 200,
    },
    animation: {
      y: 0,
      transition: { duration: 1, ...transition },
    },
  }

  const illustration = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animation: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: -0.6 },
    },
  }

  // Illustration scroll
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, 100])
  const y2 = useTransform(scrollY, [0, 600], [0, 0])
  const y3 = useTransform(scrollY, [0, 600], [0, 50])
  const y4 = useTransform(scrollY, [0, 600], [0, -80])
  return (
    <motion.div className="introContainer">
      <motion.div
        initial="initial"
        animate="animation"
        exit="exit"
        className="content"
        variants={Header}
      >
        <motion.div className="imgContainer" variants={illustration}>
          <motion.img
            src={person}
            alt="person"
            className="person"
            style={{ y: y1 }}
          />
          <motion.img
            src={bulb}
            alt="bulb"
            className="bulb"
            style={{ y: y2 }}
          />
          <motion.img
            src={computer}
            alt="computer"
            className="computer"
            style={{ y: y3 }}
          />
          <motion.img src={pen} alt="pen" className="pen" style={{ y: y4 }} />
        </motion.div>
        <motion.div className="row">
          <motion.p variants={title}>Hi, I'm Ping who loves</motion.p>
        </motion.div>
        <motion.div className="row">
          <motion.p variants={title} className="title design">
            Design,
          </motion.p>
        </motion.div>
        <motion.div className="row">
          <motion.p variants={title} className="title programming">
            Programming,
          </motion.p>
        </motion.div>
        <motion.div className="row">
          <motion.p variants={title} className="title">
            and Croissants!
            {/* <span className="emoji">🥐</span> */}
          </motion.p>
        </motion.div>
        <motion.div className="row">
          <motion.p variants={title}>
            I solve complex problems through Empathy, Curiosity and Passion.
          </motion.p>
        </motion.div>
        <motion.div className="row">
          <motion.p variants={title}>
            <Icon.ArrowDown />
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
export default Introduction

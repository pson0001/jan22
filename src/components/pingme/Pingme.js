import React from 'react'
import './pingme.scss'
import cats from './../../assets/cats.png'
const Pingme = () => {
  return (
    <div className="aboutContainer">
      <div>
        <div className="about">
          <span className="subTitle">A bit more about me,</span>
          <span className="title">
            I live in Melbourne, Australia with two of{' '}
            <span className="cats">my cats</span>.
          </span>

          <span className="description">
            I collaborate with cross-functional teams throughout the
            user-centered design process to optimize product life-cycle and
            elevate user experience. I am passionate about discovering insights,
            creativity, solving problems, interaction and motion design.
          </span>
          <span className="description">
            If you are interested in my experience, you can pay a visit to my
            Linkedin profile. Thank you for stopping by!
          </span>
        </div>
      </div>
    </div>
  )
}
export default Pingme

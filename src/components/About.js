import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faTv, faGamepad, faPlaneDeparture, faBook } from '@fortawesome/free-solid-svg-icons'

import profileAvatar from '../images/portfolio_pic.jpg'

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div className="profile">
          <div className="about-1">
            <h2 className="about-header">♫ Hello, it's me ♫</h2>
            <div className="about-me">I am Software Engineer based in San Francisco, California. I care about solving problems through communicative and detailed work. I enjoy creating interactive applications that pave easier accessibility anytime you need.</div>
            <div className="about-me">My hobbies include competitive Smash Bros., Badminton, eating out, and thinking about my next travel destination.</div>
            <div className="about-me">I am a self-taught developer for about a year now.</div>
            <div className="currently-text">
              <div className="currently-title">Skills</div>
              <div className="currently-divider"></div>
            </div>
            <br/>
            <div>
              <FontAwesomeIcon icon={['fab', 'html5']} size="7x" color="rgba(217	95 54)" fixedWidth />
              <FontAwesomeIcon icon={['fab', 'css3']} size="7x" color="rgba(94	158	188)" fixedWidth />
              <FontAwesomeIcon icon={['fab', 'js']} size="7x" color="rgba(236	208	92)" fixedWidth />
            </div>
            <br/>
            <div>
              <FontAwesomeIcon icon={['fab', 'react']} size="7x" color="rgba(108	204	250)" fixedWidth />
              <FontAwesomeIcon icon={faGem} size="7x" color="rgba(219	97	78)" fixedWidth />
              <FontAwesomeIcon icon={['fab', 'aws']} size="7x" color="black" fixedWidth />
            </div>
          </div>
          <div className="about-2">
            <img className="avatar" src={profileAvatar} alt="Me" />
          </div>
        </div>
        <div className="currently">
          <div className="currently-1">
          <div className="currently-text">
            <h2 className="currently-title">Courses & Education</h2>
            <div className="currently-divider"></div>
          </div>
            <h3 className="response-title"><a href="https://flatironschool.com/">Flatiron School Full Stack Web Developement</a></h3>
            <h6 className="response-date">Dec. 2017 - Present</h6>
            <div className="response-item">A Bootcamp that covers fundamentals, and frameworks. It's a community of online students all over the world tackling code labs with leader and mentor collaborations. Entirely all self-paced and demands a 1,000+ hours of learning.</div>
            <br/>
            <h3 className="response-title"><a href="http://www.deanza.edu/">De Anza College</a></h3>
            <h6 className="response-date">Sep. 2012 - June 2015</h6>
            <div className="response-item">Tooks multiple courses in the fine arts of theatre and cinematography. I developed an outstanding appreciation for movies and the underappreciated details.</div>
          </div>
          <div className="currently-2">
            <div className="currently-text">
              <h2 className="currently-title">Currently</h2>
              <div className="currently-divider"></div>
            </div>
            <li className="currently-item"><FontAwesomeIcon icon={faTv} color="#4f8751" fixedWidth/> Watching</li>
              <div>
                <ul className="response-item">Westworld (Season 2)</ul>
              </div>
            <li className="currently-item"><FontAwesomeIcon icon={faGamepad} color="#4f8751" fixedWidth /> Playing</li>
              <div>
                <ul className="response-item">Splatoon 2</ul>
              </div>
            <li className="currently-item"><FontAwesomeIcon icon={faPlaneDeparture} color="#4f8751" fixedWidth /> Flying</li>
              <div>
                <ul className="response-item">Philippines (Dec. 2018)</ul>
              </div>
            <li className="currently-item"><FontAwesomeIcon icon={faBook} color="#4f8751" fixedWidth /> Reading</li>
              <div>
                <ul className="response-item">Meditations (Marcus Aurelius) </ul>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

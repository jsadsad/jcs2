import React from 'react'
import Footer from './Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faTv, faGamepad, faPlaneDeparture, faBook } from '@fortawesome/free-solid-svg-icons'

import profileAvatar from '../images/portfolio_pic.jpg'

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div className="profile"> {/* Container 1*/}
          <div className="about-1">
            <h2 className="about-header">♫ It's me ♫</h2>
            <div className="about-me">Hey, I am a Software Engineer raised in San Francisco, California. I care about solving problems through communicative and detailed work. My favorite thing about 'creating' applications is being able to push the boundaries of ideas to the extreme. To me, there's no end goal - just a better version.</div>
            <div className="about-me">While not on my laptop, I'm usually looking for my next place to <a className="about-bits" href="https://www.yelp.com/collection/4qzyJqPF2qc-QZn50yYUMA">eat out</a>, playing competitve video games, working on an extracurricular, or simply thinking about my next travel adventure.</div>
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
            <div className="response-item">A Bootcamp that covers Fundamentals, and Frameworks. It's a community of online students all over the world tackling code labs with leader-mentor collaborations. Entirely all self-paced and demands a 1,000+ hours of learning.</div>
            <br/>
            <h3 className="response-title"><a href="http://www.deanza.edu/">De Anza College</a></h3>
            <h6 className="response-date">Sep. 2012 - June 2015</h6>
            <div className="response-item">I took multiple courses in the fine arts of cinematography and theatre. I developed an outstanding appreciation for movies and the underappreciated details. Mise-en-scène.</div>
          </div>
          <div className="currently-2">
            <div className="currently-text">
              <h2 className="currently-title">Currently</h2>
              <div className="currently-divider"></div>
            </div>
            <li className="currently-item"><FontAwesomeIcon icon={faTv} color="#4f8751" fixedWidth/>&nbsp; Watching</li>
              <div>
                <ul className="response-item">Westworld (Season 2)</ul>
              </div>
            <li className="currently-item"><FontAwesomeIcon icon={faGamepad} color="#4f8751" fixedWidth />&nbsp; Playing</li>
              <div>
                <ul className="response-item">Splatoon 2</ul>
              </div>
            <li className="currently-item"><FontAwesomeIcon icon={faPlaneDeparture} color="#4f8751" fixedWidth />&nbsp; Flying</li>
              <div>
                <ul className="response-item">Philippines (Dec. 2018)</ul>
              </div>
            <li className="currently-item"><FontAwesomeIcon icon={faBook} color="#4f8751" fixedWidth />&nbsp; Reading</li>
              <div>
                <ul className="response-item">Meditations (Marcus Aurelius) </ul>
              </div>
          </div>
        </div>
        <br/><br/>
        <div className="foot-bottom">
          <Footer />
        </div>
      </div>
    )
  }
}

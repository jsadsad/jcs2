import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faTv, faGamepad, faPlaneDeparture, faBook } from '@fortawesome/free-solid-svg-icons'

import profileAvatar from '../images/portfolio_pic.jpg'

class About extends React.Component {
  render() {
    return (
      <div className="about-font">
        <div className="profile">
          <div className="about-1">
            <h2>Yo.</h2>
            <div className="about-me">I am Software Engineer based in San Francisco, California. I care about solving problems through communicative and meticulous work.
            I enjoy creating interactive applications that pose options for everywhere you go.</div>
            <div className="about-me">I am a self-taught developer for about a year now.</div>
            <hr/>
            <h2>Skill:</h2>
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
            <h3 className="response-title">Flatiron School Full Stack Web Developement</h3>
            <h6 className="response-date">Dec. 2017 - Present</h6>
            <div className="response-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat consequuntur itaque fugiat autem, delectus reiciendis quas nam sapiente dolore quam. Reiciendis sed quos molestiae dolor, cupiditate placeat aliquid quo tempora!</div>
            <h3 className="response-title">De Anza College</h3>
            <h6 className="response-date">Sep. 2012 - June 2015</h6>
            <div className="response-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vero asperiores! Reprehenderit unde eius itaque repellendus assumenda aspernatur eveniet quibusdam, sed magni veniam, velit totam perspiciatis, id tenetur atque doloribus!</div>
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

export default About

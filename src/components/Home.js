import React from 'react'

import "../index.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faMapMarkerAlt)

class Home extends React.Component {
 render() {
   return (
     <div className='main center-image'>
       <div className='intro'>Joshua Clarence S.</div>
       <div className='tagline'>Develop | Game | Travel </div>
       <div className="icon-contact">
         <a href="https://github.com/jsadsad"><FontAwesomeIcon icon={['fab', 'github-square']} color="#ffffff"/></a>
         <a href="https://www.linkedin.com/in/joshsad2/"><FontAwesomeIcon icon={['fab', 'linkedin']} color="#ffffff"/></a>
         <a href="https://twitter.com/jcsad2"><FontAwesomeIcon icon={['fab', 'twitter-square']} color="#ffffff"/></a>
       </div>
     </div>
   )
 }
}

export default Home

import React from 'react'

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact-form">
        <p className="lets-talk">Get in touch?</p>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Name<br/><input className="contact-name" type="text" name="name" placeholder="I am..."/></label>
          </p>
          <br/>
          <p>
            <label>Email<br/><input className="contact-email" type="email" name="email" placeholder="My mail is..."/></label>
          </p>
          <br/>
          <p>
            <label>Message<br/><textarea className="contact-message" name="message" placeholder="Here's some nice words.."></textarea></label>
          </p>
          <br/>
          <p>
            <button className="submit-btn" type="submit">Send</button>
          </p>
        </form>
      </div>
    )
  }
}

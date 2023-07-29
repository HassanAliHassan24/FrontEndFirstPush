import React from 'react'
import './Contact.css';
function Contact() {
  return (

    <div className="back" id='Contact'>
      <div className="container">
        <h1>Connect With Us</h1>
        <p>We would love to respond to your queries and help you succeed. <br /> Feel
          free to get in touch with us.</p>
        <div className="contact-box">
          <div className="contact-left">
            <h3>Send your request</h3>
            <form >
              <div className="input-row">
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" placeholder='Type Your Name' />
                </div>

                <div className="input-group">
                  <label>Phone</label>
                  <input type="text" placeholder='+255....' />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Email</label>
                  <input type="email" placeholder='example@gmail.com' />
                </div>

                <div className="input-group">
                  <label>Subject</label>
                  <input type="text" placeholder='.........' />
                </div>
              </div>
              <label>Message</label>
              <textarea rows="5" placeholder='Your Message'></textarea>
              <button id='send' type='submit'>SEND</button>
            </form>

          </div>
          <div className="contact-right">
            <h3>Reach Us</h3>
            <table>
              <tr>
                <td>Email</td>
                <td>example@gmail.com</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>+255 774 661 603</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>Ministry of Education and Vocational Training at Kiembe Samaki</td>
              </tr>
            </table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
import React from 'react'
import { IconButton, ButtonToolbar } from 'rsuite';
import FacebookOfficialIcon from '@rsuite/icons/legacy/FacebookOfficial';
import GooglePlusCircleIcon from '@rsuite/icons/legacy/GooglePlusCircle';
import TwitterIcon from '@rsuite/icons/legacy/Twitter';
import LinkedinIcon from '@rsuite/icons/legacy/Linkedin';
import './Footer.css';
function Footer() {
  return (
    <>




      <section className='footer'>
        <div className="box-container">
          <div className="box">
            <h3>About us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, atque dolores voluptates quis veniam fugiat veritatis ullam pariatur corporis eos, doloremque quo ipsam consectetur, quidem illo. Delectus corrupti aliquid adipisci?</p>

          </div>
          <div className="box">
            <h3>Quick link</h3>
            <a href="#Home" >Home</a>
            <a href="#Team" >OurTeam</a>
            <a href="#Service" >Service</a>
            <a href="#Contact" >Contact</a>
            <a href="#About">About us</a>

          </div>

          <div className="box">
            <h3>Follwo us</h3>
            <a href="#">facebook</a>
            <a href="#">Twitter</a>
            <a href="#">instagram</a>
            <a href="#">Linkedin</a>


          </div>


          <div className="box">
            <h3>Contact us</h3>
            <p><i className='fas fa-phone'>+255 774 661 603</i></p>
            <p><i className='fas fa-envelope'>studysmart@gmail.com</i></p>
            <p><i className='fas fa-map-marker-alt'>Zanzibar Tanzania</i></p>


          </div>


        </div>

        <div className="credit"><p>Copyright &copy; 2023</p>Created by  <span>Ramires  </span> | all rights reserved</div>
        <ButtonToolbar className='Icon'>
          <IconButton icon={<FacebookOfficialIcon />} color="blue" appearance="primary" circle />
          <IconButton icon={<GooglePlusCircleIcon />} color="red" appearance="primary" circle />
          <IconButton icon={<TwitterIcon />} color="cyan" appearance="primary" circle />
          <IconButton icon={<LinkedinIcon />} color="blue" appearance="primary" circle />
        </ButtonToolbar>

      </section>
      <div className="small-footer">
        <div className="mini-content">
          <a href="">Terms of Use</a>
          <a href="">Privacy Policy</a>
            <a href="">Terms and Conditions</a>
          </div>

        <div className="mini-small-content">
          <a href="">Testimonial</a>
          <a href="#Contact">Contact Us</a>
        </div>

        <div className="credit"><p>Copyright &copy; 2023</p>Created by  <span>Ramires  </span> | all rights reserved</div>
      </div>
    </>
  )
}

export default Footer
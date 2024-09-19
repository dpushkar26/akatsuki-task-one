// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="container">
      <div className="wrapper">
        <a href="#" className="footer-logo">
          <img src="./assets/images/akatsuki.png" alt="SimpleBlog Logo" width="150" className="logo-light" />
        </a>

        <p className="footer-text">
          Empowering future developers through coding education and community support.
        </p>
      </div>

      <div className="wrapper">
        <p className="footer-title">Quick Links</p>

        <ul>
          <li>
            <a href="#" className="footer-link">Events</a>
          </li>

          <li>
            <a href="#" className="footer-link">About Us</a>
          </li>

          <li>
            <a href="#" className="footer-link">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="wrapper">
        <p className="footer-title">Legal Stuff</p>

        <ul>
          <li>
            <a href="#" className="footer-link">Privacy Notice</a>
          </li>

          <li>
            <a href="#" className="footer-link">Cookie Policy</a>
          </li>

          <li>
            <a href="#" className="footer-link">Terms Of Use</a>
          </li>
        </ul>
      </div>
    </div>

    <p className="copyright">
      &copy; 2024 <a href="#">Akatsuki Coding Club</a>. All rights reserved.
    </p>
  </footer>
  )
}

export default Footer
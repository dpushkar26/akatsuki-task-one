// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
  return (
    <header>
    <div className="container">
      <nav className="navbar">
        <a href="#">
          <img src="./assets/images/akatsuki.png" alt="SimpleBlog logo" width="150" className="logo-light" />
        </a>

        <div className="btn-group">
          <button className="theme-btn theme-btn-mobile light">
            <ion-icon name="moon" className="moon"></ion-icon>
            <ion-icon name="sunny" className="sun"></ion-icon>
          </button>

          <button className="nav-menu-btn">
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>

        <div className="flex-wrapper">
          <ul className="desktop-nav">
            <li>
              <a href="#" className="nav-link">Home</a>
            </li>

            <li>
              <a href="#" className="nav-link">Events</a>
            </li>

            <li>
              <a href="#" className="nav-link">About Us</a>
            </li>

            <li>
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>

        <div className="mobile-nav">
          <button className="nav-close-btn">
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div className="wrapper">
            <p className="h3 nav-title">Main Menu</p>

            <ul>
              <li className="nav-item">
                <a href="#" className="nav-link">Home</a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">About Me</a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="h3 nav-title">Topics</p>

            <ul>
              <li className="nav-item">
                <a href="#" className="nav-link">Database</a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">Accessibility</a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">Web Performance</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  )
}

export default Navbar
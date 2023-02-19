import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {this.props.title}📰
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#feature">
                    General
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#feature">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#feature">
                    Technology
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#feature">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#feature">
                  Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#feature">
                  Bussiness
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#feature">
                  Sports
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;

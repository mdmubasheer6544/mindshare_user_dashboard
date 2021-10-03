import React from "react";

const Sidenavebar = () => {
  return (
    <div className="col-md-2 btn-custom">
      <a href="" className="navbar-brand">
        <h1
          className="text-white
             font-weight-bold mt-3 display-4"
        >
          Digilnsti
        </h1>
      </a>

      <div className="mt-5">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="" className="nav-link text-light">
              <i className="fas fa-th-large"></i> Dashboard
            
            </a>
          </li>

          <li className="nav-item">
            <a href="" className="nav-link text-light mt-3">
              <i className="fa fa-user"></i> Account Profile
              <i className="fas fa-angle-down ml-5"></i>
            </a>
          </li>

          <li className="nav-item">
            <a href="" className="nav-link text-light mt-3">
              <i className="fab fa-connectdevelop"></i> Organization
              <i className="fas fa-angle-down ml-5"></i>
            </a>
          </li>

          <li className="nav-item">
            <a href="" className="nav-link text-light mt-3">
              <i className="fas fa-database"></i> Master Data
              <i className="fas fa-angle-down ml-5"></i>
            </a>
          </li>

          <li className="nav-item">
            <a href="" className="nav-link text-light mt-3">
              <i className="fas fa-link"></i> Asign Subject
              <i className="fas fa-angle-down ml-5"></i>
            </a>
          </li>

          <li className="nav-item">
            <a href="" className="nav-link text-light mt-3">
              <i className="far fa-calendar-minus"></i> Timing & Calendar
              <i className="fas fa-angle-down ml-5"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-1">
          <img src="https://miro.medium.com/max/1400/1*8TL1WukXmP-nhWwRdb0eBA.png" className="img-fluid" alt="" />
      </div>
    </div>
  );
};

export default Sidenavebar;

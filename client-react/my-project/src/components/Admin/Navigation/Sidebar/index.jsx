import React from "react";
import { Link } from "react-router-dom";
import PATHS from "../../../../contants/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketballBall,
  faAngleRight,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
// import "../../../../assets/scss/sb-admin-2.scss";
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { clickMenuOpen } from '../../../redux/actions';

function Sidebar() {
  // componentDidMount() {
  //   document.getElementById('body').className = 'page-top';
  // }
  // state = {
  //   sidebarToggled: false,
  // }

  // handleSideBarToggle() {
  //   if (this.sidebarToogled === true) {
  //     this.setState({ sidebarToggled: !this.state.sidebarToggled });
  //     document.getElementById('body').className = 'page-top sidebar-toggled';
  //   } else {
  //     this.setState({ sidebarToggled: !this.state.sidebarToggled });
  //     document.getElementById('body').className = 'page-top';
  //   }

  // }

  //   const { clickMenuOpen, toggled } = this.props;
  return (
    <ul
      //   className={
      //     toggled
      //       ? "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      //       : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      //   }
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link
        to={PATHS.HOMEADMIN}
        className="sidebar-brand d-flex align-items-center justify-content-center"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>

        <div className="sidebar-brand-text mx-3">
          <div className="text-white text-decoration-none">
            HOANG PHUC ADMIN
          </div>
        </div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <Link className="nav-link" to={PATHS.DASHBOARD}>
          <FontAwesomeIcon icon={faTachometerAlt} />

          <span className="ml-2">Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <Link className="nav-link" to={PATHS.CATEGORY}>
          {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
          <FontAwesomeIcon icon={faBasketballBall} />

          <span className="ml-2">Category</span>
        </Link>
      </li>
      <hr className="sidebar-divider my-0" />

      {/* <div className="sidebar-heading">Interface</div>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">
              Buttons
            </a>
            <Link className="collapse-item" to="/cards">
              Cards
            </Link>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </a>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <a className="collapse-item" href="utilities-color.html">
              Colors
            </a>
            <a className="collapse-item" href="utilities-border.html">
              Borders
            </a>
            <a className="collapse-item" href="utilities-animation.html">
              Animations
            </a>
            <a className="collapse-item" href="utilities-other.html">
              Other
            </a>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Addons</div>

      <li className="nav-item">
        <Link className="nav-link" to="/charts">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </Link>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </a>
      </li> */}

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button
          //   onClick={() => {
          //     clickMenuOpen            clickMenuOpen();
          //   }}
          className="rounded-circle border-0"
          id="sidebarToggle"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </ul>
  );
}

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ clickMenuOpen }, dispatch);

// const mapStateToProps = store => ({
//   toggled: store.menuState.menuOpen
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
export default Sidebar;

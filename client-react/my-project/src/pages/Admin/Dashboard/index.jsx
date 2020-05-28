import React from "react";

//Navigation
import Sidebar from "../../../components/Admin/Navigation/Sidebar";
import Topbar from "../../../components/Admin/Navigation/Topbar";

// import CardInfo from '../../components/Cards/Info';
// import ChartDonut from '../../components/Charts/Donut';
// import ChartLine from '../../components/Charts/Line';
import PageHeading from "../../../components/Admin/PageHeading";

function Dashboard() {
  //   componentWillMount() {
  //     document.getElementById("body").className = "page-top";
  //   }
  return (
    <div>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />

            <div className="container-fluid">
              <PageHeading title="Dashboard" />

              <div className="row">hello</div>
              <div className="row">
                <div className="col-xl-8 col-lg-6">{/* <ChartLine /> */}</div>
                <div className="col-xl-4 col-lg-6">{/* <ChartDonut /> */}</div>
              </div>
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2020</span>
              </div>
            </div>
          </footer>
        </div>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
}

export default Dashboard;

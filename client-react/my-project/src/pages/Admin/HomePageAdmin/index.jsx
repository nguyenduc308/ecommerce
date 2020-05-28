import React, { useEffect } from "react";
import Topbar from "../../../components/Admin/Navigation/Topbar";
import Sidebar from "../../../components/Admin/Navigation/Sidebar";
import "../../../assets/scss/sb-admin-2.scss";

// import CardInfo from "../../components/Cards/Info";
// import ChartDonut from "../../components/Charts/Donut";
// import ChartLine from "../../components/Charts/Line";
import PageHeading from "../../../components/Admin/PageHeading";

function HomePageAdmin() {
  // useEffect(() => {
  //   document.getElementById("body").className = "page-top";
  // }, []);

  return (
    <div>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />

            <div className="container-fluid">
              <PageHeading title="Dashboard" />

              <div className="row">
                {/* <CardInfo
                  title="Earnings (Monthly)"
                  icon="calendar"
                  color="primary"
                  value="$40,000"
                />

                <CardInfo
                  title="Earnings (Annual)"
                  icon="calendar"
                  color="success"
                  value="215,000"
                />

                <CardInfo
                  title="Tasks"
                  icon="clipboard"
                  color="info"
                  value="50%"
                />

                <CardInfo
                  title="Pending Requests"
                  icon="comments"
                  color="warning"
                  value="18" */}
                />
              </div>
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

export default HomePageAdmin;

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import OffCanvasLeft from "../../Components/OffCanvasLeft";
// import Logo from "../../Components//Logo";
import PageName from "../../Components/PageName";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function ReportHeader() {
  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <React.Fragment>
      <header className="border-bottom">
        <div className="container-fluid mx-0 px-1">
          <div className="d-flex flex-wrap align-items-center">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-start mb-md-0">
              <OffCanvasLeft />
              <div className="content-center">
                {" "}
                <PageName
                  PageNames={"Report"}
                  icons={<SettingsOutlinedIcon />}
                ></PageName>
              </div>
              <li className="display-none-mobile content-center">
                <Link
                  to="/RetailDashboard"
                  className={
                    location.pathname === "/RetailDashboard"
                      ? "nav-link px-3 highlight"
                      : "nav-link px-3"
                  }
                >
                  Retails Dashboard
                </Link>
              </li>
              <li className="display-none-mobile content-center">
                <Link
                  to="/Product_Sold"
                  className={
                    location.pathname === "/Product_Sold"
                      ? "nav-link px-3 highlight"
                      : "nav-link px-3"
                  }
                >
                  Product Sold
                </Link>
              </li>
              <li className="display-none-mobile content-center">
                <Link
                  to="/Sales_Report"
                  className={
                    location.pathname === "/Sales_Report"
                      ? "nav-link px-3 highlight"
                      : "nav-link px-3"
                  }
                >
                  Sales Report
                </Link>
              </li>
              <li className="display-none-mobile content-center">
                <Link
                  to="/payment_Report"
                  className={
                    location.pathname === "/payment_Report"
                      ? "nav-link px-3 highlight"
                      : "nav-link px-3"
                  }
                >
                  Payment Report
                </Link>
              </li>
            </ul>
            <div className="col-6 col-lg-auto mb-3 mb-lg-0 me-lg-3 display-none-mobile">
              <span className="logo">Eurekadesk</span>
            </div>
            {/* <div className="display-none-mobile">
              <Logo />
            </div> */}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default ReportHeader;

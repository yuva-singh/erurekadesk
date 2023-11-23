import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import OffCanvasLeft from "../../Components/OffCanvasLeft";
import PageName from "../../Components/PageName";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
function ManageHeader() {
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
                  PageNames={"Manage"}
                  icons={<SettingsOutlinedIcon />}
                ></PageName>
              </div>
              <li className="display-none-mobile content-center">
                <Link
                  to="/role"
                  className={
                    location.pathname === "/role"
                      ? "nav-link px-3 highlight"
                      : "nav-link px-3"
                  }
                >
                  Roles
                </Link>
              </li>
              <li className="display-none-mobile content-center">
                <Link
                  to="/users"
                  className={
                    location.pathname === "/users"
                      ? "nav-link px-3 highlight"
                      : "nav-link px-3"
                  }
                >
                  Users
                </Link>
              </li>
              <li className="display-none-mobile content-center">
                <Link
                  to="/offers"
                  className={
                    location.pathname === "/offers"
                      ? "nav-link px-3 highlight"
                      : "nav-link px-3"
                  }
                >
                  Offers
                </Link>
              </li>
              <li className="display-none-mobile content-center">
                <Link
                  to="/taxes"
                  className={
                    location.pathname === "/taxes"
                      ? "nav-link px-3 highlight"
                      : "nav-link px-3"
                  }
                >
                  Taxes
                </Link>
              </li>
              <li className="display-none-mobile content-center">
                <Link
                  to="/OutletsAndRegisters"
                  className={
                    location.pathname === "/OutletsAndRegisters"
                      ? "nav-link px-3 highlight"
                      : "nav-link px-3"
                  }
                >
                  Outlets and Registers
                </Link>
              </li>
              <li className="display-none-mobile content-center">
                <Link
                  to="/table"
                  className={
                    location.pathname === "/table"
                      ? "nav-link px-3 highlight"
                      : "nav-link px-3"
                  }
                >
                  Table
                </Link>
              </li>
            </ul>
            <div className="col-6 col-lg-auto mb-3 mb-lg-0 me-lg-3 display-none-mobile">
              <span className="logo">Eurekadesk</span>
            </div>
            
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default ManageHeader;

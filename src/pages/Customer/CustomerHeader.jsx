import React from 'react';
import {useEffect}from 'react';
import { Link, useLocation } from "react-router-dom";
import PageName from "../../Components/PageName";
import OffCanvasLeft from "../../Components/OffCanvasLeft";
import Logo from "../../Components/Logo";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';



function CustomerHeader() {
    let location = useLocation();
    useEffect(() => {}, [location]);
  return (
    <header className="border-bottom">
        <div className="container-fluid px-1 mx-0">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-start mb-md-0">
              <OffCanvasLeft />
             <div className="content-center">
             <PageName PageNames={"Customer"} icons={<GroupOutlinedIcon />}></PageName>
             </div>
              <li className="display-none-mobile content-center">
                <Link
                  to="/customer"
                  className={
                    location.pathname === "/customer" && 'customerProfile'
                      ? "nav-link px-3 highlight"
                      : "nav-link px-3"
                  }
                >
                  Customer
                </Link>
              </li>
              {/* <li className="display-none-mobile content-center">
                <Link
                  to="/group"
                  className={
                    location.pathname === "/group" 
                      ? "nav-link px-3 highlight"
                      : "nav-link px-3"
                  }
                >
                  Group
                </Link>
              </li>  */}
              <li className="display-none-mobile content-center">
                <Link
                  to="/groups"
                  className={
                    location.pathname === "/groups" 
                      ? "nav-link px-3 highlight"
                      : "nav-link px-3"
                  }
                >
                  Groups
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
  )
}

export default CustomerHeader
import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PageName from "../../Components/PageName";
import OffCanvasLeft from "../../Components/OffCanvasLeft";
function FeedbackHeader() {
    let location = useLocation();
    useEffect(() => {}, [location]);
  return (
    <header className="border-bottom">
    <div className="container-fluid px-1 mx-0">
      <div className="d-flex flex-wrap align-items-center justify-content-start justify-content-lg-start">
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-start mb-md-0">
          <OffCanvasLeft />
         <div className="content-center">
         <PageName PageNames={"Feedback"}></PageName>
         </div>
          {/* <li className="display-none-mobile content-center">
            <Link
              to="/"
              className={
                location.pathname === "/" && "/menu"
                  ? "nav-link px-3 highlight"
                  : "nav-link px-3"
              }
            >
              Dine in
            </Link>
          </li>
         */}
         
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

export default FeedbackHeader
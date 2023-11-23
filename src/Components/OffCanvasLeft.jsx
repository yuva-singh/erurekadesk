import React from "react";
import { useEffect } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useLocation, Link } from "react-router-dom";

function OffCanvasLeft() {
  const role = localStorage.getItem("role");
  console.log(role);
  console.log(role.includes("readPOS"));

  let location = useLocation();
  useEffect(() => {}, [location]);
  // const token = sessionStorage.getItem("signature");

  const removeToken = async () => {
    sessionStorage.removeItem("signature");
  };

  return (
    <>
      <li
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        <Link to={{}} className="nav-link px-1">
          <i className="bi bi-list color fs-4 backgroundColorLight px-2"></i>
        </Link>
      </li>
      {/*  */}

      {/*  */}

      <div
        className="offcanvas offcanvas-start"
        tabIndex="{-1}"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header d-flex justify-content-end">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body px-0 py-0">
          <div>
            <ul className="list-unstyled ps-0">
              <li
                className={`my-2 off_canvas_hover ${
                  role === "admin" ? "d-none" : ""
                }`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <Link
                  style={{
                    fontSize: "15px",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  to="/dashboard"
                  className={
                    location.pathname === "/dashboard"
                      ? "nav-link px-2 py-2 Off_canvasButton"
                      : "nav-link px-2 py-2 off_canvas_hover"
                  }
                >
                  <i className="bi bi-house-door"></i> Dashboard
                </Link>
              </li>
              <li
                className={`mb-1 off_canvas_hover collapsed btn-toggle ${
                  role.includes("readPOS") ? "" : "d-none"
                }`}
                data-bs-toggle="collapse"
                data-bs-target={`#2`}
                aria-expanded="false"
                style={{
                  fontSize: "15px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                <div className="d-flex justify-content-between mx-2 py-1">
                  <div className=" d-inline-flex align-items-center rounded border-0">
                    <i className={`bi bi-phone`}></i>{" "}
                    <span className={`mx-1 `}>{"POS"}</span>
                  </div>
                  <div className="mx-2">
                    <KeyboardArrowDownOutlinedIcon />
                  </div>
                </div>
              </li>
              <div className={`collapse`} id={"2"}>
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small px-4">
                  <li className="my-2">
                    <Link
                      to="/home"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                      // onClick={()=>window.location.reload(false)}
                    >
                      {"Dine In"}
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/delivery"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      {"Delivery"}
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/takeAway"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      {"takeAway"}
                    </Link>
                  </li>
                </ul>
              </div>
              {/*  */}
              <li
                className={`mb-1 off_canvas_hover collapsed btn-toggle ${
                  role.includes("manageMenu") ? "" : "d-none"
                }`}
                data-bs-toggle="collapse"
                data-bs-target={`#3`}
                aria-expanded="false"
                style={{
                  fontSize: "15px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                <div className="d-flex justify-content-between mx-2 py-1">
                  <div className=" d-inline-flex align-items-center rounded border-0">
                    <i className={`bi bi-grid`}></i>{" "}
                    <span className="mx-1">{"Menu"}</span>
                  </div>
                  <div className="mx-2">
                    <KeyboardArrowDownOutlinedIcon />
                  </div>
                </div>
              </li>
              <div className={`collapse`} id={"3"}>
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small px-4">
                  <li className="my-2">
                    <Link
                      to="/MenuItem2"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      {"Manage menu"}
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/MenuItem"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      {"Bulk import"}
                    </Link>
                  </li>
                </ul>
              </div>
              {/*  */}
              <li
                className={`mb-1 off_canvas_hover collapsed btn-toggle ${
                  role.includes("manageAll") ? "" : "d-none"
                }`}
                data-bs-toggle="collapse"
                data-bs-target={`#4`}
                aria-expanded="false"
                style={{
                  fontSize: "15px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                <div className="d-flex justify-content-between mx-2 py-1">
                  <div className="d-inline-flex align-items-center rounded border-0">
                    <i className={`bi bi-gear`}></i>{" "}
                    <span className="mx-1">{"Manage"}</span>
                  </div>
                  <div className="mx-2">
                    <KeyboardArrowDownOutlinedIcon />
                  </div>
                </div>
              </li>
              <div className={`collapse`} id={"4"}>
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small px-4">
                  <li className="my-2">
                    <Link
                      to="/role"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      {"Role"}
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/users"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      {"Users"}
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/offers"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      {"Offer"}
                    </Link>
                  </li>

                  <li className="my-2">
                    <Link
                      to="/OutletsAndRegisters"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      {"Outlets and Registers"}
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/table"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      {"Table"}
                    </Link>
                  </li>
                </ul>
              </div>
              {/*  */}
              <li
                className={`mb-1 off_canvas_hover collapsed btn-toggle ${
                  role.includes("readReports") ? "" : "d-none"
                }`}
                data-bs-toggle="collapse"
                data-bs-target={`#5`}
                aria-expanded="false"
                style={{
                  fontSize: "15px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                <div className="d-flex justify-content-between mx-2 py-1">
                  <div className="d-inline-flex align-items-center rounded border-0">
                    <i className={`bi bi-gear`}></i>{" "}
                    <span className="mx-1">{"Report"}</span>
                  </div>
                  <div className="mx-2">
                    <KeyboardArrowDownOutlinedIcon />
                  </div>
                </div>
              </li>
              <div className={`collapse`} id={"5"}>
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small px-4">
                  <li className="my-2">
                    <Link
                      to="/RetailDashboard"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      {"Retail dashboard"}
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/Product_Sold"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      {"Product Sold"}
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/Sales_Report"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      {"Sales Report"}
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/payment_Report"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      {"Payment Report"}
                    </Link>
                  </li>
                </ul>
              </div>
              <li
                className={`mb-1 off_canvas_hover collapsed btn-toggle ${
                  role.includes("manageCustomers") ? "" : "d-none"
                }`}
                data-bs-toggle="collapse"
                data-bs-target={`#6`}
                aria-expanded="false"
                style={{
                  fontSize: "15px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                <div className="d-flex justify-content-between mx-2 py-1">
                  <div className="d-inline-flex align-items-center rounded border-0">
                    <i className={`bi bi-people`}></i>{" "}
                    <span className="mx-1">{"Customers"}</span>
                  </div>
                  <div className="mx-2">
                    <KeyboardArrowDownOutlinedIcon />
                  </div>
                </div>
              </li>
              <div className={`collapse`} id={"6"}>
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small px-4">
                  <li className="my-2">
                    <Link
                      to="/customer"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      {"Customer"}
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/groups"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      {"Group"}
                    </Link>
                  </li>
                </ul>
              </div>

              <li
                className={`my-2 off_canvas_hover ${
                  role.includes("manageFeedback") ? "" : "d-none"
                }`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <Link
                  style={{
                    fontSize: "15px",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  to="/Mysurveys"
                  className={
                    location.pathname === "/Mysurveys"
                      ? "nav-link px-2 py-2 Off_canvasButton"
                      : "nav-link px-2 py-2 off_canvas_hover"
                  }
                >
                  <i className="bi bi-chat-left-text"></i> FeedBack
                </Link>
              </li>
              <hr />
              {/* login */}
              <li
                className="mb-1 off_canvas_hover collapsed btn-toggle"
                data-bs-toggle="collapse"
                data-bs-target={`#7`}
                aria-expanded="false"
                style={{
                  fontSize: "15px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                <div className="d-flex justify-content-between mx-2 py-1">
                  <div className="d-inline-flex align-items-center rounded border-0">
                    <i className={`bi bi-person-circle`}></i>{" "}
                    <span className="mx-1">{"Profile"}</span>
                  </div>
                  <div className="mx-2">
                    <KeyboardArrowDownOutlinedIcon />
                  </div>
                </div>
              </li>
              <div className={`collapse`} id={"7"}>
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small px-4">
                  <li className="my-2">
                    <Link
                      to="/profile"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to={"/"}
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded mx-1"
                      onClick={removeToken}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default OffCanvasLeft;

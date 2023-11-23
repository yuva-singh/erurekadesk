import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import { Switch } from "@mui/material";

function Delivery() {
  const [activeRow, setActiveRow] = useState(1);
  const handleClick = (RowNumber) => {
    setActiveRow(RowNumber);
  };
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row mx-0">
              <div className="col-lg-4 my-2 border p-2 rounded">
                <div className="d-flex justify-content-between">
                  <div
                    style={{ fontSize: "15px", fontWeight: "500" }}
                    className="content-center"
                  >
                    {" "}
                    Accepting Orders
                  </div>
                  <div>
                    {" "}
                    <Switch defaultChecked color="success" />
                  </div>
                </div>
              </div>
              <div className="my-2">
                <div className="text-start">
                  <button
                    className={
                      activeRow === 1
                        ? "delivery-button-active"
                        : "delivery-button payment-hover"
                    }
                    onClick={() => handleClick(1)}
                  >
                    Pending
                  </button>
                  <button
                    className={
                      activeRow === 2
                        ? "delivery-button-active"
                        : "delivery-button payment-hover"
                    }
                    onClick={() => handleClick(2)}
                  >
                    Preparing
                  </button>
                  <button
                    className={
                      activeRow === 3
                        ? "delivery-button-active"
                        : "delivery-button payment-hover"
                    }
                    onClick={() => handleClick(3)}
                  >
                    Ready
                  </button>
                  <button
                    className={
                      activeRow === 4
                        ? "delivery-button-active"
                        : "delivery-button payment-hover"
                    }
                    onClick={() => handleClick(4)}
                  >
                    Delivered
                  </button>
                </div>
              </div>
              {Array.from({ length: 3 }).map(() => (
                <div
                  className="col-lg-12 border rounded backgroundColorLight my-2"
                  style={{
                    display: activeRow === 1 ? "block" : "none",
                  }}
                >
                  <div className="row py-1">
                    <div className="col-1 py-1">
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        #7748
                      </span>
                    </div>
                    <div
                      className="col-lg-2 col-12"
                      style={{
                        fontSize: 14,
                        fontFamily: "'Open Sans', sans-serif",
                      }}
                    >
                      <div>
                        <div>
                          <img
                            src={require("../../img/person.svg")}
                            height={"15px"}
                            width={"15px"}
                            alt=""
                          />{" "}
                          Ankit
                        </div>
                        <div>
                          <i className="bi bi-telephone"></i> 9996604385{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 py-1">
                      <div
                        className="d-flex"
                        style={{
                          fontSize: 14,
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        <div>
                          <img
                            src={require("../../img/list_alt.svg")}
                            height={"16px"}
                            width={"16px"}
                            className="mx-2"
                            alt=""
                          />
                        </div>
                        <div>
                          <span className="fw-bold">1</span> Chilly Chicken |{" "}
                          <span className="fw-bold">1</span> Panner masala |{" "}
                          <span className="fw-bold">2</span> Butter naan |{" "}
                          <span className="fw-bold">3 </span>
                          paranthe <span className="fw-bold">250 Rs</span>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 py-1">
                      <div
                        className="d-flex"
                        style={{
                          fontSize: 14,
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        <div>
                          <img
                            src={require("../../img/home_pin.svg")}
                            height={"18px"}
                            width={"15px"}
                            alt=""
                            className="mx-2"
                          />
                        </div>
                        <div>521/6 Govindpuri, Kalkaji 110019, New Delhi</div>
                      </div>
                    </div>
                    <div className="col-lg-2 py-1">
                      <div
                        className="d-flex"
                        style={{
                          fontSize: 14,
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        <div>
                          <img
                            src={require("../../img//scooter-svgrepo-com 1.svg")}
                            height={"18px"}
                            width={"23px"}
                            alt=""
                            className="mx-2"
                          />
                        </div>
                        <div>Arriving in 5 mins</div>
                      </div>
                    </div>
                    <div className="col-lg-2 py-1">
                      <div className="">
                        <button
                          className="primary-button primary-button:hover my-2"
                          style={{
                            height: "38px",
                            width: "116px",
                            fontWeight: "500",
                            fontSize: "14px",
                            padding: "3px, 19px, 3px, 19px",
                          }}
                        >
                          Accept
                        </button>
                        <button
                          className="secondary-button secondary-button:hover"
                          style={{
                            height: "38px",
                            width: "116px",
                            fontWeight: "500",
                            fontSize: "14px",
                            padding: "3px, 19px, 3px, 19px",
                          }}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* 2nd */}
              {Array.from({ length: 3 }).map(() => (
                <div
                  className="col-lg-12 border rounded backgroundColorLight my-2 py-2"
                  style={{
                    display: activeRow === 2 ? "block" : "none",
                  }}
                >
                  <div className="row py-1">
                    <div className="col-1 py-1">
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        #7748
                      </span>
                    </div>
                    <div
                      className="col-lg-2 col-12"
                      style={{
                        fontSize: 14,
                        fontFamily: "'Open Sans', sans-serif",
                      }}
                    >
                      <div>
                        <div>
                          <img
                            src={require("../../img/person.svg")}
                            height={"15px"}
                            width={"15px"}
                            alt=""
                          />{" "}
                          Ankit
                        </div>
                        <div>
                          <i className="bi bi-telephone"></i> 9996604385{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 py-1">
                      <div
                        className="d-flex"
                        style={{
                          fontSize: 14,
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        <div>
                          <img
                            src={require("../../img/list_alt.svg")}
                            height={"16px"}
                            width={"16px"}
                            className="mx-2"
                            alt=""
                          />
                        </div>
                        <div>
                          <span className="fw-bold">1</span> Chilly Chicken |{" "}
                          <span className="fw-bold">1</span> Panner masala |{" "}
                          <span className="fw-bold">2</span> Butter naan |{" "}
                          <span className="fw-bold">3 </span>
                          paranthe <span className="fw-bold">250 Rs</span>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 py-1">
                      <div
                        className="d-flex"
                        style={{
                          fontSize: 14,
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        <div>
                          <img
                            src={require("../../img/home_pin.svg")}
                            height={"18px"}
                            width={"15px"}
                            alt=""
                            className="mx-2"
                          />
                        </div>
                        <div>521/6 Govindpuri, Kalkaji 110019, New Delhi</div>
                      </div>
                    </div>
                    <div className="col-lg-2 py-1">
                      <div
                        className="d-flex"
                        style={{
                          fontSize: 14,
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        <div>
                          <img
                            src={require("../../img//scooter-svgrepo-com 1.svg")}
                            height={"18px"}
                            width={"23px"}
                            alt=""
                            className="mx-2"
                          />
                        </div>
                        <div>Arriving in 5 mins</div>
                      </div>
                    </div>
                    <div className="col-lg-2 py-1">
                      <div className="">
                      <button
                          className="primary-button primary-button:hover my-2"
                          style={{
                            height: "38px",
                            width: "150px",
                            fontWeight: "500",
                            fontSize: "14px",
                            padding: "3px, 19px, 3px, 19px",
                          }}
                        >
                          Make Ready
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* 3rd */}
              {Array.from({ length: 3 }).map(() => (
                <div
                  className="col-lg-12 border rounded backgroundColorLight my-2 py-3"
                  style={{
                    display: activeRow === 3 ? "block" : "none",
                  }}
                >
                  <div className="row py-1">
                    <div className="col-1 py-1">
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        #7748
                      </span>
                    </div>
                    <div
                      className="col-lg-2 col-12"
                      style={{
                        fontSize: 14,
                        fontFamily: "'Open Sans', sans-serif",
                      }}
                    >
                      <div>
                        <div>
                          <img
                            src={require("../../img/person.svg")}
                            height={"15px"}
                            width={"15px"}
                            alt=""
                          />{" "}
                          Ankit
                        </div>
                        <div>
                          <i className="bi bi-telephone"></i> 9996604385{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 py-1">
                      <div
                        className="d-flex"
                        style={{
                          fontSize: 14,
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        <div>
                          <img
                            src={require("../../img/list_alt.svg")}
                            height={"16px"}
                            width={"16px"}
                            className="mx-2"
                            alt=""
                          />
                        </div>
                        <div>
                          <span className="fw-bold">1</span> Chilly Chicken |{" "}
                          <span className="fw-bold">1</span> Panner masala |{" "}
                          <span className="fw-bold">2</span> Butter naan |{" "}
                          <span className="fw-bold">3 </span>
                          paranthe <span className="fw-bold">250 Rs</span>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 py-1">
                      <div
                        className="d-flex"
                        style={{
                          fontSize: 14,
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        <div>
                          <img
                            src={require("../../img/home_pin.svg")}
                            height={"18px"}
                            width={"15px"}
                            alt=""
                            className="mx-2"
                          />
                        </div>
                        <div>521/6 Govindpuri, Kalkaji 110019, New Delhi</div>
                      </div>
                    </div>
                    <div className="col-lg-2 py-1">
                      <div
                        className="d-flex"
                        style={{
                          fontSize: 14,
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        <div>
                          <img
                            src={require("../../img//scooter-svgrepo-com 1.svg")}
                            height={"18px"}
                            width={"23px"}
                            alt=""
                            className="mx-2"
                          />
                        </div>
                        <div>Arriving in 5 mins</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* 4th */}
              {Array.from({ length: 2 }).map(() => (
                <div
                  className="col-lg-12 border rounded backgroundColorLight my-1 py-3"
                  style={{
                    display: activeRow === 4 ? "block" : "none",
                  }}
                >
                  <div className="row py-1">
                    <div className="col-1 py-1">
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        #7748
                      </span>
                    </div>
                    <div
                      className="col-lg-2 col-12"
                      style={{
                        fontSize: 14,
                        fontFamily: "'Open Sans', sans-serif",
                      }}
                    >
                      <div>
                        <div>
                          <img
                            src={require("../../img/person.svg")}
                            height={"15px"}
                            width={"15px"}
                            alt=""
                          />{" "}
                          Ankit
                        </div>
                        <div>
                          <i className="bi bi-telephone"></i> 9996604385{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 py-1">
                      <div
                        className="d-flex"
                        style={{
                          fontSize: 14,
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        <div>
                          <img
                            src={require("../../img/list_alt.svg")}
                            height={"16px"}
                            width={"16px"}
                            className="mx-2"
                            alt=""
                          />
                        </div>
                        <div>
                          <span className="fw-bold">1</span> Chilly Chicken |{" "}
                          <span className="fw-bold">1</span> Panner masala |{" "}
                          <span className="fw-bold">2</span> Butter naan |{" "}
                          <span className="fw-bold">3 </span>
                          paranthe <span className="fw-bold">250 Rs</span>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 py-1">
                      <div
                        className="d-flex"
                        style={{
                          fontSize: 14,
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        <div>
                          <img
                            src={require("../../img/home_pin.svg")}
                            height={"18px"}
                            width={"15px"}
                            alt=""
                            className="mx-2"
                          />
                        </div>
                        <div>521/6 Govindpuri, Kalkaji 110019, New Delhi</div>
                      </div>
                    </div>
                    <div className="col-lg-2 py-1">
                      <div
                        className=""
                        style={{
                          fontSize: 14,
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        <div>
                          <div>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-half text-warning"></i>
                          </div>
                        </div>
                        <div>Food was really nice. </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delivery;

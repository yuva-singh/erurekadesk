import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuHeader from "../Manage/MenuHeader";
import FeedbackMenu from "./FeedbackMenu";

function TestSurvey() {
  const [activeRow, setActiveRow] = useState(1);
  const [activesubRow, setActivesubRow] = useState(1);

  const handleClick = (RowNumber) => {
    setActiveRow(RowNumber);
  };

  const handlesubClick = (RowsubNumber) => {
    setActivesubRow(RowsubNumber);
  };

  return (
    <React.Fragment>
      <FeedbackMenu />
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-lg-4 border-end px-4">
            <p style={{ fontSize: "13px", fontWeight: "400" }}>
              <Link to="/">
                {" "}
                <span style={{ color: "#187A87" }}>Feedback</span>
              </Link>
              <Link to="/">
                {" "}
                <span style={{ color: "#187A87" }}>/My surveys</span>
              </Link>
              <Link to=""> / Test survey/</Link>
            </p>
            <button className="button-5">
              <i className="bi bi-caret-left"></i> <Link to="/Mysurveys"> My Surveys</Link>
            </button>
            <p
              className="my-2"
              style={{
                fontSize: "22px",
                fontWeight: "600",
              }}
            >
              Test survey
            </p>
            <p
              className="my-3"
              style={{
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Q 1: Please rate your overall experience?
            </p>
            <hr />
            <div className="row justify-content-between my-2">
              <div className="col-lg-6 col-6">Surveyed</div>
              <div className="col-lg-6 col-6">23 Oct, 2023</div>
            </div>
            <div className="row justify-content-between my-2">
              <div className="col-lg-6 col-6">last edit</div>
              <div className="col-lg-6 col-6">23 Oct, 2023</div>
            </div>
            <div className="row justify-content-between my-2">
              <div className="col-lg-6 col-6">Surveyed</div>
              <div className="col-lg-6 col-6">40</div>
            </div>
            <div className="row justify-content-between my-2">
              <div className="col-lg-6 col-6">Responses</div>
              <div className="col-lg-6 col-6">29</div>
            </div>
            <div className="row justify-content-between my-2">
              <div className="col-lg-6 col-6">Delivery method</div>
              <div className="col-lg-6 col-6">Email, Webpage and SMS</div>
            </div>
          </div>
          <div className="col-lg-8 col-12">
            <div className="d-flex mx-4">
              <button
                className={
                  activeRow === 1 ? "btn-btn highlight-underline" : "btn-btn"
                }
                style={{
                  fontSize: "13px",
                  fontWeight: "400",
                  color: "#222222BF",
                }}
                onClick={() => handleClick(1)}
              >
                OverView
              </button>
              <button
                className={
                  activeRow === 2 ? "btn-btn highlight-underline" : "btn-btn"
                }
                style={{
                  fontSize: "13px",
                  fontWeight: "400",
                  color: "#222222BF",
                }}
                onClick={() => handleClick(2)}
              >
                Individual Responses
              </button>
            </div>
            {/* first */}
            <div
              style={{
                display: activeRow === 1 ? "block" : "none",
                paddingRight: "50px",
                paddingLeft: "50px",
              }}
            >
              <div className="row my-3 mx-2">
                <div className="col-lg-11 content-center mt-4">
                  <i className="bi bi-star-fill text-warning fs-1 mx-2"></i>
                  <i className="bi bi-star-fill text-warning fs-1 mx-2"></i>
                  <i className="bi bi-star-fill text-warning fs-1 mx-2"></i>
                  <i className="bi bi-star-fill text-warning fs-1 mx-2"></i>
                  <i className="bi bi-star-half text-warning fs-1 mx-2"></i>
                </div>
                <div
                  className="col-lg-11 content-center mt-4"
                  style={{ fontSize: "22px", fontWeight: "600" }}
                >
                  4 out of 5
                </div>
                <div
                  className="col-lg-11 content-center mt-3"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                >
                  based on 29 ratings
                </div>
              </div>
              <div
                className="row justify-content-around border rounded"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.09)", overflow: "auto" }}
              >
                <div
                  className="col-4 my-2"
                  style={{ fontSize: "14px", fontWeight: "400", color: "grey" }}
                >
                  latest response on
                </div>
                <div
                  className="col-4 my-2"
                  style={{ fontSize: "14px", fontWeight: "400", color: "grey" }}
                >
                  Active For
                </div>
                <div
                  className="col-3 my-2"
                  style={{ fontSize: "14px", fontWeight: "400", color: "grey" }}
                >
                  Today’s Responses
                </div>
                <div
                  className="col-4 my-2"
                  style={{ fontSize: "16px", fontWeight: "600" }}
                >
                  25 Oct, 2020
                </div>
                <div
                  className="col-4 my-2"
                  style={{ fontSize: "16px", fontWeight: "600" }}
                >
                  9 Days
                </div>
                <div
                  className="col-3 my-2"
                  style={{ fontSize: "16px", fontWeight: "600" }}
                >
                  {" "}
                  <p className="mx-5">23</p>{" "}
                </div>
              </div>
              <div className="row content-center mt-4">
                <div className="col-lg-10  my-2">
                  <div className="rounded">
                    <div className="p-3">
                      <div>
                        <div className="my-2">
                          <div className="row">
                            <div className="col-lg-1">5 star</div>
                            <div className="col-lg-10 col-10">
                              <div
                                className="progress d-flex justify-content-between"
                                role="progressbar"
                                aria-label="Example with label"
                                aria-valuenow={60}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ height: "35px" }}
                              >
                                <div
                                  className="progress-bar px-2"
                                  style={{
                                    width: "82%",
                                    backgroundColor: "rgba(248, 157, 20, 1)",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="col-lg-1 col-2"> 82% </div>
                          </div>
                        </div>
                        <div className="my-2">
                          <div className="row">
                            <div className="col-lg-1">3 star</div>
                            <div className="col-lg-10 col-10">
                              <div
                                className="progress d-flex justify-content-between"
                                role="progressbar"
                                aria-label="Example with label"
                                aria-valuenow={60}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ height: "35px" }}
                              >
                                <div
                                  className="progress-bar px-2"
                                  style={{
                                    width: "50%",
                                    backgroundColor: "rgba(248, 157, 20, 1)",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="col-lg-1 col-2"> 50% </div>
                          </div>
                        </div>
                        <div className="my-2">
                          <div className="row">
                            <div className="col-lg-1">1 star</div>
                            <div className="col-lg-10 col-10">
                              <div
                                className="progress d-flex justify-content-between"
                                role="progressbar"
                                aria-label="Example with label"
                                aria-valuenow={60}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ height: "35px" }}
                              >
                                <div
                                  className="progress-bar px-2"
                                  style={{
                                    width: "69%",
                                    backgroundColor: "rgba(248, 157, 20, 1)",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="col-lg-1 col-2"> 69% </div>
                          </div>
                        </div>
                        <div className="my-2">
                          <div className="row">
                            <div className="col-lg-1">4 star</div>
                            <div className="col-lg-10 col-10">
                              <div
                                className="progress d-flex justify-content-between"
                                role="progressbar"
                                aria-label="Example with label"
                                aria-valuenow={60}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ height: "35px" }}
                              >
                                <div
                                  className="progress-bar px-2"
                                  style={{
                                    width: "25%",
                                    backgroundColor: "rgba(248, 157, 20, 1)",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="col-lg-1 col-2"> 25% </div>
                          </div>
                        </div>
                        <div className="my-2">
                          <div className="row">
                            <div className="col-lg-1">2 star</div>
                            <div className="col-lg-10 col-10">
                              <div
                                className="progress d-flex justify-content-between"
                                role="progressbar"
                                aria-label="Example with label"
                                aria-valuenow={60}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ height: "35px" }}
                              >
                                <div
                                  className="progress-bar px-2"
                                  style={{
                                    width: "35%",
                                    backgroundColor: "rgba(248, 157, 20, 1)",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="col-lg-1 col-2"> 35% </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd */}
            <div
              style={{
                display: activeRow === 2 ? "block" : "none",
              }}
            >
              <div className="row my-3 mx-2">
              <div className="col-lg-11">
            <div className="row mx-0">
              <div className="my-2">
              <div className="text-start">
                  <button
                    className={
                      activesubRow === 1
                        ? "delivery-button-active my-1"
                        : "delivery-button payment-hover my-1"
                    }
                    onClick={() => handlesubClick(1)}
                  >
                   1 Star
                  </button>
                  <button
                    className={
                        activesubRow === 2
                        ? "delivery-button-active my-1"
                        : "delivery-button payment-hover my-1"
                    }
                    onClick={() => handlesubClick(2)}
                  >
                    2 Star
                  </button>
                  <button
                    className={
                      activesubRow === 3
                        ? "delivery-button-active my-1"
                        : "delivery-button payment-hover my-1"
                    }
                    onClick={() => handlesubClick(3)}
                  >
                    3 Star
                  </button>
                  <button
                    className={
                      activesubRow === 4
                        ? "delivery-button-active my-1"
                        : "delivery-button payment-hover my-1"
                    }
                    onClick={() => handlesubClick(4)}
                  >
                    4 Star
                  </button>
                  <button
                    className={
                      activesubRow === 4
                        ? "delivery-button-active my-1"
                        : "delivery-button payment-hover my-1"
                    }
                    onClick={() => handlesubClick(4)}
                  >
                    5 Star
                  </button>
                </div>
              {Array.from({ length: 3 }).map(() => (
                <div
                  className="col-lg-12 border rounded backgroundColorLight my-2"
                  style={{
                    display: activesubRow === 1 ? "block" : "none",
                  }}
                >
                  <div className="row py-1 justify-content-between mx-2">
                    <div
                      className="col-lg-2 col-12 my-1"
                      style={{
                        fontSize: 14,
                        fontFamily: "'Open Sans', sans-serif",
                      }}
                    >
                      <div>
                        <div style={{
                          fontSize: "14px",
                          fontWeight: "600",
                        }}>
                          Ankit
                        </div>
                        <div>
                          <i className="bi bi-telephone"></i> 9996604385{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 py-1 my-1">
                    <i className="bi bi-star-fill text-warning fs-5 mx-1"></i>
                  <i className="bi bi-star-fill text-warning fs-5 mx-1"></i>
                  <i className="bi bi-star-fill text-warning fs-5 mx-1"></i>
                  <i className="bi bi-star-fill text-warning fs-5 mx-1"></i>
                  <i className="bi bi-star-half text-warning fs-5 mx-1"></i>
                    </div>
                    <hr />
                    <div className="col-lg-11 content-center my-2">
                    If you are not into gaming then this product add lit in your life very must handy and portable, elegant and stylish 
                    </div>
                  </div>
                </div>
              ))}
              {/* 2nd
              {Array.from({ length: 3 }).map(() => (
                <div
                  className="col-lg-12"
                  style={{
                    display: activesubRow === 2 ? "block" : "none",
                  }}
                >
                </div>
              ))}
              {/* 3rd /}
              {Array.from({ length: 3 }).map(() => (
                <div
                  className="col-lg-12"
                  style={{
                    display: activesubRow === 3 ? "block" : "none",
                  }}
                >
                </div>
              ))}
              {/* 4th/}
              {Array.from({ length: 2 }).map(() => (
                <div
                  className="col-lg-12 "
                  style={{
                    display: activesubRow === 4 ? "block" : "none",
                  }}
                >
                
              ))} */}
              </div>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default TestSurvey;

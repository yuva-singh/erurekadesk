import React, { useState } from "react";
import FeedbackHeader from "./FeedbackHeader";
import { Link } from "react-router-dom";

function HowItsWork() {
  const [activeRow, setActiveRow] = useState(1);
  const handleClick = (RowNumber) => {
    setActiveRow(RowNumber);
  };
  return (
    <>
      {/* <FeedbackHeader /> */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-11 my-3">
            <div className="d-flex justify-content-between">
            <Link className="text-white" to="/Mysurveys">
              <button
                type="button"
                className="secondary-button"
                style={{
                  height: "38px",
                  width: "70px",
                  fontWeight: "500",
                  fontSize: "15px",
                  padding: "3px, 19px, 3px, 19px",
                }}
              >
                Exit
              </button>
             </Link>
              <button
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  background: "transparent",
                  border: "none",
                }}
                className="content-center"
              >
                Custom Satisfaction Survey
              </button>
              <Link className="text-white" to="/deliveryMethod">
              <button
                type="button"
                className="primary-button"
                style={{
                  height: "38px",
                  width: "105px",
                  fontWeight: "500",
                  fontSize: "15px",
                  padding: "9px, 23px, 9px, 23px",
                }}
              >
               
                  Next
                
              </button>
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="my-2">
            <div className="text-center">
              <button
                style={{ width: "120" }}
                className= {
                  activeRow === 1
                    ? "btn-btn highlight-underline"
                    : "btn-btn"
                }
                onClick={() => handleClick(1)}
              >
                How it works
              </button>
           |
              <button
                className={
                  activeRow === 2
                    ? "btn-btn highlight-underline"
                    : "btn-btn"
                }
                onClick={() => handleClick(2)}
              >
                Preview
              </button>
            </div>
          </div>
          <div
            className="col-lg-12 my-4"
            style={{
              display: activeRow === 1 ? "block" : "none",
            }}
          >
            <div className="row">
              <div className="col-lg-6 col-xl-6 p-2">
                <div className="p-3">
                  <div className="row">
                    <div className="col-lg-9 col-lg-10">
                      <div style={{ fontWeight: "600", fontSize: "20px" }}>
                        Customer satisfaction
                      </div>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#22222299",
                        }}
                      >
                        To get feedback on customer experience, use CSAT
                        surveys, which can be sent via email or displayed on web
                        pages.
                      </p>
                      {/* <button
                        type="button"
                        className="primary-button primary-button:hover"
                        style={{
                          height: "37px",
                          width: "137px",
                          fontWeight: "500",
                          fontSize: "15px",
                          padding: "3px, 19px, 3px, 19px",
                        }}
                      >
                        <Link to={"/howItsWork"} className="text-white">
                          Get Started
                        </Link>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-2">
                <div className="p-3">
                  <div className="row">
                    <div className="col-lg-10">
                      <div style={{ fontWeight: "600", fontSize: "20px" }}>
                        Automate your actions
                      </div>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#22222299",
                        }}
                      >
                        Use your survey results to trigger workflows that
                        automate tasks, send emails, or even rotate customers
                        back to their contact owners.
                      </p>
                      {/* <button
                        type="button"
                        className="primary-button primary-button:hover"
                        style={{
                          height: "37px",
                          width: "137px",
                          fontWeight: "500",
                          fontSize: "15px",
                          padding: "3px, 19px, 3px, 19px",
                        }}
                      >
                        <Link to={"/howItsWork"} className="text-white">
                          Get Started
                        </Link>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-2">
                <div className="p-3">
                  <div className="row">
                    <div className="col-lg-10">
                      <div style={{ fontWeight: "600", fontSize: "20px" }}>
                        Set your questions
                      </div>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#22222299",
                        }}
                      >
                        Use follow-up questions to learn more about what
                        customers love and what they want to see improved. You
                        can also send personalized thank-you messages based on
                        their rating.
                      </p>
                      {/* <button
                        type="button"
                        className="primary-button primary-button:hover"
                        style={{
                          height: "37px",
                          width: "137px",
                          fontWeight: "500",
                          fontSize: "15px",
                          padding: "3px, 19px, 3px, 19px",
                        }}
                      >
                        <Link to={"/howItsWork"} className="text-white">
                          Get Started
                        </Link>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-2">
                <div className="p-3">
                  <div className="row">
                    <div className="col-lg-10">
                      <div style={{ fontWeight: "600", fontSize: "20px" }}>
                        Analyze your data
                      </div>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#22222299",
                        }}
                      >
                        Track customer sentiment over time by analyzing survey
                        responses in reports. Use this data to inform your
                        customer support strategy.
                      </p>
                      {/* <button
                        type="button"
                        className="primary-button primary-button:hover"
                        style={{
                          height: "37px",
                          width: "137px",
                          fontWeight: "500",
                          fontSize: "15px",
                          padding: "3px, 19px, 3px, 19px",
                        }}
                      >
                        <Link to={"/howItsWork"} className="text-white">
                          Get Started
                        </Link>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-2">
                <div className="p-3">
                  <div className="row">
                    <div className="col-lg-10">
                      <div style={{ fontWeight: "600", fontSize: "20px" }}>
                        Survey the right people
                      </div>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#22222299",
                        }}
                      >
                        Target your survey to the right people at the right
                        time. Use HubSpot lists or criteria to filter your
                        audience. Schedule your survey to send when you want and
                        notify the right people when you receive a response.
                      </p>
                      {/* <button
                        type="button"
                        className="primary-button primary-button:hover"
                        style={{
                          height: "37px",
                          width: "137px",
                          fontWeight: "500",
                          fontSize: "15px",
                          padding: "3px, 19px, 3px, 19px",
                        }}
                      >
                        <Link to={"/howItsWork"} className="text-white">
                          Get Started
                        </Link>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-12 my-4"
            style={{
              display: activeRow === 2 ? "block" : "none",
            }}
          >
            <div className="row">
              <div className="col-lg-6 p-2">
                <div className="p-3">
                  <div className="row">
                    <div className="col-lg-10">
                      <div style={{ fontWeight: "600", fontSize: "20px" }}>
                        Customer satisfaction
                      </div>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#22222299",
                        }}
                      >
                        To get feedback on customer experience, use CSAT
                        surveys, which can be sent via email or displayed on web
                        pages.
                      </p>
                      {/* <button
                        type="button"
                        className="primary-button primary-button:hover"
                        style={{
                          height: "37px",
                          width: "137px",
                          fontWeight: "500",
                          fontSize: "15px",
                          padding: "3px, 19px, 3px, 19px",
                        }}
                      >
                        <Link to={"/howItsWork"} className="text-white">
                          Get Started
                        </Link>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-2">
                <div className="p-3">
                  <div className="row">
                    <div className="col-lg-10">
                      <div style={{ fontWeight: "600", fontSize: "20px" }}>
                        Automate your actions
                      </div>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#22222299",
                        }}
                      >
                        Use your survey results to trigger workflows that
                        automate tasks, send emails, or even rotate customers
                        back to their contact owners.
                      </p>
                      {/* <button
                        type="button"
                        className="primary-button primary-button:hover"
                        style={{
                          height: "37px",
                          width: "137px",
                          fontWeight: "500",
                          fontSize: "15px",
                          padding: "3px, 19px, 3px, 19px",
                        }}
                      >
                        <Link to={"/howItsWork"} className="text-white">
                          Get Started
                        </Link>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-2">
                <div className="p-3">
                  <div className="row">
                    <div className="col-lg-10">
                      <div style={{ fontWeight: "600", fontSize: "20px" }}>
                        Set your questions
                      </div>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#22222299",
                        }}
                      >
                        Use follow-up questions to learn more about what
                        customers love and what they want to see improved. You
                        can also send personalized thank-you messages based on
                        their rating.
                      </p>
                      {/* <button
                        type="button"
                        className="primary-button primary-button:hover"
                        style={{
                          height: "37px",
                          width: "137px",
                          fontWeight: "500",
                          fontSize: "15px",
                          padding: "3px, 19px, 3px, 19px",
                        }}
                      >
                        <Link to={"/howItsWork"} className="text-white">
                          Get Started
                        </Link>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-2">
                <div className="p-3">
                  <div className="row">
                    <div className="col-lg-10">
                      <div style={{ fontWeight: "600", fontSize: "20px" }}>
                        Analyze your data
                      </div>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#22222299",
                        }}
                      >
                        Track customer sentiment over time by analyzing survey
                        responses in reports. Use this data to inform your
                        customer support strategy.
                      </p>
                      {/* <button
                        type="button"
                        className="primary-button primary-button:hover"
                        style={{
                          height: "37px",
                          width: "137px",
                          fontWeight: "500",
                          fontSize: "15px",
                          padding: "3px, 19px, 3px, 19px",
                        }}
                      >
                        <Link to={"/howItsWork"} className="text-white">
                          Get Started
                        </Link>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-2">
                <div className="p-3">
                  <div className="row">
                    <div className="col-lg-10">
                      <div style={{ fontWeight: "500", fontSize: "20px" }}>
                        Survey the right people
                      </div>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#22222299",
                        }}
                      >
                        Target your survey to the right people at the right
                        time. Use HubSpot lists or criteria to filter your
                        audience. Schedule your survey to send when you want and
                        notify the right people when you receive a response.
                      </p>
                      {/* <button
                        type="button"
                        className="primary-button primary-button:hover"
                        style={{
                          height: "37px",
                          width: "137px",
                          fontWeight: "500",
                          fontSize: "15px",
                          padding: "3px, 19px, 3px, 19px",
                        }}
                      >
                        <Link to={"/howItsWork"} className="text-white">
                          Get Started
                        </Link>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItsWork;

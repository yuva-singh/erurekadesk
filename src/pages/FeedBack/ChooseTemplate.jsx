import React from "react";
import FeedbackHeader from "./FeedbackHeader";
import { Link } from "react-router-dom";

function ChooseTemplate() {
  return (
    <>
      {/* <FeedbackHeader /> */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-11 my-4">
            <div className="row">
              <h3
                style={{
                  fontWeight: "600",
                  fontSize: "22px",
                  color: "#222222D1",
                }}
              >
                Choose a Template
              </h3>
              <h5
                style={{
                  fontWeight: "500",
                  fontSize: "15px",
                  color: "#22222299",
                }}
                className="pt-3"
              >
                {" "}
                Survey Templates
              </h5>
              <div className="col-lg-6 p-2">
                <div className="border rounded p-3">
                  <div className="row">
                    <div className="col-lg-3 content-center">
                      <img
                        src={require("../../img/8551067 1.png")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-9">
                      <div style={{ fontWeight: "500", fontSize: "16px" }}>
                        Customer satisfaction
                      </div>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#22222299",
                        }}
                      >
                        Customer satisfaction survey is a short questionnaire
                        that businesses use to collect feedback from customers
                        about their products, services, and overall experience.
                        The results are used to improve customer satisfaction.
                      </p>
                      <button
                        type="button"
                        className="primary-button primary-button:hover"
                        style={{
                          height: "37px",
                          width: "137px",
                          fontWeight: "500",
                          fontSize: "12px",
                          padding: "3px, 19px, 3px, 19px",
                        }}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-2">
                <div className="border rounded p-3">
                  <div className="row">
                    <div className="col-lg-3 content-center">
                      <img
                        src={require("../../img/7809946 1.png")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-9">
                      <div style={{ fontWeight: "500", fontSize: "16px" }}>
                        Customer loyalty
                      </div>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#22222299",
                        }}
                      >
                        Net promoter survey is a single question survey that
                        asks customers how likely they are to recommend a
                        company, product, or service to a friend or colleague.
                        The results are used to measure customer loyalty and
                        satisfaction.
                      </p>
                      <Link to={"/howItsWork"} className="text-white">
                      <button
                        type="button"
                        className="primary-button primary-button:hover"
                        style={{
                          height: "37px",
                          width: "137px",
                          fontWeight: "500",
                          fontSize: "12px",
                          padding: "3px, 19px, 3px, 19px",
                        }}
                      >
                        
                          Get Started
                      </button>
                      </Link>
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

export default ChooseTemplate;

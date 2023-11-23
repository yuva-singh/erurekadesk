import React, { useState } from "react";

import { Link } from "react-router-dom";
import { TextField, Switch } from "@mui/material";
import FeedbackHeader from "./FeedbackHeader";

function DeliveryMethod() {
  return (
    <>
    {/* <FeedbackHeader /> */}
      <div className="container-fluid border-bottom">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-reverse my-3">
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
              <Link className="text-white" to="/survey">
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
        </div>
      
      <div className="container-fluid">
        <div className="row flex-row-reverse d-flex justify-content-center">
       
          
          <div className="col-lg-6 backgroundColorLight border-start py-1">
            <div style={{ fontWeight: "600", fontSize: "22px" }}>Preview</div>
            <div className="content-center">
            <div>
            <img
                src={require("../../../src/img/phone.png")}
                className="img-fluid"
                alt=""
              />
            </div>
            </div>
          </div>
          <div className="col-lg-6 my-2">
          <div style={{ fontWeight: "600", fontSize: "22px" }}>Delivery method</div>
            <div className="row">
              <div className="col-lg-12 p-2 ">
                <div className="border rounded p-1 onboarding_hover">
                  <div className="row">
                    <div className="col-lg-3 content-center">
                      <img
                        src={require("../../../src/img/webpage.png")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-9 my-5">
                      <div style={{ fontWeight: "500", fontSize: "16px" }}>
                        Webpage
                      </div>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#22222299",
                        }}
                      >
                        Show customers a feedback form as soon as they makes the
                        payment using QR code
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 p-2">
                <div className="border rounded p-1 onboarding_hover">
                  <div className="row">
                    <div className="col-lg-3 content-center">
                      <img
                        src={require("../../../src/img/sms.png")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-9 my-5">
                      <div style={{ fontWeight: "500", fontSize: "16px" }}>
                        SMS
                      </div>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#22222299",
                        }}
                      >
                        Make a survey to send via SMS to your contacts and
                        customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 p-2">
                <div className="border rounded p-1 onboarding_hover">
                  <div className="row">
                    <div className="col-lg-3 content-center">
                      <img
                        src={require("../../../src/img/whatsapp.png")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-9 my-5">
                      <div style={{ fontWeight: "500", fontSize: "16px" }}>
                        Whatsapp
                      </div>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#22222299",
                        }}
                      >
                        Make a survey to send via whatsapp to your contacts and
                        customers
                      </p>
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

export default DeliveryMethod;

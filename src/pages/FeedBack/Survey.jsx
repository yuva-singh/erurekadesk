import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import { TextField, Switch } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { addFeedbackAPI } from "../../Components/api/api_base_url";
import axios from "axios";

function Survey() {
  const token = sessionStorage.getItem("signature");
  const [activeRow, setActiveRow] = useState(1);
  const [activeSubRow, setActiveSubRow] = useState(1);
  const [name, setname] = useState([]);
  const [type, settype] = useState([]);
  const [question, setquestion] = useState([]);
  const [description, setdescription] = useState([]);
  const [showCommentBox, setshowCommentBox] = useState([]);
  const [redirectionLink, setredirectionLink] = useState([]);
  const [acknowledgementMsg, setacknowledgementMsg] = useState([]);
  const [deliveryMethod, setdeliveryMethod] = useState([]);
  const [isActive, setisActive] = useState([]);
  const [status, setstatus] = useState([]);

  const body = {
    name: name,
    type: "test",
    question: question,
    description: description,
    showCommentBox: true,
    redirectionLink: redirectionLink,
    acknowledgementMsg: [
      "Sorry for you misconvenience",
      "Thanks for telling us about your experience",
      "Glad you liked us",
    ],
    status: "published",
    deliveryMethod: "checkout",
    isActive: true,
  };
  localStorage.setItem("name", name);
  localStorage.setItem("question", question);
  localStorage.setItem("description", description);
  localStorage.setItem("redirectionLink", redirectionLink);
  console.log(body);

  const handleClick = (RowNumber) => {
    setActiveRow(RowNumber);
  };

  const handleSubClick = (RowSubNumber) => {
    setActiveSubRow(RowSubNumber);
  };

  const addFeedbackFunc = async () => {
    try {
      const api = await axios.post(`${addFeedbackAPI}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await api.data;
      console.log(api.res);
      alert("successful");
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
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
                className="content-center custom_button"
              >
                Custom Satisfaction Survey{" "}
                <p className="content-center custom_button color my-2 mx-3">
                  Edit
                </p>
              </button>
              <button
                type="button"
                className="primary-button"
                style={{
                  height: "38px",
                  width: "160px",
                  fontWeight: "500",
                  fontSize: "15px",
                  padding: "9px, 23px, 9px, 23px",
                }}
              >
                <Link className="text-white" to="/review">
                  Review and publish
                </Link>
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="row mx-0">
              <div className="my-2">
                <div className="text-start">
                  <button
                    className={
                      activeRow === 1
                        ? "delivery-button-active my-1"
                        : "delivery-button payment-hover my-1"
                    }
                    onClick={() => handleClick(1)}
                  >
                    Survey
                  </button>
                  <button
                    className={
                      activeRow === 2
                        ? "delivery-button-active my-1"
                        : "delivery-button payment-hover my-1"
                    }
                    onClick={() => handleClick(2)}
                  >
                    Thankyou
                  </button>
                  <button
                    className={
                      activeRow === 3
                        ? "delivery-button-active my-1"
                        : "delivery-button payment-hover my-1"
                    }
                    onClick={() => handleClick(3)}
                  >
                    Audience
                  </button>
                  <button
                    className={
                      activeRow === 4
                        ? "delivery-button-active my-1"
                        : "delivery-button payment-hover my-1"
                    }
                    onClick={() => handleClick(4)}
                  >
                    Automation
                  </button>
                </div>
              </div>

              <div
                className="col-lg-12 my-2 py-2"
                style={{
                  display: activeRow === 1 ? "block" : "none",
                }}
              >
                <div className="container">
                  <div className="row">
                    <h3
                      style={{
                        fontWeight: "600",
                        fontSize: "22px",
                        color: "#222222D1",
                      }}
                    >
                      Make the survey your own
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
                      Customize your email setting, question and appearance. A
                      clear, simple question will give a higher response rate.
                    </h5>
                    <div className="my-3">
                      <label
                        htmlFor=""
                        style={{ fontSize: "13px", fontWeight: "600" }}
                      >
                        Survey Question
                      </label>
                      <TextField
                        color="warning"
                        id="outlined-basic"
                        required
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={question}
                        onChange={(e) => setquestion(e.target.value)}
                      />
                    </div>
                    <div className="my-3">
                      <label
                        htmlFor=""
                        style={{ fontSize: "13px", fontWeight: "600" }}
                      >
                        Survey Question Description
                      </label>
                      <TextField
                        color="warning"
                        id="outlined-basic"
                        required
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                      />
                    </div>
                    <div className="my-3">
                      <label htmlFor="" style={{ fontSize: "12px" }}>
                        Color
                      </label>
                      <div className="row content-start mb-2">
                        #
                        <div className="col-3 col-lg-2 border mx-2 text-center">
                          F87B09
                        </div>
                        <div className="col-3">
                          {" "}
                          <input type="color" value="#f87b09"></input>
                        </div>
                      </div>
                    </div>
                    <div
                      className="my-2 p-3 rounded"
                      style={{
                        boxShadow:
                          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                      }}
                    >
                      <div className="d-flex justify-content-between">
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
                          Back
                        </button>
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
                          onClick={() => handleClick(2)}
                        >
                          <Link className="text-white">Next</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2nd */}
              <div
                className="col-lg-12 my-2 py-3"
                style={{
                  display: activeRow === 2 ? "block" : "none",
                }}
              >
                <div className="container">
                  <div className="row">
                    <h3
                      style={{
                        fontWeight: "600",
                        fontSize: "22px",
                        color: "#222222D1",
                      }}
                    >
                      Customize your thankyou message
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
                      Show your appreciation and let customers know that you
                      value their feedback.
                    </h5>

                    <div className="my-2">
                      <div className="text-start">
                        <button
                          style={{ width: "150px" }}
                          className={
                            activeSubRow === 1
                              ? "delivery-button-active my-1"
                              : "delivery-button payment-hover my-1"
                          }
                          onClick={() => handleSubClick(1)}
                        >
                          Unhappy (0- 1 Stars)
                        </button>
                        <button
                          style={{ width: "115px" }}
                          className={
                            activeSubRow === 2
                              ? "delivery-button-active my-1"
                              : "delivery-button payment-hover my-1"
                          }
                          onClick={() => handleSubClick(2)}
                        >
                          Neutral (3 Star)
                        </button>
                        <button
                          style={{ width: "130px" }}
                          className={
                            activeSubRow === 3
                              ? "delivery-button-active my-1"
                              : "delivery-button payment-hover my-1"
                          }
                          onClick={() => handleSubClick(3)}
                        >
                          Happy (4-5 Star)
                        </button>
                      </div>
                    </div>

                    {/* 1st */}
                    <div
                      className="col-lg-12 my-2 py-2"
                      style={{
                        display: activeSubRow === 1 ? "block" : "none",
                      }}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="my-3">
                            <label
                              htmlFor=""
                              style={{ fontSize: "13px", fontWeight: "600" }}
                            >
                              Title
                            </label>
                            <TextField
                              color="warning"
                              id="outlined-basic"
                              required
                              fullWidth
                              size="small"
                              variant="outlined"
                              value={name}
                              onChange={(e) => setname(e.target.value)}
                            />
                          </div>
                          <div className="my-3">
                            <label
                              htmlFor=""
                              style={{ fontSize: "13px", fontWeight: "600" }}
                            >
                              Description
                            </label>
                            <TextField
                              color="warning"
                              id="outlined-basic"
                              required
                              fullWidth
                              size="small"
                              variant="outlined"
                            />
                          </div>
                          <div className=" my-3">
                            <label
                              style={{
                                fontFamily: "'Open Sans', sans-serif",
                                fontSize: "13px",
                                fontWeight: "600",
                              }}
                            >
                              Upload Image
                            </label>
                            <input
                              type="file"
                              className="form-control p-5 my-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2nd */}
                    <div
                      className="col-lg-12 my-1 py-3"
                      style={{
                        display: activeSubRow === 2 ? "block" : "none",
                      }}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="my-3">
                            <label
                              htmlFor=""
                              style={{ fontSize: "13px", fontWeight: "600" }}
                            >
                              Title
                            </label>
                            <TextField
                              color="warning"
                              id="outlined-basic"
                              required
                              fullWidth
                              size="small"
                              variant="outlined"
                            />
                          </div>
                          <div className="my-3">
                            <label
                              htmlFor=""
                              style={{ fontSize: "13px", fontWeight: "600" }}
                            >
                              Description
                            </label>
                            <TextField
                              color="warning"
                              id="outlined-basic"
                              required
                              fullWidth
                              size="small"
                              variant="outlined"
                            />
                          </div>
                          <div className=" my-3">
                            <label
                              style={{
                                fontFamily: "'Open Sans', sans-serif",
                                fontSize: "13px",
                                fontWeight: "600",
                              }}
                            >
                              Upload Image
                            </label>
                            <input
                              type="file"
                              className="form-control p-5 my-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3rd */}
                    <div
                      className="col-lg-12 my-1 py-3"
                      style={{
                        display: activeSubRow === 3 ? "block" : "none",
                      }}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="my-3">
                            <label
                              htmlFor=""
                              style={{ fontSize: "13px", fontWeight: "600" }}
                            >
                              Title
                            </label>
                            <TextField
                              color="warning"
                              id="outlined-basic"
                              required
                              fullWidth
                              size="small"
                              variant="outlined"
                            />
                          </div>
                          <div className="my-3">
                            <label
                              htmlFor=""
                              style={{ fontSize: "13px", fontWeight: "600" }}
                            >
                              Description
                            </label>
                            <TextField
                              color="warning"
                              id="outlined-basic"
                              required
                              fullWidth
                              size="small"
                              variant="outlined"
                            />
                          </div>
                          <div className=" my-3">
                            <label
                              style={{
                                fontFamily: "'Open Sans', sans-serif",
                                fontSize: "13px",
                                fontWeight: "600",
                              }}
                            >
                              Upload Image
                            </label>
                            <input
                              type="file"
                              className="form-control p-5 my-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="my-2 p-3 rounded"
                      style={{
                        boxShadow:
                          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                      }}
                    >
                      <div className="d-flex justify-content-between">
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
                          onClick={() => handleClick(1)}
                        >
                          Back
                        </button>
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
                          onClick={() => handleClick(3)}
                        >
                          <Link className="text-white">Next</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3rd */}
              <div
                className="col-lg-11 my-1 py-3"
                style={{
                  display: activeRow === 3 ? "block" : "none",
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-11">
                      <h3
                        style={{
                          fontWeight: "600",
                          fontSize: "22px",
                          color: "#222222D1",
                        }}
                        className="pt-3"
                      >
                        Set your follow-up action
                      </h3>
                      <h5
                        style={{
                          fontWeight: "500",
                          fontSize: "15px",
                          color: "#22222299",
                        }}
                        className="pt-1"
                      >
                        {" "}
                        Redirect users with positive feedback to you rate you
                        also at any other platform for eg: google, zomato,
                        swiggy, dineout etc.
                      </h5>
                    </div>

                    <div className="mt-5">
                      <div className="row justify-content-between">
                        <div
                          className="col-lg-6"
                          style={{
                            fontWeight: "600",
                            fontSize: "15px",
                            color: "#222222D1",
                          }}
                        >
                          Ask for review on other platform
                        </div>

                        <div className="col-lg-2 pr-2">
                          <Switch
                            color="success"
                            value={showCommentBox}
                            onChange={(e) => setshowCommentBox(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="my-1">
                      <div className="row justify-content-between">
                        <div className="col-lg-6">
                          <p
                            style={{
                              fontWeight: "600",
                              fontSize: "15px",
                              color: "#222222",
                              opacity: "30%",
                            }}
                          >
                            Include customers who rated 4 Star
                          </p>
                        </div>

                        <div className="col-lg-2 pr-2">
                          <Switch defaultChecked color="success" />
                        </div>
                      </div>
                    </div>
                    <div className="my-3">
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          color="warning"
                        >
                          Choose Platform
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          color="warning"
                          placeholder="Select Value"
                          label="select category"
                        >
                          <MenuItem value="10">Google</MenuItem>
                          <MenuItem value="20">Zomato</MenuItem>
                          <MenuItem value="30">Swiggy</MenuItem>
                          <MenuItem value="40">Other</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="my-3">
                      <label
                        htmlFor=""
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                          marginBottom: "15px",
                        }}
                      >
                        Google Review link
                      </label>
                      <TextField
                        color="warning"
                        id="outlined-basic"
                        required
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={redirectionLink}
                        onChange={(e) => setredirectionLink(e.target.value)}
                      />
                    </div>
                    <div
                      className="my-2 p-3 rounded"
                      style={{
                        boxShadow:
                          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                      }}
                    >
                      <div className="d-flex justify-content-between">
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
                          onClick={() => handleClick(2)}
                        >
                          Back
                        </button>
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
                          onClick={() => handleClick(4)}
                        >
                          <Link className="text-white">Next</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4th */}
              <div
                className="col-lg-12 my-1 py-3"
                style={{
                  display: activeRow === 4 ? "block" : "none",
                }}
              >
                <div className="my-3">
                  <FormControl fullWidth>
                    <label
                      htmlFor=""
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        marginBottom: "8px",
                      }}
                    >
                      Who gets new notification about survey responses
                    </label>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      color="warning"
                      placeholder="Select Value"
                    >
                      <MenuItem value="10">Google</MenuItem>
                      <MenuItem value="20">Zomato</MenuItem>
                      <MenuItem value="30">Swiggy</MenuItem>
                      <MenuItem value="40">Other</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="my-2">
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      marginBottom: "15px",
                    }}
                  >
                    Notify via
                  </label>
                  <div className="text-start">
                    <button
                      style={{ width: "150px", borderRadius: "30px" }}
                      className={
                        activeSubRow === 1
                          ? "delivery-button-active my-1"
                          : "delivery-button payment-hover my-1"
                      }
                      onClick={() => handleSubClick(1)}
                    >
                      In-app notification
                    </button>
                    <button
                      style={{ width: "115px", borderRadius: "30px" }}
                      className={
                        activeSubRow === 2
                          ? "delivery-button-active my-1"
                          : "delivery-button payment-hover my-1"
                      }
                      onClick={() => handleSubClick(2)}
                    >
                      Whatsapp
                    </button>
                    <button
                      style={{ width: "130px", borderRadius: "30px" }}
                      className={
                        activeSubRow === 3
                          ? "delivery-button-active my-1"
                          : "delivery-button payment-hover my-1"
                      }
                      onClick={() => handleSubClick(3)}
                    >
                      SMS
                    </button>
                    <button
                      style={{ width: "130px", borderRadius: "30px" }}
                      className={
                        activeSubRow === 4
                          ? "delivery-button-active my-1"
                          : "delivery-button payment-hover my-1"
                      }
                      onClick={() => handleSubClick(4)}
                    >
                      Email
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="row justify-content-between">
                    <div className="col-lg-6">
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "15px",
                          color: "#222222",
                        }}
                      >
                        Only notify about survey responses that contain comment
                        or low rating ( 3 - 1)
                      </p>
                    </div>

                    <div className="col-lg-2 pr-2">
                      <Switch defaultChecked color="success" />
                    </div>
                  </div>
                  <div
                    className="my-2 p-3 rounded"
                    style={{
                      boxShadow:
                        "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                    }}
                  >
                    <div className="d-flex justify-content-between">
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
                        onClick={() => handleClick(3)}
                      >
                        Back
                      </button>
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
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        <Link className="text-white">Next</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-success" id="exampleModalLabel2">
                Preview
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row content-center">
                  <div className="col-lg-6 my-2 fw-bold">question:</div>
                  <div className="col-lg-6">{name}</div>
                  <div className="col-lg-6 my-2 fw-bold">question:</div>
                  <div className="col-lg-6">{question}</div>
                  <div className="col-lg-6 my-2 fw-bold">description:</div>
                  <div className="col-lg-6">{description}</div>
                  <div className="col-lg-6 my-2 fw-bold">redirectionLink:</div>
                  <div className="col-lg-6">{redirectionLink}</div>
                  <div className="col-11 my-3 text-center">
                    <button
                      type="submit"
                      className="primary-button text-center"
                      style={{
                        height: "38px",
                        width: "105px",
                        fontWeight: "500",
                        fontSize: "15px",
                        padding: "9px, 23px, 9px, 23px",
                      }}
                      onClick={addFeedbackFunc}
                    >
                      <Link className="text-white">Submit</Link>
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="row">
              <div className="col-lg-4 my-2 text-center">
               <img src={require('../../img/img1.jpeg')} className="rounded img-fluid" alt="" />
               <div >Recommended</div>
              </div>
              <div className="col-lg-4 my-2 text-center">
               <img src={require('../../img/img1.jpeg')} className="rounded img-fluid" alt="" />
               <div >Recommended</div>
              </div>
              <div className="col-lg-4 my-2 text-center">
               <img src={require('../../img/img1.jpeg')} className="rounded img-fluid" alt="" />
               <div >Recommended</div>
              </div>
              <div className="col-lg-4 my-2 text-center">
               <img src={require('../../img/img1.jpeg')} className="rounded img-fluid" alt="" />
               <div >Recommended</div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Survey;

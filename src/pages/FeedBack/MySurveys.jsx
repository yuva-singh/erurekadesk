import React, { useEffect, useState } from "react";
import MenuHeader from "../Manage/MenuHeader";
import { Link } from "react-router-dom";
import FeedbackMenu from "./FeedbackMenu";
import axios from "axios";
import { getFeedbackAPI } from "../../Components/api/api_base_url";

function MySurveys() {
  const token = sessionStorage.getItem("signature");
  const [activeRow, setActiveRow] = useState(1);
  const [activeotherRow, setactiveotherRow] = useState(1);
  const [feedback, setfeedback] = useState([]);

  const handleClick = (RowNumber) => {
    setActiveRow(RowNumber);
  };
  const handleotherClick = (otherRowNumber) => {
    setactiveotherRow(otherRowNumber);
  };

  const getFeedbackFunc = async () => {
    try {
      const res = await axios.get(getFeedbackAPI, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setfeedback(res.data);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    } 
    // finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    getFeedbackFunc();
  }, []);

  return (
    <React.Fragment>
      <FeedbackMenu />
      <div className="container-fluid backgroundColorLight">
        <div className="row justify-content-center">
          <div className="col-lg-1 col-3 border">
            <div className="row content-center">
              <div className="col-lg-10 mt-3">
                <div
                  className={
                    activeotherRow === 1
                      ? "row border content-center my-2 mt-5 rounded bg-light"
                      : "row content-center rounded my-2 mt-5"
                  }
                  onClick={() => handleotherClick(1)}
                >
                  <div
                    className="col-lg-11 content-center mt-4"
                    style={{ fontSize: "52px", fontWeight: "500" }}
                  >
                    5
                  </div>
                  <div
                    className="col-lg-11 content-center mb-4"
                    style={{ fontSize: "14px", fontWeight: "500" }}
                  >
                    Surveys
                  </div>
                </div>
              </div>
              <div className="col-lg-10">
                <div
                  className={
                    activeotherRow === 2
                      ? "row border content-center rounded bg-light"
                      : "row content-center rounded"
                  }
                  onClick={() => handleotherClick(2)}
                >
                  <div
                    className="col-lg-11 content-center mt-3"
                    style={{ fontSize: "35px", fontWeight: "500" }}
                  >
                    3
                  </div>
                  <div
                    className="col-lg-11 content-center mb-3"
                    style={{ fontSize: "14px", fontWeight: "500" }}
                  >
                    Published
                  </div>
                </div>
              </div>
              <div className="col-lg-10">
                <div
                  className={
                    activeotherRow === 3
                      ? "row border content-center rounded bg-light"
                      : "row content-center rounded"
                  }
                  onClick={() => handleotherClick(3)}
                >
                  <div
                    className="col-lg-11 content-center mt-3"
                    style={{ fontSize: "35px", fontWeight: "500" }}
                  >
                    2
                  </div>
                  <div
                    className="col-lg-11 content-center mb-3"
                    style={{ fontSize: "14px", fontWeight: "500" }}
                  >
                    Drafts
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-11 col-9 border">
            <div className="row justify-content-center">
              <div className="col-lg-3 my-3">
                <div className="input-group design-input border rounded">
                  <span
                    className="input-group-text  bg-white border-0"
                    id="basic-addon1"
                  >
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col-lg-3 my-3 d-flex">
                <p
                  className="my-2 mx-4"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                >
                  Survey Type:
                </p>
                <button className="button-5" style={{ width: "200px" }}>
                  Customer satisfaction <i className="bi bi-caret-down"></i>
                </button>
              </div>
              <div className="col-lg-4 my-3 d-flex">
                <p
                  className="my-2 mx-4"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                >
                  Delivery:{" "}
                </p>
                <button className="button-5" style={{ width: "100px" }}>
                  Email <i className="bi bi-caret-down"></i>
                </button>
              </div>
              <div className="row my-2" style={{ overflow: "auto" }}>
                <div className="d-flex">
                  <span
                    className={
                      activeRow === 1
                        ? "btn-btn highlight-underline"
                        : "btn-btn"
                    }
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      cursor: "pointer",
                    }}
                    onClick={() => handleClick(1)}
                  >
                    All
                  </span>
                  <span
                    className={
                      activeRow === 2
                        ? "btn-btn highlight-underline"
                        : "btn-btn"
                    }
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      cursor: "pointer",
                    }}
                    onClick={() => handleClick(2)}
                  >
                    Published
                  </span>
                  <span
                    className={
                      activeRow === 3
                        ? "btn-btn highlight-underline"
                        : "btn-btn"
                    }
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      cursor: "pointer",
                    }}
                    onClick={() => handleClick(3)}
                  >
                    Drafts
                  </span>
                  <span
                    className={
                      activeRow === 4
                        ? "btn-btn highlight-underline"
                        : "btn-btn"
                    }
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      cursor: "pointer",
                    }}
                    onClick={() => handleClick(4)}
                  >
                    Deleted
                  </span>
                </div>
              </div>
              <div
                className="col-lg-12 rounded"
                style={{
                  display: activeotherRow === 1 ? "block" : "none",
                }}
              >
                <div className="border rounded" style={{ overflow: "auto" }}>
                  <div
                    className="col-lg-12"
                    style={{
                      display: activeRow === 1 ? "block" : "none",
                    }}
                  >
                    <table className="table table-hover rounded">
                      <thead>
                        <tr
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          className="table-light"
                        >
                          <td>Name </td>
                          <td>Created on</td>
                          <td>Last Edited</td>
                          <td>Surveyed</td>
                          <td>Responses</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 10 }).map((item, index) => (
                          <tr style={{ fontSize: "13px" }}>
                            <td style={{ color: "#187A87", fontWeight: "500" }}>
                              <div className="row">
                                <div className="col-lg-12 mx-1">
                                  <Link to="/Testsurvey">
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "#187A87",
                                      }}
                                    >
                                      {" "}
                                      Test Survey 1{" "}
                                    </p>
                                  </Link>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <div
                                    className="mx-1 my-1"
                                    style={{
                                      width: "12px",
                                      height: "12px",
                                      borderRadius: "50%",
                                      backgroundColor: "#7FE35C80",
                                    }}
                                  ></div>
                                  <p
                                    style={{
                                      color: "#222222",
                                      fontWeight: "400",
                                      fontSize: "12px",
                                    }}
                                  >
                                    Draft | Webpage
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              25 Oct, 2020
                              {/* <div
                     style={{
                       color: "#f17300",
                       textDecoration: "underline",
                       cursor: "pointer",
                     }}
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal2"
                   >
                     Edit
                   </div> */}
                            </td>
                            <td>25 Oct, 2020</td>
                            <td>59</td>
                            <td>29</td>
                            <td>
                              <div className="row justify-content-start">
                                <div
                                  className="col-lg-6 content-center mx-1 br-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-eye"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                                <div
                                  className="col-lg-6 content-center mx-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-pencil"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="col-lg-12"
                    style={{
                      display: activeRow === 2 ? "block" : "none",
                    }}
                  >
                    <table className="table table-hover rounded">
                      <thead>
                        <tr
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          className="table-light"
                        >
                          <td>Name </td>
                          <td>Created on</td>
                          <td>Last Edited</td>
                          <td>Surveyed</td>
                          <td>Responses</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 7 }).map((item, index) => (
                          <tr style={{ fontSize: "13px" }}>
                            <td style={{ color: "#187A87", fontWeight: "500" }}>
                              <div className="row">
                                <div
                                  className="col-lg-12 mx-1"
                                >
                                  <Link to="/Testsurvey">
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "#187A87",
                                      }}
                                    >
                                      {" "}
                                      Test Survey 1{" "}
                                    </p>
                                  </Link>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <div
                                    className="mx-1 my-1"
                                    style={{
                                      width: "12px",
                                      height: "12px",
                                      borderRadius: "50%",
                                      backgroundColor: "#7FE35C80",
                                    }}
                                  ></div>
                                  <p
                                    style={{
                                      color: "#222222",
                                      fontWeight: "400",
                                      fontSize: "12px",
                                    }}
                                  >
                                    Draft | Webpage
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              25 Oct, 2020
                              {/* <div
                     style={{
                       color: "#f17300",
                       textDecoration: "underline",
                       cursor: "pointer",
                     }}
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal2"
                   >
                     Edit
                   </div> */}
                            </td>
                            <td>25 Oct, 2020</td>
                            <td>59</td>
                            <td>29</td>
                            <td>
                              <div className="row justify-content-start">
                                <div
                                  className="col-lg-6 content-center mx-1 br-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-eye"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                                <div
                                  className="col-lg-6 content-center mx-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-pencil"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="col-lg-12"
                    style={{
                      display: activeRow === 3 ? "block" : "none",
                    }}
                  >
                    <table className="table table-hover rounded">
                      <thead>
                        <tr
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          className="table-light"
                        >
                          <td>Name </td>
                          <td>Created on</td>
                          <td>Last Edited</td>
                          <td>Surveyed</td>
                          <td>Responses</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 10 }).map((item, index) => (
                          <tr style={{ fontSize: "13px" }}>
                            <td style={{ color: "#187A87", fontWeight: "500" }}>
                              <div className="row">
                                <div
                                  className="col-lg-12 mx-1"
                                >
                                  <Link to="/Testsurvey">
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "#187A87",
                                      }}
                                    >
                                      {" "}
                                      Test Survey 1{" "}
                                    </p>
                                  </Link>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <div
                                    className="mx-1 my-1"
                                    style={{
                                      width: "12px",
                                      height: "12px",
                                      borderRadius: "50%",
                                      backgroundColor: "#7FE35C80",
                                    }}
                                  ></div>
                                  <p
                                    style={{
                                      color: "#222222",
                                      fontWeight: "400",
                                      fontSize: "12px",
                                    }}
                                  >
                                    Draft | Webpage
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              25 Oct, 2020
                              {/* <div
                     style={{
                       color: "#f17300",
                       textDecoration: "underline",
                       cursor: "pointer",
                     }}
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal2"
                   >
                     Edit
                   </div> */}
                            </td>
                            <td>25 Oct, 2020</td>
                            <td>59</td>
                            <td>29</td>
                            <td>
                              <div className="row justify-content-start">
                                <div
                                  className="col-lg-6 content-center mx-1 br-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-eye"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                                <div
                                  className="col-lg-6 content-center mx-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-pencil"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="col-lg-12"
                    style={{
                      display: activeRow === 4 ? "block" : "none",
                    }}
                  >
                    <table className="table table-hover rounded">
                      <thead>
                        <tr
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          className="table-light"
                        >
                          <td>Name </td>
                          <td>Created on</td>
                          <td>Last Edited</td>
                          <td>Surveyed</td>
                          <td>Responses</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 3 }).map((item, index) => (
                          <tr style={{ fontSize: "13px" }}>
                            <td style={{ color: "#187A87", fontWeight: "500" }}>
                              <div className="row">
                                <div
                                  className="col-lg-12 mx-1"
                                >
                                  <Link to="/Testsurvey">
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "#187A87",
                                      }}
                                    >
                                      {" "}
                                      Test Survey 1{" "}
                                    </p>
                                  </Link>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <div
                                    className="mx-1 my-1"
                                    style={{
                                      width: "12px",
                                      height: "12px",
                                      borderRadius: "50%",
                                      backgroundColor: "#7FE35C80",
                                    }}
                                  ></div>
                                  <p
                                    style={{
                                      color: "#222222",
                                      fontWeight: "400",
                                      fontSize: "12px",
                                    }}
                                  >
                                    Draft | Webpage
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              25 Oct, 2020
                              {/* <div
                     style={{
                       color: "#f17300",
                       textDecoration: "underline",
                       cursor: "pointer",
                     }}
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal2"
                   >
                     Edit
                   </div> */}
                            </td>
                            <td>25 Oct, 2020</td>
                            <td>59</td>
                            <td>29</td>
                            <td>
                              <div className="row justify-content-start">
                                <div
                                  className="col-lg-6 content-center mx-1 br-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-eye"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                                <div
                                  className="col-lg-6 content-center mx-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-pencil"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* <div className="row justify-content-center">
                <div className="col-lg-3 mb-2">
                  <div>
                    <div>
                      <Stack spacing={2}>
                        <Pagination
                          count={3}
                          variant="outlined"
                          color="warning"
                        />
                      </Stack>
                    </div>
                  </div>
                </div>
              </div> */}
                </div>
              </div>
              <div
                className="col-lg-12 rounded"
                style={{
                  display: activeotherRow === 2 ? "block" : "none",
                }}
              >
                <div className="border rounded" style={{ overflow: "auto" }}>
                  <div
                    className="col-lg-12"
                    style={{
                      display: activeRow === 1 ? "block" : "none",
                    }}
                  >
                    <table className="table table-hover rounded">
                      <thead>
                        <tr
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          className="table-light"
                        >
                          <td>Name </td>
                          <td>Created on</td>
                          <td>Last Edited</td>
                          <td>Surveyed</td>
                          <td>Responses</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {feedback.map((data, index) => (
                          <tr key={data.id} style={{ fontSize: "13px" }}>
                            <td style={{ color: "#187A87", fontWeight: "500" }}>
                              <div className="row">
                                <div
                                  className="col-lg-12 mx-1"
                                >
                                  <Link to="/Testsurvey">
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "#187A87",
                                      }}
                                    >
                                      {" "}
                                      {data.name}{" "}
                                    </p>
                                  </Link>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <div
                                    className="mx-1 my-1"
                                    style={{
                                      width: "12px",
                                      height: "12px",
                                      borderRadius: "50%",
                                      backgroundColor: "#7FE35C80",
                                    }}
                                  ></div>
                                  <p
                                    style={{
                                      color: "#222222",
                                      fontWeight: "400",
                                      fontSize: "12px",
                                    }}
                                  >
                                    Draft | Webpage
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              {data.createdAt}
                              {/* <div
                     style={{
                       color: "#f17300",
                       textDecoration: "underline",
                       cursor: "pointer",
                     }}
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal2"
                   >
                     Edit
                   </div> */}
                            </td>
                            <td>{data.updatedAt}</td>
                            <td>59</td>
                            <td>29</td>
                            <td>
                              <div className="row justify-content-start">
                                <div
                                  className="col-lg-6 content-center mx-1 br-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-eye"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                                <div
                                  className="col-lg-6 content-center mx-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-pencil"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="col-lg-12"
                    style={{
                      display: activeRow === 2 ? "block" : "none",
                    }}
                  >
                    <table className="table table-hover rounded">
                      <thead>
                        <tr
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          className="table-light"
                        >
                          <td>Name </td>
                          <td>Created on</td>
                          <td>Last Edited</td>
                          <td>Surveyed</td>
                          <td>Responses</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 7 }).map((item, index) => (
                          <tr style={{ fontSize: "13px" }}>
                            <td style={{ color: "#187A87", fontWeight: "500" }}>
                              <div className="row">
                                <div
                                  className="col-lg-12 mx-1"
                                 
                                >
                                  <Link to="/Testsurvey">
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "#187A87",
                                      }}
                                    >
                                      {" "}
                                      Test Survey 1{" "}
                                    </p>
                                  </Link>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <div
                                    className="mx-1 my-1"
                                    style={{
                                      width: "12px",
                                      height: "12px",
                                      borderRadius: "50%",
                                      backgroundColor: "#7FE35C80",
                                    }}
                                  ></div>
                                  <p
                                    style={{
                                      color: "#222222",
                                      fontWeight: "400",
                                      fontSize: "12px",
                                    }}
                                  >
                                    Draft | Webpage
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              25 Oct, 2020
                              {/* <div
                     style={{
                       color: "#f17300",
                       textDecoration: "underline",
                       cursor: "pointer",
                     }}
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal2"
                   >
                     Edit
                   </div> */}
                            </td>
                            <td>25 Oct, 2020</td>
                            <td>59</td>
                            <td>29</td>
                            <td>
                              <div className="row justify-content-start">
                                <div
                                  className="col-lg-6 content-center mx-1 br-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-eye"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                                <div
                                  className="col-lg-6 content-center mx-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-pencil"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="col-lg-12"
                    style={{
                      display: activeRow === 3 ? "block" : "none",
                    }}
                  >
                    <table className="table table-hover rounded">
                      <thead>
                        <tr
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          className="table-light"
                        >
                          <td>Name </td>
                          <td>Created on</td>
                          <td>Last Edited</td>
                          <td>Surveyed</td>
                          <td>Responses</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 10 }).map((item, index) => (
                          <tr style={{ fontSize: "13px" }}>
                            <td style={{ color: "#187A87", fontWeight: "500" }}>
                              <div className="row">
                                <div
                                  className="col-lg-12 mx-1"
                            
                                >
                                  <Link to="/Testsurvey">
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "#187A87",
                                      }}
                                    >
                                      {" "}
                                      Test Survey 1{" "}
                                    </p>
                                  </Link>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <div
                                    className="mx-1 my-1"
                                    style={{
                                      width: "12px",
                                      height: "12px",
                                      borderRadius: "50%",
                                      backgroundColor: "#7FE35C80",
                                    }}
                                  ></div>
                                  <p
                                    style={{
                                      color: "#222222",
                                      fontWeight: "400",
                                      fontSize: "12px",
                                    }}
                                  >
                                    Draft | Webpage
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              25 Oct, 2020
                              {/* <div
                     style={{
                       color: "#f17300",
                       textDecoration: "underline",
                       cursor: "pointer",
                     }}
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal2"
                   >
                     Edit
                   </div> */}
                            </td>
                            <td>25 Oct, 2020</td>
                            <td>59</td>
                            <td>29</td>
                            <td>
                              <div className="row justify-content-start">
                                <div
                                  className="col-lg-6 content-center mx-1 br-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-eye"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                                <div
                                  className="col-lg-6 content-center mx-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-pencil"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="col-lg-12"
                    style={{
                      display: activeRow === 4 ? "block" : "none",
                    }}
                  >
                    <table className="table table-hover rounded">
                      <thead>
                        <tr
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          className="table-light"
                        >
                          <td>Name </td>
                          <td>Created on</td>
                          <td>Last Edited</td>
                          <td>Surveyed</td>
                          <td>Responses</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 3 }).map((item, index) => (
                          <tr style={{ fontSize: "13px" }}>
                            <td style={{ color: "#187A87", fontWeight: "500" }}>
                              <div className="row">
                                <div
                                  className="col-lg-12 mx-1"
                                  
                                >
                                  <Link to="/Testsurvey">
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "#187A87",
                                      }}
                                    >
                                      {" "}
                                      Test Survey 1{" "}
                                    </p>
                                  </Link>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <div
                                    className="mx-1 my-1"
                                    style={{
                                      width: "12px",
                                      height: "12px",
                                      borderRadius: "50%",
                                      backgroundColor: "#7FE35C80",
                                    }}
                                  ></div>
                                  <p
                                    style={{
                                      color: "#222222",
                                      fontWeight: "400",
                                      fontSize: "12px",
                                    }}
                                  >
                                    Draft | Webpage
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              25 Oct, 2020
                              {/* <div
                     style={{
                       color: "#f17300",
                       textDecoration: "underline",
                       cursor: "pointer",
                     }}
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal2"
                   >
                     Edit
                   </div> */}
                            </td>
                            <td>25 Oct, 2020</td>
                            <td>59</td>
                            <td>29</td>
                            <td>
                              <div className="row justify-content-start">
                                <div
                                  className="col-lg-6 content-center mx-1 br-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-eye"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                                <div
                                  className="col-lg-6 content-center mx-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-pencil"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* <div className="row justify-content-center">
                <div className="col-lg-3 mb-2">
                  <div>
                    <div>
                      <Stack spacing={2}>
                        <Pagination
                          count={3}
                          variant="outlined"
                          color="warning"
                        />
                      </Stack>
                    </div>
                  </div>
                </div>
              </div> */}
                </div>
              </div>
              <div
                className="col-lg-12 rounded"
                style={{
                  display: activeotherRow === 3 ? "block" : "none",
                }}
              >
                <div className="border rounded" style={{ overflow: "auto" }}>
                  <div
                    className="col-lg-12"
                    style={{
                      display: activeRow === 1 ? "block" : "none",
                    }}
                  >
                    <table className="table table-hover rounded">
                      <thead>
                        <tr
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          className="table-light"
                        >
                          <td>Name </td>
                          <td>Created on</td>
                          <td>Last Edited</td>
                          <td>Surveyed</td>
                          <td>Responses</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 7 }).map((item, index) => (
                          <tr style={{ fontSize: "13px" }}>
                            <td style={{ color: "#187A87", fontWeight: "500" }}>
                              <div className="row">
                                <div
                                  className="col-lg-12 mx-1"
                                  
                                >
                                  <Link to="/Testsurvey">
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "#187A87",
                                      }}
                                    >
                                      {" "}
                                      Test Survey 1{" "}
                                    </p>
                                  </Link>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <div
                                    className="mx-1 my-1"
                                    style={{
                                      width: "12px",
                                      height: "12px",
                                      borderRadius: "50%",
                                      backgroundColor: "#7FE35C80",
                                    }}
                                  ></div>
                                  <p
                                    style={{
                                      color: "#222222",
                                      fontWeight: "400",
                                      fontSize: "12px",
                                    }}
                                  >
                                    Draft | Webpage
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              25 Oct, 2020
                              {/* <div
                     style={{
                       color: "#f17300",
                       textDecoration: "underline",
                       cursor: "pointer",
                     }}
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal2"
                   >
                     Edit
                   </div> */}
                            </td>
                            <td>25 Oct, 2020</td>
                            <td>59</td>
                            <td>29</td>
                            <td>
                              <div className="row justify-content-start">
                                <div
                                  className="col-lg-6 content-center mx-1 br-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-eye"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                                <div
                                  className="col-lg-6 content-center mx-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-pencil"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="col-lg-12"
                    style={{
                      display: activeRow === 2 ? "block" : "none",
                    }}
                  >
                    <table className="table table-hover rounded">
                      <thead>
                        <tr
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          className="table-light"
                        >
                          <td>Name </td>
                          <td>Created on</td>
                          <td>Last Edited</td>
                          <td>Surveyed</td>
                          <td>Responses</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 7 }).map((item, index) => (
                          <tr style={{ fontSize: "13px" }}>
                            <td style={{ color: "#187A87", fontWeight: "500" }}>
                              <div className="row">
                                <div
                                  className="col-lg-12 mx-1"
                                 
                                >
                                <Link to="/Testsurvey">
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "#187A87",
                                      }}
                                    >
                                      {" "}
                                      Test Survey 1{" "}
                                    </p>
                                  </Link>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <div
                                    className="mx-1 my-1"
                                    style={{
                                      width: "12px",
                                      height: "12px",
                                      borderRadius: "50%",
                                      backgroundColor: "#7FE35C80",
                                    }}
                                  ></div>
                                  <p
                                    style={{
                                      color: "#222222",
                                      fontWeight: "400",
                                      fontSize: "12px",
                                    }}
                                  >
                                    Draft | Webpage
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              25 Oct, 2020
                              {/* <div
                     style={{
                       color: "#f17300",
                       textDecoration: "underline",
                       cursor: "pointer",
                     }}
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal2"
                   >
                     Edit
                   </div> */}
                            </td>
                            <td>25 Oct, 2020</td>
                            <td>59</td>
                            <td>29</td>
                            <td>
                              <div className="row justify-content-start">
                                <div
                                  className="col-lg-6 content-center mx-1 br-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-eye"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                                <div
                                  className="col-lg-6 content-center mx-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-pencil"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="col-lg-12"
                    style={{
                      display: activeRow === 3 ? "block" : "none",
                    }}
                  >
                    <table className="table table-hover rounded">
                      <thead>
                        <tr
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          className="table-light"
                        >
                          <td>Name </td>
                          <td>Created on</td>
                          <td>Last Edited</td>
                          <td>Surveyed</td>
                          <td>Responses</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 10 }).map((item, index) => (
                          <tr style={{ fontSize: "13px" }}>
                            <td style={{ color: "#187A87", fontWeight: "500" }}>
                              <div className="row">
                                <div
                                  className="col-lg-12 mx-1"
                                  
                                >
                                  <Link to="/Testsurvey">
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "#187A87",
                                      }}
                                    >
                                      {" "}
                                      Test Survey 1{" "}
                                    </p>
                                  </Link>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <div
                                    className="mx-1 my-1"
                                    style={{
                                      width: "12px",
                                      height: "12px",
                                      borderRadius: "50%",
                                      backgroundColor: "#7FE35C80",
                                    }}
                                  ></div>
                                  <p
                                    style={{
                                      color: "#222222",
                                      fontWeight: "400",
                                      fontSize: "12px",
                                    }}
                                  >
                                    Draft | Webpage
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              25 Oct, 2020
                              {/* <div
                     style={{
                       color: "#f17300",
                       textDecoration: "underline",
                       cursor: "pointer",
                     }}
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal2"
                   >
                     Edit
                   </div> */}
                            </td>
                            <td>25 Oct, 2020</td>
                            <td>59</td>
                            <td>29</td>
                            <td>
                              <div className="row justify-content-start">
                                <div
                                  className="col-lg-6 content-center mx-1 br-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-eye"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                                <div
                                  className="col-lg-6 content-center mx-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-pencil"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="col-lg-12"
                    style={{
                      display: activeRow === 4 ? "block" : "none",
                    }}
                  >
                    <table className="table table-hover rounded">
                      <thead>
                        <tr
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          className="table-light"
                        >
                          <td>Name </td>
                          <td>Created on</td>
                          <td>Last Edited</td>
                          <td>Surveyed</td>
                          <td>Responses</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 3 }).map((item, index) => (
                          <tr style={{ fontSize: "13px" }}>
                            <td style={{ color: "#187A87", fontWeight: "500" }}>
                              <div className="row">
                                <div
                                  className="col-lg-12 mx-1"
                                 
                                >
                                <Link to="/Testsurvey">
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "#187A87",
                                      }}
                                    >
                                      {" "}
                                      Test Survey 1{" "}
                                    </p>
                                  </Link>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <div
                                    className="mx-1 my-1"
                                    style={{
                                      width: "12px",
                                      height: "12px",
                                      borderRadius: "50%",
                                      backgroundColor: "#7FE35C80",
                                    }}
                                  ></div>
                                  <p
                                    style={{
                                      color: "#222222",
                                      fontWeight: "400",
                                      fontSize: "12px",
                                    }}
                                  >
                                    Draft | Webpage
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              25 Oct, 2020
                              {/* <div
                     style={{
                       color: "#f17300",
                       textDecoration: "underline",
                       cursor: "pointer",
                     }}
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal2"
                   >
                     Edit
                   </div> */}
                            </td>
                            <td>25 Oct, 2020</td>
                            <td>59</td>
                            <td>29</td>
                            <td>
                              <div className="row justify-content-start">
                                <div
                                  className="col-lg-6 content-center mx-1 br-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-eye"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                                <div
                                  className="col-lg-6 content-center mx-1 rounded my-1"
                                  style={{
                                    backgroundColor: "#D9D9D9",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                >
                                  <div>
                                    <i
                                      className="bi bi-pencil"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "16px",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* <div className="row justify-content-center">
                <div className="col-lg-3 mb-2">
                  <div>
                    <div>
                      <Stack spacing={2}>
                        <Pagination
                          count={3}
                          variant="outlined"
                          color="warning"
                        />
                      </Stack>
                    </div>
                  </div>
                </div>
              </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MySurveys;

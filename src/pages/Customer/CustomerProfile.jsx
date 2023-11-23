import React from "react";
import { useState } from "react";
import CustomerHeader from "./CustomerHeader";
import { Link } from "react-router-dom";
import OrderHistory from "./OrderHistory";
import { TextField } from "@mui/material";

function CustomerProfile() {
  const [activeRow, setActiveRow] = useState(1);
  const handleClick = (RowNumber) => {
    setActiveRow(RowNumber);
  };
  const numberOfCopies = 10;
  const [number, setNumber] = useState("");
  const [input, setInput] = useState("d-none");
  const editButton = () => {
    setNumber("d-none");
    setInput("");
  };
  const SaveButton = () => {
    setNumber("");
    setInput("d-none");
  };
  return (
    <>
      <CustomerHeader />
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-lg-4 border-end px-4">
            <p style={{ fontSize: "13px", fontWeight: "400" }}>
              <Link to="/">
                {" "}
                <span style={{ color: "#187A87" }}>Customers</span>
              </Link>
              <Link to="/">
                {" "}
                <span style={{ color: "#187A87" }}>/Customers</span>
              </Link>
              <Link to=""> / Amit Singh/</Link>
            </p>
            <button className="button-5">
              <i className="bi bi-caret-left"></i> Customers
            </button>
            <div className="text-center my-4">
              <div className="" style={{ fontSize: "26px", fontWeight: "600" }}>
                Amit Singh
              </div>
              <span style={{ fontSize: "12px" }}>No group assigned</span>
            </div>
            <div className="d-flex justify-content-between border-bottom my-4">
              <div style={{ fontSize: "13px" }}>
                <div>Phone Number</div>
                <div className="py-2">
                  <div className={`${number}`}>9996604385</div>
                  <div className={`${input}`}>
                    <TextField
                      color="warning"
                      id="outlined-basic"
                      fullWidth
                      variant="outlined"
                      size="small"
                      focused = "true"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{ fontSize: "13px", textDecoration: "underline" }}
                className="content-center"
              >
                <span>
                  <span
                    style={{ cursor: "pointer" }}
                    className={`${number}`}
                    onClick={ editButton }
                  >
                    {" "}
                    Edit
                  </span>{" "}
                   <div className={`bi bi-x-circle text-center fs-4 ${input}`}  style={{cursor:"pointer"}} onClick={SaveButton}></div>
                  <button
                  className={`primary-button primary-button:hover ${input}`}
                  style={{
                    height: "37px",
                    width: "60px",
                    fontWeight: "500",
                    fontSize: "12px",
                    padding: "3px, 19px, 3px, 19px",
                  }}
                    onClick={ SaveButton }
                  >
                    Save
                  </button>{" "}
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-between border-bottom my-4">
              <div style={{ fontSize: "13px" }}>
                <div>Phone Number</div>
                <div className="py-2">9996604385</div>
              </div>
              <div
                style={{ fontSize: "13px", textDecoration: "underline" }}
                className="content-center"
              >
                <span to="/">Edit</span>
              </div>
            </div>
            <div className="d-flex justify-content-between border-bottom my-4">
              <div style={{ fontSize: "13px" }}>
                <div>Phone Number</div>
                <div className="py-2">9996604385</div>
              </div>
              <div
                style={{ fontSize: "13px", textDecoration: "underline" }}
                className="content-center"
              >
                <Link to="/">Edit</Link>
              </div>
            </div>
            <div className="d-flex justify-content-between border-bottom my-4">
              <div style={{ fontSize: "13px" }}>
                <div>Assigned Group</div>
                <div className="py-2">No group assigned</div>
              </div>
              <div
                style={{ fontSize: "13px", textDecoration: "underline" }}
                className="content-center"
              >
                <Link to="/">Edit</Link>
              </div>
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
                Order History
              </button>
            </div>

            {/* first */}
            <div
              style={{
                display: activeRow === 1 ? "block" : "none",
              }}
            >
              <div className="row my-3 mx-2">
                {Array.from({ length: numberOfCopies }).map((_, index) => (
                  <div
                    key={index}
                    className="col-lg-2 col-4 my-2 content-center"
                  >
                    <div className="px-3 py-2 border rounded">
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "#222222D1",
                        }}
                        className="py-1"
                      >
                        Total Spent
                      </span>
                      <div
                        style={{ fontSize: "20px", fontWeight: "500" }}
                        className="py-1"
                      >
                        31000
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2nd */}
            <div
              style={{
                display: activeRow === 2 ? "block" : "none",
              }}
            >
              <div className="row my-3 mx-2">
                <OrderHistory />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerProfile;

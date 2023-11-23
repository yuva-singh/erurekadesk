import React from "react";
import { useState } from "react";
import ReportHeader from "./ReportHeader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";
import Graph from "./Graph";

function Retail_dashboard() {
  const [HighlightButton, setHighlightButton] = useState(null);

  const HighlightButtonClick = (buttonId) => {
    setHighlightButton(buttonId);
  };
  return (
    <>
      <ReportHeader />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-11">
            <div className="row my-2">
              <div className="col-lg-3 my-1">
                <label htmlFor="">View by me</label>
                <div
                  style={{
                    fontSize: "15px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  <span
                    className={
                      HighlightButton === "button-1"
                        ? "px-2 py-2 border rounded-start border-primary"
                        : "px-2 py-2 border rounded-start"
                    }
                    onClick={() => HighlightButtonClick("button-1")}
                  >
                    Today
                  </span>
                  <span
                    className={
                      HighlightButton === "button-2"
                        ? "px-2 py-2 border border-primary"
                        : "px-2 py-2 border"
                    }
                    onClick={() => HighlightButtonClick("button-2")}
                  >
                    week
                  </span>
                  <span
                    className={
                      HighlightButton === "button-3"
                        ? "px-2 py-2 border rounded-end border-primary"
                        : "px-2 py-2 border rounded-end"
                    }
                    onClick={() => HighlightButtonClick("button-3")}
                  >
                    Month
                  </span>
                </div>
              </div>
              <div className="col-lg-3 my-1">
                <label htmlFor="">Date</label>
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  // label="Role Name"
                  type="date"
                  size="small"
                  placeholder=""
                  variant="outlined"
                />
              </div>
              <div className="col-lg-3 my-1">
                <label htmlFor="">Outlet</label>
                <FormControl fullWidth>
                  {/* <InputLabel id="demo-simple-select-label">
                    Select Role
                  </InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    // label="Age"
                    placeholder="Select Value"
                    // onChange={handleClick}
                    size="small"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="col-lg-11 my-4">
            <div className="row mt-3">
              <div className="col-lg-6  my-2">
                <div className="border shadow-sm rounded">
                  <div className="p-3">
                    <div className="d-flex justify-content-between">
                      <h6>ORDER</h6>
                      <div style={{ fontSize: "12px", cursor: "pointer" }}>
                        <span
                          className={
                            HighlightButton === "button-4"
                              ? "px-2 py-2 border rounded-start border-primary"
                              : "px-2 py-2 border rounded-start"
                          }
                          onClick={() => HighlightButtonClick("button-4")}
                        >
                          Dine in
                        </span>
                        <span
                          c
                          className={
                            HighlightButton === "button-5"
                              ? "px-2 py-2 border border-primary"
                              : "px-2 py-2 border"
                          }
                          onClick={() => HighlightButtonClick("button-5")}
                        >
                          Takeaway
                        </span>
                        <span
                          className={
                            HighlightButton === "button-6"
                              ? "px-2 py-2 border rounded-end border-primary"
                              : "px-2 py-2 border rounded-end"
                          }
                          onClick={() => HighlightButtonClick("button-6")}
                        >
                          Delivery
                        </span>
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "30px", fontWeight: "500" }}>
                        20000 Rs.
                      </div>
                      <div className="text-success">
                        <i className="bi bi-arrow-up"></i>
                        <span style={{ fontSize: "15px", fontWeight: "500" }}>
                          916%
                        </span>
                        Previous Month
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div>
                        <Graph />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  my-2">
                <div className="border shadow-sm rounded">
                  <div className="p-3">
                    <div className="d-flex justify-content-between">
                      <h6>REVENUE</h6>
                    </div>
                    <div>
                      <div style={{ fontSize: "30px", fontWeight: "500" }}>
                        20000 Rs.
                      </div>
                      <div className="text-success">
                        <i className="bi bi-arrow-up"></i>
                        <span style={{ fontSize: "15px", fontWeight: "500" }}>
                          916%
                        </span>
                        Previous Month
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div>
                        <Graph />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  my-2">
                <div className="border shadow-sm rounded">
                  <div className="p-3">
                    <div className="d-flex">
                      <h6>CUSTOMER COUNT</h6>
                    </div>
                    <div>
                      <div style={{ fontSize: "30px", fontWeight: "500" }}>
                        20000 Rs.
                      </div>
                      <div className="text-success">
                        <i className="bi bi-arrow-up"></i>
                        <span style={{ fontSize: "15px", fontWeight: "500" }}>
                          916%
                        </span>
                        Previous Month
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div>
                        <Graph />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  my-2">
                <div className="border shadow-sm rounded">
                  <div className="p-3">
                    <div className="d-flex">
                      <h6>GROSS PROFIT</h6>
                    </div>
                    <div>
                      <div style={{ fontSize: "30px", fontWeight: "500" }}>
                        20000 Rs.
                      </div>
                      <div className="text-success">
                        <i className="bi bi-arrow-up"></i>
                        <span style={{ fontSize: "15px", fontWeight: "500" }}>
                          916%
                        </span>
                        Previous Month
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div>
                        <Graph />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  my-2">
                <div className="border shadow-sm rounded">
                  <div className="p-3">
                    <div className="d-flex">
                      <h6>DISCOUNT</h6>
                    </div>
                    <div>
                      <div style={{ fontSize: "30px", fontWeight: "500" }}>
                        20000 Rs.
                      </div>
                      <div className="text-success">
                        <i className="bi bi-arrow-up"></i>
                        <span style={{ fontSize: "15px", fontWeight: "500" }}>
                          916%
                        </span>
                        Previous Month
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div>
                        <Graph />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  my-2">
                <div className="border shadow-sm rounded">
                  <div className="p-3">
                    <div className="d-flex">
                      <h6>DISCOUNT %</h6>
                    </div>
                    <div>
                      <div style={{ fontSize: "30px", fontWeight: "500" }}>
                        20000 Rs.
                      </div>
                      <div className="text-success">
                        <i className="bi bi-arrow-up"></i>
                        <span style={{ fontSize: "15px", fontWeight: "500" }}>
                          916%
                        </span>
                        Previous Month
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div>
                        <Graph />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  my-2">
                <div className="border shadow-sm rounded">
                  <div className="p-3">
                    <div className="d-flex">
                      <h6>BASKET VALUE</h6>
                    </div>
                    <div>
                      <div style={{ fontSize: "30px", fontWeight: "500" }}>
                        20000 Rs.
                      </div>
                      <div className="text-success">
                        <i className="bi bi-arrow-up"></i>
                        <span style={{ fontSize: "15px", fontWeight: "500" }}>
                          916%
                        </span>
                        Previous Month
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div className="my-2">
                        <div
                          className="progress d-flex justify-content-between"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success px-2"
                            style={{ width: "60%" }}
                          >
                            main outlet
                          </div>
                          <div className="mx-2">250 Rs.</div>
                        </div>
                      </div>
                      <div>
                        <Graph />
                      </div>
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

export default Retail_dashboard;

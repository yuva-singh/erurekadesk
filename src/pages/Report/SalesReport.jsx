import React from "react";
import ReportHeader from "./ReportHeader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";

function SalesReport() {
  return (
    <>
      <ReportHeader />
      <div className="container-fluid backgroundColorLight">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="d-flex justify-content-between my-2">
              <div style={{ fontSize: "25px", fontWeight: "500" }}>
                Sale Report
              </div>
              <div>
                {/* <button
                  className="Button-Secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add Outlet
                </button> */}
                {/* <button
                  className="Button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add Product
                </button> */}
              </div>
            </div>
          </div>
          <div className="col-lg-11">
            <div className="row shadow-sm bg-white my-3 rounded mx-1">
              <div className="col-lg-3">
                <div className="my-3">
                  <label
                    htmlFor=""
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    Report Type
                  </label>
                  <FormControl fullWidth size="small">
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
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="my-3">
                  <label
                    htmlFor=""
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    Measure
                  </label>
                  <FormControl fullWidth size="small">
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
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="col-lg-3">
              <div className="form-group my-3">
                <label
                  htmlFor=""
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Name
                </label>
                <TextField
                size="small"
                type="date"
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  // label="Role Name"
                  variant="outlined"
                  fontFamily
                />
              </div>
              </div>
              <div className="col-lg-3">
                <div className="my-3">
                  <label
                    htmlFor=""
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    Comparison
                  </label>
                  <FormControl fullWidth size="small">
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
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-11">
            <div
              className="
            border-top-0"
            >
              <table className="table table-hover border">
                <thead>
                  <tr
                    style={{ fontSize: "13px", fontWeight: "500" }}
                    className="table-light"
                  >
                    <td > </td>
                    <td  colSpan={4} className="text-center">
                      2022
                    </td>
                    <td  colSpan={4}>
                      Total
                    </td>
                  </tr>
                  <tr
                    style={{ fontSize: "13px", fontWeight: "500" }}
                    className="white"
                  >
                    <td >Sales Summary </td>
                    <td >24th oct</td>
                    <td >2t5h oct</td>
                    <td >26th oct</td>
                    <td >27th oct</td>
                    <td >Revenue</td>
                    <td >cost of gold sold</td>
                    <td >Cross Profit</td>
                    <td >Margin %</td>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: "13px" }} className="table-light">
                    <td style={{ color: "#187A87", fontWeight: "500" }}>
                      Totals
                    </td>
                    <td>₹100</td>
                    <td>₹120</td>
                    <td>₹150</td>
                    <td>₹200</td>
                    <td>₹1000</td>
                    <td>₹2000</td>
                    <td>₹3000</td>
                    <td>10%</td>
                  </tr>
                  <tr style={{ fontSize: "13px" }}>
                    <td style={{ color: "#187A87", fontWeight: "500" }}>
                      Revenue
                    </td>
                    <td>₹100</td>
                    <td>₹120</td>
                    <td>₹150</td>
                    <td>₹200</td>
                  </tr>
                  <tr style={{ fontSize: "13px" }}>
                    <td style={{ color: "#187A87", fontWeight: "500" }}>
                      Cost of gold sold
                    </td>
                    <td>₹100</td>
                    <td>₹120</td>
                    <td>₹150</td>
                    <td>₹200</td>
                  </tr>
                  <tr style={{ fontSize: "13px" }}>
                    <td style={{ color: "#187A87", fontWeight: "500" }}>
                      cross profit
                    </td>
                    <td>₹100</td>
                    <td>₹120</td>
                    <td>₹150</td>
                    <td>₹200</td>
                  </tr>
                  <tr style={{ fontSize: "13px" }}>
                    <td style={{ color: "#187A87", fontWeight: "500" }}>
                      Margin
                    </td>
                    <td>₹100</td>
                    <td>₹120</td>
                    <td>₹150</td>
                    <td>₹200</td>
                  </tr>
                  <tr style={{ fontSize: "13px" }}>
                    <td style={{ color: "#187A87", fontWeight: "500" }}>Tax</td>
                    <td>₹100</td>
                    <td>₹120</td>
                    <td>₹150</td>
                    <td>₹200</td>
                  </tr>
                </tbody>
              </table>
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
    </>
  );
}

export default SalesReport;



import React from "react";
import ReportHeader from "./ReportHeader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";
function PaymentReport() {
  return (
    <>
      <ReportHeader />
      <div className="container-fluid backgroundColorLight">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="d-flex justify-content-between my-2">
              <div style={{ fontSize: "25px", fontWeight: "500" }}>
                Payment Report
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
            <div className="row shadow-sm bg-white my-2 rounded mx-1">
              <div className="col-lg-3 col-6">
                <div className="my-2">
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
              <div className="col-lg-3 col-6">
                <div className="my-2">
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
              <div className="col-lg-3 col-6">
                <div className="form-group my-2">
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
              <div className="col-lg-3 col-6  ">
                <div className="my-2">
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
          <div className="col-lg-11 my-3">
            <div
              className="
            border-top-0"
            >
              <table className="table border table-bordered table-striped">
                <thead>
                  <tr
                    style={{ fontSize: "13px", fontWeight: "500" }}
                    className=""
                  >
                    <td  colSpan={4} className=""></td>
                    <td  colSpan={4} className="">
                      2022
                    </td>
                    <td  colSpan={4}>
                      Total
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: "14px"}}>
                    <td
                      style={{ color: "black", fontWeight: "500" }}
                      colSpan={4}
                    >
                      Payment Type
                    </td>
                    <td colSpan={4} className="fw-bold">Q3</td>
                    <td colSpan={4}></td>
                  </tr>
                  <tr style={{ fontSize: "13px" }} className="">
                    <td
                      style={{ color: "#187A87", fontWeight: "500" }}
                      colSpan={4}
                    >
                      Cash
                    </td>
                    <td colSpan={4}>₹1000</td>
                    <td colSpan={4}></td>
                  </tr>
                  <tr style={{ fontSize: "13px" }} className="">
                    <td
                      style={{ color: "#187A87", fontWeight: "500" }}
                      colSpan={4}
                    >
                      Loyalty
                    </td>
                    <td colSpan={4}>₹1000</td>
                    <td colSpan={4}></td>
                  </tr>
                  <tr style={{ fontSize: "13px" }} className="">
                    <td
                      style={{ color: "#187A87", fontWeight: "500" }}
                      colSpan={4}
                    >
                      Store Credit
                    </td>
                    <td colSpan={4}>₹1000</td>
                    <td colSpan={4}></td>
                  </tr>
                  <tr style={{ fontSize: "13px" }} className="">
                    <td
                      style={{ color: "#187A87", fontWeight: "500" }}
                      colSpan={4}
                    >
                      Cash Rounding
                    </td>
                    <td colSpan={4}>₹1000</td>
                    <td colSpan={4}></td>
                  </tr>
                  <tr style={{ fontSize: "14px" }} className="table-secondary">
                    <td
                      style={{ color: "black", fontWeight: "500" }}
                      colSpan={4}
                    >
                      Totals
                    </td>
                    <td colSpan={4}className="fw-bold">₹4000</td>
                    <td colSpan={4}></td>
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

export default PaymentReport;

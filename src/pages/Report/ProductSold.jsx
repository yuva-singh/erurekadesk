import React from 'react';
// import { TextField, Switch } from "@mui/material";
import ReportHeader from './ReportHeader';

function ProductSold() {
  return (
    <>
     <ReportHeader />
      <div className="container-fluid backgroundColorLight">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="d-flex justify-content-between my-2">
              <div style={{ fontSize: "25px", fontWeight: "500" }}>
                Product Sold
              </div>
              <div>
                {/* <button
                  className="Button-Secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add Outlet
                </button> */}
                <button
                  className="primary-button primary-button:hover"
                  style={{
                    height: "37px",
                    width: "137px",
                    fontWeight: "500",
                    fontSize: "12px",
                    padding: "3px, 19px, 3px, 19px",
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-11">
            <div className="border border-top-0">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr
                    style={{ fontSize: "13px", fontWeight: "500" }}
                    className="table-light"
                  >
                    <td>Product </td>
                    <td >Revenue</td>
                    <td >Item Sold</td>
                    <td >Discount</td>
                    <td >Trend</td>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: "13px" }}>
                    <td
                      style={{ color: "#187A87", fontWeight: "500" }}
                    >
                      Product Name
                      
                    </td>
                    <td style={{ color: "#187A87", fontWeight: "500" }}>
                      Product Revenue
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
                    <td>Item Count</td>
                    <td>
                      10%
                    </td>
                    <td>
                      Trend
                    </td>
                  </tr>
                  <tr style={{ fontSize: "13px" }}>
                    <td
                      style={{ color: "#187A87", fontWeight: "500" }}
                    >
                      Product Name
                      
                    </td>
                    <td style={{ color: "#187A87", fontWeight: "500" }}>
                      Product Revenue
                     
                    </td>
                    <td>Item Count</td>
                    <td>
                      10%
                    </td>
                    <td>
                      Trend
                    </td>
                  </tr>
                  <tr style={{ fontSize: "13px" }}>
                    <td
                      style={{ color: "#187A87", fontWeight: "500" }}
                    >
                      Product Name
                      
                    </td>
                    <td style={{ color: "#187A87", fontWeight: "500" }}>
                      Product Revenue
                     
                    </td>
                    <td>Item Count</td>
                    <td>
                      10%
                    </td>
                    <td>
                      Trend
                    </td>
                  </tr>
                  <tr style={{ fontSize: "13px" }}>
                    <td
                      style={{ color: "#187A87", fontWeight: "500" }}
                    >
                      Product Name
                      
                    </td>
                    <td style={{ color: "#187A87", fontWeight: "500" }}>
                      Product Revenue
                     
                    </td>
                    <td>Item Count</td>
                    <td>
                      10%
                    </td>
                    <td>
                      Trend
                    </td>
                  </tr>
                  <tr style={{ fontSize: "13px" }}>
                    <td
                      style={{ color: "#187A87", fontWeight: "500" }}
                    >
                      Product Name
                      
                    </td>
                    <td style={{ color: "#187A87", fontWeight: "500" }}>
                      Product Revenue
                     
                    </td>
                    <td>Item Count</td>
                    <td>
                      10%
                    </td>
                    <td>
                      Trend
                    </td>
                  </tr>
                  <tr style={{ fontSize: "13px" }}>
                    <td
                      style={{ color: "#187A87", fontWeight: "500" }}
                    >
                      Product Name
                      
                    </td>
                    <td style={{ color: "#187A87", fontWeight: "500" }}>
                      Product Revenue
                     
                    </td>
                    <td>Item Count</td>
                    <td>
                      10%
                    </td>
                    <td>
                      Trend
                    </td>
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
  )
}

export default ProductSold
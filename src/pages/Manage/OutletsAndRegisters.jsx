import React from "react";
import ManageHeader from "../Manage/ManageHeader";
import { TextField, Switch } from "@mui/material";
function OutletsAndRegisters() {
  return (
    <>
      <ManageHeader />
      <div className="container-fluid backgroundColorLight">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="d-flex justify-content-between my-2">
              <div style={{ fontSize: "25px", fontWeight: "500" }}>
                Outlets and Registers
              </div>
              <div className="text-end">
                <button
                  className="secondary-button secondary-button:hover mx-2"
                  style={{
                    height: "37px",
                    width: "137px",
                    fontWeight: "500",
                    fontSize: "12px",
                    padding: "3px, 19px, 3px, 19px",
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4"
                >
                  Add Outlet
                </button>
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
                  Add Register
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
                    <td>Outlet Name</td>
                    <td >Register</td>
                    <td >Status</td>
                    <td >Details</td>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: "13px" }}>
                    <td
                      style={{ color: "#187A87", fontWeight: "500" }}
                      rowSpan={2}
                    >
                      Nehru Place Store
                      <div
                        style={{
                          color: "#f17300",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal3"
                      >
                        EditOutlet
                      </div>
                    </td>
                    <td style={{ color: "#187A87", fontWeight: "500" }}>
                      Main Register
                      <div
                        style={{
                          color: "#f17300",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        Edit
                      </div>
                    </td>
                    <td>Closed</td>
                    <td>
                      <div>Eurekadesk receipt template </div>
                      <div>Invoice 2</div>
                      <div>Print receipt</div>
                      <div>Print note on reciept</div>
                      <div>Show discount on reciepts</div>
                    </td>
                  </tr>
                  <tr style={{ fontSize: "13px" }}>
                    <td style={{ color: "#187A87", fontWeight: "500" }}>
                      Main Register
                      <div
                        style={{
                          color: "#f17300",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        // data-bs-toggle="modal"
                        // data-bs-target="#exampleModal2"
                      >
                        Edit
                      </div>
                    </td>
                    <td>Closed</td>
                    <td>
                      <div>Eurekadesk receipt template </div>
                      <div>Invoice 2</div>
                      <div>Print receipt</div>
                      <div>Print note on reciept</div>
                      <div>Show discount on reciepts</div>
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
      {/* Add Register */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Register
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="border rounded my-2">
                <div className="py-2 bg-light px-3 rounded-top"style={{fontSize:"13px",fontWeight:"500"}}>Details</div>
                <div className="form-group m-3">
                  <label
                    htmlFor=""
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "12px",fontWeight:"500"
                    }}
                  >
                    Register name
                  </label>
                  <TextField
                    color="warning"
                    id="outlined-basic"
                    fullWidth
                    // label="Role Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <div className="border rounded my-2">
                <div className="py-2 bg-light px-3 rounded-top" style={{fontSize:"13px",fontWeight:"500"}}>Receipt</div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group m-3">
                      <label
                        htmlFor=""
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "12px",fontWeight:"500"
                        }}
                      >
                        Register template
                      </label>
                      <TextField
                        color="warning"
                        id="outlined-basic"
                        fullWidth
                        // label="Role Name"
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6"></div>
                  <div className="col-lg-6">
                    <div className="form-group m-3">
                      <label
                        htmlFor=""
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "12px",fontWeight:"500"
                        }}
                      >
                        Add prefix
                      </label>
                      <TextField
                        color="warning"
                        id="outlined-basic"
                        fullWidth
                        // label="Role Name"
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group m-3">
                      <label
                        htmlFor=""
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "12px",fontWeight:"500"
                        }}
                      >
                        Add suffix
                      </label>
                      <TextField
                        color="warning"
                        id="outlined-basic"
                        fullWidth
                        // label="Role Name"
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded my-2">
                <div className="py-2 bg-light px-3 rounded-top" style={{fontSize:"13px",fontWeight:"500"}}>At End of Sale</div>
                <div className="row p-3">
                <div className="col-lg-6">
                    <div className="d-flex justify-content-between"> 
                      <div style={{fontSize:"14px",fontWeight:"400"}} className="content-center">Select user for next sale</div>
                      <div className="content-center" >
                        <Switch defaultChecked color="success"  size="small"/>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between"> 
                      <div style={{fontSize:"14px",fontWeight:"400"}} className="content-center">Email receipt</div>
                      <div className="content-center" >
                        <Switch defaultChecked color="success"  size="small"/>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between"> 
                      <div style={{fontSize:"14px",fontWeight:"400"}} className="content-center">Print receipt</div>
                      <div className="content-center" >
                        <Switch defaultChecked color="success"  size="small"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex justify-content-between"> 
                      <div style={{fontSize:"14px",fontWeight:"400"}} className="content-center">Ask for a note</div>
                      <div className="content-center" >
                        <Switch defaultChecked color="success"  size="small"/>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between"> 
                      <div style={{fontSize:"14px",fontWeight:"400"}} className="content-center">Print note on receipt</div>
                      <div className="content-center" >
                        <Switch defaultChecked color="success"  size="small"/>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between"> 
                      <div style={{fontSize:"14px",fontWeight:"400"}} className="content-center">Show discounts on receipts</div>
                      <div className="content-center" >
                        <Switch defaultChecked color="success"  size="small"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="primary-button-outline primary-button-outline:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button className="primary-button primary-button:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}>Create User</button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit user */}
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
       <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel2">
                Edit Register
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="border rounded my-2">
                <div className="py-2 bg-light px-3 rounded-top"style={{fontSize:"13px",fontWeight:"500"}}>Details</div>
                <div className="form-group m-3">
                  <label
                    htmlFor=""
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "12px",fontWeight:"500"
                    }}
                  >
                    Register name
                  </label>
                  <TextField
                    color="warning"
                    id="outlined-basic"
                    fullWidth
                    // label="Role Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <div className="border rounded my-2">
                <div className="py-2 bg-light px-3 rounded-top" style={{fontSize:"13px",fontWeight:"500"}}>Receipt</div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group m-3">
                      <label
                        htmlFor=""
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "12px",fontWeight:"500"
                        }}
                      >
                        Register template
                      </label>
                      <TextField
                        color="warning"
                        id="outlined-basic"
                        fullWidth
                        // label="Role Name"
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6"></div>
                  <div className="col-lg-6">
                    <div className="form-group m-3">
                      <label
                        htmlFor=""
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "12px",fontWeight:"500"
                        }}
                      >
                        Add prefix
                      </label>
                      <TextField
                        color="warning"
                        id="outlined-basic"
                        fullWidth
                        // label="Role Name"
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group m-3">
                      <label
                        htmlFor=""
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "12px",fontWeight:"500"
                        }}
                      >
                        Add suffix
                      </label>
                      <TextField
                        color="warning"
                        id="outlined-basic"
                        fullWidth
                        // label="Role Name"
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded my-2">
                <div className="py-2 bg-light px-3 rounded-top" style={{fontSize:"13px",fontWeight:"500"}}>At End of Sale</div>
                <div className="row p-3">
                <div className="col-lg-6">
                    <div className="d-flex justify-content-between"> 
                      <div style={{fontSize:"14px",fontWeight:"400"}} className="content-center">Select user for next sale</div>
                      <div className="content-center" >
                        <Switch defaultChecked color="success"  size="small"/>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between"> 
                      <div style={{fontSize:"14px",fontWeight:"400"}} className="content-center">Email receipt</div>
                      <div className="content-center" >
                        <Switch defaultChecked color="success"  size="small"/>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between"> 
                      <div style={{fontSize:"14px",fontWeight:"400"}} className="content-center">Print receipt</div>
                      <div className="content-center" >
                        <Switch defaultChecked color="success"  size="small"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex justify-content-between"> 
                      <div style={{fontSize:"14px",fontWeight:"400"}} className="content-center">Ask for a note</div>
                      <div className="content-center" >
                        <Switch defaultChecked color="success"  size="small"/>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between"> 
                      <div style={{fontSize:"14px",fontWeight:"400"}} className="content-center">Print note on receipt</div>
                      <div className="content-center" >
                        <Switch defaultChecked color="success"  size="small"/>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between"> 
                      <div style={{fontSize:"14px",fontWeight:"400"}} className="content-center">Show discounts on receipts</div>
                      <div className="content-center" >
                        <Switch defaultChecked color="success"  size="small"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
               className="primary-button-outline primary-button-outline:hover"
               style={{
                 height: "37px",
                 width: "137px",
                 fontWeight: "500",
                 fontSize: "12px",
                 padding: "3px, 19px, 3px, 19px",
               }}
                data-bs-dismiss="modal"
              >
                Delete
              </button>
              <button className="primary-button primary-button:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}>Create User</button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit outlet */}
      <div
        className="modal fade"
        id="exampleModal3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel3">
              Edit outlet
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-group my-3">
                <label
                  htmlFor=""
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Name of Outlet
                </label>
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="primary-button-outline primary-button-outline:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}
                data-bs-dismiss="modal"
              >
                Delete
              </button>
              <button className="primary-button primary-button:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}>Save Outlet</button>
            </div>
          </div>
        </div>
      </div>
        {/* add outlet */}
        <div
        className="modal fade"
        id="exampleModal4"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel4">
              Add outlet
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-group my-3">
                <label
                  htmlFor=""
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Name of Outlet
                </label>
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  // label="Role Name"
                  size="small"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="primary-button-outline primary-button-outline:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button className="primary-button primary-button:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}>Save Outlet</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OutletsAndRegisters;

import React from "react";
import { TextField, Switch } from "@mui/material";
import MenuHeader from "../Manage/MenuHeader";
// TextField

function MenuItem() {
  const addCategory = [
    {
      id: "1",
      CategoryName: "Beer",
    },
    {
      id: "2",
      CategoryName: "Food",
    },
    {
      id: "3",
      CategoryName: "Snacks",
    },
    {
      id: "4",
      CategoryName: "Appetizers",
    },
    {
      id: "5",
      CategoryName: "Jin",
    },
    {
      id: "6",
      CategoryName: "Beer",
    },
    {
      id: "7",
      CategoryName: "Beer",
    },
    {
      id: "8",
      CategoryName: "Food",
    },
    {
      id: "9",
      CategoryName: "Snacks",
    },
    {
      id: "10",
      CategoryName: "Appetizers",
    },
  ];
  return (
    <React.Fragment>
      <MenuHeader />
      <div className="container-fluid">
        <div className="row justify-content-center py-5">
          <div className="col-lg-4 text-center">
            <img src={require("../../img/import.png")} className="img-fluid" alt="" />
            <div style={{ fontSize: "23px", fontWeight: "600",color:'#222222D1' }}  className="py-2">
              Upload an excel or spreadheet <br /> with  menu item details
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#222222D1",
              }}
              className="py-2"
            >
              Download the spreadsheet template, fill in <br /> the details and upload.
            </div>
            <div className="d-flex justify-content-center">
              <button type="button"
                className="secondary-button secondary-button:hover"
                style={{
                  height: "38px",
                  width: "160px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}><img src={require("../../img/arrow_back_ios.svg")} width={"9.7px"} height={"16.47px"} alt="" className="mx-1"/> Back</button>
              <button type="button"
                className="primary-button primary-button:hover mx-2"
                style={{
                  height: "38px",
                  width: "160px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}>upload Sheet</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid my-2">
        <div className="row justify-content-center my-1 mx-2">
          <div className="col-lg-12 text-center border rounded-3 backgroundColorLight"> 
            <div className="my-">
              <div className="row justify-content-center p-3">
                <div className="col-lg-4">
                  <div className="input-group design-input">
                    <span
                      className="input-group-text search-border bg-white"
                      id="basic-addon1"
                    >
                      <i className="bi bi-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control input-border"
                      placeholder=" Seach by Item name or shortcode"
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-start">
                <div className="col-lg-3 col-md-6 col-12 text-start">
                  <button
                    className="pop-open-button my-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="bi bi-plus"></i> Add New category
                  </button>
                  <div
                    className=""
                    style={{ borderRight: "1px solid #0000002B" }}
                  >
                    {addCategory.map((data, index) => {
                      return (
                        <div key={data.id}>
                        <div className="d-flex d-flex justify-content-between">
                          <p className="">{data.CategoryName}</p>
                          <div className="col-3 d-flex">
                            <div className="content-center">
                              <i
                                className="bi bi-pencil-fill"
                                style={{ cursor: "pointer" }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal1"
                              ></i>
                            </div>
                           <div className="content-center">
                           <Switch  defaultChecked  color="success" />
                           </div>
                          </div>
                        </div>
                      </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-start">
                  <button
                    className="pop-open-button my-2"
                  >
                    <i className="bi bi-plus"></i> Add Sub category
                  </button>
                  <div
                    className=""
                    style={{ borderRight: "1px solid #0000002B" }}
                  >
                    {addCategory.map((data, index) => {
                      return (
                        <div key={data.id}>
                          <div className="d-flex d-flex justify-content-between">
                            <p className="">{data.CategoryName}</p>
                            <div className="col-3 d-flex">
                              <div className="content-center">
                                <i
                                  className="bi bi-pencil-fill"
                                  style={{ cursor: "pointer" }}
                                //   data-bs-toggle="modal"
                                //   data-bs-target="#exampleModal3"
                                ></i>
                              </div>
                             <div className="content-center">
                             <Switch  defaultChecked  color="success" />
                             </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-start">
                  <button
                    className="pop-open-button my-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    <i className="bi bi-plus"></i> Add Item
                  </button>
                  <div
                    className=""
                    // style={{ borderRight: "1px solid #0000002B" }}
                  >
                    {addCategory.map((data, index) => {
                      return (
                        <div key={data.id}>
                          <div className="row justify-content-between">
                            <div className="col-4 py-2 mx-2 text-center border my-1 rounded">
                              {data.CategoryName}
                            </div>
                            <div className="col-3 d-flex">
                              <div className="content-center">
                                <i
                                  className="bi bi-pencil-fill"
                                  style={{ cursor: "pointer" }}
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal3"
                                ></i>
                              </div>
                             <div className="content-center">
                             <Switch  defaultChecked  color="success" />
                             </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* add category */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Category
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
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  label="Category Name"
                  variant="outlined"
                />
              </div>
              <div className="form-group my-3">
                <label
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "13px",
                  }}
                >
                  Upload Image
                </label>
                <input type="file" className="form-control py-5 my-1" />
              </div>
              {/*  */}
              {/*  */}
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="outline-button"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button className="Button">Add Category</button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit category */}
      {/* <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Category
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
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  label="Category Name"
                  variant="outlined"
                />
              </div>
              <div className="form-group my-3">
                <label
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "13px",
                  }}
                >
                  Upload Image
                </label>
                <input type="file" className="form-control py-5 my-1" />
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="outline-button"
                data-bs-dismiss="modal"
              >
                Delete Category
              </button>
              <button className="Button">Update</button>
            </div>
          </div>
        </div>
      </div> */}
      {/* add Item */}
      {/* <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add New Item
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
                <TextField
                color="warning"
                  id="outlined-basic"
                  fullWidth
                  label="Item Name"
                  variant="outlined"
                />
              </div>
              <div className="d-flex">
                <div className="form-check" style={{ fontSize: "14px" }}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Veg
                  </label>
                </div>
                <div className="form-check mx-4" style={{ fontSize: "14px" }}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    None-Veg
                  </label>
                </div>
              </div>
              <div className="form-group my-3">
                <TextField
                color="warning"
                  id="outlined-basic"
                  fullWidth
                  label="Item Description"
                  variant="outlined"
                />
              </div>
              <div className="form-group my-3">
              <TextField
              color="warning"
                  id="outlined-basic"
                  fullWidth
                  label="Price"
                  variant="outlined"
                />
              </div>
              <div className="form-group my-3">
                <input
                  type="text"
                  className="form-control py-5 my-1"
                  //   placeholder="Rs.."
                />
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="outline-button"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button className="Button">Add Category</button>
            </div>
          </div>
        </div>
      </div> */}
      {/* edit Item */}
      {/* <div
        className="modal fade"
        id="exampleModal3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Item
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
                <TextField
                color="warning"
                  id="outlined-basic"
                  fullWidth
                  label="Item Name"
                  variant="outlined"
                />
              </div>
              <div className="d-flex">
                <div className="form-check" style={{ fontSize: "14px" }}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Veg
                  </label>
                </div>
                <div className="form-check mx-4" style={{ fontSize: "14px" }}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    None-Veg
                  </label>
                </div>
              </div>
              <div className="form-group my-3">
                <TextField
                color="warning"
                  id="outlined-basic"
                  fullWidth
                  label="Item Description"
                  variant="outlined"
                />
              </div>
              <div className="form-group my-3">
              <TextField
              color="warning"
                  id="outlined-basic"
                  fullWidth
                  label="Price"
                  variant="outlined"
                />
              </div>
              <div className="form-group my-3">
                <input
                  type="text"
                  className="form-control py-5 my-1"
                  //   placeholder="Rs.."
                />
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="outline-button"
                data-bs-dismiss="modal"
              >
                Delete Item
              </button>
              <button className="Button">Update</button>
            </div>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
}

export default MenuItem;

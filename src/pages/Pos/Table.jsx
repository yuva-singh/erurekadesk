import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ManageHeader from "../Manage/ManageHeader";
import axios from "axios";
import {
  DeleteFood,
  DeleteTable,
  addTableAPI,
  getTableAPI,
} from "../../Components/api/api_base_url";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// import
function Table() {
  const token = sessionStorage.getItem("signature");
  const qrToken = sessionStorage.getItem("qrCodeURL");
  const [tableNumber, settableNumber] = useState([]);
  const [capacity, setcapacity] = useState([]);
  const [table, setTable] = useState([]);
  const [qr, setqr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);

  const body = {
    tableNumber: tableNumber,
    capacity: capacity,
  };

  // const addData = async () => {
  //   try {
  //     const edittabledata = await axios.patch(updateEmployeeAPI, updatetable, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await editemployeedata.data;
  //     // console.log(getFoodsAPi.data);
  //     alert("successful");
  //     // setStep(3)
  //     window.location.reload(false);
  //   } catch (error) {
  //     console.log(error);
  //     alert("invalid credentials");
  //   }

  // };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${DeleteTable}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async () => {
    try {
      const api = await axios.post(`${addTableAPI}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await api.data;
      console.log(api.res);
      // setqr(res.data)
      sessionStorage.setItem("qr", data.table.qr);
      // console.log(qrtoken)

      window.location.reload(true);
      setOpen(true);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  const tableapi = async () => {
    try {
      const res = await axios.get(getTableAPI, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setTable(res.data);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    tableapi();
  }, []);

  return (
    <>
      <ManageHeader />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          success!
        </Alert>
      </Snackbar>
      <div className="container-fluid py-2">
        <div className="row justify-content-end">
          <div className="col-lg-12" style={{ overflow: "auto" }}>
            <div className="d-flex justify-content-between my-1">
              <div className="content-center">
                <h6 className="text-secondary">
                  Inside area{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    className="color text-decoration-underline mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal4"
                  >
                    Edit
                  </span>
                </h6>
              </div>
              <div className="text-end">
                <button
                  className="secondary-button secondary-button:hover mx-lg-3 my-1"
                  style={{
                    height: "38px",
                    width: "164px",
                    fontWeight: "500",
                    fontSize: "14px",
                    padding: "3px, 27px, 3px, 27px",
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  Add Group
                </button>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="primary-button primary-button:hover"
                  style={{
                    height: "38px",
                    width: "164px",
                    fontWeight: "500",
                    fontSize: "14px",
                    padding: "3px, 27px, 3px, 27px",
                  }}
                >
                  Add Table
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {loading ? (
            <>
              {" "}
              {Array.from({ length: 20 }).map((_, index) => (
                <div className="col-lg-2 col-6 my-2">
                  {""}
                  <div
                    className="rounded pt-1 TableHover"
                    // style={{ border: "1px solid #0000008A" }}
                  >
                    <Skeleton width={"100%"} height={"100px"} count={1} />
                  </div>
                </div>
              ))}
            </>
          ) : (
            table.map((data, index) => {
              return (
                <>
                  {/*  */}
                  <div className="col-lg-2 col-6 my-2" key={data.id}>
                    {""}
                    <div
                      className="rounded px-3 pt-1 TableHover"
                      key={data.id}
                      style={{ border: "1px solid #0000008A" }}
                    >
                      <div className="d-flex justify-content-between">
                        <div
                          style={{ fontSize: "26px", fontWeight: "600" }}
                          className="my-2"
                        >
                          {data.tableNumber}
                        </div>
                        <div>
                          <a href={data.qr} target="blank">
                            <img
                              src={data.qr}
                              height={50}
                              width={50}
                              alt="scanner"
                              className="rounded"
                            />
                          </a>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between py-2">
                        <div>
                          <span>
                            <i className="bi bi-person"></i>
                            <img src={qr} alt="" />
                            {data.capacity}
                            <span style={{ fontSize: "13px" }}>
                              {" "}
                              {data.items}
                            </span>{" "}
                          </span>
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                          }}
                        >
                          {/* {data.Price}{" "} */}
                          <span
                            style={{ cursor: "pointer" }}
                            className="color text-decoration-underline mx-2"
                            onClick={() => handleDelete(data._id)}
                          >
                            Delete
                          </span>
                          <span
                            style={{ cursor: "pointer" }}
                            className="color text-decoration-underline"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal3"
                          >
                            Edit
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
      {/* add table */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form action="" onSubmit={handleClick}>
          {" "}
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Table
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
                    Table Number
                  </label>
                  <TextField
                    color="warning"
                    id="outlined-basic"
                    fullWidth
                    size="small"
                    variant="outlined"
                    value={tableNumber}
                    onChange={(e) => settableNumber(e.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <label
                    htmlFor=""
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    capacity
                  </label>
                  <TextField
                    type="number"
                    color="warning"
                    id="outlined-basic"
                    fullWidth
                    size="small"
                    variant="outlined"
                    value={capacity}
                    onChange={(e) => setcapacity(e.target.value)}
                  />
                </div>
                {/* <div className="form-group my-3">
                <label
                  htmlFor=""
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Category
                </label>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    placeholder="Select Value"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div> */}
                {/* <div lassName="form-group my-3">
                <span
                  className="px-3 backColorForQuantityGray  shadow-sm"
                  style={{ borderRadius: "3px" }}
                >
                  -
                </span>
                <span className="px-3 " style={{ borderRadius: "3px" }}>
                  1
                </span>
                <span
                  className="px-3 backColorForQuantityGray  shadow-sm"
                  style={{ borderRadius: "3px" }}
                >
                  +
                </span>
              </div> */}
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
                <button
                  className="primary-button primary-button:hover"
                  style={{
                    height: "37px",
                    width: "137px",
                    fontWeight: "500",
                    fontSize: "12px",
                    padding: "3px, 19px, 3px, 19px",
                  }}
                >
                  Add Table
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* edit table */}
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
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Table
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
                  Name
                </label>
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  size="small"
                  variant="outlined"
                />
              </div>

              <div className="form-group my-3">
                <label
                  htmlFor=""
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Category
                </label>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    placeholder="Select Value"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div lassName="form-group my-3">
                <span
                  className="px-3 backColorForQuantityGray  shadow-sm"
                  style={{ borderRadius: "3px" }}
                >
                  -
                </span>
                <span className="px-3 " style={{ borderRadius: "3px" }}>
                  1
                </span>
                <span
                  className="px-3 backColorForQuantityGray  shadow-sm"
                  style={{ borderRadius: "3px" }}
                >
                  +
                </span>
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
                Delete Table
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
              >
                Add Customer
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Add group */}
      <div
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
                Create Group
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
                  Name of Group
                </label>
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
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
              <button
                className="primary-button primary-button:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}
              >
                Save Group
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit group */}
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
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Group
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
                  Name of Group
                </label>
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
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
                Delete Group
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
              >
                Save Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;

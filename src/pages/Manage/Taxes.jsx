import React, { useEffect } from "react";
import ManageHeader from "../Manage/ManageHeader";
import { TextField, Autocomplete } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import {
  addTaxAPI,
  getTaxAPI,
  putTaxAPI,
} from "../../Components/api/api_base_url";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Taxes() {
  const token = sessionStorage.getItem("signature");
  const [name, setname] = useState([]);
  const [rate, setrate] = useState([]);
  const [isApplicable, setisApplicable] = useState([]);
  const [tax, settax] = useState([]);
  const [newname, setnewname] = useState([]);
  const [newisApplicable, setnewisApplicable] = useState([]);
  const [newrate, setnewrate] = useState([]);
  const [id, setid] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);

  const addtax = {
    name: name,
    isApplicable: isApplicable,
    rate: rate,
  };

  const updatetax = {
    name: newname,
    isApplicable: newisApplicable,
    rate: newrate,
  };

  const addTaxFunc = async (e) => {
    e.preventDefault();
    console.log(addtax);
    try {
      const taxAPI = await axios.post(`${addTaxAPI}`, addtax, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(taxAPI.res);
      // alert("successful");
      setOpen(true)
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const updateTaxFunc = async () => {
    console.log(id);
    console.log(`${putTaxAPI}/${id}`);
    try {
      const updateTaxAPI = await axios.put(`${putTaxAPI}/${id}`, updatetax, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      // console.log(getFoodsAPi.data);
      // alert("successful");
      // setStep(3)
      setOpen(true)
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      // alert("invalid credentials");
    }
  };

  const getTaxFunc = async () => {
    try {
      const TaxAPI = await axios.get(`${getTaxAPI}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await TaxAPI.data;
      settax(data);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTaxFunc();
  }, []);

  return (
    <>
      <ManageHeader />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          success!
        </Alert>
      </Snackbar>
      {/* {loading ? (
        <div className="container-fluid my-2">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <Skeleton height={"30px"} count={15} />
            </div>
          </div>
        </div>
      ) : ( */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="d-flex justify-content-between my-2">
                <div style={{ fontSize: "25px", fontWeight: "500" }}>Taxes</div>
                <div>
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
                    Add Sales Tax
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-11">
              <div className="border border-top-0">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr style={{ fontSize: "12px" }} className="table-light">
                      <td>
                        {/* <input type="checkbox" /> */}
                        S.no
                      </td>
                      <td>Tax Name</td>
                      <td>Applicable on</td>
                      <td>Rate</td>
                      <td>Action</td>
                    </tr>
                  </thead>

                 {
                  loading ? <tbody>
                    <tr>
                    <td colSpan={5} >
                
                        <Skeleton width={'100%'} height={"30px"} count={15} />
                      </td>
                    </tr>
                  </tbody> :
                  <tbody>
                    {
                    tax.map((data, index) => {
                      return (
                        <tr key={data.id} style={{ fontSize: "12px" }}>
                          <th scope="row">
                            {/* <input type="checkbox" /> */}
                            {index + 1}
                          </th>
                          <td>{data.name}</td>
                          <td className={data.isApplicable == true ? "text-success" : "text-danger"} >
                            {data.isApplicable == true ? "True" : "False"}
                          </td>
                          <td>{data.rate}</td>
                          <td className="">
                            <span
                              style={{
                                color: "#f17300",
                                textDecoration: "underline",
                                cursor: "pointer",
                              }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2"
                              onClick={() => setid(data._id)}
                            >
                              Edit
                            </span>{" "}
                            |{" "}
                            <span
                              style={{
                                color: "#f17300",
                                textDecoration: "underline",
                                cursor: "pointer",
                              }}
                            >
                              Delete
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>}
                </table>
              </div>
            </div>
          </div>
        </div>
      
      {/* Create user */}
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
                Add Taxes
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
                  Name of Tax
                </label>
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  // label="Role Name"
                  placeholder="Eg: GST"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              {/* <div className="my-3">
                <label
                  htmlFor=""
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Select Role
                </label> */}
              {/* <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Role
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    placeholder="Select Value"
                    onChange={handleClick}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl> */}
              {/* </div> */}
              <div className="form-group my-3">
                <label
                  htmlFor=""
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Rate
                </label>
                <TextField
                  type="number"
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  // label="Role Name"
                  placeholder=""
                  variant="outlined"
                  value={rate}
                  onChange={(e) => setrate(e.target.value)}
                />
              </div>
              <div className="my-3">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" color="warning">
                    Applicable
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    color="warning"
                    placeholder="Select Value"
                    label="select category"
                    value={isApplicable}
                    onChange={(e) => setisApplicable(e.target.value)}
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {/* <div className="form-group my-3">
                <label
                  htmlFor=""
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Email Address
                </label>
                <TextField
                  type="email"
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  label="Role Name"
                  placeholder=""
                  variant="outlined"
                />
              </div> */}
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="outline-button"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button className="Button" onClick={addTaxFunc}>
                Create User
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Taxes */}
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
                Edit Taxes
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
                  Name of Tax
                </label>
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  placeholder="Eg: GST"
                  variant="outlined"
                  value={newname}
                  onChange={(e) => setnewname(e.target.value)}
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
                  Rate
                </label>
                <TextField
                  type="number"
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  placeholder=""
                  variant="outlined"
                  value={newrate}
                  onChange={(e) => setnewrate(e.target.value)}
                />
              </div>
              <div className="form-group my-3">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" color="warning">
                    Applicable
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    color="warning"
                    placeholder="Select Value"
                    label="select category"
                    value={newisApplicable}
                    onChange={(e) => setnewisApplicable(e.target.value)}
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                </FormControl>
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
              <button
                className="primary-button primary-button:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}
                onClick={updateTaxFunc}
              >
                Create User
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Taxes;

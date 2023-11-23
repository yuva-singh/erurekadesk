import React, { useEffect } from "react";
import { useState } from "react";
import ManageHeader from "../Manage/ManageHeader";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import {
  createEmployeeAPI,
  getEmployeesAPI,
  getroles,
  updateEmployeeAPI,
} from "../../Components/api/api_base_url";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Users() {
  const token = sessionStorage.getItem("signature");
  const [activeRow, setActiveRow] = useState(1);
  const [employees, setemployees] = useState([]);
  const [number, setnumber] = useState([]);
  const [name, setname] = useState([]);
  const [email, setemail] = useState([]);
  const [phone, setphone] = useState([]);
  const [role, setrole] = useState([]);
  const [newname, setnewname] = useState([]);
  const [newemail, setnewemail] = useState([]);
  const [newrole, setnewrole] = useState([]);
  const [getrole, setgetrole] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);

  const createemployee = {
    name: name,
    email: email,
    phone: phone,
    role: role,
  };

  const updateemployee = {
    name: newname,
    email: newemail,
    phone: number,
    role: newrole,
  };
  console.log(updateemployee);

  const handleClick = (RowNumber) => {
    setActiveRow(RowNumber);
  };
  const createEmployeeFunc = async (e) => {
    console.log(createemployee);
    try {
      const CreateEmployee = await axios.post(
        `${createEmployeeAPI}`,
        createemployee,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(CreateEmployee.res);
      setOpen(true);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  const getRoleapi = async () => {
    try {
      const getemployeesdata = await axios.get(`${getroles}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setgetrole(getemployeesdata.data);
      console.log(getemployeesdata);
      // alert("successful");
    } catch (error) {
      console.log(error);
      // alert("invalid credentials");
    }
  };

  useEffect(() => {
    getRoleapi();
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const addData = async () => {
    try {
      const editemployeedata = await axios.patch(
        updateEmployeeAPI,
        updateemployee,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await editemployeedata.data;
      // console.log(getFoodsAPi.data);
      // alert("successful");
      // setStep(3)
      setOpen(true);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  const getEmployeesFunc = async () => {
    try {
      const getemployeesdata = await axios.get(`${getEmployeesAPI}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setemployees(getemployeesdata.data);
      console.log(getemployeesdata.data[0].role.permissions);
      // alert("successful");
    } catch (error) {
      console.log(error);
      // alert("invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmployeesFunc();
  }, []);

  return (
    <>
      <ManageHeader />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          success!
        </Alert>
      </Snackbar>
      <div className="container-fluid backgroundColorLight">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="d-flex justify-content-between my-2">
              <div style={{ fontSize: "25px", fontWeight: "500" }}>Users</div>
              <div>
                <button
                  type="button"
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
                  Add users
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-11">
            <div className="bg-white py-1 border border-bottom-0">
              <div className="row my-2">
                <div className="d-flex">
                  <div
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
                  </div>
                  <div
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
                    Supervisor
                  </div>
                  <div
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
                    Cashier
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-11"
            style={{
              display: activeRow === 1 ? "block" : "none",
            }}
          >
            <div className="border border-top-0">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr
                    style={{ fontSize: "13px", fontWeight: "500" }}
                    className="table-light"
                  >
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Name</td>
                    <td>Role</td>
                    <td>Phone Number</td>
                    <td>Action</td>
                  </tr>
                </thead>

                {loading ? (
                  <tbody>
                    <tr>
                      <td colSpan={5}>
                        <Skeleton width={"100%"} height={"30px"} count={15} />
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    {employees.map((data, index) => {
                      return (
                        <tr key={data.id} style={{ fontSize: "13px" }}>
                          <th scope="row">
                            <input type="checkbox" />
                          </th>
                          <td style={{ color: "#187A87", fontWeight: "500" }}>
                            {data.name}
                          </td>
                          <td>{data.role.roleName}</td>
                          <td>{data.phone}</td>
                          <td
                            style={{
                              color: "#f17300",
                              textDecoration: "underline",
                              cursor: "pointer",
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal2"
                            onClick={() => setnumber(data.phone)}
                          >
                            Edit
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                )}
              </table>
              <div className="row justify-content-center">
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
              </div>
            </div>
          </div>
          <div
            className="col-lg-11"
            style={{
              display: activeRow === 2 ? "block" : "none",
            }}
          >
            <div className="border border-top-0">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr
                    style={{ fontSize: "13px", fontWeight: "500" }}
                    className="table-light"
                  >
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Name</td>
                    <td>Role</td>
                    <td>Phone Number</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 10 }).map((item, index) => (
                    <tr key={index} style={{ fontSize: "13px" }}>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td style={{ color: "#187A87", fontWeight: "500" }}>
                        Chota Don
                      </td>
                      <td>Developer</td>
                      <td>8700282172</td>
                      <td
                        style={{
                          color: "#f17300",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        Edit
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="row justify-content-center">
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
              </div>
            </div>
          </div>
          <div
            className="col-lg-11"
            style={{
              display: activeRow === 3 ? "block" : "none",
            }}
          >
            <div className="border border-top-0">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr
                    style={{ fontSize: "13px", fontWeight: "500" }}
                    className="table-light"
                  >
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Name</td>
                    <td>Role</td>
                    <td>Phone Number</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 10 }).map((item, index) => (
                    <tr key={index} style={{ fontSize: "13px" }}>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td style={{ color: "#187A87", fontWeight: "500" }}>
                        Amit Kumar
                      </td>
                      <td>Developer</td>
                      <td>8700282172</td>
                      <td
                        style={{
                          color: "#f17300",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        Edit
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="row justify-content-center">
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
              </div>
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
                Create User
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
                  // label="Role Name"
                  placeholder="Eg: Amit"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor=""
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Select Role
                </label>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    placeholder="Select Value"
                    // onChange={handleClick}
                    value={role}
                    onChange={(e) => setrole(e.target.value)}
                  >
                    {getrole.map((data, index) => {
                return (
                  <MenuItem key={data.id} value={data.roleName}>{data.roleName}</MenuItem>
                );
              })}
                  </Select>
                </FormControl>
              </div>
              <div className="form-group my-3">
                <label
                  htmlFor=""
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Phone Number
                </label>
                <TextField
                  type="number"
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  placeholder=""
                  variant="outlined"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
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
                  Email Address
                </label>
                <TextField
                  type="email"
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  placeholder=""
                  variant="outlined"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
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
                  Select Outlet
                </label>
                <FormControl fullWidth>
                  {/* <InputLabel id="demo-simple-select-label">
                    Select Role
                  </InputLabel> *
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    // label="Age"
                    placeholder="Select Value"
                    onChange={handleClick}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
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
                type="button"
                className="primary-button primary-button:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}
                onClick={() => createEmployeeFunc()}
              >
                Create User
              </button>
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
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit user
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
                  placeholder="Eg: Amit"
                  variant="outlined"
                  value={newname}
                  onChange={(e) => setnewname(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor=""
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Select Role
                </label>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    placeholder="Select Value"
                    value={newrole}
                    onChange={(e) => setnewrole(e.target.value)}
                  >
                    {getrole.map((data, index) => {
                return (
                  <MenuItem key={data.id} value={data.roleName}>{data.roleName}</MenuItem>
                );
              })}
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
                  Phone Number
                </label>
                <TextField
                  type="number"
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  placeholder=""
                  variant="outlined"
                  
                />
              </div> */}

              <div className="form-group my-3">
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
                  placeholder=""
                  variant="outlined"
                  value={newemail}
                  onChange={(e) => setnewemail(e.target.value)}
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
                  Select Outlet
                </label>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    placeholder="Select Value"
                    onChange={handleClick}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
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
                Delete
              </button>
              <button
                type="button"
                className="primary-button primary-button:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}
                onClick={() => addData(number)}
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

export default Users;

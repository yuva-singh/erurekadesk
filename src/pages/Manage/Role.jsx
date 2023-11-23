import React, { useEffect } from "react";
import { useState } from "react";
import ManageHeader from "./ManageHeader";
import { TextField } from "@mui/material";
import { MultiSelect } from "react-multi-select-component";
import {
  addRoleAPI,
  getEmployeesAPI,
  getRoleAPI,
  getroles,
} from "../../Components/api/api_base_url";
import axios from "axios";
import MultipleSelectCheckmarks from "./Roletest";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Role() {
  const token = sessionStorage.getItem("signature");
  const [checkboxes, setCheckboxes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [personName, setPersonName] = React.useState([]);
  const handleCheckboxChange = (checkboxValue) => {
    if (checkboxes.includes(checkboxValue)) {
      setCheckboxes(checkboxes.filter((item) => item !== checkboxValue));
    } else {
      setCheckboxes([...checkboxes, checkboxValue]);
    }
  };
  //  const  oninputChange = ()=>{
  //   setCheckboxes({ ...checkboxes, [e.target.name]: e.target.value });
  //  }
  const [roleName, setRoleName] = useState([]);
  const [getrole, setgetrole] = useState([]);
  const [names, setnames] = useState([]);
  // const [PermissionSelected, setPermissionSelected] = useState([]);
  const [open, setOpen] = React.useState(false);
  // const PermissionsValues = PermissionSelected.map(
  //   (Permissions) => Permissions.value
  // );

  const getnamesFunc = async () => {
    try {
      const getnamesdata = await axios.get(`${getRoleAPI}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setnames(getnamesdata.data.permissions);
      console.log("permissions2:" + getnamesdata.data.permissions);
      // alert("successful");
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };
  useEffect(() => {
    getnamesFunc();
  }, []);

  const body = {
    roleName: roleName,
    permissions: personName,
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const addRole = async () => {
    console.log(body);
    try {
      await axios.post(`${addRoleAPI}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      // alert("successful");
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRoleapi();
  }, []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="">
      <ManageHeader />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          success!
        </Alert>
      </Snackbar>
      <div
        className="container-fluid backgroundColorLight"
        style={{ height: "89vh", overflow: "auto" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="d-flex justify-content-between my-2">
              <div style={{ fontSize: "25px", fontWeight: "500" }}>Roles</div>
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
                  Create Role
                </button>
              </div>
            </div>
            <div className="row my-1">
              {loading ? (
                <>
                {Array.from({ length: 20 }).map((_, index) => (
                  <div className="col-lg-2">
                  <div className="shadow-sm rounded my-2">
                    <Skeleton width={"100%"} height={"200px"} count={1} />
                  </div>
                </div>
                ))}
                </>
              ) : (
                getrole.map((data, index) => {
                  const { per1, per2 } = data.permissions;
                  return (
                    <div className="col-lg-2" key={data.id}>
                      <div className="shadow-sm p-2 rounded bg-white my-2 role_card_hover">
                        <div className="d-flex justify-content-between">
                          <h6 style={{ fontSize: "14px", fontWeight: "500" }}>
                            {"permissions"}
                          </h6>

                          <h6>
                            <i
                              className="bi bi-three-dots"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1"
                              style={{ cursor: "pointer" }}
                            ></i>
                          </h6>
                        </div>
                        <div style={{ fontSize: "13px" }}>
                          <div>{data.permissions[0]}</div>
                          <div>{data.permissions[1]}</div>
                          <div>{data.permissions[2]}</div>
                          <div>{data.permissions[3]}</div>
                          <div>{data.permissions[4]}</div>
                          <div>{data.permissions[5]}</div>
                        </div>
                        <div
                          style={{ fontSize: "14px", fontWeight: "400" }}
                          className="mt-3"
                        >
                          {data.roleName}(8)
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Create role */}
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
                Create Role
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
                  Role Name
                </label>
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  // label="Role Name"
                  placeholder="Eg: Supervisor"
                  variant="outlined"
                  onChange={(e) => setRoleName(e.target.value)}
                />
              </div>
              {/* <div className="form-group my-3">
                <label
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Permissions
                </label>
                <div>
                  <div
                    style={{
                      color: checkboxes.includes(checkboxes)
                        ? "#f17300"
                        : "black",
                    }}
                  >
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        className="mx-1"
                        id={checkboxes}
                        checked={checkboxes.includes(checkboxes)}
                        onChange={(e) => handleCheckboxChange(e.target.value)}
                      />
                      {""}
                      <span style={{ fontSize: "12px", fontWeight: "500" }}>
                        Read orders{" "}
                        <i className="bi bi-exclamation-circle mx-2"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      color: checkboxes.includes("checkbox2-2")
                        ? "#f17300"
                        : "black",
                    }}
                  >
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        className="mx-1"
                        id="checkbox2-2"
                        checked={checkboxes.includes("checkbox2-2")}
                        onChange={() => handleCheckboxChange("checkbox2-2")}
                      />
                      {""}
                      <span style={{ fontSize: "12px", fontWeight: "500" }}>
                        Read orders and offer discount{" "}
                        <i className="bi bi-exclamation-circle mx-2"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      color: checkboxes.includes("checkbox2-4")
                        ? "#f17300"
                        : "black",
                    }}
                  >
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        className="mx-1"
                        id="checkbox2-4"
                        checked={checkboxes.includes("checkbox2-4")}
                        onChange={() => handleCheckboxChange("checkbox2-4")}
                      />
                      {""}
                      <span style={{ fontSize: "12px", fontWeight: "500" }}>
                        Manage orders
                        <i className="bi bi-exclamation-circle mx-2"></i>
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      color: checkboxes.includes("checkbox2-5")
                        ? "#f17300"
                        : "black",
                    }}
                  >
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        className="mx-1"
                        id="checkbox2-5"
                        checked={checkboxes.includes("checkbox2-5")}
                        onChange={() => handleCheckboxChange("checkbox2-5")}
                      />
                      {""}
                      <span style={{ fontSize: "12px", fontWeight: "500" }}>
                        Customize menu
                        <i className="bi bi-exclamation-circle mx-2"></i>
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      color: checkboxes.includes("checkbox2-6")
                        ? "#f17300"
                        : "black",
                    }}
                  >
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        className="mx-1"
                        id="checkbox2-6"
                        checked={checkboxes.includes("checkbox2-6")}
                        onChange={() => handleCheckboxChange("checkbox2-6")}
                      />
                      {""}
                      <span style={{ fontSize: "12px", fontWeight: "500" }}>
                        Read customers data
                        <i className="bi bi-exclamation-circle mx-2"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      color: checkboxes.includes("checkbox2-7")
                        ? "#f17300"
                        : "black",
                    }}
                  >
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        className="mx-1"
                        id="checkbox2-7"
                        checked={checkboxes.includes("checkbox2-7")}
                        onChange={() => handleCheckboxChange("checkbox2-7")}
                      />
                      {""}
                      <span style={{ fontSize: "12px", fontWeight: "500" }}>
                        Manage customers data
                        <i className="bi bi-exclamation-circle mx-2"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="mt-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Select Permissions
                </label>
                <FormControl sx={{ m: 1, width: 465 }}>
                  <InputLabel id="demo-multiple-checkbox-label" color="warning">
                    Select permissions
                  </InputLabel>
                  <Select
                    color="warning"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Select permissions" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox
                          color="warning"
                          checked={personName.indexOf(name) > -1}
                        />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              {/*  */}
              {/*  */}
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
                onClick={addRole}
                className="primary-button primary-button:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}
              >
                Save Role
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* edit role */}
      <div
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
                Edit Role
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
                  Role Name
                </label>
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  // label="Role Name"
                  placeholder="Eg: Supervisor"
                  variant="outlined"
                  onChange={(e) => setRoleName(e.target.value)}
                />
              </div>
              {/* <div className="form-group my-3">
                <label
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Permissions
                </label>
                <div>
                  <div
                    style={{
                      color: checkboxes.includes(checkboxes)
                        ? "#f17300"
                        : "black",
                    }}
                  >
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        className="mx-1"
                        id={checkboxes}
                        checked={checkboxes.includes(checkboxes)}
                        onChange={(e) => handleCheckboxChange(e.target.value)}
                      />
                      {""}
                      <span style={{ fontSize: "12px", fontWeight: "500" }}>
                        Read orders{" "}
                        <i className="bi bi-exclamation-circle mx-2"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      color: checkboxes.includes("checkbox2-2")
                        ? "#f17300"
                        : "black",
                    }}
                  >
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        className="mx-1"
                        id="checkbox2-2"
                        checked={checkboxes.includes("checkbox2-2")}
                        onChange={() => handleCheckboxChange("checkbox2-2")}
                      />
                      {""}
                      <span style={{ fontSize: "12px", fontWeight: "500" }}>
                        Read orders and offer discount{" "}
                        <i className="bi bi-exclamation-circle mx-2"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      color: checkboxes.includes("checkbox2-4")
                        ? "#f17300"
                        : "black",
                    }}
                  >
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        className="mx-1"
                        id="checkbox2-4"
                        checked={checkboxes.includes("checkbox2-4")}
                        onChange={() => handleCheckboxChange("checkbox2-4")}
                      />
                      {""}
                      <span style={{ fontSize: "12px", fontWeight: "500" }}>
                        Manage orders
                        <i className="bi bi-exclamation-circle mx-2"></i>
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      color: checkboxes.includes("checkbox2-5")
                        ? "#f17300"
                        : "black",
                    }}
                  >
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        className="mx-1"
                        id="checkbox2-5"
                        checked={checkboxes.includes("checkbox2-5")}
                        onChange={() => handleCheckboxChange("checkbox2-5")}
                      />
                      {""}
                      <span style={{ fontSize: "12px", fontWeight: "500" }}>
                        Customize menu
                        <i className="bi bi-exclamation-circle mx-2"></i>
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      color: checkboxes.includes("checkbox2-6")
                        ? "#f17300"
                        : "black",
                    }}
                  >
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        className="mx-1"
                        id="checkbox2-6"
                        checked={checkboxes.includes("checkbox2-6")}
                        onChange={() => handleCheckboxChange("checkbox2-6")}
                      />
                      {""}
                      <span style={{ fontSize: "12px", fontWeight: "500" }}>
                        Read customers data
                        <i className="bi bi-exclamation-circle mx-2"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      color: checkboxes.includes("checkbox2-7")
                        ? "#f17300"
                        : "black",
                    }}
                  >
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        className="mx-1"
                        id="checkbox2-7"
                        checked={checkboxes.includes("checkbox2-7")}
                        onChange={() => handleCheckboxChange("checkbox2-7")}
                      />
                      {""}
                      <span style={{ fontSize: "12px", fontWeight: "500" }}>
                        Manage customers data
                        <i className="bi bi-exclamation-circle mx-2"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="mt-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Select Permissions
                </label>
                <FormControl sx={{ m: 1, width: 465 }}>
                  <InputLabel id="demo-multiple-checkbox-label" color="warning">
                    Select permissions
                  </InputLabel>
                  <Select
                    color="warning"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Select permissions" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox
                          color="warning"
                          checked={personName.indexOf(name) > -1}
                        />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              {/*  */}
              {/*  */}
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
              >
                Save Role
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Role;

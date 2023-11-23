import React from "react";
import { useState } from "react";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { registerRestaurentAPI } from "../../Components/api/api_base_url";
import axios from "axios";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

function Register() {
  const [step, setStep] = useState(1);

  const stylesheet = {
    position: "fixed",
    top: "0",
  };

  const [name, setname] = useState([]);
  const [address, setaddress] = useState([]);
  const [pincode, setpincode] = useState([]);
  const [foodtype, setfoodtype] = useState([]);
  const [email, setemail] = useState([]);
  const [password, setpassword] = useState([]);
  const [ownerName, setownerName] = useState([]);
  const [phone, setphone] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const registerrestaurent = {
    name: name,
    address: address,
    pincode: pincode,
    foodType: foodtype,
    email: email,
    password: password,
    ownerName: ownerName,
    phone: phone,
  };

  const handleClick = async () => {
    console.log(registerrestaurent);
    try {
      await axios.post(`${registerRestaurentAPI}`, registerrestaurent);
      alert("successful");
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };
  return (
    <>
      <div className="container-fluid" style={stylesheet}>
        {step === 1 && (
          <div className="row py-0 my-0 justify-content-center">
            <div className="col-lg-8 col-12 px-0 shadow-sm">
              <img
                src={require("../../img/register.png")}
                className="img-fluid login-image"
                alt=""
              />
            </div>
            <div className="col-lg-4  px-4 py-5 position-relative">
              <div>
                <form action="">
                  <text style={{ fontSize: "20px", fontWeight: "500" }}>
                    Step 1 of 2: Basic Details
                  </text>
                  <div className="my-4">
                    <TextField
                      color="warning"
                      id="outlined-basic"
                      fullWidth
                      label="owner Name"
                      variant="outlined"
                      value={ownerName}
                      onChange={(e) => setownerName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="my-4">
                    <TextField
                      color="warning"
                      id="outlined-basic"
                      fullWidth
                      label="Resturant Name"
                      variant="outlined"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      required
                    />
                  </div>
                  <div className="my-4">
                    <TextField
                      color="warning"
                      id="outlined-basic"
                      fullWidth
                      type="number"
                      label="Mobile Number"
                      variant="outlined"
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="my-4">
                    <TextField
                      color="warning"
                      id="outlined-basic"
                      fullWidth
                      type="email"
                      label="Email"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      required
                    />
                  </div>

                  <footer className="">
                    <div
                      className="position-absolute bottom-0 end-0 my-3"
                      onClick={() => setStep(2)}
                    >
                      <button className="btn-gradient mx-3"> Next</button>
                    </div>
                  </footer>
                </form>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="row py-0 my-0 justify-content-center">
            <div className="col-lg-8 col-12 px-0 shadow-sm">
              <img
                src={require("../../img/register.png")}
                className="img-fluid login-image"
                alt=""
              />
            </div>
            <div className="col-lg-4   px-4 py-5 position-relative ">
              <div>
                <form action="">
                  <text style={{ fontSize: "20px", fontWeight: "500" }}>
                    Step 2 of 2: Restaurant Details
                  </text>
                  <div className="my-4">
                    <TextField
                      color="warning"
                      id="outlined-basic"
                      fullWidth
                      type="address"
                      label="Address"
                      variant="outlined"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="my-4">
                    <TextField
                      color="warning"
                      id="outlined-basic"
                      fullWidth
                      type="number"
                      label="Pin Code"
                      variant="outlined"
                      value={pincode}
                      onChange={(e) => setpincode(e.target.value)}
                      required
                    />
                  </div>
                  <div className="my-4">
                    <OutlinedInput
                      color="warning"
                      id="outlined-basic"
                      fullWidth
                      placeholder="Password"
                      variant="outlined"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff /> }
                          </IconButton>
                        </InputAdornment>
                      }
                      required
                    />
                  </div>
                  <div className="d-flex">
                    <div className="form-check" style={{ fontSize: "14px" }}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value={"veg"}
                        onChange={(e) => setfoodtype(e.target.value)}
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Veg
                      </label>
                    </div>
                    <div
                      className="form-check mx-4"
                      style={{ fontSize: "14px" }}
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        defaultChecked=""
                        value={"Non-Veg"}
                        onChange={(e) => setfoodtype(e.target.value)}
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Non-Veg
                      </label>
                    </div>
                  </div>
                  {/* <div className="my-4">
                    <TextField
                      color="warning"
                      id="outlined-basic"
                      fullWidth
                      type="number"
                      label="Number of outlets"
                      variant="outlined"
                    />
                  </div> */}
                  {/* <div className="my-4">
                    <TextField
                      color="warning"
                      id="outlined-basic"
                      fullWidth
                      type="link"
                      label="Your restaurant’s swiggy, zomato link"
                      variant="outlined"
                    />
                  </div> */}
                </form>
                <footer className="">
                  <div
                    className="position-absolute bottom-0 start-0 py-2 mx-2"
                    onClick={() => setStep(1)}
                  >
                    <button className="btn">Back</button>
                  </div>
                  <div
                    className="position-absolute bottom-0 end-0 my-3"
                    onClick={() => setStep(3)}
                  >
                    <button onClick={handleClick} className="btn-gradient mx-3">
                      {" "}
                      Next
                    </button>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div
            className="row py-0 my-0 justify-content-center position-relative"
            style={{ height: "100vh" }}
          >
            <div className="col-lg-12 shadow-sm content-center">
              <header className="">
                <div className="position-absolute top-0 end-0 my-3">
                  <button className="btn border mx-3">Edit</button>
                </div>
              </header>
              <div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#22222299",
                  }}
                >
                  Step 3 of 3:{" "}
                </div>
                <div style={{ fontSize: "32px", fontWeight: "500" }}>
                  Setup your Online menu{" "}
                </div>
                <div
                  style={{ fontSize: "16px", fontWeight: "500" }}
                  className="mt-5"
                >
                  How would you like to create your menu?{" "}
                </div>
                <div className="row mt-3">
                  <div className="col-lg-4 my-1" onClick={() => setStep(4)}>
                    <div className="border text-center py-3 px-3 rounded onboarding_hover">
                      <img
                        src={require("../../img/v1.png")}
                        className="img-fluid mb-3"
                        alt=""
                      />
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#22222299",
                        }}
                      >
                        Bulk Import
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "#22222299",
                        }}
                      >
                        Upload data in excel sheet format{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 my-1">
                    <div className="border text-center py-3 px-3 rounded onboarding_hover">
                      <div className="d-flex justify-content-around mb-3">
                        <img
                          src={require("../../img/v2.png")}
                          className="img-fluid"
                          alt=""
                        />
                        <img
                          src={require("../../img/v3.png")}
                          className="img-fluid rounded"
                          alt=""
                        />
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#22222299",
                        }}
                      >
                        Sync zomato or swiggy
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "#22222299",
                        }}
                      >
                        Fetch your menu from your restaurant’s swiggy or zomato{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 my-1">
                    <div className="border text-center py-3 px-3 rounded onboarding_hover">
                      <img
                        src={require("../../img/v4.png")}
                        className="img-fluid mb-3"
                        alt=""
                      />
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#22222299",
                        }}
                      >
                        Manually Add
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "#22222299",
                        }}
                      >
                        Manually add your menu items one by one{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <footer className="">
                  <div
                    className="position-absolute bottom-0 start-0 py-2 mx-2"
                    onClick={() => setStep(2)}
                  >
                    <button className="btn">Back</button>
                  </div>
                  <div
                    className="position-absolute bottom-0 end-0 my-3"
                    onClick={() => setStep(4)}
                  >
                    <button className="btn-gradient mx-3"> Next</button>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div
            className="row py-0 my-0 justify-content-center position-relative"
            style={{ height: "100vh" }}
          >
            <div className="col-lg-12 shadow-sm content-center">
              <header className="">
                <div className="position-absolute top-0 end-0 my-3">
                  <button className="btn border mx-3">Edit</button>
                </div>
              </header>
              <div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#22222299",
                  }}
                >
                  Step 3 of 3:{" "}
                </div>
                <div style={{ fontSize: "32px", fontWeight: "500" }}>
                  Setup your Online menu{" "}
                </div>
                <div className="row mt-3">
                  <div className="col-lg-4 my-1">
                    <div className="border text-center py-3 px-3 rounded onboarding_hover">
                      <img
                        src={require("../../img/v1.png")}
                        className="img-fluid mb-3"
                        alt=""
                      />
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#22222299",
                        }}
                      >
                        Bulk Import
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "#22222299",
                        }}
                      >
                        Upload data in excel sheet format{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 my-1">
                    <div className="">
                      <p style={{ fontSize: "15px" }}>
                        <b> Step 1: </b>
                        Download an{" "}
                        <span className="color"> Excel Template</span>{" "}
                      </p>
                      <p style={{ fontSize: "15px" }}>
                        <b> Step 2: </b> Add your menu items with details in the
                        sheet in described format{" "}
                      </p>
                      <p style={{ fontSize: "15px" }}>
                        <b> Step 3: </b> Click on the upload menu button below{" "}
                      </p>
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
                        Upload Menu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <footer className="">
                  <div
                    className="position-absolute bottom-0 start-0 py-2 mx-2"
                    onClick={() => setStep(2)}
                  >
                    <button className="btn">Back</button>
                  </div>
                  <div
                    className="position-absolute bottom-0 end-0 my-3"
                    onClick={() => setStep(4)}
                  >
                    <button className="btn-gradient mx-3"> Next</button>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Register;

import React from "react";
import axios, { HttpStatusCode } from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  employeeLoginApi,
  employeeVerifyApi,
} from "../../Components/api/api_base_url";
import { Alert, TextField } from "@mui/material";
import animation from "../../animation/successful.json";
import Lottie from "lottie-react";
import { ClipLoader } from "react-spinners";

function LoginNumber() {
  const [step, setStep] = useState(1);
  const history = useNavigate();
  // const token = sessionStorage.getItem("signature");
  const [phone, setphone] = useState([]);
  const [otp, setOtp] = useState([]);
  const [successful, setsuccessful] = useState([]);
  const [LoadingSuccessfully, setLoadingSuccessfully] = useState("d-none");
  const [loading, setLoading] = useState(false);

  const sinup = {
    vendorId: "",
    phone: phone,
  };

  const verifyotp = {
    phone: phone,
    otp: otp,
  };

  const sendOtp = async () => {
    try {
      const response = await axios.post(`${employeeLoginApi}`, sinup);
      if (response.data["message"] != null) {
        setsuccessful(response.data["message"]);
      } else {
        setsuccessful("OTP sent Succesfully.");
        setStep(2);
      }
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  const verifyOtp = async () => {
    try {
      const api = await axios.patch(`${employeeVerifyApi}`, verifyotp, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        //   "Content-Type": "application/json",
        // },
      });
      const data = await api.data;
      console.log(api.res);
      sessionStorage.setItem("signature", data.signature);
      localStorage.setItem("role", data.role.permissions);
      setLoading(true)
      setTimeout(() => {
        history("/home");
        window.location.reload(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  return (
    <React.Fragment>
      {/* <MenuHeader /> */}
      {step === 1 && (
        <div className="container-fluid">
          {/* <form action=""> */}
          <div className="row justify-content-center my-5">
            <div className="col-lg-4 text-center">
              <p
                style={{ fontWeight: 500, fontSize: 15 }}
                className="my-3 fs-3"
              >
                Login
              </p>
              <TextField
                color="warning"
                className="my-2"
                id="outlined-basic"
                fullWidth
                label="Enter Phone Number"
                variant="outlined"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                required
              />
              <div
                className={
                  successful == "OTP sent Succesfully."
                    ? "text-success"
                    : "text-danger"
                }
              >
                {successful}
              </div>
              <button
                onClick={sendOtp}
                className={`primary-button px-5 py-3 my-2 rounded `}
              >
                Send Otp
              </button>
              <p className="my-2">
                Don't have an account?{" "}
                <span>
                  <Link to="/register" className="color">
                    Register
                  </Link>
                </span>
              </p>
              <p className="my-2">
                login by email{" "}
                <span>
                  <Link to="/login1" className="color">
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </div>
          {/* </form> */}
        </div>
      )}
      {step === 2 && (
        <div className="container-fluid">
          {/* <form action=""> */}
          <div className="row justify-content-center my-5">
            <div className="col-lg-4 text-center ">
              <div className="row">
                <div className="col-lg-5 text-start">
                  <i
                    className="bi bi-arrow-left"
                    onClick={() => setStep(1)}
                  ></i>
                </div>

                <div className="col-lg-6 text-start">
                  <p style={{ fontWeight: 500, fontSize: 15 }} className="fs-3">
                    Login
                  </p>
                </div>
              </div>
              <TextField
                className="my-2"
                color="warning"
                id="outlined-basic"
                fullWidth
                label="Enter Otp"
                variant="outlined"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <div className="d-grid">
                <button
                  className={`primary-button px-5 py-3 my-2 rounded`}
                  type="submit"
                  onClick={verifyOtp}
                >
                  {
                    loading ? 
                    <ClipLoader color="white" size={'20'} /> : 'Login'
                  }
                  
                </button>
              </div>
            </div>
          </div>
          {/* </form> */}
        </div>
      )}
      <div className={`container ${LoadingSuccessfully}`}>
        <div className="row justify-content-center">
          <div className={`col-lg-5 text-center p-3 bg-white shadow rounded-3`}>
            <Lottie animationData={animation} loop={true} />
            <h2 className="yellowDark text-center">Login successfully!</h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginNumber;

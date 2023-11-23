import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { loginRestaurentAPI } from "../../Components/api/api_base_url";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";

function Login() {
  const history = useNavigate();
  const [password, setpassword] = useState([]);
  const [email, setemail] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const login = {
    email: email,
    password: password,
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(login);
    const api = await axios.post(`${loginRestaurentAPI}`, login);
    const data = await api.data;
    try {
      sessionStorage.setItem("signature", data.signature);
      localStorage.setItem("role", data.role);
      console.log(api.res);
      if (data.signature) {
        // alert("Successful");
        history("/home");
      } else {
        alert(data.message);
        history("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      {/* <MenuHeader /> */}
      <div className="container-fluid">
        <form action="" onSubmit={handleClick}>
          <div className="row justify-content-center my-5">
            <div className="col-lg-4 text-center ">
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
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
              <OutlinedInput
                className="my-2"
                color="warning"
                id="outlined-basic"
                fullWidth
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
                placeholder="Password"
                required
              />
              <div className="d-grid">
                <button
                  className={`primary-button px-5 py-3 my-2 rounded`}
                  type="submit"
                >
                  Login
                </button>
              </div>
              <p className="my-2">
                Don't have an account?{" "}
                <span>
                  <Link to="/register" className="color">
                    Register
                  </Link>
                </span>
              </p>{" "}
              <p className="my-2">
                login by number{" "}
                <span>
                  <Link to="/" className="color">
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;

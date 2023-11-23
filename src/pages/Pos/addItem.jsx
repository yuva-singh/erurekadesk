import React from "react";
import { addFoodAPI, getCategoryAPI } from "../../Components/api/api_base_url";
import axios from "axios";
import { useState } from "react";
import { TextField, Switch } from "@mui/material";
import { useEffect } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AddItem() {
  const token = sessionStorage.getItem("signature");
  const [name, setName] = useState(['']);
  const [foodtype, setfoodtype] = useState(['']);
  const [description, setdescription] = useState(['']);
  const [foodcategory, setfoodcategory] = useState(['']);
  const [price, setprice] = useState(['']);
  const [readyTime, setReadytime] = useState(['']);
  const [images, setimages] = useState(['']);
  const [getcategorydata, setgetcategorydata] = useState([]);
  const [open, setOpen] = React.useState(false);

  // const addfood = {
  //   name: name,
  //   foodType: foodtype,
  //   description: description,
  //   category: foodcategory,
  //   price: price,
  //   readyTime: readyTime,
  // };

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append('name',name);
    formData.append('foodType',foodtype);
    formData.append('description',description);
    formData.append('category',foodcategory);
    formData.append('price',price);
    formData.append('readyTime',readyTime);
    formData.append('images',images);
    try {
      await axios.post(addFoodAPI, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      window.location.reload(false);
      setOpen(true)
    } catch (error) {
      console.error(error);
      alert("API request failed");
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const getcategory = async () => {
    try {
      const getcategorydata = await axios.get(`${getCategoryAPI}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setgetcategorydata(getcategorydata.data);
      console.log(getcategorydata.data);
      // alert("successful");
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  useEffect(() => {
    getcategory();
  }, []);

  return (
    <>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          success!
        </Alert>
      </Snackbar>
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
                Add New Item
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form action="" onSubmit={handleClick}>
              <div className="modal-body">
                <div className="form-group my-3">
                  <TextField
                    color="warning"
                    id="outlined-basic"
                    fullWidth
                    label="Item Name"
                    variant="outlined"
                    // required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="my-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" color="warning">
                      select category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      color="warning"
                      placeholder="Select Value"
                      label="select category"
                      onChange={(e) => setfoodcategory(e.target.value)}
                    >
                      {getcategorydata.map((data) => {
                        return (
                          <MenuItem value={data.name} key={data.id}>
                            {data.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
                <div className="d-flex">
                  <div className="form-check" style={{ fontSize: "14px" }}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      // required
                      value={"veg"}
                      onChange={(e) => setfoodtype(e.target.value)}
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
                      // required
                      defaultChecked=""
                      value={"Non-veg"}
                      onChange={(e) => setfoodtype(e.target.value)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Non-Veg
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
                    // required
                    onChange={(e) => setdescription(e.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <TextField
                    type="number"
                    color="warning"
                    id="outlined-basic"
                    fullWidth
                    label="Price"
                    variant="outlined"
                    required
                    onChange={(e) => setprice(e.target.value)}
                  />
                  <div className="form-group my-3">
                    <TextField
                      type="text"
                      color="warning"
                      id="outlined-basic"
                      fullWidth
                      label="ready time"
                      variant="outlined"
                      required
                      onChange={(e) => setReadytime(e.target.value)}
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
                  <input
                    type="file"
                    onChange={(e) => setimages(e.target.files[0])}

                    className="form-control py-5 my-1"
                  />
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
                <button
                  type="submit"
                  className="primary-button primary-button:hover"
                  style={{
                    height: "37px",
                    width: "137px",
                    fontWeight: "500",
                    fontSize: "12px",
                    padding: "3px, 19px, 3px, 19px",
                  }}
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddItem;

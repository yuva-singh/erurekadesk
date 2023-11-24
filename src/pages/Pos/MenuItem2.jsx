import React, { useEffect } from "react";
import { TextField, Switch } from "@mui/material";
import MenuHeader from "../Manage/MenuHeader";
import axios from "axios";
import { useState } from "react";
import {
  DeleteFood,
  addCategoryAPI,
  getCategoryAPI,
  getFoodAPI,
  getFoodByCategory,
  getFoodDetailAPI,
} from "../../Components/api/api_base_url";
import { MenuItem, Select, FormControl } from "@mui/material";
import AddItem from "./addItem";
import { ClipLoader } from "react-spinners";
import animation from "../../animation/successful.json";
import Lottie from "lottie-react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function MenuItem2() {
  const token = sessionStorage.getItem("signature");
  console.log(token);
  const [food, setFood] = useState([]);
  const [name, setname] = useState([""]);
  const [description, setdescription] = useState([""]);
  const [images, setimages] = useState([""]);
  const [getcategorydata, setgetcategorydata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [catname, setcatname] = useState(["All Foods"]);
  const [id, setid] = useState([]);
  const [fooddetail, setfooddetail] = useState([]);

  console.log(name, description, images[0]);

  const addData = async (itemId, vendorId) => {
    console.log(`${getFoodDetailAPI}/${vendorId}/${itemId}`);

    console.log("Item ID:", itemId);
    console.log("Vendor ID:", vendorId);

    // You can perform any other actions with the data here

    try {
      const getfooddetail = await axios.get(
        `${getFoodDetailAPI}/${vendorId}/${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await getfooddetail.data;
      setfooddetail(data);
      // console.log(getFoodsAPi.data);
      // alert("successful");
      // setStep(3)
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      // alert("invalid credentials");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${DeleteFood}/${id}`, {
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

  const getFoods = async (name) => {
    setcatname(name);
    setid("none");
    try {
      const getFoodsAPi = await axios.get(`${getFoodAPI}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await getFoodsAPi.data;
      setFood(data);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const addcategoryFunc = async () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("images", images);

    try {
      const categoryAPI = await axios.post(`${addCategoryAPI}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(categoryAPI.res);
      // alert("successful");
      setOpen(true);

      window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addcategoryFunc();
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

  const getFoodByCategoryFunc = async (vendor, id, name) => {
    try {
      const getFoodsAPi = await axios.get(
        `${getFoodByCategory}${vendor}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await getFoodsAPi.data;
      setFood(data);
      // console.log(getFoodsAPi.data);
      // alert("successful");
      // setStep(3)
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      // alert("invalid credentials");
    } finally {
      setLoading(false);
      setcatname(name);
      setid(id);
    }
  };

  useEffect(() => {
    getcategory();
    getFoodByCategoryFunc();
    getFoods();
    setcatname("All Foods");
  }, []);

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
  ];
  return (
    <React.Fragment>
      <MenuHeader />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          success!
        </Alert>
      </Snackbar>

      <div className="container-fluid">
        <div className="row justify-content-start my-1">
          <div className="col-lg-12 text-center ">
            <div className="p-3 my-1 border rounded-3 backgroundColorLight">
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
              {loading ? (
                <div className="row justify-content-center">
                  <div className="col-lg-3 px-2">
                    <Skeleton width={"100%"} height={"50px"} count={15} />
                  </div>
                  <div className="col-lg-9 px-3">
                    <Skeleton width={"100%"} height={"50px"} count={15} />
                  </div>
                </div>
              ) : (
                <div className="row justify-content-start">
                  <div className="col-lg-3 text-start border">
                    <div className="d-flex justify-content-between">
                      <div className="content-center">
                        <span style={{ fontSize: "20px", fontWeight: "600" }}>
                          Categories
                        </span>
                      </div>
                      <button
                        className="secondary-button my-2"
                        style={{
                          height: "34px",
                          width: "67px",
                          fontWeight: "500",
                          fontSize: "12px",
                          padding: "3px, 19px, 3px, 19px",
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="bi bi-plus "></i>Add
                      </button>
                    </div>

                    <div>
                      <table className="table">
                        <tbody>
                          {/* <Link
                            className="text-decoration-none text-secondary fw-bold fs-5"
                            onClick={() => getFoods("All Foods")}
                          >
                            All Foods
                          </Link> */}
                          {getcategorydata.map((data, index) => {
                            return (
                              <tr key={data.id}>
                                <td
                                  onClick={() =>
                                    getFoodByCategoryFunc(
                                      data.vendorId,
                                      data._id,
                                      data.name
                                    )
                                  }
                                >
                                  <img
                                    src={
                                      data.images !== null
                                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgPtF8x4lhf4oH0rSo-mEMnTMGcUZhXmXvg&usqp=CAU"
                                        : `https://eureka-desk.onrender.com/images/${data.images}`
                                    }
                                    width={"50px"}
                                    height={"50px"}
                                    style={{
                                      borderRadius: "50%",
                                      marginRight: ".3rem",
                                    }}
                                  />
                                  <span
                                    className={`${
                                      data._id == id ? "color mx-2" : "mx-2"
                                    }`}
                                  >
                                    {data.name}
                                  </span>
                                </td>
                                <td>
                                  <div className="d-flex">
                                    <div className="content-center">
                                      <i
                                        // data-bs-toggle="modal"
                                        // data-bs-target="#exampleModal3"
                                        className="bi bi-pencil-square"
                                        style={{ cursor: "pointer" }}
                                      ></i>
                                      <i
                                        className="bi bi-archive text-danger px-2"
                                        style={{ cursor: "pointer" }}
                                      ></i>
                                    </div>
                                    <div className="content-center">
                                      <Switch defaultChecked color="success" />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      {/* <div className="accordion mb-2" id="accordionExample">
                      {getcategorydata.map((data, index) => {
                        return (
                          <div key={data.id} className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <div
                                className="col"
                              >
                                <img
                                  src={
                                    data.images == null
                                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgPtF8x4lhf4oH0rSo-mEMnTMGcUZhXmXvg&usqp=CAU"
                                      : `https://eureka-desk.onrender.com/images/${data.images}`
                                  }
                                  width={"50px"}
                                  height={"50px"}
                                  style={{
                                    borderRadius: "50%",
                                    marginRight: ".3rem",
                                  }}
                                />{" "}
                               <p>{data.name}</p>
                              </div>
                            </h2>

                            <div
                              id={`collapse${data._id}`}
                              className="accordion-collapse collapse"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <div className="d-flex d-flex justify-content-between">
                                  <p className="">{data.subCategories}</p>
                                  <div className="col-3 d-flex">
                                    <div className="content-center">
                                      <i
                                        className="bi bi-pencil-fill"
                                        style={{ cursor: "pointer" }}
                                      ></i>
                                    </div>
                                    <div className="content-center">
                                      <Switch defaultChecked color="success" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div> */}
                    </div>
                  </div>
                  <div
                    className="col-lg-9 text-center border"
                    style={{ overflow: "auto" }}
                  >
                    <p className="text-start my-2 fw-bold fs-5">{catname}</p>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">
                            <div className="btn my-1 px-0 fw-bold">S.no</div>
                          </th>
                          <th scope="col">
                            <div className="btn my-1 px-0 fw-bold">
                              Item Name
                            </div>
                          </th>
                          <th scope="col">
                            <div className="btn my-1 px-0 fw-bold">Image</div>
                          </th>
                          <th scope="col">
                            <div className="btn my-1 px-0 fw-bold">Price</div>
                          </th>
                          <th scope="col">
                            <div className="btn my-1 px-0 fw-bold">
                              Food Type
                            </div>
                          </th>
                          <th scope="col">
                            <div className="btn my-1 px-0 fw-bold">
                              Ready Time
                            </div>
                          </th>

                          <th scope="col">
                            <button
                              className="secondary-button my-2"
                              style={{
                                height: "34px",
                                width: "111px",
                                fontWeight: "500",
                                fontSize: "12px",
                                padding: "3px, 19px, 3px, 19px",
                              }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2"
                            >
                              <i className="bi bi-plus"></i> Add Item
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {food.map((data, index) => {
                          return (
                            <tr key={data.id}>
                              <td>{index + 1}</td>
                              <td>{data.name}</td>
                              <td>
                                {/* {" "}
                                <img
                                  src={
                                    data.images == null
                                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgPtF8x4lhf4oH0rSo-mEMnTMGcUZhXmXvg&usqp=CAU"
                                      : `https://eureka-desk.onrender.com/images/${data.images}`
                                  }
                                  width={"50px"}
                                  height={"50px"}
                                  style={{
                                    borderRadius: "50%",
                                    marginRight: ".3rem",
                                  }}
                                />{" "} */}
                                <button
                                  className="secondary-button secondary-button:hover"
                                  style={{
                                    height: "38px",
                                    width: "100px",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    padding: "3px, 19px, 3px, 19px",
                                  }}
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal4"
                                  onClick={() =>
                                    addData(data._id, data.vendorId)
                                  }
                                >
                                  Preview
                                </button>
                              </td>
                              <td className="text-success">{`₹ ${data.price}`}</td>
                              <td
                                className={
                                  data.foodType == "veg"
                                    ? "text-success"
                                    : "text-danger"
                                }
                              >
                                {data.foodType}
                              </td>
                              <td>{`${data.readyTime}  minutes`}</td>

                              <td>
                                <div className="d-flex">
                                  <div className="content-center">
                                    <i
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal3"
                                      className="bi bi-pencil-square"
                                      style={{ cursor: "pointer" }}
                                    ></i>
                                    <i
                                      className="bi bi-archive text-danger px-2"
                                      style={{ cursor: "pointer" }}
                                      onClick={() => handleDelete(data._id)}
                                    ></i>
                                  </div>
                                  <div className="content-center">
                                    <Switch defaultChecked color="success" />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* add category */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <form action="" onSubmit={handleSubmit}>
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
                    // required
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <TextField
                    color="warning"
                    id="outlined-basic"
                    fullWidth
                    label="Description"
                    variant="outlined"
                    // required
                    onChange={(e) => setdescription(e.target.value)}
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
                  className="primary-button primary-button:hover"
                  style={{
                    height: "37px",
                    width: "137px",
                    fontWeight: "500",
                    fontSize: "12px",
                    padding: "3px, 19px, 3px, 19px",
                  }}
                  type="submit"
                >
                  Add Category
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Edit category */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabe2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabe2">
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
                Delete Category
              </button>
              <button
                type="button"
                className="button-outline primary-button:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* add Item */}
      <AddItem />
      {/* edit Item */}
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
                Delete Item
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
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal4"
        tabIndex="-1"
        aria-labelledby="exampleModalLabe2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabe2">
                Image
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
                <img
                  src={
                    fooddetail.images == null
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgPtF8x4lhf4oH0rSo-mEMnTMGcUZhXmXvg&usqp=CAU"
                      : `https://eureka-desk.onrender.com/images/${fooddetail.images}`
                  }
                  className="rounded"
                  width={"100%"}
                  height={"250"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MenuItem2;

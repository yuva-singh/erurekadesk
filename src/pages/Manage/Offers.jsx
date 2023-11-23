import React, { useEffect } from "react";
import { useState } from "react";
import ManageHeader from "./ManageHeader";
import { Switch, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { addOfferAPI, getOfferAPI } from "../../Components/api/api_base_url";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Offers() {
  const token = sessionStorage.getItem("signature");
  const [offerType, setofferType] = useState([]);
  const [vendors, setvendors] = useState([]);
  const [title, settitle] = useState([]);
  const [description, setdescription] = useState([]);
  const [minValue, setminValue] = useState([]);
  const [offerAmount, setofferAmount] = useState([]);
  const [promocode, setgpromocode] = useState([]);
  const [promoType, setpromoType] = useState([]);
  const [bank, setbank] = useState([]);
  const [pincode, setpincode] = useState([]);
  const [isActive, setisActive] = useState([]);
  const [offer, setoffer] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [newtitle, setnewtitle] = useState([]);
  const [newdescription, setnewdescription] = useState([]);
  const [newofferAmount, setnewofferAmount] = useState([]);
  const [newpromocode, setnewgpromocode] = useState([]);
  const [id, setid] = useState([]);
  const [loading, setLoading] = useState(true);

  const addoffer = {
    offerType: "offerType",
    vendors: ["vendors"],
    title: title,
    description: description,
    minValue: 0,
    offerAmount: offerAmount,
    promocode: promocode,
    promoType: "promoType",
    bank: ["bank"],
    pincode: "pincode",
    isActive: true,
  };

  const editoffer = {
    offerType: "offerType",
    vendors: ["vendors"],
    title: newtitle,
    description: newdescription,
    minValue: 0,
    offerAmount: newofferAmount,
    promocode: newpromocode,
    promoType: "promoType",
    bank: ["bank"],
    pincode: "pincode",
    isActive: true,
  };



  console.log(addoffer);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const addofferFunc = async () => {
    console.log(addoffer);
    try {
      await axios.post(`${addOfferAPI}`, addoffer, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
            setOpen(true);
      // setStep(2)

      window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  const editofferFunc = async () => {
    console.log(editoffer);
    try {
    const editofferdata = await axios.put(`${`${addOfferAPI}/${id}`}`, editoffer, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(editofferdata.data)
      setOpen(true);
      // setStep(2)
      window.location.reload(false);
      alert('successful')
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  const create_role = [
    {
      id: 1,
      RoleName: "Happy Hours",
      users: "Everyday",
    },
    {
      id: 2,
      RoleName: "Happy Hours",
      users: "Everyday",
    },
    {
      id: 3,
      RoleName: "Happy Hours",
      users: "Everyday",
    },
    {
      id: 4,
      RoleName: "Happy Hours",
      users: "Everyday",
    },
    {
      id: 5,
      RoleName: "Happy Hours",
      users: "Everyday",
    },
    {
      id: 6,
      RoleName: "Happy Hours",
      users: "Everyday",
    },
  ];
  const [selectedButtons, setSelectedButtons] = useState([]);
  const buttonColors = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Function to handle button click and toggle background color
  const handleButtonClick = (buttonIndex) => {
    if (selectedButtons.includes(buttonIndex)) {
      // If the button is already selected, deselect it and remove it from the array
      setSelectedButtons(
        selectedButtons.filter((index) => index !== buttonIndex)
      );
    } else {
      // Otherwise, select the button and add it to the array
      setSelectedButtons([...selectedButtons, buttonIndex]);
    }
  };

  const getOfferFunc = async () => {
    try {
      const getofferdata = await axios.get(`${getOfferAPI}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setoffer(getofferdata.data);
      console.log(getofferdata);
      // alert("successful");
    } catch (error) {
      console.log(error);
      // alert("invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOfferFunc();
  }, []);


  return (
    <>
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
              <div style={{ fontSize: "25px", fontWeight: "500" }}>Offers</div>
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
                  Create Offer
                </button>
              </div>
            </div>
            <div className="row my-1">
            {loading ? (
                <>
                {Array.from({ length: 20 }).map((_, index) => (
                   <div className="col-lg-4">
                   <div className="shadow-sm rounded-3 my-2">
                   <Skeleton width={"100%"} height={"150px"} count={1} />
                   </div>
                 </div>
                ))}
                </>
              ) : (offer.map((data, index) => {
                return (
                  <div className="col-lg-4" key={data.id}>
                    <div className="shadow-sm p-3 rounded-3 bg-white my-2 role_card_hover">
                      <div className="d-flex justify-content-between">
                        <h6 style={{ fontSize: "16px", fontWeight: "500" }}>
                          {data.title}
                        </h6>
                        <h6>
                          <i
                            className="bi bi-three-dots"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal1"
                            style={{ cursor: "pointer" }}
                            onClick={() => setid(data._id)}
                          ></i>
                        </h6>
                      </div>
                      <span>Amount- ₹{data.offerAmount}{" "}</span>
                      <div
                        style={{ fontSize: "14px", fontWeight: "400" }}
                        className="mt-3"
                      >
                       
                        <span style={{ fontSize: "12px" }}>
                          {"(05:00pm - 08:00)"}
                        </span>
                      </div>
                   
                        
                      <div className="d-flex justify-content-between">
                        <div
                          style={{ fontSize: "15px", fontWeight: "500" }}
                          className="content-center"
                        >
                          {`${"25 aug 2023"} - ${"30 sept 2023"}`}
                        </div>
                        <div className="content-center">
                          <Switch defaultChecked color="success" size="large" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }))}
            </div>
          </div>
        </div>
      </div>
      {/* create offer */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <form action="" onSubmit={addofferFunc}>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Create Offer
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
                  <label htmlFor="">Offer Name</label>
                  <TextField
                    color="warning"
                    id="outlined-basic"
                    placeholder="Ex- amit"
                    fullWidth
                    //   label=""
                    variant="outlined"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="">Offer Amount</label>
                  <TextField
                    color="warning"
                    id="outlined-basic"
                    placeholder="Ex- amit"
                    fullWidth
                    //   label=""
                    variant="outlined"
                    value={offerAmount}
                    onChange={(e) => setofferAmount(e.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="">Promo Code</label>
                  <TextField
                    color="warning"
                    id="outlined-basic"
                    placeholder="Ex- amit"
                    fullWidth
                    //   label=""
                    variant="outlined"
                    value={promocode}
                    onChange={(e) => setgpromocode(e.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="">Description of offer in online menu</label>
                  <TextField
                    color="warning"
                    id="outlined-basic"
                    placeholder="Every Monday to Friday"
                    fullWidth
                    //   label=""
                    variant="outlined"
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
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
                  Save Offer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Edit offer */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <form action="" onSubmit={editofferFunc}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Offer
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
                  <label htmlFor="">Offer Name</label>
                  <TextField
                    color="warning"
                    id="outlined-basic"
                    placeholder="Ex- amit"
                    fullWidth
                    //   label=""
                    variant="outlined"
                    value={newtitle}
                    onChange={(e) => setnewtitle(e.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="">Offer Amount</label>
                  <TextField
                    color="warning"
                    id="outlined-basic"
                    placeholder="Ex- amit"
                    fullWidth
                    //   label=""
                    variant="outlined"
                    value={newofferAmount}
                    onChange={(e) => setnewofferAmount(e.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="">Promo Code</label>
                  <TextField
                    color="warning"
                    id="outlined-basic"
                    placeholder="Ex- amit"
                    fullWidth
                    //   label=""
                    variant="outlined"
                    value={newpromocode}
                    onChange={(e) => setnewgpromocode(e.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="">Description of offer in online menu</label>
                  <TextField
                    color="warning"
                    id="outlined-basic"
                    placeholder="Every Monday to Friday"
                    fullWidth
                    //   label=""
                    variant="outlined"
                    value={newdescription}
                    onChange={(e) => setnewdescription(e.target.value)}
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
                Delete
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
                Save Offer
              </button>
            </div>
          </div>
          </form>
          
        </div>
      </div>
    </>
  );
}

export default Offers;

import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import CustomButton from "../../Components/Button";
import Sidebar from "./Sidebar";
import Offer from "./Offer";
import Header from "../../Components/Header/Header";
import { getFoodAPI } from "../../Components/api/api_base_url";

function Menu() {
  const token = sessionStorage.getItem("signature");
  const [activeRow, setActiveRow] = useState(1);
  const handleClick = (RowNumber) => {
    setActiveRow(RowNumber);
  };
  // payment select
  const [paymentModeButton, setPaymentModeButton] = useState(null);

  const paymentButtonClick = (buttonId) => {
    setPaymentModeButton(buttonId);
  };

  const [selectedButtons, setSelectedButtons] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [food, setFood] = useState([]);


  // const handleDecrease = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };
  // const handleIncrease = () => {
  //   setQuantity(quantity + 1);
  // };

  const handleDecrease = (index) => {
    const updatedViewCart = [...selectedItems];
    if (updatedViewCart[index].quantity > 1) {
      updatedViewCart[index].quantity--;
      setSelectedItems(updatedViewCart);
    }
  };

  const handleIncrease = (index) => {
    const updatedViewCart = [...selectedItems];
    updatedViewCart[index].quantity++;
    setSelectedItems(updatedViewCart);
  };
  
  const handleButtonClick = (buttonText, price) => {
    if (selectedButtons.includes(buttonText)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== buttonText));
      setSelectedItems(
        selectedItems.filter((item) => item.name !== buttonText)
      );
    } else {
      setSelectedButtons([...selectedButtons, buttonText]);
      setSelectedItems([...selectedItems, { name: buttonText, price }]);
    }
  };

  const buttonStyles = (buttonText) => {
    return selectedButtons.includes(buttonText)
      ? { color: "white", backgroundColor: "black" }
      : {};
  };
  // total price
  // const calculateTotalPrice = () => {
  //   return selectedItems.reduce((total, item) => total + item.price, 0);
  // };
  const buttons = [
    {
      id: 1,
      beerName: "Kingfisher ultra",
      price: "200",
    },
    {
      id: 2,
      beerName: "Kingfisher",
      price: "200",
    },
    {
      id: 3,
      beerName: "Corona-2",
      price: "200",
    },
    {
      id: 4,
      beerName: "Corona-3",
      price: "200",
    },
  ];
  const imported = [
    {
      id: 1,
      beerName: "Beezer",
      price: "200",
    },
    {
      id: 2,
      beerName: "bacardi",
      price: "300",
    },
    {
      id: 3,
      beerName: "White Veera",
      price: "200",
    },
  ];
  const top = [
    {
      id: 1,
      beerName: "Elephant",
      price: "150",
    },
    {
      id: 2,
      beerName: "Kingfisher max",
      price: "200",
    },
  ];

  const getFoods = async () => {
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
    }
  };

  useEffect(() => {
    getFoods();
  }, []);
  return (
    <>
      <Header />
      <div className="container-fluid my-2">
        <div className="row justify-content-around">
          <div className="col-lg-7">
            <button
              className="primary-button primary-button:hover"
              style={{
                height: "37px",
                width: "145px",
                fontWeight: "500",
                fontSize: "12px",
              }}
            >
              Go to Tables
            </button>
          </div>
          <div className="col-lg-4 mt-3">
            <span
              className="fw-bold text-secondary"
              style={{ fontSize: "15px", fontWeight: "600" }}
            >
              Bill for Table: 23
            </span>
          </div>
        </div>
        <div className="row justify-content-around my-1">
          <div className="col-lg-7 border rounded-3 text-center py-3 my-1 backgroundColorLight">
            <div className="row justify-content-center">
              <div className="col-lg-6">
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
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="row my-4">
              <Sidebar />
              <div className="col-lg-9 col-8">
                <div className="row">
                  <div className="col-lg-2 col-4">
                    <button
                      className={
                        activeRow === 1 ? "btn-btn highlight" : "btn-btn"
                      }
                      style={{ fontSize: "13px", fontWeight: "500" }}
                      onClick={() => handleClick(1)}
                    >
                      Domestic
                    </button>
                  </div>
                  <div className="col-lg-2 col-4">
                    <button
                      className={
                        activeRow === 2 ? "btn-btn highlight" : "btn-btn"
                      }
                      style={{ fontSize: "13px", fontWeight: "500" }}
                      onClick={() => handleClick(2)}
                    >
                      Imported
                    </button>
                  </div>
                  <div className="col-lg-2 col-4">
                    <button
                      className={
                        activeRow === 3 ? "btn-btn highlight" : "btn-btn"
                      }
                      style={{ fontSize: "13px", fontWeight: "500" }}
                      onClick={() => handleClick(3)}
                    >
                      Top
                    </button>
                  </div>
                </div>

                {/* first */}
                <div
                  style={{
                    display: activeRow === 1 ? "block" : "none",
                  }}
                >
                  <div className="row my-3">
                    {/* <div> */}
                    {food.map((data, index) => (
                      <div
                        className="col-lg-3 col-6 p-2 my-1"
                        key={data.id}
                        style={{ cursor: "pointer" }}
                        // onClick={closeButton}
                      >
                        <div
                          className="py-2 my-1 btn-hover itemButton"
                          onClick={() =>
                            handleButtonClick(data.name, data.price)
                          }
                          style={buttonStyles(data.name)}
                        >
                          <span style={{ fontSize: "13px", fontWeight: "550" }}>
                            {data.name}
                          </span>
                          <div className="position-absolute top-0 end-0">
                            {/* <i
                              className={
                                btnID.style.b === true ? "bi bi-x" : ""
                              }
                            ></i> */}
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* </div> */}
                  </div>
                </div>

                {/* 2nd */}
                <div
                  style={{
                    display: activeRow === 2 ? "block" : "none",
                  }}
                >
                  <div className="row my-3">
                    {imported.map((buttonText, index) => (
                      <div
                        className="col-lg-3 col-6 p-2 my-1"
                        key={index}
                        style={{ cursor: "pointer" }}
                      >
                        <div
                          className="itemButton py-2 my-1 btn-hover"
                          onClick={() =>
                            handleButtonClick(
                              buttonText.beerName,
                              buttonText.price
                            )
                          }
                          style={buttonStyles(buttonText.beerName)}
                        >
                          <span style={{ fontSize: "13px", fontWeight: "550" }}>
                            {buttonText.beerName}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* 3rd */}
                <div
                  style={{
                    display: activeRow === 3 ? "block" : "none",
                  }}
                >
                  <div className="row my-3">
                    {top.map((buttonText, index) => (
                      <div
                        className="col-lg-3 col-6 p-2 my-1"
                        key={index}
                        style={{ cursor: "pointer" }}
                      >
                        <div
                          className="itemButton py-2 my-1 btn-hover"
                          onClick={() =>
                            handleButtonClick(
                              buttonText.beerName,
                              buttonText.price
                            )
                          }
                          style={buttonStyles(buttonText.beerName)}
                        >
                          <span style={{ fontSize: "13px", fontWeight: "550" }}>
                            {buttonText.beerName}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 rounded-3 my-1 border border-top-0 backgroundColorLight rounded-3 px-0">
            <div className="">
              <div className="table-height-fixed">
                <table className="table">
                  <thead>
                    <tr>
                      <td className="tableHeadingColor rounded-start"></td>
                      <td className="tableHeadingColor">Item</td>
                      <td className="tableHeadingColor">Quantity</td>
                      <td className="tableHeadingColor rounded-end">Price</td>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: "13px" }}>
                    {selectedItems.length === 0 ? (
                      <tr style={{ backgroundColor: "transparent" }}>
                        <td colSpan="4" style={{ height: "36vh" }}>
                          <div className="text-center py-5">
                            <img
                              src={require("../../img/empty.png")}
                              alt=""
                              className="img-fluid "
                            />
                            <p className="text-center">NO item ordered Yet</p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      selectedItems.map((item, index) => (
                        <tr key={index} style={{ cursor: "pointer" }}>
                          <th scope="row">
                            <i className="bi bi-x-circle-fill"></i>
                          </th>
                          <td>{item.name}</td>
                          <td>
                            <span
                              className="px-3 backColorForQuantity text-white shadow-sm"
                              style={{ borderRadius: "3px" }}
                              onClick={() => handleDecrease(index)}
                            >
                              -
                            </span>
                            <span
                              className="px-3 backColorForQuantityGray"
                              style={{ borderRadius: "3px" }}
                            >
                              {quantity}
                            </span>
                            <span
                              className="px-3 backColorForQuantity text-white shadow-sm"
                              style={{ borderRadius: "3px" }}
                              onClick={() => handleIncrease(index)}
                            >
                              +
                            </span>
                          </td>
                          <td>{item.price}Rs</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div className="text-end mx-2 border-bottom border-top py-1">
                {/* <hr /> */}
                <h6
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  Total : 3700Rs
                </h6>
                <h6
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                  className="color"
                >
                  <span
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    style={{ cursor: "pointer" }}
                  >
                    Offer & discount
                  </span>{" "}
                  : 3700Rs
                </h6>
              </div>
              {/* <hr /> */}
              <div className="text-end mx-2 py-1">
                <h5
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  Net Total : 3700Rs
                </h5>
              </div>
              <div className="mx-2">
                <form action="">
                  <div className="row justify-content-end">
                    <div className="mb-1 col-lg-5 col-6">
                      <label
                        className="form-label text-secondary"
                        style={{ fontSize: "11px" }}
                      >
                        Customer name
                      </label>
                      <input
                        className="form-control"
                        style={{ height: "32px" }}
                      />
                    </div>
                    <div className="mb-1 col-lg-5 col-6">
                      <label
                        className="form-label text-secondary"
                        style={{ fontSize: "11px" }}
                      >
                        Customer M No.
                      </label>
                      <input
                        className="form-control"
                        style={{ height: "32px" }}
                      />
                    </div>
                  </div>
                </form>
              </div>
              {/* payment button */}
              <div className="text-end mx-2">
                <button
                  id="button1"
                  className={
                    paymentModeButton === "button1"
                      ? "backgroundColor payment-button border-0 text-white"
                      : "payment-button payment-hover"
                  }
                  onClick={() => paymentButtonClick("button1")}
                >
                  cash
                </button>
                <button
                  id="button2"
                  className={
                    paymentModeButton === "button2"
                      ? "backgroundColor payment-button border-0 text-white"
                      : "payment-button payment-hover"
                  }
                  onClick={() => paymentButtonClick("button2")}
                >
                  Card
                </button>
                <button
                  id="button3"
                  className={
                    paymentModeButton === "button3"
                      ? "backgroundColor payment-button border-0 text-white"
                      : "payment-button payment-hover"
                  }
                  onClick={() => paymentButtonClick("button3")}
                >
                  UPI
                </button>
                <button
                  id="button4"
                  className={
                    paymentModeButton === "button4"
                      ? "backgroundColor payment-button border-0 text-white"
                      : "payment-button payment-hover"
                  }
                  onClick={() => paymentButtonClick("button4")}
                >
                  Other
                </button>
              </div>
              {/* print bill */}
              <div className="text-end mx-2 py-1">
                <button
                  className="primary-button primary-button:hover"
                  style={{
                    height: "38px",
                    width: "123px",
                    fontWeight: "500",
                    fontSize: "14px",
                    padding: "3px, 19px, 3px, 19px",
                  }}
                >
                  Print Bill
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Offer />
    </>
  );
}

export default Menu;

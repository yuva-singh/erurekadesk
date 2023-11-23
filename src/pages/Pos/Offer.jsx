import React from "react";
import {useState } from "react";


function Offer() {
  const [activeRow, setActiveRow] = useState(1);
  const handleClick = (RowNumber) => {
    setActiveRow(RowNumber);
  };

  const [checkboxes, setCheckboxes] = useState([]);

  const handleCheckboxChange = (checkboxValue) => {
    if (checkboxes.includes(checkboxValue)) {
      setCheckboxes(checkboxes.filter((item) => item !== checkboxValue));
    } else {
      setCheckboxes([...checkboxes, checkboxValue]);
    }
  };

  const [discountCheckbox, setDiscountCheckbox] = useState("d-none");
  const discountCheckboxOpener = () => {
    if (discountCheckbox) {
      setDiscountCheckbox("");
    } else {
      setDiscountCheckbox("d-none");
    }
  };
 



  return (
    <>
      <>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="">
                <div className="border-bottom">
                  <button
                    className={activeRow === 1 ? "highlight-black" : "btn-1"}
                    onClick={() => handleClick(1)}
                  >
                    Discount
                  </button>
                  <button
                    className={activeRow === 2 ? "highlight-black-2" : "btn-1"}
                    onClick={() => handleClick(2)}
                  >
                    Offers
                  </button>
                </div>
              </div>
              {/* 1st */}
              <div
                className="modal-body"
                style={{
                  display: activeRow === 1 ? "block" : "none",
                }}
              >
                <div className="row">
                  <div className="col-lg-3 my-2">
                    <span style={{ fontSize: "14px" }}>
                      Discount applicable for:{" "}
                    </span>
                  </div>
                  <div className="col-lg-8">
                    <div
                      style={{ width: "319px", height: "auto" }}
                      className=""
                    >
                      <div
                        className="d-flex justify-content-between mt-1 px-2 border rounded py-2"
                        style={{ fontSize: "15px" }}
                      >
                        <div>Total bill</div>
                        <div
                          className={
                            discountCheckbox
                              ? "bi bi-caret-down-fill"
                              : "bi bi-caret-up-fill"
                          }
                          onClick={discountCheckboxOpener}
                          style={{ cursor: "pointer" }}
                        ></div>
                      </div>
                      <div
                        className={`mt-1 px-2 border rounded py-2 shadow-sm ${discountCheckbox}`}
                        style={{ fontSize: "13px" }}
                      >
                        <div
                          className="my-2 border-bottom d-flex justify-content-between"
                          style={{
                            color: checkboxes.includes("checkbox1")
                              ? "#f17300"
                              : "black",
                          }}
                        >
                          <div>
                            <input
                              type="checkbox"
                              name=""
                              className="mx-1"
                              id="checkbox1"
                              checked={checkboxes.includes("checkbox1")}
                              onChange={() => handleCheckboxChange("checkbox1")}
                            />
                            {""}
                            1. Corona (350ml)
                          </div>
                          <div>360 Rs.</div>
                        </div>
                        <div
                          className="my-2 border-bottom d-flex justify-content-between"
                          style={{
                            color: checkboxes.includes("checkbox2")
                              ? "#f17300"
                              : "black",
                          }}
                        >
                          <div>
                            <input
                              type="checkbox"
                              name=""
                              className="mx-1"
                              id="checkbox2"
                              checked={checkboxes.includes("checkbox2")}
                              onChange={() => handleCheckboxChange("checkbox2")}
                            />
                            {""}
                            1. Corona (350ml)
                          </div>
                          <div>360 Rs.</div>
                        </div>
                        <div
                          className="my-2 border-bottom d-flex justify-content-between"
                          style={{
                            color: checkboxes.includes("checkbox3")
                              ? "#f17300"
                              : "black",
                          }}
                        >
                          <div>
                            <input
                              type="checkbox"
                              name=""
                              className="mx-1"
                              id="checkbox3"
                              checked={checkboxes.includes("checkbox3")}
                              onChange={() => handleCheckboxChange("checkbox3")}
                            />
                            {""}
                            1. Corona (350ml)
                          </div>
                          <div>360 Rs.</div>
                        </div>
                        <div
                          className="my-2 border-bottom d-flex justify-content-between"
                          style={{
                            color: checkboxes.includes("checkbox4")
                              ? "#f17300"
                              : "black",
                          }}
                        >
                          <div>
                            <input
                              type="checkbox"
                              name=""
                              className="mx-1"
                              id="checkbox4"
                              checked={checkboxes.includes("checkbox4")}
                              onChange={() => handleCheckboxChange("checkbox4")}
                            />
                            {""}
                            1. Corona (350ml)
                          </div>
                          <div>360 Rs.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-lg-3">
                    <span style={{ fontSize: "14px" }}>Discount:</span>
                  </div>
                  <div className="col-lg-8">
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
                            Percentage
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
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Amount
                        </label>
                      </div>
                    </div>
                    <input
                      type="text"
                      style={{ width: "319px", height: "auto" }}
                      className="form-control my-2"
                      placeholder="Type % here"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 my-3">
                    <span style={{ fontSize: "14px" }}>Comment:</span>
                  </div>
                  <div className="col-lg-8">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="6"
                      style={{ width: "319px", height: "auto" }}
                      className="form-control"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* 2nd */}
              <div
                className="modal-body"
                style={{
                  display: activeRow === 2 ? "block" : "none",
                }}
              >
                <p
                  style={{
                    color: checkboxes.includes("checkbox2-1")
                      ? "#f17300"
                      : "black",
                  }}
                >
                  <div>
                    <input
                      type="checkbox"
                      name=""
                      className="mx-1"
                      id="checkbox2-1"
                      checked={checkboxes.includes("checkbox2-1")}
                      onChange={() => handleCheckboxChange("checkbox2-1")}
                    />
                    {""}
                   <span style={{fontSize:"14px",fontWeight:"500"}}>Happy Hours<span className="text-secondary" style={{fontSize:"11px"}}>(Cannot be clubbed with other offers)</span></span> 
                  </div>
                </p>
                <p
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
                   <span style={{fontSize:"14px",fontWeight:"500"}}>Diwali Offer 50% off on mocktails</span> 
                  </div>
                </p>
                <p
                  style={{
                    color: checkboxes.includes("checkbox2-3")
                      ? "#f17300"
                      : "black",
                  }}
                >
                  <div>
                    <input
                      type="checkbox"
                      name=""
                      className="mx-1"
                      id="checkbox2-3"
                      checked={checkboxes.includes("checkbox2-3")}
                      onChange={() => handleCheckboxChange("checkbox2-3")}
                    />
                    {""}
                   <span style={{fontSize:"14px",fontWeight:"500"}}>Birthday Offer</span> 
                  </div>
                </p>
                {/*  */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="primary-button-outline mx-4"
                  data-bs-dismiss="modal"
                  style={{padding:'3px, 12px, 3px, 12px',height:"37px",width:"75px",fontSize:"14px",fontWeight:"400"}}
                >
                  Cancel
                </button>
                <button
                  className="primary-button primary-button:hover"
                  style={{
                    height: "38px",
                    width: "164px",
                    fontWeight: "500",
                    fontSize: "14px",
                    padding: "3px, 27px, 3px, 27px",
                  }}
                >
                  Apply Discount
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Offer;

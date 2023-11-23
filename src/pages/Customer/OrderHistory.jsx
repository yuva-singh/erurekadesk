import React from "react";
import { useState } from "react";

function OrderHistory() {
  const [activeRow, setActiveRow] = useState(1);
  const handleClick = (RowNumber) => {
    setActiveRow(RowNumber);
  };
  return (
    <>
      <div className="col-lg-11">
        <div
          className="bg-white py-1 border border-bottom-0 rounded-top"
          //   style={{ overflow: "auto" }}
        >
          <div className="row my-2">
            <div className="d-flex">
              <span
                className={activeRow === 1 ? "btn-btn highlight-underline" : "btn-btn"}
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  cursor: "pointer",
                }}
                onClick={() => handleClick(1)}
              >
                All
              </span>
              <span
                className={activeRow === 2 ? "btn-btn highlight-underline" : "btn-btn"}
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  cursor: "pointer",
                }}
                onClick={() => handleClick(2)}
              >
                last visit
              </span>
              <span
                className={activeRow === 3 ? "btn-btn highlight-underline" : "btn-btn"}
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  cursor: "pointer",
                }}
                onClick={() => handleClick(3)}
              >
                This Week
              </span>
              <span
                className={activeRow === 4 ? "btn-btn highlight-underline" : "btn-btn"}
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  cursor: "pointer",
                }}
                onClick={() => handleClick(4)}
              >
                This Month
              </span>
              <span
                className={activeRow === 5 ? "btn-btn highlight-underline" : "btn-btn"}
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  cursor: "pointer",
                }}
                onClick={() => handleClick(5)}
              >
                This Year
              </span>
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
        <div
          className="border rounded-bottom"
          style={{ overflow: "auto", height: "72vh" }}
        >
          <table className="table">
            <thead>
              <tr
                style={{ fontSize: "13px", fontWeight: "500" }}
                className="table-light"
              >
                <td scope="col">Date</td>
                <td scope="col">Item</td>
                <td scope="col">Quantity</td>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, index) => (
                <tr style={{ fontSize: "13px" }}>
                  <td>19-09-2023</td>
                  <td>pizza</td>
                  <td>1</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* 2nd */}
      <div
        className="col-lg-11"
        style={{
          display: activeRow === 2 ? "block" : "none",
        }}
      >
        <div
          className="border rounded-bottom"
          style={{ overflow: "auto", height: "72vh" }}
        >
          <table className="table">
            <thead>
              <tr
                style={{ fontSize: "13px", fontWeight: "500" }}
                className="table-light"
              >
                <td scope="col">Date</td>
                <td scope="col">Item</td>
                <td scope="col">Quantity</td>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 11 }).map((_, index) => (
                <tr style={{ fontSize: "13px" }}>
                  <td>20-09-2023</td>
                  <td>Beer</td>
                  <td>10</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* 3rd */}
      <div
        className="col-lg-11"
        style={{
          display: activeRow === 3 ? "block" : "none",
        }}
      >
        <div
          className="border rounded-bottom"
          style={{ overflow: "auto", height: "72vh" }}
        >
          <table className="table">
            <thead>
              <tr
                style={{ fontSize: "13px", fontWeight: "500" }}
                className="table-light"
              >
                <td scope="col">Date</td>
                <td scope="col">Item</td>
                <td scope="col">Quantity</td>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 11 }).map((_, index) => (
                <tr style={{ fontSize: "13px" }}>
                  <td>21-09-2023</td>
                  <td>daru</td>
                  <td>10</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* 4rd */}
      <div
        className="col-lg-11"
        style={{
          display: activeRow === 4 ? "block" : "none",
        }}
      >
        <div
          className="border rounded-bottom"
          style={{ overflow: "auto", height: "72vh" }}
        >
          <table className="table">
            <thead>
              <tr
                style={{ fontSize: "13px", fontWeight: "500" }}
                className="table-light"
              >
                <td scope="col">Date</td>
                <td scope="col">Item</td>
                <td scope="col">Quantity</td>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 12 }).map((_, index) => (
                <tr style={{ fontSize: "13px" }}>
                  <td>22-09-2023</td>
                  <td>burger</td>
                  <td>100</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
       {/* 5rd */}
       <div
        className="col-lg-11"
        style={{
          display: activeRow === 5 ? "block" : "none",
        }}
      >
        <div
          className="border rounded-bottom"
          style={{ overflow: "auto", height: "72vh" }}
        >
          <table className="table">
            <thead>
              <tr
                style={{ fontSize: "13px", fontWeight: "500" }}
                className="table-light"
              >
                <td scope="col">Date</td>
                <td scope="col">Item</td>
                <td scope="col">Quantity</td>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 13 }).map((_, index) => (
                <tr style={{ fontSize: "13px" }}>
                  <td>23-09-2023</td>
                  <td>momos</td>
                  <td>1000</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default OrderHistory;

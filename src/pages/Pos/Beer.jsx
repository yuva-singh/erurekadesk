import React from "react";
import CustomButton from "../../Components/Button";
import Sidebar from "./Sidebar";

function Beer() {
  return (
    <>
      <div className="container-fluid">
        <CustomButton />
        <div className="row justify-content-around my-3">
          <div className="col-lg-7 border rounded-3 text-center py-3">
            <input
              type="text"
              className="inputDesign"
              name="search"
              placeholder=" Seach by Item name or shortcode"
            />
            <div className="row my-4">
              <Sidebar />
              <div className="col-lg-9">Beer</div>
            </div>
          </div>
          <div className="col-lg-4 border rounded-3">2</div>
        </div>
      </div>
    </>
  );
}

export default Beer;

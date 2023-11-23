import React from "react";
import DashboardHeaders from "./DashboardHeaders";
import CustomButton from "../../Components/Button";

function DashboardPages() {
  return (
    <>
      <DashboardHeaders />
      <div className="container fluid">
        <div className="row my-2">
         {/* <div className="d-flex">
         <CustomButton
        height={"37px"}
        width={"145px"}
        border={"none"}
        borderRadius={"7px"}
        ButtonName={"Go to Tables"}
        backgroundColor={"#f17300"}
        color={"white"}
        fontSize={"12px"}
        fontWeight={"500"}
        pageRedirect={"dashboard"}
      />
       <CustomButton
        height={"37px"}
        width={"145px"}
        border={"none"}
        borderRadius={"7px"}
        ButtonName={"Go to Tables"}
        backgroundColor={"#E6E6E6"}
        color={"black"}
        fontSize={"12px"}
        fontWeight={"500"}
        pageRedirect={"dashboard"}
      />
       <CustomButton
        height={"49px"}
        width={"151px"}
        border={"none"}
        borderRadius={"3px"}
        ButtonName={"Go to Tables"}
        backgroundColor={"black"}
        color={"white"}
        fontSize={"12px"}
        fontWeight={"500"}
        pageRedirect={"dashboard"}
      />
       <CustomButton
        height={"26px"}
        width={"100px"}
        border={"none"}
        borderRadius={"11px"}
        ButtonName={"Go to Tables"}
        backgroundColor={"#F87B09"}
        color={"white"}
        fontSize={"12px"}
        fontWeight={"500"}
        pageRedirect={"dashboard"}
      />
       <CustomButton
        height={"26px"}
        width={"100px"}
        border={"1px solid #F87B09"}
        borderRadius={"11px"}
        ButtonName={"Go to Tables"}
        backgroundColor={"transparent"}
        color={"black"}
        fontSize={"12px"}
        fontWeight={"500"}
        pageRedirect={"dashboard"}
      />
       <CustomButton
        height={"45px"}
        width={"145px"}
        border={"none"}
        borderRadius={"0"}
        ButtonName={"Go to Tables"}
        backgroundColor={"#CA3521"}
        color={"white"}
        fontSize={"12px"}
        fontWeight={"500"}
        pageRedirect={"dashboard"}
      />
       <CustomButton
        height={"37px"}
        width={"145px"}
        border={"none"}
        borderRadius={"7px"}
        ButtonName={"Go to Tables"}
        backgroundColor={"#E2B203"}
        color={"black"}
        fontSize={"12px"}
        fontWeight={"500"}
        pageRedirect={"dashboard"}
      />
         </div> */}
        </div>
        <div className="row my-4">
          <div className="col-lg-4 text-center p-2">
            <div className="border rounded my-2 p-3">
              <img
                src={require("../../img/pos 2.png")}
                height={"88px"}
                width={"auto"}
                alt=""
                className="py-3"
              />
              <div
                style={{
                  fontSize: "19px",
                  fontWeight: "600",
                  color: "#222222D1",
                }}
              >
                Setup your POS
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "400",
                  color: "#222222D1",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                Define your restaurant tables and you are all set to start
                punching orders and raising bills.
              </div>
              <button   className="primary-button primary-button:hover my-2"
                  style={{
                    height: "36px",
                    width: "115px",
                    fontWeight: "500",
                    fontSize: "12px",
                    padding: "9px, 23px, 9px, 23px",
                  }}>Add Tables</button>
            </div>
          </div>
          <div className="col-lg-4 text-center p-2">
            <div className="border rounded my-2 p-3">
              <img
                src={require("../../img/menu (1) 1.png")}
                height={"88px"}
                width={"auto"}
                alt=""
                className="py-3"
              />
              <div
                style={{
                  fontSize: "19px",
                  fontWeight: "600",
                  color: "#222222D1",
                }}
              >
                Create your menu
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "400",
                  color: "#222222D1",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                Create your online menu and let customer <br /> place order from their phones
              </div>
              <button
                  className="primary-button primary-button:hover my-2"
                  style={{
                    height: "36px",
                    width: "167px",
                    fontWeight: "500",
                    fontSize: "12px",
                    padding: "9px, 23px, 9px, 23px",
                  }}
                >
                Create online Menu
                </button>
            </div>
          </div>
          <div className="col-lg-4 text-center p-2">
            <div className="border rounded my-2 p-3">
              <img
                src={require("../../img/data-analytics 1.png")}
                height={"88px"}
                width={"auto"}
                alt=""
                className="py-3"
              />
              <div
                style={{
                  fontSize: "19px",
                  fontWeight: "600",
                  color: "#222222D1",
                }}
              >
                Try running reports
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "400",
                  color: "#222222D1",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
               See, how reporting can help your track <br /> performance
              </div>
              <button   className="primary-button primary-button:hover my-2"
                  style={{
                    height: "36px",
                    width: "126px",
                    fontWeight: "500",
                    fontSize: "12px",
                    padding: "9px, 23px, 9px, 23px",
                  }}>Go to reports</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 p-2">
            <div className="row border rounded p-2">
              <div className="col-lg-4 content-center">
                <img
                  src={require("../../img/undraw.png")}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-8 content-align">
                <div
                  style={{
                    
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#222222D1",
                  }}
                  className="py-1"
                >
                  Need Technical Support?
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "400",
                    color: "#222222D1",
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                  className="py-1"
                >
                  Our 24/7 global Support team is ready to help you navigate
                  Eurekadesk, wherever you are and whatever you might need.
                </div>
                <button   className="secondary-button secondary-button:hover my-2"
                  style={{
                    height: "36px",
                    width: "159px",
                    fontWeight: "500",
                    fontSize: "12px",
                    padding: "9px, 23px, 9px, 23px",
                  }}>Chat on whatsapp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPages;

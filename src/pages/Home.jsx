import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import axios from "axios";
import { getTableAPI } from "../Components/api/api_base_url";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Home() {
  const [table, setTable] = useState([]);
  const token = sessionStorage.getItem("signature");
  const [loading, setLoading] = useState(true);

  const tableapi = async () => {
    try {
      const res = await axios.get(getTableAPI, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setTable(res.data);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    tableapi();
  }, []);
  console.log(table);
  return (
    <>
      <Header />
      <div className="container-fluid backgroundColorLight py-2">
        <div className="row justify-content-end">
          <div className="col-lg-2 text-end d-flex">
            <div
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                backgroundColor: "#D9D9D9",
              }}
            ></div>
            <div
              className="mx-1"
              style={{ fontSize: "13px", fontWeight: "400" }}
            >
              Empty Table
            </div>
          </div>
          <div className="col-lg-2  text-end d-flex">
            <div
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                backgroundColor: "#7FE35C80",
              }}
            ></div>
            <div
              className="mx-1"
              style={{ fontSize: "13px", fontWeight: "400" }}
            >
              Running Table
            </div>
          </div>
        </div>
        <div className="row">
          <h6 className="text-secondary">Inside area</h6>
          {loading ? (
             <>
             {" "}
             {Array.from({ length: 20 }).map((_, index) => (
               <div className="col-lg-2 col-6 my-2">
                 {""}
                 <div
                   className="rounded pt-1 TableHover"
                   // style={{ border: "1px solid #0000008A" }}
                 >
                   <Skeleton width={"100%"} height={"100px"} count={1} />
                 </div>
               </div>
             ))}
           </>
          ) : (
            table.map((data, index) => {
              return (
                <div className="col-lg-2 col-6 my-2" key={data.id}>
                  <Link to={"/menu"}>
                    {" "}
                    <div
                      className="rounded px-3 pt-1 hoverClass border"
                      key={data.id}
                      style={{
                        backgroundColor: `${
                          data.items == 0 ? "white" : "#7FE35C80"
                        }`,
                      }}
                    >
                      <div className="d-flex justify-content-between">
                        <div
                          style={{ fontSize: "26px", fontWeight: "600" }}
                          className="my-2"
                        >
                          {data.tableNumber}
                        </div>

                        <div
                          className="content-center"
                          style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {data.capacity}{" "}
                          <span
                            className={
                              data.items === "" ? "invisible mx-1" : "mx-1"
                            }
                          >
                            Items
                          </span>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between py-2">
                        <div
                          style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          <span>
                            {/* <img
                            src={require("../img/group.svg")}
                            height={"15px"}
                            width={"15px"}
                            alt=""
                          />{" "} */}
                            <i className="bi bi-person"></i>
                            <span style={{ fontSize: "13px" }}>
                              {data.capacity}
                              {data.capacity == "" ? "Reserved" : data.items}
                            </span>{" "}
                          </span>
                        </div>
                        <div
                          style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {data.Price}{" "}
                          <span
                            className={data.Price === "" ? "invisible" : ""}
                          >
                            Rs.
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          )}
        </div>
        {/* second row outside area */}
        <div className="row my-4">
          <h6 className="text-secondary">Outside area</h6>
          {/* {table.map((data, index) => {
            return (
              <div className="col-lg-2 col-6 my-2" key={data.id}>
                <Link to={"/menu"}>
                  {" "}
                  <div
                    className="rounded px-3 pt-1 hoverClass border"
                    key={data.id}
                    style={{
                      backgroundColor: `${
                        data.items == 0 ? "white" : "#7FE35C80"
                      }`,
                    }}
                  >

                    <div className="d-flex justify-content-between">
                    <div
                      style={{ fontSize: "26px", fontWeight: "600" }}
                      className="my-2"
                    >
                      {data.TableNumber}
                    </div>

                    <div  
                          className="content-center"
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "14px",
                        }}
                      >
                        {data.items}{" "}
                        <span className={data.items === "" ? "invisible" : ""}>
                          Items
                        </span>
                      </div>
                    </div>
                    


                    <div className="d-flex justify-content-between py-2">
                      <div
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "14px",
                        }}
                      >
                        <span>
                          <img
                            src={require("../img/group.svg")}
                            height={"15px"}
                            width={"15px"}
                            alt=""
                          />{" "}
                          <span style={{ fontSize: "13px" }}>
                            {" "}
                             {data.items == "" ? "Reserved":data.items}
                          </span>{" "}
                        </span>
                      </div>
                      <div
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "14px",
                        }}
                      >
                        {data.Price}{" "}
                        <span className={data.Price === "" ? "invisible" : ""}>
                          Rs.
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })} */}
        </div>
      </div>
    </>
  );
}

export default Home;

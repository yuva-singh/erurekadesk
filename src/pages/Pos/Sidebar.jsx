import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCategoryAPI } from "../../Components/api/api_base_url";
import { useState } from "react";
import axios from "axios";

function Sidebar() {
  const token = sessionStorage.getItem("signature");
  var location = useLocation();
  const [getcategorydata, setgetcategorydata] = useState([]);
  useEffect(() => {}, [location]);
  const FoodCategory = [
    {
      id: 1,
      CategoryName: "MostSelling",
      locationName: "menu",
    },
    {
      id: 2,
      CategoryName: "Beer",
      locationName: "beer",
    },
    {
      id: 3,
      CategoryName: "Whiskey",
      locationName: "whiskey",
    },
    {
      id: 4,
      CategoryName: "Chinese",
      locationName: "chinese",
    },
    {
      id: 5,
      CategoryName: "Mocktails",
      locationName: "mocktails",
    },
    {
      id: 6,
      CategoryName: "Breakfast",
      locationName: "breakfast",
    },
    {
      id: 7,
      CategoryName: "Sandwiches",
      locationName: "sandwiches",
    },
    {
      id: 8,
      CategoryName: "Burgers",
      locationName: "burgers",
    },
    {
      id: 9,
      CategoryName: "Continental",
      locationName: "continental",
    },
  ];

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
      <div className="col-lg-3 col-4 border border-top-0 border-left-0 border-bottom-0 text-start sidebarFixed px-0">
        {getcategorydata.map((data, index) => {
          return (
            <Link to={`/${data.name}`} key={data.id}>
              {" "}
              <div
                style={{ fontSize: "13px", fontWeight: "500" }}
                className={
                  location.pathname === `/${data.name}` ? "select-button py-2 mx-2 my-1 rounded" : "hover py-2 mx-2 my-1 rounded"
                }
              >
                <i
                  className={
                    location.pathname === `/${data.name}`
                      ? "bi bi-caret-right-fill"
                      : "bi bi-caret-right-fill invisible"
                  }
                ></i>{" "}
                <span className="">{data.name}</span>
              </div>{" "}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Sidebar;

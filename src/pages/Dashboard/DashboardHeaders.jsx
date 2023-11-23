import React from 'react';
import {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OffCanvasLeft from '../../Components/OffCanvasLeft';
import PageName from '../../Components/PageName';


function DashboardHeaders() {
    let location = useLocation();
    useEffect(() => {}, [location]);
  
  return (
    <header className="p-1 border-bottom">
    <div className="container-fluid">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-start mb-md-0">
          <OffCanvasLeft />
          <PageName PageNames={"Dashboard"} icons={<SettingsOutlinedIcon />}></PageName>
        </ul>
        <div className="col-6 col-lg-auto mb-3 mb-lg-0 me-lg-3 display-none-mobile">
          <span className="logo">Eurekadesk</span>
        </div>
      </div>
    </div>
  </header>
  )
}

export default DashboardHeaders
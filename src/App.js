import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Pos/Menu";
import Sidebar from "./pages/Pos/Sidebar";
import Beer from "./pages/Pos/Beer";
import Whiskey from "./pages/Pos/Whiskey";
import MenuItem from "./pages/MenuItem/MenuItem";
import MenuItem2 from "./pages/Pos/MenuItem2";
import Register from "./pages/Register/Register";
import Users from "./pages/Manage/Users";
import Role from "./pages/Manage/Role";
import DashboardPages from "./pages/Dashboard/DashboardPages";
import Offers from "./pages/Manage/Offers";
import Taxes from "./pages/Manage/Taxes";
import OutletsAndRegisters from "./pages/Manage/OutletsAndRegisters";
import Retail_dashboard from "./pages/Report/Retail_dashboard";
import ProductSold from "./pages/Report/ProductSold";
import SalesReport from "./pages/Report/SalesReport";
import PaymentReport from "./pages/Report/PaymentReport";
import Customer from "./pages/Customer/Customer";
import CustomerProfile from "./pages/Customer/CustomerProfile";
import Group from "./pages/Customer/Group";
import Groups from "./pages/Customer/Groups"
import GroupSinglePage from "./pages/Customer/GroupSinglePage";
import TakeAway from "./pages/Pos/TakeAway";
import Delivery from "./pages/Pos/Delivery";
import Table from "./pages/Pos/Table";
import Feedback from "./pages/FeedBack/Feedback";
import ChooseTemplate from "./pages/FeedBack/ChooseTemplate";
import HowItsWork from "./pages/FeedBack/HowItsWork";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import RegisterForm from "./pages/FeedBack/feedbackForm";
import Profile from "./pages/Profile/profile";
import DeliveryMethod from "./pages/FeedBack/DeliveryMethod";
import Survey from "./pages/FeedBack/Survey";
import LoginNumber from "./pages/Login/LoginNumber";
import MySurveys from "./pages/FeedBack/MySurveys";
import TestSurvey from "./pages/FeedBack/TestSurvey";
import FeedbackMenu from "./pages/FeedBack/FeedbackMenu";
import RevievPage from "./pages/FeedBack/RevievPage";
export default function App() {
  return (
    <React.Fragment>
      {/* <Header/> */}
      <Routes>
      <Route path="/home" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/takeAway" element={<TakeAway />}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
        <Route path="/menuItem" element={<MenuItem />}></Route>
        <Route path="/beer" element={<Beer />}></Route>
        <Route path="/whiskey" element={<Whiskey />}></Route>
        <Route path="/MenuItem2" element={<MenuItem2 />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/role" element={<Role />}></Route>
        <Route path="/dashboard" element={<DashboardPages />}></Route>
        <Route path="/offers" element={<Offers />}></Route>
        <Route path="/taxes" element={<Taxes />}></Route>
        <Route path="/OutletsAndRegisters" element={<OutletsAndRegisters />}></Route>
        <Route path="/RetailDashboard" element={<Retail_dashboard />}></Route>
        <Route path="/Product_Sold" element={<ProductSold />}></Route>
        <Route path="/Sales_Report" element={<SalesReport />}></Route>
        <Route path="/payment_Report" element={<PaymentReport />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/customerProfile" element={<CustomerProfile />}></Route>
        <Route path="/group" element={<Group />}></Route>
        <Route path="/groups" element={<Groups />}></Route>
        <Route path="/groupSinglePage" element={<GroupSinglePage />}></Route>
        <Route path="/delivery" element={<Delivery />}></Route>
        <Route path="/table" element={<Table />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/chooseTemplate" element={<ChooseTemplate />}></Route>
        <Route path="/howItsWork" element={<HowItsWork />}></Route>
        <Route path="/login1" element={<Login />}></Route>
        <Route path="/" element={<LoginNumber />}></Route>
        <Route path="/feedbackForm" element={<RegisterForm />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/deliveryMethod" element={<DeliveryMethod />}></Route>
        <Route path="/Survey" element={<Survey />}></Route>
        <Route path="/Mysurveys" element={<MySurveys />}></Route>
        <Route path="/Testsurvey" element={<TestSurvey />}></Route>
        <Route path="/feedbackmenu" element={<FeedbackMenu />}></Route>
        <Route path="/review" element={<RevievPage />}></Route>
      </Routes>
    </React.Fragment>
  )
}

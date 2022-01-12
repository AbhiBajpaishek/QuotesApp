import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Quotes from "../Quotes/quotes";
import QuotesDetail from "../QuotesDetail/QuotesDetail";
import AddQuote from "../AddQuote/AddQuote";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import CreateRole from "../Roles/CreateRole";
import Roles from "../Roles/Roles";
import RolesMaster from "../Roles/RolesMaster";

const AppRoute = (props) => {
  const isLoggedIn = props.status;
  let jsx;
  if (isLoggedIn) {
    jsx = (
      <Routes>
        <Route path="/" element={<Navigate to="/quotes"></Navigate>} />
        <Route path="*" element={<Navigate to="/quotes"></Navigate>} />
        <Route path="/login" element={<Navigate to="/quotes"></Navigate>} />
        <Route path="/signup" element={<Navigate to="/quotes"></Navigate>} />
        <Route
          path="quotes/:quoteID/*"
          element={<QuotesDetail></QuotesDetail>}
        />
        <Route path="/quotes" element={<Quotes></Quotes>} />
        <Route path="/addQuotes" element={<AddQuote />} />
        <Route path ="/addRole" element = {<CreateRole/>} />
        <Route path ="/showRoles" element = {<Roles/>} />
        <Route path ="/showRoles/:roleId/*" element = {<RolesMaster/>} />
      </Routes>
    );
  } else {
    jsx = (
      <Routes>
        <Route path="/" element={<Navigate to="/login"></Navigate>} />
        <Route path="/quotes" element={<Navigate to="/login"></Navigate>} />
        <Route path="*" element={<Navigate to="/login"></Navigate>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }
  return jsx;
};

export default AppRoute;

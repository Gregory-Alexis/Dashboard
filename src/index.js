import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import New from "./Pages/New/New";
import Single from "./Pages/Single/Single";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" />
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />

      <Route path="users">
        <Route index element={<List />} />
        <Route path=":userId" element={<Single />} />
        <Route path="new" element={<New />} />
      </Route>

      <Route path="products">
        <Route index element={<List />} />
        <Route path=":productId" element={<Single />} />
        <Route path="new" element={<New />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

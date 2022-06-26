import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Login/>}> </Route>
      <Route path="/signup" element = {<Signup/>}> </Route>
      <Route path="/main" element = {<Main/>}> </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

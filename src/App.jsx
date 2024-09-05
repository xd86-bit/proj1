
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React, { useEffect, useState,useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import NavPage from "./components/NavPage";
import Test from "./components/Test";
import CardDetails from './components/CardDetails';
import {cardsInfos} from "./components/cardsInfos";

import Login from "./components/Login";
import Register from "./components/Register";

export default function App()
{
    return(
      <Router>
      <>
        <Routes>
          <Route path="/" element={<NavPage />} /> 
          <Route path="/cards/:id" element={<CardDetails datas={cardsInfos}/>} /> 
          <Route path="/login" element={<Login/>} /> 
          <Route path="/register" element={<Register/>} /> 
        </Routes>
      </>
      </Router>
    );
}
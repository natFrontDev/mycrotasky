import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import {Navbar} from "./Navbar";
import {Task2} from "./Microtask_2/Task_2";
import {Task3} from "./Microtask_3/Task_3";
import {Task4} from "./Microtask_4/Task_4";
import {Task5} from "./Microtask_5/Task_5";
import {Task6} from "./Microtask_6/Task_6";


function App() {

  return (
      <div className={"main_style"}>
          <header>MIKROTASKS</header>
          <Navbar/>
          <div className={'App_wrapper_content'}>
              <Routes>
                  <Route path={"/task2"} element={<Task2/>}/>
                  <Route path={"/task3"} element={<Task3/>}/>
                  <Route path={"/task4"} element={<Task4/>}/>
                  <Route path={"/task5"} element={<Task5/>}/>
                  <Route path={"/task6"} element={<Task6/>}/>
              </Routes>
          </div>
      </div>
  );
}

export default App;

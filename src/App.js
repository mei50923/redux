import React from 'react';
import {BrowserRouter,Route,Link} from "react-router-dom"
import './App.css';


import Index from "./pages/index"
import Course from "./pages/course"
import Profile from "./pages/profile"


function App() {
  return (
    <BrowserRouter >
       <Route exact component={Index} path="/"/>
       <Route component={Course} path="/course"/>
       <Route component={Profile} path="/profile"/>

       <div className="meau">
          <Link to="/">首页</Link>
          <Link to="/course">课程</Link>
          <Link to="/profile">个人中心</Link>
       </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import Usertable from "../Tables/Usertable";
import {Route ,Switch} from "react-router-dom";
import Viewprofile from "../viewProfile/Viewprofile";
import Edituser from "../Edit/Edituser";

const Maindashboard = () => {
  return (
    <div className="col-md-10 h-auto">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <h3 className="font-weight-bold mt-4">
              Master Data:<span className="text-info">Staff</span>
            </h3>
          </div>
          <div className="col-md-3">
            <i className="far fa-bell text-info bg-white mx-3 mt-4 p-1"></i>
            <i className="far fa-envelope text-info bg-white mx-3 mt-4 p-1"></i>
            <select name="" id="" className="px-2 mullist p-2">
              <option value="">Subash Bose</option>
              <option value="">Subash Bose</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row mt-4">
          <div className="col">
          <Switch>
          <Route path="/" exact component={Usertable}/>
          <Route path="/view-profile/:id"  component={Viewprofile} exact/>
          <Route path="/edit-profile/:id"  component={Edituser} exact/>
          </Switch>
            
          </div>
      </div>
    </div>
  );
};

export default Maindashboard;

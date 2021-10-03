import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneUser } from "../Services/Api";

const Viewprofile = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    getOneUser(id).then((res) => {
      console.log(res);
      setUser(res.data);
    });
  }, [id]);
  return (
    <>
      <div className="row">
        <div className="col-md-4 mx-3 d-flex">
          <Link to="/" className="mx-3 text-black">
            <i class="fas fa-chevron-left"></i>
          </Link>
          <h6 className="text-uppercase">Back</h6>
        </div>
      </div>
      <div className="row mt-3 mx-4">
        <div className="col-md-6">
          <button className="btn btn-custom text-white px-4 mr-2 btn-lg font-weight-bold">
            Personal Info
          </button>
          <button className="btn  bg-white text-info  px-4 ml-2 btn-lg font-weight-bold">
            Roles & Performance
          </button>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
      </div>
      <div className="row m-3">
        <div className="col-md-4 px-4 d-flex justify-content-between">
          <h4 className="text-uppercase">Basic Details</h4>
          <span>
            <i class="fas fa-edit"></i>
          </span>
        </div>
      </div>
      <div className="row mx-3">
        <div className="col-md-4">
          <div className="card ">
            <div className="card-body">
              <img
                src={`http://localhost:8080/${user.userProf}`}
                alt="imageUser"
                className="img-fluid"
              />
              <table className="table">
                <tr>
                  <td>Name : </td>
                  <td className="font-weight-bold">
                    {" "}
                    {user.firstName} {user.lastName}
                  </td>
                </tr>
                <tr>
                  <td>Email : </td>
                  <td className="font-weight-bold">{user.email}</td>
                </tr>
                <tr>
                  <td>Mobile : </td>
                  <td className="font-weight-bold">{user.mobile}</td>
                </tr>
                <tr>
                  <td>Department : </td>
                  <td className="font-weight-bold"> {user.department}</td>
                </tr>
                <tr>
                  <td>Role : </td>
                  <td className="font-weight-bold">{user.role}</td>
                </tr>
                <tr>
                  <td>Date of joining : </td>
                  <td className="font-weight-bold">{user.joiningDate}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default Viewprofile;

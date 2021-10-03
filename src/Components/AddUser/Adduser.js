import React, { useState } from "react";
import { addUsers } from "../Services/Api";
import { useHistory } from "react-router-dom";

export const Adduser = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const history = useHistory();
  const [userDetail, setUserDetail] = useState({
    department: "",
    role: "",
    empId: "",
    firstName: "",
    lastName: "",
    joiningDate: "",
    mobile: "",
    email: "",
    userProf: "",
  });

  const onUploadHandler = (e) => {
    setUploadedFile(e.target.files[0]);
  };
  const onChangeHandler=(e)=>{
      setUserDetail({
          ...userDetail,
          [e.target.name]:e.target.value
      })
  }

  const onSubmitHandler =(e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append("firstName", userDetail.firstName);
      formData.append("lastName", userDetail.lastName);
      formData.append("role", userDetail.role);
      formData.append("mobile", userDetail.mobile);
      formData.append("email", userDetail.email);
      formData.append("department", userDetail.department);
      formData.append("joiningDate", userDetail.joiningDate);
      formData.append("empId", userDetail.empId);
      formData.append("userProf", uploadedFile);
     
      addUsers(formData).then(res=>{
         window.location.reload(false);
          console.log(res);
      })
  }
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-4">
          <button
            className="btn rounded btn-custom text-white px-3 btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#entry-modal"
          >
            + Add New
          </button>
          <button className="btn btn-custom  text-white px-3 btn-sm ">
            Upload CSV
          </button>
        </div>

        <div className="col-md-5"></div>
        <div className="col-md-3">
          <input type="search" className=" form-control form-control-sm" placeholder="Search" />
        </div>
      </div>

      {/* <!-- add new button modal --> */}
      <div className="modal" id="entry-modal">
        <div className="modal-dialog ">
          <div className="modal-content ">
            <div className="modal-header bg-info text-white">
              <h2 className="text-uppercase">Add Staff</h2>
              <button className="close" data-bs-dismiss="modal">
                <i className="fa fa-times-circle"></i>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmitHandler} encType="multipart/form-data">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    value={userDetail.firstName}
                    onChange={onChangeHandler}
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    value={userDetail.lastName}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Date Of Joining:</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Date of joining"
                    name="joiningDate"
                    value={userDetail.joiningDate}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile"
                    name="mobile"
                    value={userDetail.mobile}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={userDetail.email}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Department"
                    name="department"
                    value={userDetail.department}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Role"
                    name="role"
                    value={userDetail.role}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="id"
                    className="form-control"
                    placeholder="Employee Id"
                    name="empId"
                    value={userDetail.empId}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <input className="form-control" name="userProf" onChange={onUploadHandler} type="file" id="formFile" />
                </div>

                <div>
                  <button disabled={!uploadedFile} className="btn btn-info text-white btn-sm">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

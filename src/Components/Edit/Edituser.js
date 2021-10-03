import React, { useState, useEffect } from "react";
import { useParams,useHistory,Link } from "react-router-dom";
import { editUsers, getOneUser } from "../Services/Api";

const Edituser = () => {
  const { id } = useParams();
  const history=useHistory();

  const [uploadedFile, setUploadedFile] = useState(null);
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
  useEffect(() => {
      getOneUser(id).then(res=>{
        setUserDetail(res.data);
      });
  }, [id]);

  const onUploadHandler = (e) => {
    setUploadedFile(e.target.files[0]);
  };
  const onChangeHandler=(e)=>{
    setUserDetail({
        ...userDetail,
        [e.target.name]:e.target.value
    })
}

const onSubmitHandler=(e)=>{
    e.preventDefault();
    editUsers(id,userDetail).then(res=>{
        history.push("/")
    });

}
  return (
      <>
    <div className="row mt-5">
    <div className="col-md-4 mx-3 d-flex">
      <Link to="/" className="mx-3 text-black">
        <i class="fas fa-chevron-left"></i>
      </Link>
      <h6 className="text-uppercase">Back</h6>
    </div>
  </div>
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-secondary text-center text-white">
            <h2 className="">Edit Profile</h2>
          </div>
          <div className="card-body">
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
                <input
                  className="form-control"
                  name="userProf"
                  value={uploadedFile}
                  onChange={onUploadHandler}
                  type="file"
                  id="formFile"
                />
              </div>

              <div>
                <button className="btn btn-info text-white btn-sm">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
    </>
  );
};

export default Edituser;

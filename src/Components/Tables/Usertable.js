import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Adduser } from "../AddUser/Adduser";
import { getAllUsers, deleteUsers } from "../Services/Api";

const Usertable = () => {
    const [showIcon,setShowIcon]=useState(false)
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getAllUsers().then((res) => {
      setUserData(res.data);
    });
  }, [userData]);
  const deleteUser = (id) => {
    deleteUsers(id);
  };
  return (
    <>
      <Adduser />
      <div className="table-responsive-md">
      <table className="table mt-3 w-100 tableProfile">
        <thead>
          <tr className="trAllUser">
            <th className="text-muted">Department</th>
            <th className="text-muted">Role</th>
            <th className="text-muted">Emp.id</th>
            <th className="text-muted">First Name</th>
            <th className="text-muted">Last Name</th>
            <th className="text-muted">Date of Joining</th>
            <th className="text-muted">Mobile</th>
            <th className="text-muted">Email</th>
            <th className="text-muted">
              Total Staff:<span className="text-info">32</span>/80
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.length > 0 &&
            userData.map((user) => (
              <tr className="trAllUser" key={user._id}>
                <td>{user.department}</td>
                <td>{user.role}</td>
                <td>{user.empId}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.joiningDate.substr(0, 10)}</td>
                <td>{user.mobile}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`/view-profile/${user._id}`}
                    className="btn btn-info text-white px-2 rounded-pill btn-sm view-btn "
                  >
                    View Profile
                  </Link>

                  <i className="fas fa-ellipsis-h mx-2"  onClick={()=>setShowIcon(!showIcon)}></i>
                 {showIcon&& <>
                    <Link to={`/edit-profile/${user._id}`}>
                      <i
                        className="far fa-edit mx-2"
                        data-toggle="modal"
                        data-target="#entry-modals"
                      ></i>
                    </Link>

                    <i
                      className="far fa-trash-alt mx-2"
                      onClick={() => deleteUser(user._id)}
                    ></i>
                  </>}
                </td>
              </tr>
            ))}
            {userData.length === 0&&<h2 className="text-danger">No Records Found...!</h2>}

                </tbody>
      </table>
      </div>
    </>
  );
};

export default Usertable;

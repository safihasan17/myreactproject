import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { defaultUser, type User } from "../../../interfaces/User";
import { api } from "../../../config";

function UserDetails() {
  const {id} = useParams();
  const [user, setUser]=useState<User>(defaultUser);
  const getUser=()=>{
    api
    .get("user-details?id=" + id)
    .then((res)=>{
      console.log(res.data)
      setUser(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getUser();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="">
              <h1 className="fs-3 mb-1">User Details</h1>
              <p className="mb-0">View staff account information</p>
            </div>
            <div className="d-flex gap-2">
              <Link to="/edit-user/:id" className="btn btn-outline-secondary">
                <i className="ti ti-edit me-1"></i> Edit
              </Link>
              <Link to="/user" className="btn btn-primary">
                Go to Users List
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-body p-4 text-center">
              <img
                src="./assets/images/avatar-1.jpg"
                alt=""
                className="avatar avatar-xl rounded-circle mb-3"
              />
              <h4 className="mb-1">{user.name}</h4>
              <p className="text-secondary mb-3">{user.email}</p>
              <span className="badge bg-primary-subtle text-primary me-1">
                {user.role}
              </span>
              <span className="badge bg-success-subtle text-success">
                {user.status}
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-8 mb-4">
          <div className="card h-100">
            <div className="card-body p-4">
              <h5 className="mb-4">Account Information</h5>
              <div className="row gy-3">
                <div className="col-md-6">
                  <small className="text-secondary d-block">User ID</small>
                  <p className="mb-0"> {user.id}</p>
                </div>
                <div className="col-md-6">
                  <small className="text-secondary d-block">Full Name</small>
                  <p className="mb-0">{user.name}</p>
                </div>
                <div className="col-md-6">
                  <small className="text-secondary d-block">Email</small>
                  <p className="mb-0">{user.email}</p>
                </div>
                <div className="col-md-6">
                  <small className="text-secondary d-block">Phone</small>
                  <p className="mb-0">{user.phone}</p>
                </div>
                <div className="col-md-6">
                  <small className="text-secondary d-block">Role</small>
                  <p className="mb-0 text-capitalize">{user.role}</p>
                </div>
                <div className="col-md-6">
                  <small className="text-secondary d-block">Status</small>
                  <p className="mb-0 text-capitalize">{user.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
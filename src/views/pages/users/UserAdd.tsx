import { Link } from "react-router";
import { type User, defaultUser } from "../../../interfaces/User";
import { useState } from "react";
import type { Role } from "../../../interfaces/Role";
import { api } from "../../../config";

function UserAdd() {
  const [user, setUser] = useState<User>(defaultUser);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    passwordConfirm: "",
  });

  const [roles, setRoles] = useState<Role[]>([]);


  function getRoles(){
    api
    .get("roles")
    .then()
    .catch()
  }



  function handleSubmit(e: any) {
    e.preventDefault();
    let newErrors: any = {};

    if (user.name === "") {
      newErrors.name = "Name is required";
    } else if (user.name.length > 100 || user.name.length < 3) {
      newErrors.name = "Name more than 3 and not more than 100";
    } else {
      newErrors.name = "";
    }

    if (user.email === "") {
      newErrors.email = "Email is required";
    } else {
      newErrors.email = "";
    }

    if (user.phone === "") {
      newErrors.phone = "Phone is required";
    } else {
      newErrors.phone = "";
    }

    if (user.role === "") {
      newErrors.role = "Role is required";
    } else {
      newErrors.role = "";
    }

    if (user.password === "") {
      newErrors.password = "Password is required";
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else {
      newErrors.password = "";
    }

    if (passwordConfirm === "") {
      newErrors.passwordConfirm = "Please confirm the password";
    } else if (passwordConfirm !== user.password) {
      newErrors.passwordConfirm = "Passwords do not match";
    } else {
      newErrors.passwordConfirm = "";
    }

    setError(newErrors);
    console.log(user);
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div className="">
              <h1 className="fs-3 mb-1">Add User</h1>
              <p className="mb-0">Create a new staff account</p>
            </div>
            <div>
              <Link to="/user" className="btn btn-primary">
                Go to Users List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-4">
              <form id="addUserForm">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="userName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userName"
                      placeholder="Enter full name"
                      
                      value={user.name}
                      onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />
                    <small className="text-danger">{error.name}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="userEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="userEmail"
                      placeholder="Enter email address"
                      
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                    <small className="text-danger">{error.email}</small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="userPhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="userPhone"
                      placeholder="e.g. +880 1XXX-XXXXXX"
                      
                      value={user.phone}
                      onChange={(e) => setUser({ ...user, phone: e.target.value })}
                    />
                    <small className="text-danger">{error.phone}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="userRole" className="form-label">
                      Role
                    </label>
                    <select
                      className="form-select"
                      id="userRole"
                      
                      value={user.role}
                      onChange={(e) => setUser({ ...user, role: e.target.value as User["role"] })}
                    >
                      <option value="">Select role</option>
                      <option value="admin">Admin</option>
                      <option value="manager">Manager</option>
                      <option value="cashier">Cashier</option>
                    </select>
                    <small className="text-danger">{error.role}</small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="userPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="userPassword"
                      placeholder="Enter password"
                      
                      minLength={6}
                      value={user.password}
                      onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    <small className="text-danger">{error.password}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="userPasswordConfirm" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="userPasswordConfirm"
                      placeholder="Re-enter password"
                      
                      minLength={6}
                      value={passwordConfirm}
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                    <small className="text-danger">{error.passwordConfirm}</small>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="userAvatar" className="form-label">
                    Profile Photo
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="userAvatar"
                    accept="image/*"
                    onChange={(e) =>
                      setUser({ ...user, avatar: e.target.files?.[0]?.name ?? "" })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label d-block">Status</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="userStatus"
                      id="statusActive"
                      value="active"
                      checked={user.status === "active"}
                      onChange={() => setUser({ ...user, status: "active" })}
                    />
                    <label className="form-check-label" htmlFor="statusActive">
                      Active
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="userStatus"
                      id="statusInactive"
                      value="inactive"
                      checked={user.status === "inactive"}
                      onChange={() => setUser({ ...user, status: "inactive" })}
                    />
                    <label className="form-check-label" htmlFor="statusInactive">
                      Inactive
                    </label>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Add User
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAdd;
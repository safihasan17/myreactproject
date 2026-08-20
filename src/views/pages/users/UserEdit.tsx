import { Link, useParams } from "react-router";
import { type User, defaultUser } from "../../../interfaces/User";
import { useEffect, useState } from "react";
import type { Role } from "../../../interfaces/Role";
import { api } from "../../../Config";


function UserEdit() {
  const {id} = useParams();
  const [user, setUser] = useState<User>(defaultUser);
 
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    
  });

  const [roles, setRoles] = useState<Role[]>([]);
  const [msg, setMsg] = useState(false);
  const [success, setSuccess] = useState(false);

  function getUsers() {
    api
      .get("user-details?id=" + id)
      .then((res) => {
        // console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

    function getRoles(){
    api
    .get("roles")
    .then((res)=>{
      console.log(res.data);
      setRoles(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getRoles();
  }, []);

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

    if (user.role == 0) {
      newErrors.role = "Role is required";
    } else {
      newErrors.role = 0;
    }

  

    

    setError(newErrors);
    // console.log(user);

    if (
      newErrors.name == "" &&
      newErrors.email == "" &&
      newErrors.phone == "" &&
      newErrors.role == "" 
     
    ) {
      // console.log(user);

      api
        .put("user-update",user )
        .then((res) => {
          console.log(res.data);
          if (res.status == 200 || res.status == 201) {
            setMsg(true);
            setSuccess(true);
            setUser(defaultUser);
          }
        })
        .catch((err) => {
          console.log(err);
          setMsg(true);
          setSuccess(false);
        });
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div className="">
              <h1 className="fs-3 mb-1">Edit User</h1>
              <p className="mb-0">update user </p>
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
              {msg && (
                <div
                  className={`alert alert-${success ? "success" : "danger"} alert-dismissible fade show mb-3`}
                  role="alert"
                >
                  {success
                    ? "Data updated successfully"
                    : "something went wrong! please try again after some time."}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => setMsg(false)}
                  ></button>
                </div>
              )}

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
                      onChange={(e) =>
                        setUser({ ...user, name: e.target.value })
                      }
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
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
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
                      onChange={(e) =>
                        setUser({ ...user, phone: e.target.value })
                      }
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
                      onChange={(e) =>
                        setUser({
                          ...user,
                          role: Number(e.target.value),
                        })
                      }
                    >
                      <option value={0} disabled>
                        Select role
                      </option>
                      {roles.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <small className="text-danger">{error.role}</small>
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
                      setUser({
                        ...user,
                        avatar: e.target.files?.[0]?.name ?? "",
                      })
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
                    <label
                      className="form-check-label"
                      htmlFor="statusInactive"
                    >
                      Inactive
                    </label>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    update User
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

export default UserEdit;

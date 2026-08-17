import { Link } from "react-router";
import axios from "axios";
import type { User } from "../../../interfaces/User";
import { useEffect, useState } from "react";

function UserManage() {

  const [users, setUsers] = useState<User[]>([]);
  const getUsers =()=>{
    axios
    .get("http://localhost/pos_poject_api/api/users")
    .then((res)=>{
      // console.log(res.data);
      setUsers(res.data)

    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getUsers()
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="">
              <h1 className="fs-3 mb-1">Users</h1>
              <p className="mb-0">Manage system users and their roles</p>
            </div>
            <div>
              <Link to="/add-user" className="btn btn-primary">
                Add User
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div>
            <div className="d-flex gap-2 mb-3 flex-wrap justify-content-between">
              <input
                type="text"
                className="form-control"
                placeholder="Search users..."
                style={{ maxWidth: "250px" }}
              />
              <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary">
                  <i className="ti ti-filter"></i> Filter
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="ti ti-file-excel"></i> Excel
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="ti ti-file-pdf"></i> PDF
                </button>
              </div>
            </div>
          </div>
          <div className="card table-responsive ">
            <table className="table mb-0 text-nowrap table-hover">
              <thead className="table-light border-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
               {users.map((item)=>(

                <tr key={item.id} className="align-middle">
                  <td>{item.id}</td>
                  <td>
                    <a href="">
                      <img
                        src="./assets/images/avatar-1.jpg"
                        alt=""
                        className="avatar avatar-md rounded-circle"
                      />
                      <span className="ms-3">{item.name}</span>
                    </a>
                  </td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <span className="badge bg-primary-subtle text-primary">
                      {item.role}
                    </span>
                  </td>
                  
                  <td>
                    <span className="badge bg-success-subtle text-success">
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <Link to={`/user-details/${item.id}`} className="">
                      <i className="bi bi-eye-fill"></i>
                    </Link>
                    <Link to="/edit-user" className="">
                      <i className="ti ti-edit "></i>
                    </Link>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
               ))}

              </tbody>
              <tfoot className="">
                <tr>
                  <td className="border-bottom-0">Showing users per page</td>
                  <td colSpan={6} className="border-bottom-0">
                    <nav
                      aria-label="Page navigation"
                      className="d-flex justify-content-end"
                    >
                      <ul className="pagination mb-0">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex={-1}>
                            Previous
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserManage;

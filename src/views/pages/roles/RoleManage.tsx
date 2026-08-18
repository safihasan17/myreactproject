import { Link } from "react-router";

function RoleManage() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="">
              <h1 className="fs-3 mb-1">Roles</h1>
              <p className="mb-0">Manage user roles and permissions</p>
            </div>
            <div>
              <Link to="/add-role" className="btn btn-primary">
                Add Role
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
                placeholder="Search roles..."
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
                  <th>Role Name</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle ">
                  <td>1</td>
                  <td>
                    <span className="badge bg-primary-subtle text-primary">
                      Admin
                    </span>
                  </td>
                  <td>Full access to all modules, settings and reports</td>
                  
                  <td className="">
                    <a href="edit-role.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>2</td>
                  <td>
                    <span className="badge bg-info-subtle text-info">
                      Manager
                    </span>
                  </td>
                  <td>Can manage inventory, view reports and manage staff</td>
                 
                  <td className="">
                    <a href="edit-role.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>3</td>
                  <td>
                    <span className="badge bg-warning-subtle text-warning">
                      Cashier
                    </span>
                  </td>
                  <td>Can process sales, orders and payments only</td>
                  
                  <td className="">
                    <a href="edit-role.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
              <tfoot className="">
                <tr>
                  <td className="border-bottom-0">Showing roles per page</td>
                  <td colSpan={4} className="border-bottom-0">
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

export default RoleManage;

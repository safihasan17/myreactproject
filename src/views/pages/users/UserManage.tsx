import { Link } from "react-router";

function UserManage(){
    return(
        <>
        
          <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="">
              <h1 className="fs-3 mb-1">Users</h1>
              <p className="mb-0">Manage system users and their roles</p>
            </div>
            <div>
              <Link to="/add-user" className="btn btn-primary">Add User</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div>
            <div className="d-flex gap-2 mb-3 flex-wrap justify-content-between">
              <input type="text" className="form-control" placeholder="Search users..." style={{ maxWidth: '250px' }}/>
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Created At</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle ">
                  <td><a href=""><img src="./assets/images/avatar-1.jpg" alt="" className="avatar avatar-md rounded-circle" /><span className="ms-3">Shrina Tesla</span></a>
                  </td>
                  <td>shrina@example.com</td>
                  <td>+880 1711-000001</td>
                  <td><span className="badge bg-primary-subtle text-primary">Admin</span></td>
                  <td>05 Aug 2026</td>
                  <td><span className="badge bg-success-subtle text-success">Active</span></td>
                  <td className="">
                    <a href="edit-user.html" className=""><i className="ti ti-edit "></i></a>
                    <a href="#" className="link-danger"><i className="ti ti-trash ms-2"></i></a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td><a href=""><img src="./assets/images/avatar-2.jpg" alt="" className="avatar avatar-md rounded-circle" /><span className="ms-3">John Doe</span></a>
                  </td>
                  <td>john.doe@example.com</td>
                  <td>+880 1711-000002</td>
                  <td><span className="badge bg-info-subtle text-info">Manager</span></td>
                  <td>03 Aug 2026</td>
                  <td><span className="badge bg-success-subtle text-success">Active</span></td>
                  <td className="">
                    <a href="edit-user.html" className=""><i className="ti ti-edit "></i></a>
                    <a href="#" className="link-danger"><i className="ti ti-trash ms-2"></i></a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td><a href=""><img src="./assets/images/avatar-4.jpg" alt="" className="avatar avatar-md rounded-circle" /><span className="ms-3">Amina Rahman</span></a>
                  </td>
                  <td>amina.rahman@example.com</td>
                  <td>+880 1711-000003</td>
                  <td><span className="badge bg-warning-subtle text-warning">Cashier</span></td>
                  <td>28 Jul 2026</td>
                  <td><span className="badge bg-success-subtle text-success">Active</span></td>
                  <td className="">
                    <a href="edit-user.html" className=""><i className="ti ti-edit "></i></a>
                    <a href="#" className="link-danger"><i className="ti ti-trash ms-2"></i></a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td><a href=""><img src="./assets/images/avatar-1.jpg" alt="" className="avatar avatar-md rounded-circle" /><span className="ms-3">Karim Hasan</span></a>
                  </td>
                  <td>karim.hasan@example.com</td>
                  <td>+880 1711-000004</td>
                  <td><span className="badge bg-warning-subtle text-warning">Cashier</span></td>
                  <td>20 Jul 2026</td>
                  <td><span className="badge bg-secondary-subtle text-secondary">Inactive</span></td>
                  <td className="">
                    <a href="edit-user.html" className=""><i className="ti ti-edit "></i></a>
                    <a href="#" className="link-danger"><i className="ti ti-trash ms-2"></i></a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td><a href=""><img src="./assets/images/avatar-2.jpg" alt="" className="avatar avatar-md rounded-circle" /><span className="ms-3">Nusrat Jahan</span></a>
                  </td>
                  <td>nusrat.jahan@example.com</td>
                  <td>+880 1711-000005</td>
                  <td><span className="badge bg-info-subtle text-info">Manager</span></td>
                  <td>15 Jul 2026</td>
                  <td><span className="badge bg-success-subtle text-success">Active</span></td>
                  <td className="">
                    <a href="edit-user.html" className=""><i className="ti ti-edit "></i></a>
                    <a href="#" className="link-danger"><i className="ti ti-trash ms-2"></i></a>
                  </td>
                </tr>
              </tbody>
              <tfoot className="">

                <tr>
                  <td className="border-bottom-0">Showing users per page</td>
                  <td colSpan={6} className="border-bottom-0">
                    <nav aria-label="Page navigation" className="d-flex justify-content-end">
                      <ul className="pagination mb-0">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#">Next</a>
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
    )
}

export default UserManage;
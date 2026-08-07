import { Link } from "react-router";

function CustomerManage() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="">
              <h1 className="fs-3 mb-1">Customers</h1>
              <p className="mb-0">
                Manage your customers and their loyalty points
              </p>
            </div>
            <div>
              <Link to="/add-customer" className="btn btn-primary">
                Add Customer
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
                placeholder="Search customers..."
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
                  <th>Address</th>
                  <th>Loyalty Points</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle ">
                  <td>#CUS-001</td>
                  <td>
                    <a href="">
                      <img
                        src="./assets/images/avatar-1.jpg"
                        alt=""
                        className="avatar avatar-md rounded-circle"
                      />
                      <span className="ms-3">Shrina Tesla</span>
                    </a>
                  </td>
                  <td>shrina@example.com</td>
                  <td>+880 1711-100001</td>
                  <td>House 12, Road 5, Dhanmondi, Dhaka</td>
                  <td>
                    <span className="badge bg-success-subtle text-success">
                      1,250
                    </span>
                  </td>
                  <td className="">
                    <a href="edit-customer.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#CUS-002</td>
                  <td>
                    <a href="">
                      <img
                        src="./assets/images/avatar-2.jpg"
                        alt=""
                        className="avatar avatar-md rounded-circle"
                      />
                      <span className="ms-3">John Doe</span>
                    </a>
                  </td>
                  <td>john.doe@example.com</td>
                  <td>+880 1711-100002</td>
                  <td>House 4, Road 2, Gulshan, Dhaka</td>
                  <td>
                    <span className="badge bg-success-subtle text-success">
                      860
                    </span>
                  </td>
                  <td className="">
                    <a href="edit-customer.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#CUS-003</td>
                  <td>
                    <a href="">
                      <img
                        src="./assets/images/avatar-4.jpg"
                        alt=""
                        className="avatar avatar-md rounded-circle"
                      />
                      <span className="ms-3">Amina Rahman</span>
                    </a>
                  </td>
                  <td>amina.rahman@example.com</td>
                  <td>+880 1711-100003</td>
                  <td>Flat 3B, Banani, Dhaka</td>
                  <td>
                    <span className="badge bg-warning-subtle text-warning">
                      340
                    </span>
                  </td>
                  <td className="">
                    <a href="edit-customer.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#CUS-004</td>
                  <td>
                    <a href="">
                      <img
                        src="./assets/images/avatar-1.jpg"
                        alt=""
                        className="avatar avatar-md rounded-circle"
                      />
                      <span className="ms-3">Karim Hasan</span>
                    </a>
                  </td>
                  <td>karim.hasan@example.com</td>
                  <td>+880 1711-100004</td>
                  <td>Uttara Sector 7, Dhaka</td>
                  <td>
                    <span className="badge bg-secondary-subtle text-secondary">
                      0
                    </span>
                  </td>
                  <td className="">
                    <a href="edit-customer.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#CUS-005</td>
                  <td>
                    <a href="">
                      <img
                        src="./assets/images/avatar-2.jpg"
                        alt=""
                        className="avatar avatar-md rounded-circle"
                      />
                      <span className="ms-3">Nusrat Jahan</span>
                    </a>
                  </td>
                  <td>nusrat.jahan@example.com</td>
                  <td>+880 1711-100005</td>
                  <td>Mirpur 10, Dhaka</td>
                  <td>
                    <span className="badge bg-success-subtle text-success">
                      2,010
                    </span>
                  </td>
                  <td className="">
                    <a href="edit-customer.html" className="">
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
                  <td className="border-bottom-0" colSpan={2}>
                    Showing customers per page
                  </td>
                  <td colSpan={5} className="border-bottom-0">
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

export default CustomerManage;

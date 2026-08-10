import { Link } from "react-router";

function OrderManage() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="">
              <h1 className="fs-3 mb-1">Orders</h1>
              <p className="mb-0">Manage customer sales orders</p>
            </div>
            <div>
              <Link to="/order-add" className="btn btn-primary">
                Add Order
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
                placeholder="Search orders..."
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
                  <th>Order #</th>
                  <th>Customer</th>
                  <th>Branch</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle ">
                  <td>#ORD-1001</td>
                  <td>Shrina Tesla</td>
                  <td>Main Branch - Dhanmondi</td>
                  <td>$142.50</td>
                  <td>
                    <span className="badge bg-success-subtle text-success">Paid</span>
                  </td>
                  <td>
                    <span className="badge bg-success-subtle text-success">Completed</span>
                  </td>
                  <td className="">
                    <a href="#" className="">
                      <i className="bi bi-eye-fill"></i>
                    </a>
                    <a href="#" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#ORD-1002</td>
                  <td>John Doe</td>
                  <td>Uttara Branch</td>
                  <td>$58.00</td>
                  <td>
                    <span className="badge bg-warning-subtle text-warning">Partial</span>
                  </td>
                  <td>
                    <span className="badge bg-info-subtle text-info">Pending</span>
                  </td>
                  <td className="">
                    <a href="#" className="">
                      <i className="bi bi-eye-fill"></i>
                    </a>
                    <a href="#" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#ORD-1003</td>
                  <td>Amina Rahman</td>
                  <td>Chattogram Branch</td>
                  <td>$310.20</td>
                  <td>
                    <span className="badge bg-danger-subtle text-danger">Unpaid</span>
                  </td>
                  <td>
                    <span className="badge bg-danger-subtle text-danger">Cancelled</span>
                  </td>
                  <td className="">
                    <a href="#" className="">
                      <i className="bi bi-eye-fill"></i>
                    </a>
                    <a href="#" className="">
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
                  <td className="border-bottom-0">Showing orders per page</td>
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

export default OrderManage;

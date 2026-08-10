import { Link } from "react-router";

function PurchaseOrderManage() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="">
              <h1 className="fs-3 mb-1">Purchase Orders</h1>
              <p className="mb-0">Manage stock purchases from suppliers</p>
            </div>
            <div>
              <Link to="/purchase-orders-add" className="btn btn-primary">
                Add Purchase Order
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
                placeholder="Search purchase orders..."
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
                  <th>PO ID</th>
                  <th>Supplier</th>
                  <th>Branch</th>
                  <th>Created By</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle ">
                  <td>#PO-001</td>
                  <td>TechSource Distribution Ltd.</td>
                  <td>Main Branch - Dhanmondi</td>
                  <td>Shrina Tesla</td>
                  <td>$4,250.00</td>
                  <td>
                    <span className="badge bg-success-subtle text-success">Received</span>
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
                  <td>#PO-002</td>
                  <td>Global Foods Trading Co.</td>
                  <td>Uttara Branch</td>
                  <td>John Doe</td>
                  <td>$1,980.00</td>
                  <td>
                    <span className="badge bg-warning-subtle text-warning">Ordered</span>
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
                  <td>#PO-003</td>
                  <td>Prime Electronics Supply</td>
                  <td>Chattogram Branch</td>
                  <td>Amina Rahman</td>
                  <td>$860.00</td>
                  <td>
                    <span className="badge bg-secondary-subtle text-secondary">Draft</span>
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
                  <td className="border-bottom-0">Showing purchase orders per page</td>
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

export default PurchaseOrderManage;

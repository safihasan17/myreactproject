import { Link } from "react-router";

function InvManage() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="">
              <h1 className="fs-3 mb-1">Inventory</h1>
              <p className="mb-0">
                Track stock quantity per product and branch
              </p>
            </div>
            <div>
              <Link to="/add-inventory" className="btn btn-primary">
                Add Inventory Record
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
                placeholder="Search inventory..."
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
                  <th>Product</th>
                  <th>Branch</th>
                  <th>Quantity</th>
                  <th>Reorder Level</th>
                  <th>Stock Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle">
                  <td>#INV-001</td>
                  <td>Wireless Mouse</td>
                  <td>Main Branch - Dhanmondi</td>
                  <td>85</td>
                  <td>20</td>
                  <td>
                    <span className="badge bg-success-subtle text-success">
                      In Stock
                    </span>
                  </td>
                  <td>
                    <a href="edit-inventory.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#INV-002</td>
                  <td>Samsung Galaxy A15</td>
                  <td>Main Branch - Dhanmondi</td>
                  <td>12</td>
                  <td>15</td>
                  <td>
                    <span className="badge bg-warning-subtle text-warning">
                      Low Stock
                    </span>
                  </td>
                  <td>
                    <a href="edit-inventory.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#INV-003</td>
                  <td>Basmati Rice 5kg</td>
                  <td>Uttara Branch</td>
                  <td>0</td>
                  <td>30</td>
                  <td>
                    <span className="badge bg-danger-subtle text-danger">
                      Out of Stock
                    </span>
                  </td>
                  <td>
                    <a href="edit-inventory.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#INV-004</td>
                  <td>Cola Can 330ml</td>
                  <td>Uttara Branch</td>
                  <td>460</td>
                  <td>100</td>
                  <td>
                    <span className="badge bg-success-subtle text-success">
                      In Stock
                    </span>
                  </td>
                  <td>
                    <a href="edit-inventory.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="border-bottom-0" colSpan={2}>
                    Showing inventory per page
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

export default InvManage;

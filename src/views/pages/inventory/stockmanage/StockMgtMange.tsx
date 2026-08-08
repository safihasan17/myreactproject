import { Link } from "react-router";

function StockMgtManage() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="">
              <h1 className="fs-3 mb-1">Stock Movements</h1>
              <p className="mb-0">History of stock in, out, and adjustments</p>
            </div>
            <div>
              <Link to="/add-stock-manage" className="btn btn-primary">
                Stock Movement
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
                placeholder="Search movements..."
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
                  <th>Date</th>
                  <th>Product</th>
                  <th>Branch</th>
                  <th>Type</th>
                  <th>Quantity</th>
                  <th>Reason</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle">
                  <td>#MOV-001</td>
                  <td>07 Aug 2026, 10:20 AM</td>
                  <td>Wireless Mouse</td>
                  <td>Main Branch - Dhanmondi</td>
                  <td>
                    <span className="badge bg-success-subtle text-success">
                      In
                    </span>
                  </td>
                  <td>50</td>
                  <td>Purchase from supplier</td>
                  <td>
                    <a href="view-stock-movement.html" className="">
                      <i className="ti ti-eye "></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#MOV-002</td>
                  <td>07 Aug 2026, 03:45 PM</td>
                  <td>Samsung Galaxy A15</td>
                  <td>Main Branch - Dhanmondi</td>
                  <td>
                    <span className="badge bg-danger-subtle text-danger">
                      Out
                    </span>
                  </td>
                  <td>3</td>
                  <td>Sold to customer</td>
                  <td>
                    <a href="view-stock-movement.html" className="">
                      <i className="ti ti-eye "></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#MOV-003</td>
                  <td>06 Aug 2026, 09:00 AM</td>
                  <td>Basmati Rice 5kg</td>
                  <td>Uttara Branch</td>
                  <td>
                    <span className="badge bg-info-subtle text-info">
                      Adjustment
                    </span>
                  </td>
                  <td>-4</td>
                  <td>Damaged stock write-off</td>
                  <td>
                    <a href="view-stock-movement.html" className="">
                      <i className="ti ti-eye "></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#MOV-004</td>
                  <td>05 Aug 2026, 06:30 PM</td>
                  <td>Cola Can 330ml</td>
                  <td>Uttara Branch</td>
                  <td>
                    <span className="badge bg-success-subtle text-success">
                      In
                    </span>
                  </td>
                  <td>240</td>
                  <td>Stock transfer received</td>
                  <td>
                    <a href="view-stock-movement.html" className="">
                      <i className="ti ti-eye "></i>
                    </a>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="border-bottom-0" colSpan={2}>
                    Showing movements per page
                  </td>
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

export default StockMgtManage;

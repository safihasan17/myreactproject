import { Link } from "react-router";

function BranchManage() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="">
              <h1 className="fs-3 mb-1">Branches</h1>
              <p className="mb-0">Manage your store branches</p>
            </div>
            <div>
              <Link to="/branches-add" className="btn btn-primary">
                Add Branch
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
                placeholder="Search branches..."
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
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle ">
                  <td>1</td>
                  <td>Main Branch - Dhanmondi</td>
                  <td>House 12, Road 5, Dhanmondi, Dhaka</td>
                  <td>+880 1711-000001</td>
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
                  <td>2</td>
                  <td>Uttara Branch</td>
                  <td>Sector 7, Uttara, Dhaka</td>
                  <td>+880 1711-000002</td>
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
                  <td>3</td>
                  <td>Chattogram Branch</td>
                  <td>GEC Circle, Chattogram</td>
                  <td>+880 1711-000003</td>
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
                  <td className="border-bottom-0">Showing branches per page</td>
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

export default BranchManage;

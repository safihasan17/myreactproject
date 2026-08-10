import { Link } from "react-router";

function SupplierManage() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="">
              <h1 className="fs-3 mb-1">Suppliers</h1>
              <p className="mb-0">Manage your suppliers</p>
            </div>
            <div>
              <Link to="/suppliers-add" className="btn btn-primary">
                Add Supplier
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
                placeholder="Search suppliers..."
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
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle ">
                  <td>1</td>
                  <td>TechSource Distribution Ltd.</td>
                  <td>+880 1811-200001</td>
                  <td>sales@techsource.com</td>
                  <td>Motijheel, Dhaka</td>
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
                  <td>Global Foods Trading Co.</td>
                  <td>+880 1811-200002</td>
                  <td>contact@globalfoods.com</td>
                  <td>Tejgaon, Dhaka</td>
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
                  <td>Prime Electronics Supply</td>
                  <td>+880 1811-200003</td>
                  <td>info@primeelectronics.com</td>
                  <td>Agrabad, Chattogram</td>
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
                  <td className="border-bottom-0">Showing suppliers per page</td>
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

export default SupplierManage;

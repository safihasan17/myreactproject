import { Link } from "react-router";

function CategoryManage() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="">
              <h1 className="fs-3 mb-1">Categories</h1>
              <p className="mb-0">Organize your products into categories</p>
            </div>
            <div>
              <Link to="/add-category" className="btn btn-primary">
                Add Category
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
                placeholder="Search categories..."
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
                  <th>Parent Category</th>
                  <th>Products</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle">
                  <td>#CAT-001</td>
                  <td>Electronics</td>
                  <td>
                    <span className="text-secondary">—</span>
                  </td>
                  <td>128</td>
                  <td>
                    <a href="edit-category.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#CAT-002</td>
                  <td>Mobile Phones</td>
                  <td>Electronics</td>
                  <td>54</td>
                  <td>
                    <a href="edit-category.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#CAT-003</td>
                  <td>Accessories</td>
                  <td>Electronics</td>
                  <td>76</td>
                  <td>
                    <a href="edit-category.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#CAT-004</td>
                  <td>Groceries</td>
                  <td>
                    <span className="text-secondary">—</span>
                  </td>
                  <td>212</td>
                  <td>
                    <a href="edit-category.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#CAT-005</td>
                  <td>Beverages</td>
                  <td>Groceries</td>
                  <td>39</td>
                  <td>
                    <a href="edit-category.html" className="">
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
                  <td className="border-bottom-0">
                    Showing categories per page
                  </td>
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

export default CategoryManage;

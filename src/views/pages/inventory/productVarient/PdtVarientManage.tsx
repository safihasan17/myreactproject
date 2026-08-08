import { Link } from "react-router";

function ProductVarientManage() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="">
              <h1 className="fs-3 mb-1">Product Variants</h1>
              <p className="mb-0">
                Manage size, color and other product variants
              </p>
            </div>
            <div>
              <Link to="/add-product-varient" className="btn btn-primary">
                Add Variant
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
                placeholder="Search variants..."
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
                  <th>Variant Name</th>
                  <th>SKU</th>
                  <th>Price Adjustment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle">
                  <td>#VAR-001</td>
                  <td>Wireless Mouse</td>
                  <td>Black</td>
                  <td>SKU-10001-BLK</td>
                  <td>৳ 0.00</td>
                  <td>
                    <a href="edit-product-variant.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#VAR-002</td>
                  <td>Wireless Mouse</td>
                  <td>White</td>
                  <td>SKU-10001-WHT</td>
                  <td>৳ 50.00</td>
                  <td>
                    <a href="edit-product-variant.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#VAR-003</td>
                  <td>Samsung Galaxy A15</td>
                  <td>128GB / Blue</td>
                  <td>SKU-10002-128BLU</td>
                  <td>৳ 0.00</td>
                  <td>
                    <a href="edit-product-variant.html" className="">
                      <i className="ti ti-edit "></i>
                    </a>
                    <a href="#" className="link-danger">
                      <i className="ti ti-trash ms-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#VAR-004</td>
                  <td>Samsung Galaxy A15</td>
                  <td>256GB / Black</td>
                  <td>SKU-10002-256BLK</td>
                  <td>৳ 2,000.00</td>
                  <td>
                    <a href="edit-product-variant.html" className="">
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
                    Showing variants per page
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
export default ProductVarientManage;

import { Link } from "react-router";

function OrderItemManage() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="">
              <h1 className="fs-3 mb-1">Order Items</h1>
              <p className="mb-0">Manage line items within sales orders</p>
            </div>
            <div>
              <Link to="/order-items-add" className="btn btn-primary">
                Add Order Item
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
                placeholder="Search order items..."
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
                  <th>Order</th>
                  <th>Product</th>
                  <th>Variant</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle ">
                  <td>1</td>
                  <td>#ORD-1001</td>
                  <td>Wireless Earphones</td>
                  <td>—</td>
                  <td>1</td>
                  <td>$89.99</td>
                  <td>$89.99</td>
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
                  <td>#ORD-1001</td>
                  <td>USB-C Fast Charger</td>
                  <td>—</td>
                  <td>1</td>
                  <td>$52.51</td>
                  <td>$52.51</td>
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
                  <td>#ORD-1002</td>
                  <td>Gaming Joy Stick</td>
                  <td>Black</td>
                  <td>1</td>
                  <td>$58.00</td>
                  <td>$58.00</td>
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
                  <td className="border-bottom-0">Showing order items per page</td>
                  <td colSpan={7} className="border-bottom-0">
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

export default OrderItemManage;

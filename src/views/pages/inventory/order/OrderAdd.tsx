import { Link } from "react-router";
import { type Order, defaultOrder } from "../../../../interfaces/Order";
import { useState } from "react";

function OrderAdd() {
  const [order, setOrder] = useState<Order>(defaultOrder);
  const [error, setError] = useState({
    order_number: "",
    customer_id: "",
    branch_id: "",
    total: "",
  });

  function handleSubmit(e:any) {
    e.preventDefault()
    let newErrors: any = {};

    if (order.order_number === "") {
      newErrors.order_number = "Order number is required";
    } else {
      newErrors.order_number = "";
    }

    if (order.customer_id === 0) {
      newErrors.customer_id = "Customer is required";
    } else {
      newErrors.customer_id = "";
    }

    if (order.branch_id === 0) {
      newErrors.branch_id = "Branch is required";
    } else {
      newErrors.branch_id = "";
    }

    if (order.total === 0) {
      newErrors.total = "Total is required";
    } else {
      newErrors.total = "";
    }

    setError(newErrors);
    console.log(order)
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div className="">
              <h1 className="fs-3 mb-1">Add Order</h1>
              <p className="mb-0">Create a new sales order</p>
            </div>
            <div>
              <Link to="/order" className="btn btn-primary">
                Go to Orders List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-4">
              <form id="addOrderForm">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="orderNumber" className="form-label">
                      Order Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="orderNumber"
                      placeholder="e.g. ORD-1001"
                     
                      value={order.order_number}
                      onChange={(e) => setOrder({ ...order, order_number: e.target.value })}
                    />
                    <small className="text-danger">{error.order_number}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="orderCustomer" className="form-label">
                      Customer
                    </label>
                    <select
                      className="form-select"
                      id="orderCustomer"
                      required
                      value={order.customer_id}
                      onChange={(e) => setOrder({ ...order, customer_id: Number(e.target.value) })}
                    >
                      <option value={0}>Select customer</option>
                      <option value={1}>Shrina Tesla</option>
                      <option value={2}>John Doe</option>
                      <option value={3}>Amina Rahman</option>
                    </select>
                    <small className="text-danger">{error.customer_id}</small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="orderBranch" className="form-label">
                      Branch
                    </label>
                    <select
                      className="form-select"
                      id="orderBranch"
                      required
                      value={order.branch_id}
                      onChange={(e) => setOrder({ ...order, branch_id: Number(e.target.value) })}
                    >
                      <option value={0}>Select branch</option>
                      <option value={1}>Main Branch - Dhanmondi</option>
                      <option value={2}>Uttara Branch</option>
                      <option value={3}>Chattogram Branch</option>
                    </select>
                    <small className="text-danger">{error.branch_id}</small>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="orderDiscount" className="form-label">
                      Discount
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="orderDiscount"
                      placeholder="0.00"
                      min={0}
                      step="0.01"
                      value={order.discount}
                      onChange={(e) => setOrder({ ...order, discount: Number(e.target.value) })}
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="orderTax" className="form-label">
                      Tax
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="orderTax"
                      placeholder="0.00"
                      min={0}
                      step="0.01"
                      value={order.tax}
                      onChange={(e) => setOrder({ ...order, tax: Number(e.target.value) })}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="orderTotal" className="form-label">
                      Total
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="orderTotal"
                      placeholder="0.00"
                      min={0}
                      step="0.01"
                      required
                      value={order.total}
                      onChange={(e) => setOrder({ ...order, total: Number(e.target.value) })}
                    />
                    <small className="text-danger">{error.total}</small>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="orderPaymentStatus" className="form-label">
                      Payment Status
                    </label>
                    <select
                      className="form-select"
                      id="orderPaymentStatus"
                      value={order.payment_status}
                      onChange={(e) =>
                        setOrder({ ...order, payment_status: e.target.value as Order["payment_status"] })
                      }
                    >
                      <option value="">Select payment status</option>
                      <option value="unpaid">Unpaid</option>
                      <option value="partial">Partial</option>
                      <option value="paid">Paid</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="orderStatus" className="form-label">
                      Order Status
                    </label>
                    <select
                      className="form-select"
                      id="orderStatus"
                      value={order.order_status}
                      onChange={(e) =>
                        setOrder({ ...order, order_status: e.target.value as Order["order_status"] })
                      }
                    >
                      <option value="">Select order status</option>
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Add Order
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderAdd;

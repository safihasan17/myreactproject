import { Link } from "react-router";
import { type Payment, defaultPayment } from "../../../../interfaces/Payment";
import { useState } from "react";

function PaymentAdd() {
  const [payment, setPayment] = useState<Payment>(defaultPayment);
  const [error, setError] = useState({
    order_id: "",
    method: "",
    amount: "",
  });

  function handleSubmit(e:any) {
     e.preventDefault()
    let newErrors: any = {};

    if (payment.order_id === 0) {
      newErrors.order_id = "Order is required";
    } else {
      newErrors.order_id = "";
    }

    if (payment.method === "") {
      newErrors.method = "Payment method is required";
    } else {
      newErrors.method = "";
    }

    if (payment.amount === 0) {
      newErrors.amount = "Amount is required";
    } else {
      newErrors.amount = "";
    }

    setError(newErrors);
    console.log(payment);
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div className="">
              <h1 className="fs-3 mb-1">Add Payment</h1>
              <p className="mb-0">Record a payment against an order</p>
            </div>
            <div>
              <Link to="/payments" className="btn btn-primary">
                Go to Payments List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-4">
              <form id="addPaymentForm">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="paymentOrder" className="form-label">
                      Order
                    </label>
                    <select
                      className="form-select"
                      id="paymentOrder"
                      required
                      value={payment.order_id}
                      onChange={(e) => setPayment({ ...payment, order_id: Number(e.target.value) })}
                    >
                      <option value={0}>Select order</option>
                      <option value={1}>#ORD-1001</option>
                      <option value={2}>#ORD-1002</option>
                      <option value={3}>#ORD-1003</option>
                    </select>
                    <small className="text-danger">{error.order_id}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="paymentMethod" className="form-label">
                      Method
                    </label>
                    <select
                      className="form-select"
                      id="paymentMethod"
                      
                      value={payment.method}
                      onChange={(e) =>
                        setPayment({ ...payment, method: e.target.value as Payment["method"] })
                      }
                    >
                      <option value="">Select method</option>
                      <option value="cash">Cash</option>
                      <option value="card">Card</option>
                      <option value="mobile_banking">Mobile Banking</option>
                    </select>
                    <small className="text-danger">{error.method}</small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="paymentAmount" className="form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="paymentAmount"
                      placeholder="0.00"
                      min={0}
                      step="0.01"
                      required
                      value={payment.amount}
                      onChange={(e) => setPayment({ ...payment, amount: Number(e.target.value) })}
                    />
                    <small className="text-danger">{error.amount}</small>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="paymentStatus" className="form-label">
                      Status
                    </label>
                    <select
                      className="form-select"
                      id="paymentStatus"
                      value={payment.status}
                      onChange={(e) =>
                        setPayment({ ...payment, status: e.target.value as Payment["status"] })
                      }
                    >
                      <option value="">Select status</option>
                      <option value="pending">Pending</option>
                      <option value="success">Success</option>
                      <option value="failed">Failed</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="paymentTransactionId" className="form-label">
                      Transaction ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="paymentTransactionId"
                      placeholder="e.g. TXN-88291"
                      value={payment.transaction_id}
                      onChange={(e) => setPayment({ ...payment, transaction_id: e.target.value })}
                    />
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Add Payment
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

export default PaymentAdd;

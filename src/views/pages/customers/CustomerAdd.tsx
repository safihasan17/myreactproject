import { Link } from "react-router";

function CustomerAdd() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div className="">
              <h1 className="fs-3 mb-1">Add Customer</h1>
              <p className="mb-0">Create a new customer record</p>
            </div>
            <div>
              <Link to="/customer" className="btn btn-primary">
                Go to Customers List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-4">
              <form id="addCustomerForm">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="customerName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="customerName"
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="customerEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="customerEmail"
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="customerPhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="customerPhone"
                      placeholder="e.g. +880 1XXX-XXXXXX"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="customerLoyaltyPoints"
                      className="form-label"
                    >
                      Loyalty Points
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="customerLoyaltyPoints"
                      placeholder="0"
                      min="0"
                      step="1"
                      value="0"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="customerAddress" className="form-label">
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="customerAddress"
                      rows={3}
                      placeholder="Enter full address"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="customerAvatar" className="form-label">
                    Profile Photo
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="customerAvatar"
                    accept="image/*"
                  />
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary">
                    Add Customer
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

export default CustomerAdd;

import { Link } from "react-router";

function StockMgtAdd() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div className="">
              <h1 className="fs-3 mb-1">Record Stock Movement</h1>
              <p className="mb-0">Log a stock in, out, or adjustment entry</p>
            </div>
            <div>
              <Link to="/stock-manage" className="btn btn-primary">
                Go to Movements List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-4">
              <form id="addMovementForm">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="movementProduct" className="form-label">
                      Product
                    </label>
                    <select
                      className="form-select"
                      id="movementProduct"
                      required
                    >
                      <option value="">Select product</option>
                      <option value="1">Wireless Mouse</option>
                      <option value="2">Samsung Galaxy A15</option>
                      <option value="3">Basmati Rice 5kg</option>
                      <option value="4">Cola Can 330ml</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="movementBranch" className="form-label">
                      Branch
                    </label>
                    <select
                      className="form-select"
                      id="movementBranch"
                      required
                    >
                      <option value="">Select branch</option>
                      <option value="1">Main Branch - Dhanmondi</option>
                      <option value="2">Uttara Branch</option>
                      <option value="3">Chattogram Branch</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="movementType" className="form-label">
                      Type
                    </label>
                    <select className="form-select" id="movementType" required>
                      <option value="">Select type</option>
                      <option value="in">In</option>
                      <option value="out">Out</option>
                      <option value="adjustment">Adjustment</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="movementQuantity" className="form-label">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="movementQuantity"
                      placeholder="0"
                      step="1"
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="movementDate" className="form-label">
                      Date &amp; Time
                    </label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="movementDate"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="movementReason" className="form-label">
                      Reason
                    </label>
                    <textarea
                      className="form-control"
                      id="movementReason"
                      rows={3}
                      placeholder="e.g. Purchase from supplier, Sold to customer, Damaged stock write-off"
                    ></textarea>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary">
                    Record Movement
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

export default StockMgtAdd;

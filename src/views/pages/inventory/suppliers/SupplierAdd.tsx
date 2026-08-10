import { Link } from "react-router";

function SupplierAdd() {
  
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div className="">
              <h1 className="fs-3 mb-1">Add Supplier</h1>
              <p className="mb-0">Register a new supplier</p>
            </div>
            <div>
              <Link to="/suppliers" className="btn btn-primary">
                Go to Suppliers List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-4">
              <form id="addSupplierForm">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="supplierName" className="form-label">
                      Supplier Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="supplierName"
                      placeholder="Enter supplier name"
                      required
                      
                    />
                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="supplierPhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="supplierPhone"
                      placeholder="e.g. +880 1XXX-XXXXXX"
                      required
                     
                    />
                    
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="supplierEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="supplierEmail"
                      placeholder="Enter email address"
                      required
                     
                    />
                    
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="supplierAddress" className="form-label">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    id="supplierAddress"
                    rows={3}
                    placeholder="Enter full address"
                   
                  ></textarea>
                 
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary">
                    Add Supplier
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

export default SupplierAdd;

import { Link } from "react-router";
import { type Supplier, defaultSupplier } from "../../../../interfaces/Supplier";
import { useState } from "react";

function SupplierAdd() {
  const [supplier, setSupplier] = useState<Supplier>(defaultSupplier);
  const [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  function handleSubmit(e:any) {
    e.preventDefault()
    let newErrors: any = {};

    if (supplier.name === "") {
      newErrors.name = "Name is required";
    } else if (supplier.name.length > 100 || supplier.name.length < 3) {
      newErrors.name = "Name more than 3 and not more than 100";
    } else {
      newErrors.name = "";
    }

    if (supplier.phone === "") {
      newErrors.phone = "Phone is required";
    } else {
      newErrors.phone = "";
    }

    if (supplier.email === "") {
      newErrors.email = "Email is required";
    } else {
      newErrors.email = "";
    }

    setError(newErrors);
    setError(newErrors);
    console.log(supplier);
  }

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
                      
                      value={supplier.name}
                      onChange={(e) => setSupplier({ ...supplier, name: e.target.value })}
                    />
                    <small className="text-danger">{error.name}</small>
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
                     
                      value={supplier.phone}
                      onChange={(e) => setSupplier({ ...supplier, phone: e.target.value })}
                    />
                    <small className="text-danger">{error.phone}</small>
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
                      
                      value={supplier.email}
                      onChange={(e) => setSupplier({ ...supplier, email: e.target.value })}
                    />
                    <small className="text-danger">{error.email}</small>
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
                    value={supplier.address}
                    onChange={(e) => setSupplier({ ...supplier, address: e.target.value })}
                  ></textarea>
                  <small className="text-danger">{error.address}</small>
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
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

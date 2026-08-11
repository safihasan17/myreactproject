import { Link } from "react-router";
import { type Branch, defaultBranch } from "../../../../interfaces/Branch";
import { useState } from "react";

function BranchAdd() {
  const [branch, setBranch] = useState<Branch>(defaultBranch);
  const [error, setError] = useState({
    name: "",
    address: "",
    phone: "",
  });

  function handleSubmit(e:any) {
    e.preventDefault()
    let newErrors: any = {};

    if (branch.name === "") {
      newErrors.name = "Name is required";
    } else if (branch.name.length > 100 || branch.name.length < 3) {
      newErrors.name = "Name is between  4 to 100 character";
    } else {
      newErrors.name = "";
    }

    if (branch.address === "") {
      newErrors.address = "Address is required";
    } else {
      newErrors.address = "";
    }

    if (branch.phone === "") {
      newErrors.phone = "Phone is required";
    } else {
      newErrors.phone = "";
    }

    setError(newErrors);
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div className="">
              <h1 className="fs-3 mb-1">Add Branch</h1>
              <p className="mb-0">Create a new store branch</p>
            </div>
            <div>
              <Link to="/branches" className="btn btn-primary">
                Go to Branches List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-4">
              <form id="addBranchForm">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="branchName" className="form-label">
                      Branch Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="branchName"
                      placeholder="Enter branch name"
                     
                      value={branch.name}
                      onChange={(e) => setBranch({ ...branch, name: e.target.value })}
                    />
                    <small className="text-danger">{error.name}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="branchPhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="branchPhone"
                      placeholder="e.g. +880 1XXX-XXXXXX"
                      
                      value={branch.phone}
                      onChange={(e) => setBranch({ ...branch, phone: e.target.value })}
                    />
                    <small className="text-danger">{error.phone}</small>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="branchAddress" className="form-label">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    id="branchAddress"
                    rows={3}
                    placeholder="Enter full address"
                    
                    value={branch.address}
                    onChange={(e) => setBranch({ ...branch, address: e.target.value })}
                  ></textarea>
                  <small className="text-danger">{error.address}</small>
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Add Branch
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

export default BranchAdd;

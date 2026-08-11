import { Link } from "react-router";
import { type PurchaseOrder, defaultPurchaseOrder } from "../../../../interfaces/PurchaseOrder";
import { useState } from "react";

function PurchaseOrderAdd() {
  const [purchaseOrder, setPurchaseOrder] = useState<PurchaseOrder>(defaultPurchaseOrder);
  const [error, setError] = useState({
    supplier_id: "",
    branch_id: "",
    status: "",
    total: "",
  });

  function handleSubmit(e:any) {
    e.preventDefault()
    let newErrors: any = {};

    if (purchaseOrder.supplier_id === 0) {
      newErrors.supplier_id = "Supplier is required";
    } else {
      newErrors.supplier_id = "";
    }

    if (purchaseOrder.branch_id === 0) {
      newErrors.branch_id = "Branch is required";
    } else {
      newErrors.branch_id = "";
    }

    if (purchaseOrder.status === "") {
      newErrors.status = "Status is required";
    } else {
      newErrors.status = "";
    }

    if (purchaseOrder.total === 0) {
      newErrors.total = "Total is required";
    } else {
      newErrors.total = "";
    }

    setError(newErrors);
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div className="">
              <h1 className="fs-3 mb-1">Add Purchase Order</h1>
              <p className="mb-0">Create a new purchase order for a supplier</p>
            </div>
            <div>
              <Link to="/purchase-orders" className="btn btn-primary">
                Go to Purchase Orders List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-4">
              <form id="addPurchaseOrderForm">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="poSupplier" className="form-label">
                      Supplier
                    </label>
                    <select
                      className="form-select"
                      id="poSupplier"
                      required
                      value={purchaseOrder.supplier_id}
                      onChange={(e) =>
                        setPurchaseOrder({ ...purchaseOrder, supplier_id: Number(e.target.value) })
                      }
                    >
                      <option value={0}>Select supplier</option>
                      <option value={1}>TechSource Distribution Ltd.</option>
                      <option value={2}>Global Foods Trading Co.</option>
                      <option value={3}>Prime Electronics Supply</option>
                    </select>
                    <small className="text-danger">{error.supplier_id}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="poBranch" className="form-label">
                      Branch
                    </label>
                    <select
                      className="form-select"
                      id="poBranch"
                      required
                      value={purchaseOrder.branch_id}
                      onChange={(e) =>
                        setPurchaseOrder({ ...purchaseOrder, branch_id: Number(e.target.value) })
                      }
                    >
                      <option value={0}>Select branch</option>
                      <option value={1}>Main Branch - Dhanmondi</option>
                      <option value={2}>Uttara Branch</option>
                      <option value={3}>Chattogram Branch</option>
                    </select>
                    <small className="text-danger">{error.branch_id}</small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="poStatus" className="form-label">
                      Status
                    </label>
                    <select
                      className="form-select"
                      id="poStatus"
                      
                      value={purchaseOrder.status}
                      onChange={(e) =>
                        setPurchaseOrder({ ...purchaseOrder, status: e.target.value as PurchaseOrder["status"] })
                      }
                    >
                      <option value="">Select status</option>
                      <option value="draft">Draft</option>
                      <option value="ordered">Ordered</option>
                      <option value="received">Received</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                    <small className="text-danger">{error.status}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="poTotal" className="form-label">
                      Total
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="poTotal"
                      placeholder="0.00"
                      min={0}
                      step="0.01"
                      required
                      value={purchaseOrder.total}
                      onChange={(e) =>
                        setPurchaseOrder({ ...purchaseOrder, total: Number(e.target.value) })
                      }
                    />
                    <small className="text-danger">{error.total}</small>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Add Purchase Order
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

export default PurchaseOrderAdd;

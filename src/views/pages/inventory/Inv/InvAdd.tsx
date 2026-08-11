import { Link } from "react-router";
import { type Inventory, defaultInventory } from "../../../../interfaces/Inventory";
import { useState } from "react";

function InvAdd() {
  const [inventory, setInventory] = useState<Inventory>(defaultInventory);
  const [error, setError] = useState({
    product_id: "",
    branch_id: "",
    quantity: "",
    reorder_level: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    let newErrors: any = {};

    if (inventory.product_id === 0) {
      newErrors.product_id = "Product is required";
    } else {
      newErrors.product_id = "";
    }

    if (inventory.branch_id === 0) {
      newErrors.branch_id = "Branch is required";
    } else {
      newErrors.branch_id = "";
    }

    if (inventory.quantity === 0) {
      newErrors.quantity = "Quantity is required";
    } else {
      newErrors.quantity = "";
    }

    if (inventory.reorder_level === 0) {
      newErrors.reorder_level = "Reorder level is required";
    } else {
      newErrors.reorder_level = "";
    }

    setError(newErrors);
    console.log(inventory);
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div className="">
              <h1 className="fs-3 mb-1">Add Inventory Record</h1>
              <p className="mb-0">
                Set the stock quantity for a product at a branch
              </p>
            </div>
            <div>
              <Link to="/inventory" className="btn btn-primary">
                Go to Inventory List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-4">
              <form id="addInventoryForm">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="inventoryProduct" className="form-label">
                      Product
                    </label>
                    <select
                      className="form-select"
                      id="inventoryProduct"
                      
                      value={inventory.product_id}
                      onChange={(e) =>
                        setInventory({ ...inventory, product_id: Number(e.target.value) })
                      }
                    >
                      <option value={0}>Select product</option>
                      <option value={1}>Wireless Mouse</option>
                      <option value={2}>Samsung Galaxy A15</option>
                      <option value={3}>Basmati Rice 5kg</option>
                      <option value={4}>Cola Can 330ml</option>
                    </select>
                    <small className="text-danger">{error.product_id}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="inventoryBranch" className="form-label">
                      Branch
                    </label>
                    <select
                      className="form-select"
                      id="inventoryBranch"
                      required
                      value={inventory.branch_id}
                      onChange={(e) =>
                        setInventory({ ...inventory, branch_id: Number(e.target.value) })
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
                    <label htmlFor="inventoryQuantity" className="form-label">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inventoryQuantity"
                      placeholder="0"
                      min={0}
                      step={1}
                      
                      value={inventory.quantity}
                      onChange={(e) =>
                        setInventory({ ...inventory, quantity: Number(e.target.value) })
                      }
                    />
                    <small className="text-danger">{error.quantity}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="inventoryReorderLevel"
                      className="form-label"
                    >
                      Reorder Level
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inventoryReorderLevel"
                      placeholder="0"
                      min={0}
                      step={1}
                      value={inventory.reorder_level}
                      onChange={(e) =>
                        setInventory({ ...inventory, reorder_level: Number(e.target.value) })
                      }
                    />
                    <small className="text-danger">{error.reorder_level}</small>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Add Inventory Record
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

export default InvAdd;
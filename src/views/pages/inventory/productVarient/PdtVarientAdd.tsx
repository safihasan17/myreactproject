import { Link } from "react-router";

function PdtVarientAdd() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div className="">
              <h1 className="fs-3 mb-1">Add Product Variant</h1>
              <p className="mb-0">
                Create a size, color, or other variant for a product
              </p>
            </div>
            <div>
              <Link to="/product-varient" className="btn btn-primary">
                Go to Variants List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-4">
              <form id="addVariantForm">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="variantProduct" className="form-label">
                      Product
                    </label>
                    <select
                      className="form-select"
                      id="variantProduct"
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
                    <label htmlFor="variantName" className="form-label">
                      Variant Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="variantName"
                      placeholder="e.g. Black, 128GB / Blue"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="variantSku" className="form-label">
                      SKU
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="variantSku"
                      placeholder="e.g. SKU-10001-BLK"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="variantPriceAdjustment"
                      className="form-label"
                    >
                      Price Adjustment
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="variantPriceAdjustment"
                      placeholder="0.00"
                      step="0.01"
                      value="0"
                    />
                    <small className="text-secondary">
                      Use a negative number for a discount, positive for a
                      surcharge.
                    </small>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary">
                    Add Variant
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

export default PdtVarientAdd;

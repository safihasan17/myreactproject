import { Link } from "react-router";
import { type ProductVarient, defaultProductVarient } from "../../../../interfaces/ProductVarient";
import { useState } from "react";

function PdtVarientAdd() {
  const [variant, setVariant] = useState<ProductVarient>(defaultProductVarient);
  const [error, setError] = useState({
    product_id: "",
    variant_name: "",
    sku: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    let newErrors: any = {};

    if (variant.product_id === 0) {
      newErrors.product_id = "Product is required";
    } else {
      newErrors.product_id = "";
    }

    if (variant.variant_name === "") {
      newErrors.variant_name = "Variant name is required";
    } else {
      newErrors.variant_name = "";
    }

    if (variant.sku === "") {
      newErrors.sku = "SKU is required";
    } else {
      newErrors.sku = "";
    }

    setError(newErrors);
    console.log(variant);
  }

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
                      
                      value={variant.product_id}
                      onChange={(e) =>
                        setVariant({ ...variant, product_id: Number(e.target.value) })
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
                    <label htmlFor="variantName" className="form-label">
                      Variant Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="variantName"
                      placeholder="e.g. Black, 128GB / Blue"
                      
                      value={variant.variant_name}
                      onChange={(e) =>
                        setVariant({ ...variant, variant_name: e.target.value })
                      }
                    />
                    <small className="text-danger">{error.variant_name}</small>
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
                      
                      value={variant.sku}
                      onChange={(e) => setVariant({ ...variant, sku: e.target.value })}
                    />
                    <small className="text-danger">{error.sku}</small>
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
                      value={variant.price_adjustment}
                      onChange={(e) =>
                        setVariant({ ...variant, price_adjustment: Number(e.target.value) })
                      }
                    />
                    <small className="text-secondary">
                      Use a negative number for a discount, positive for a
                      surcharge.
                    </small>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
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
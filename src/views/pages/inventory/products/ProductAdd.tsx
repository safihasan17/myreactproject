import { Link } from "react-router";
import { type Product, defaultProduct } from "../../../../interfaces/Product";
import { useEffect, useState } from "react";
import type { Category } from "../../../../interfaces/Category";
import { api } from "../../../../Config";
import type { Brand } from "../../../../interfaces/Brand";

function ProductAdd() {
  const [product, setProduct] = useState<Product>(defaultProduct);
  const [Category, setCategory] = useState<Category[]>([]);
  const [Brand, setBrand] = useState<Brand[]>([]);

  const [msg, setMsg] = useState(false);
  const [success, setSuccess] = useState(false);

  function getCategories() {
    api
      .get("categories")
      .then((res) => {
        console.log(res.data);
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getBrands() {
    api
      .get("brands")
      .then((res) => {
        console.log(res.data);
        setBrand(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getCategories();
    getBrands();
  }, []);

  function handleSubmit() {
    let data = new FormData();
    data.append("name", product.name);
    data.append("sku", product.sku);
    data.append("category_id", product.category_id.toString());
    data.append("brand_id", product.brand_id.toString());
    data.append("price", product.price.toString());
    data.append("quantity", product.quantity.toString());
    data.append("is_active", product.is_active.toString());
    if (product.image) data.append("image", product.image);

    api
      .post("product-create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
        setMsg(true);
      })
      .catch((err) => {
        console.log(err);
        setSuccess(false);
        setMsg(true);
      });
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div className="">
              <h1 className="fs-3 mb-1">Add Product</h1>
              <p className="mb-0">Manage your product items</p>
            </div>
            <div>
              <Link to="/products" className="btn btn-primary">
                Go to Product List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-4">
              {msg && (
                <div
                  className={`alert alert-${success ? "success" : "danger"} alert-dismissible fade show mb-3`}
                  role="alert"
                >
                  {success
                    ? "Data saved successfully"
                    : "something went wrong! please try again after some time."}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => setMsg(false)}
                  ></button>
                </div>
              )}

              <form
                id="addProductForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="productName" className="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      placeholder="Enter product name"
                      required
                      value={product.name}
                      onChange={(e) =>
                        setProduct({ ...product, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="productSKU" className="form-label">
                      SKU
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productSKU"
                      placeholder="Enter SKU"
                      required
                      value={product.sku}
                      onChange={(e) =>
                        setProduct({ ...product, sku: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="productPrice" className="form-label">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productPrice"
                      placeholder=""
                      required
                      value={product.price}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          price: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="productStock" className="form-label">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="productStock"
                      placeholder="0"
                      required
                      value={product.quantity}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          quantity: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="productCategory" className="form-label">
                      Category
                    </label>
                    <select
                      className="form-select"
                      id="productCategory"
                      required
                      value={product.category_id}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          category_id: Number(e.target.value),
                        })
                      }
                    >
                      <option value={0} disabled>
                        Select category
                      </option>
                      {Category.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="productBrand" className="form-label">
                      Brand
                    </label>

                    <select
                      className="form-select"
                      id="productBrand"
                      required
                      value={product.brand_id}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          brand_id: Number(e.target.value),
                        })
                      }
                    >
                      <option value={0} disabled>
                        Select Brnds
                      </option>
                      {Brand.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="productImage" className="form-label">
                    Product Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="productImage"
                    accept="image/*"
                    required
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        image: e.target.files?.[0] ?? null,
                      })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label d-block">Status</label>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="productStatus"
                      id="statusActive"
                      value="active"
                      checked={product.is_active === true}
                      onChange={() =>
                        setProduct({
                          ...product,
                          is_active: true,
                        })
                      }
                    />

                    <label className="form-check-label" htmlFor="statusActive">
                      Active
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="productStatus"
                      id="statusInactive"
                      value="inactive"
                      checked={product.is_active === false}
                      onChange={() =>
                        setProduct({
                          ...product,
                          is_active: false,
                        })
                      }
                    />

                    <label
                      className="form-check-label"
                      htmlFor="statusInactive"
                    >
                      Inactive
                    </label>
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Add Product
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

export default ProductAdd;

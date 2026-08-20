import { Link } from "react-router";
import { type Product, defaultProduct } from "../../../../interfaces/Product";
import { useEffect, useState } from "react";
import type { Category } from "../../../../interfaces/Category";
import { api } from "../../../../Config";
import type { Brand } from "../../../../interfaces/Brand";

function ProductAdd() {
  const [product, setProduct] = useState<Product>(defaultProduct);
  const [Category, setCategory]= useState<Category[]>([]);
  const [Brand, setBrand] = useState<Brand[]>([]);

  const [error, setError] = useState({
    image: "",
    name: "",
    code: "",
    category: "",
    brand: "",
    price: "",
    quantity: "",
  });

  function getCategories(){
    api
    .get("categories")
    .then((res)=>{
      console.log(res.data);
      setCategory(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }


    function getBrands(){
    api
    .get("brands")
    .then((res)=>{
      console.log(res.data);
      setBrand(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getCategories();
    getBrands();
  })

  function handleSubmit(e: any) {
    e.preventDefault();
    let newErrors: any = {};

    if (product.name === "") {
      newErrors.name = "Name is required";
    } else if (product.name.length > 100 || product.name.length < 3) {
      newErrors.name = "Name more than 3 and not more than 100";
    } else {
      newErrors.name = "";
    }

    if (product.sku === "") {
      newErrors.code = "Code is required";
    } else {
      newErrors.code = "";
    }

    if (product.category === "") {
      newErrors.category = "Category is required";
    } else {
      newErrors.category = "";
    }

    if (product.brand === "") {
      newErrors.brand = "Brand is required";
    } else {
      newErrors.brand = "";
    }

    if (product.price === 0) {
      newErrors.price = "Price is required";
    } else {
      newErrors.price = "";
    }

    if (product.quantity === 0) {
      newErrors.quantity = "Stock quantity is required";
    } else {
      newErrors.quantity = "";
    }

    if (product.image === "") {
      newErrors.image = "Product image is required";
    } else {
      newErrors.image = "";
    }

    setError(newErrors);
    console.log(product);
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
              <form id="addProductForm">
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
                      onChange={(e) => setProduct({ ...product, name: e.target.value })}
                    />
                    <small className="text-danger">{error.name}</small>
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
                      onChange={(e) => setProduct({ ...product, sku: e.target.value })}
                    />
                    <small className="text-danger">{error.code}</small>
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
                      onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
                    />
                    <small className="text-danger">{error.price}</small>
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
                      onChange={(e) => setProduct({ ...product, quantity: Number(e.target.value) })}
                    />
                    <small className="text-danger">{error.quantity}</small>
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
                      value={product.category}
                      onChange={(e) => setProduct({ ...product, category: e.target.value })}
                    >
                      <option value={0} disabled>Select category</option>
                      {Category.map((item)=>(

                      <option key={item.id} value={item.id}>{item.name}</option>
                      ))}
                      
                    </select>
                    <small className="text-danger">{error.category}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="productBrand" className="form-label">
                      Brand
                    </label>

                    <select
                      className="form-select"
                      id="productBrand"
                      required
                      value={product.brand}
                      onChange={(e) => setProduct({ ...product, brand: e.target.value })}
                    >
                      <option value={0} disabled>Select Brnds</option>
                      {Brand.map((item)=>(

                      <option key={item.id} value={item.id}>{item.name}</option>
                      ))}
                      
                    </select>


                    
                    <small className="text-danger">{error.brand}</small>
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
                      setProduct({ ...product, image: e.target.files?.[0]?.name ?? "" })
                    }
                  />
                  <small className="text-danger">{error.image}</small>
                </div>
                
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
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
import { Link } from "react-router";
import  { type Product, defaultProduct } from "../../../../interfaces/Product";
import { useState } from "react";

function ProductAdd() {
  const [product, setProduct] = useState<Product>(defaultProduct);
  const [error, serError]= useState({
  image: "",
  name: "",
  code: "",
  category: "",
  brand: "",
  price: "",
  unit: "",
  quantity: "",
  })

  // useEffect(()=>{
  //   console.log(product);
  // }, [product])

   function handleSubmit(){
    let newErrors:any={}

    if(product.name == ""){
      newErrors.name="Name is required";
    }else if(product.name.length>100 || product.name.length<3){
       newErrors.name= "Name more than 3 and not more than 100"
    }else{
       newErrors.name= ""
    }
    
    if(product.code == ""){
      newErrors.code="code is required";
    }else{
       newErrors.code= "";
    }

    if(product.price === 0){
      newErrors.price="price is required";
    }else{
       newErrors.price= "";
    }

    


    

    serError(newErrors);
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
                      onChange={(e)=>setProduct({...product, name:e.target.value})}
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

                     value={product.code}
                      onChange={(e)=>setProduct({...product, code:e.target.value})}
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
                      onChange={(e)=>setProduct({...product, price:Number(e.target.value)})}
                    />

                    <small className="text-danger">{error.price}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="productStock" className="form-label">
                      Stock Quantity
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="productStock"
                      placeholder="0"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="productCategory" className="form-label">
                    Category
                  </label>
                  <select className="form-select" id="productCategory" required>
                    <option value="">Select category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="food">Food</option>
                  </select>
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
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productDescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="productDescription"
                    rows={4}
                    placeholder="Enter product description"
                  ></textarea>
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

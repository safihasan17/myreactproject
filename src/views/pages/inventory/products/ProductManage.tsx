import { Link } from "react-router";
import type { Product } from "../../../../interfaces/Product";
import { useEffect, useState } from "react";
import { api, basePath } from "../../../../Config";




function ProductManage() {

const [products, setProduct] = useState<Product[]>([]);

 const getProducts = ()=>{
     api
     .get("product")
     .then((res)=>{
      console.log(res.data);
      setProduct(res.data);
     })
     .catch((err)=>{
      console.log(err);
     })
 }

 useEffect(()=>{
  getProducts();
 }, []);
  return (
    <>
      <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="">
                  <h1 className="fs-3 mb-1">Products</h1>
                  <p className="mb-0">Manage your product Products</p>
                </div>
                <div>
                  <Link to="/Products-add" className="btn btn-primary">
                    Add Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div>
                <div className="d-flex gap-2 mb-3 flex-wrap justify-content-between">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-secondary">
                      <i className="ti ti-filter"></i> Filter
                    </button>
                    <button className="btn btn-outline-secondary">
                      <i className="ti ti-file-excel"></i> Excel
                    </button>
                    <button className="btn btn-outline-secondary">
                      <i className="ti ti-file-pdf"></i> PDF
                    </button>
                  </div>
                </div>
              </div>
              <div className="card table-responsive ">
                <table className="table mb-0 text-nowrap table-hover">
                  <thead className="table-light border-light">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Code</th>
                      <th>Category</th>
                      <th>Brand</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                   {products.map((item)=>(
                    <tr className="align-middle ">
                      <td>{item.id}</td>
                      <td>
                          {(item.image_path != null && item.image_path!="")&& (
                            <img src={basePath + item.image_path} width={50} height={50} alt={item.name} loading="lazy" />
                        )}
                           <br />
                        <span className="ms-3">{item.name}</span>
                        
                      </td>
                      <td>{item.sku}</td>
                      <td>{item.category}</td>
                      <td>{item.brand}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{item.is_active}</td>
                      <td className="">
                        <a href="#" className="btn btn-outline-success">
                          <i className="bi bi-eye-fill"></i>
                        </a>
                        <a href="#" className="btn btn-outline-primary">
                          <i className="ti ti-edit "></i>
                        </a>
                        <a href="#" className="btn btn-outline-danger">
                          <i className="ti ti-trash ms-2"></i>
                        </a>
                      </td>
                    </tr>

                   ))}
                    
                  </tbody>
                  <tfoot className="">
                    <tr>
                      <td className="border-bottom-0">
                        Showing product per page
                      </td>
                      <td colSpan={9} className="border-bottom-0">
                        <nav
                          aria-label="Page navigation"
                          className="d-flex justify-content-end"
                        >
                          <ul className="pagination mb-0">
                            <li className="page-item disabled">
                              <a className="page-link" href="#" tabIndex={-1}>
                                Previous
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                Next
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
    </>
  );
}

export default ProductManage;

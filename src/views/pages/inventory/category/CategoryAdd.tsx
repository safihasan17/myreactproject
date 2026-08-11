import { Link } from "react-router";
import { type Category, defaultCategory } from "../../../../interfaces/Category";
import { useState } from "react";

function CategoryAdd() {
  const [category, setCategory] = useState<Category>(defaultCategory);
  const [error, setError] = useState({
    name: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    let newErrors: any = {};

    if (category.name === "") {
      newErrors.name = "Category name is required";
    } else if (category.name.length > 100 || category.name.length < 3) {
      newErrors.name = "Category name is betwwen 4 to 100 characters";
    } else {
      newErrors.name = "";
    }

    setError(newErrors);
    console.log(category);
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div className="">
              <h1 className="fs-3 mb-1">Add Category</h1>
              <p className="mb-0">Create a new product category</p>
            </div>
            <div>
              <Link to="/category" className="btn btn-primary">
                Go to Categories List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-4">
              <form id="addCategoryForm">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="categoryName" className="form-label">
                      Category Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="categoryName"
                      placeholder="Enter category name"
                      
                      value={category.name}
                      onChange={(e) => setCategory({ ...category, name: e.target.value })}
                    />
                    <small className="text-danger">{error.name}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="categoryParent" className="form-label">
                      Parent Category
                    </label>
                    <select
                      className="form-select"
                      id="categoryParent"
                      value={category.parent_id}
                      onChange={(e) =>
                        setCategory({ ...category, parent_id: Number(e.target.value) })
                      }
                    >
                      <option value={0}>None (Top level)</option>
                      <option value={1}>Electronics</option>
                      <option value={4}>Groceries</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Add Category
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

export default CategoryAdd;
import { Link } from "react-router";
import { type Role, defaultRole } from "../../../interfaces/Role";
import { useState } from "react";

function RoleAdd() {
  const [role, setRole] = useState<Role>(defaultRole);
  const [error, setError] = useState({
    name: "",
    slug: "",
    description: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    let newErrors: any = {};

    if (role.name === "") {
      newErrors.name = "Role name is required";
    } else {
      newErrors.name = "";
    }

    if (role.slug === "") {
      newErrors.slug = "Slug is required";
    } else if (role.slug.length > 50 || role.slug.length < 3) {
      newErrors.slug = "Slug more than 3 and not more than 50";
    } else {
      newErrors.slug = "";
    }

    if (role.description === "") {
      newErrors.description = "Description is required";
    } else {
      newErrors.description = "";
    }

    setError(newErrors);
    console.log(role);
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div className="">
              <h1 className="fs-3 mb-1">Add Role</h1>
              <p className="mb-0">Create a new user role</p>
            </div>
            <div>
              <Link to="/role" className="btn btn-primary">
                Go to Roles List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-4">
              <form id="addRoleForm">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="roleName" className="form-label">
                      Role Name
                    </label>
                    <select
                      className="form-select"
                      id="roleName"
                      value={role.name}
                      onChange={(e) =>
                        setRole({ ...role, name: e.target.value as Role["name"] })
                      }
                    >
                      <option value="">Select role name</option>
                      <option value="admin">Admin</option>
                      <option value="manager">Manager</option>
                      <option value="cashier">Cashier</option>
                    </select>
                    <small className="text-danger">{error.name}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="roleSlug" className="form-label">
                      Role Slug
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="roleSlug"
                      placeholder="e.g. cashier"
                      value={role.slug}
                      onChange={(e) => setRole({ ...role, slug: e.target.value })}
                    />
                    <small className="text-danger">{error.slug}</small>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="roleDescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="roleDescription"
                    rows={3}
                    placeholder="Briefly describe what this role can do"
                    value={role.description}
                    onChange={(e) => setRole({ ...role, description: e.target.value })}
                  ></textarea>
                  <small className="text-danger">{error.description}</small>
                </div>

                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Add Role
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

export default RoleAdd;
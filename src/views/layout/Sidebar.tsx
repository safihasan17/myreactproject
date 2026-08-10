import { NavLink } from "react-router"

function Sidebar(){
    return(
      <>
          
           <aside id="sidebar" className="sidebar">
        <div className="logo-area">
          <NavLink to="/" className="d-inline-flex">
            <img
              src="data:image/svg+xml,%3csvg%20width='62'%20height='67'%20viewBox='0%200%2062%2067'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.604%2066.378L0.00805664%2048.1582V35.7825L30.604%2054.0023V66.378Z'%20fill='%23302C4D'/%3e%3cpath%20d='M61.1996%2048.1582L30.604%2066.378V54.0023L61.1996%2035.7825V48.1582Z'%20fill='%23E66239'/%3e%3cpath%20d='M30.5955%200L0%2018.2198V30.5955L30.5955%2012.3757V0Z'%20fill='%23657E92'/%3e%3cpath%20d='M61.191%2018.2198L30.5955%200V12.3757L61.191%2030.5955V18.2198Z'%20fill='%23A3B2BE'/%3e%3cpath%20d='M30.604%2048.8457L0.00805664%2030.6259V18.2498L30.604%2036.47V48.8457Z'%20fill='%23302C4D'/%3e%3cpath%20d='M61.1996%2030.6259L30.604%2048.8457V36.47L61.1996%2018.2498V30.6259Z'%20fill='%23E66239'/%3e%3c/svg%3e"
              alt=""
              width="24"
            />
            <span className="logo-text ms-2">
              {" "}
              <img src="./assets/images/logo.svg" alt="" />
            </span>
          </NavLink>
        </div>
        <ul className="nav flex-column">
          <li className="px-4 py-2">
            <small className="nav-text">Main</small>
          </li>
          <li>
            <NavLink className="nav-link " to="/">
              <i className="bi bi-house"></i>
              <span className="nav-text">Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link" to="/pos">
              <i className="ti ti-receipt"></i>
              <span className="nav-text">Pos</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link" to="reports.html">
              <i className="ti ti-receipt"></i>
              <span className="nav-text">Reports</span>
            </NavLink>
          </li>


          
          <li className="px-4 py-2">
             <small className="nav-text">Inventory</small>
          </li>

          <li>
            <NavLink className="nav-link" to="/category">
              <i className="ti ti-category-2"></i>
              <span className="nav-text">Category</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link" to="/products">
              <i className="ti ti-box-seam"></i>
              <span className="nav-text">products</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link" to="/product-varient">
              <i className="ti ti-adjustments-horizontal"></i>
              <span className="nav-text">Product Varients</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link" to="/inventory">
              <i className="ti ti-clipboard-list"></i>
              <span className="nav-text">Inventory</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link" to="/stock-manage">
              <i className="ti ti-clipboard-list"></i>
              <span className="nav-text">Stock Manage</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link" to="/branches">
              <i className="ti ti-clipboard-list"></i>
              <span className="nav-text">Branch</span>
            </NavLink>
          </li>

           <li>
            <NavLink className="nav-link" to="/suppliers">
              <i className="ti ti-clipboard-list"></i>
              <span className="nav-text">Suppliers</span>
            </NavLink>
          </li>

           <li>
            <NavLink className="nav-link" to="/purchase-orders">
              <i className="ti ti-clipboard-list"></i>
              <span className="nav-text">Purchase </span>
            </NavLink>
          </li>


           <li>
            <NavLink className="nav-link" to="/order">
              <i className="ti ti-clipboard-list"></i>
              <span className="nav-text">Order</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link" to="/order-items">
              <i className="ti ti-clipboard-list"></i>
              <span className="nav-text">Order Item</span>
            </NavLink>
          </li>


          <li>
            <NavLink className="nav-link" to="/payments">
              <i className="ti ti-clipboard-list"></i>
              <span className="nav-text">Payments</span>
            </NavLink>
          </li>

           

          <li className="px-4 py-2">
             <small className="nav-text">Customer</small>
          </li>

          <li>
            <NavLink className="nav-link" to="/customer">
              <i className="ti ti-address-book"></i>
              <span className="nav-text">Customer</span>
            </NavLink>
          </li>
          
          
          <li className="px-4 py-2">
             <small className="nav-text">Users</small>
          </li>
          <li>
            <NavLink className="nav-link" to="/user">
              <i className="ti ti-users"></i>
              <span className="nav-text">User</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/role">
              <i className="ti ti-shield-lock"></i>
              <span className="nav-text">Role</span>
            </NavLink>
          </li>

          <li className="px-4  py-2">
            <small className="nav-text">Account</small>
          </li>
          <li>
            <NavLink className="nav-link" to="/login">
              <i className="ti ti-logout"></i>
              <span className="nav-text">Log in</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="signup.html">
              <i className="ti ti-user-plus"></i>
              <span className="nav-text">Sign up</span>
            </NavLink>
          </li>
        </ul>
      </aside>

      </>
    )
}

export default Sidebar
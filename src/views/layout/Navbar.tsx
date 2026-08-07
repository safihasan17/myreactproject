import { Link, NavLink } from "react-router";

function Navbar(){
    return(
      <>
          
           <nav
        id="topbar"
        className="navbar bg-white border-bottom fixed-top topbar px-3"
      >
        <button
          id="toggleBtn"
          className="d-none d-lg-inline-flex btn btn-light btn-icon btn-sm "
        >
          <i className="ti ti-layout-sidebar-left-expand"></i>
        </button>

        <button
          id="mobileBtn"
          className="btn btn-light btn-icon btn-sm d-lg-none me-2"
        >
          <i className="ti ti-layout-sidebar-left-expand"></i>
        </button>
        <div>
          <ul className="list-unstyled d-flex align-items-center mb-0 gap-1">
            <li>
              <a
                className="position-relative btn-icon btn-sm btn-light btn rounded-circle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-bell"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2 ms-n2">
                  2<span className="visually-hidden">unread messages</span>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-md p-0">
                <ul className="list-unstyled p-0 m-0">
                  <li className="p-3 border-bottom ">
                    <div className="d-flex gap-3">
                      <img
                        src="./assets/images/avatar-1.jpg"
                        alt=""
                        className="avatar avatar-sm rounded-circle"
                      />
                      <div className="flex-grow-1 small">
                        <p className="mb-0">New order received</p>
                        <p className="mb-1">Order #12345 has been placed</p>
                        <div className="text-secondary">5 minutes ago</div>
                      </div>
                    </div>
                  </li>
                  <li className="p-3 border-bottom ">
                    <div className="d-flex gap-3">
                      <img
                        src="./assets/images/avatar-4.jpg"
                        alt=""
                        className="avatar avatar-sm rounded-circle"
                      />
                      <div className="flex-grow-1 small">
                        <p className="mb-0">New user registered</p>
                        <p className="mb-1">User @john_doe has signed up</p>
                        <div className="text-secondary">30 minutes ago</div>
                      </div>
                    </div>
                  </li>

                  <li className="p-3 border-bottom">
                    <div className="d-flex gap-3">
                      <img
                        src="./assets/images/avatar-2.jpg"
                        alt=""
                        className="avatar avatar-sm rounded-circle"
                      />
                      <div className="flex-grow-1 small">
                        <p className="mb-0">Payment confirmed</p>
                        <p className="mb-1">
                          Payment of $299 has been received
                        </p>
                        <div className="text-secondary">1 hour ago</div>
                      </div>
                    </div>
                  </li>
                  <li className="px-4 py-3 text-center">
                    <a href="#" className="text-primary ">
                      View all notifications
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="ms-3 dropdown">
              <a
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="./assets/images/avatar-1.jpg"
                  alt=""
                  className="avatar avatar-sm rounded-circle"
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end p-0"
                style={{ minWidth: "200px" }}
              >
                <div>
                  <div className="d-flex gap-3 align-items-center border-dashed border-bottom px-3 py-3">
                    <img
                      src="./assets/images/avatar-1.jpg"
                      alt=""
                      className="avatar avatar-md rounded-circle"
                    />
                    <div>
                      <h4 className="mb-0 small">Shrina Tesla</h4>
                      <p className="mb-0  small">@imshrina</p>
                    </div>
                  </div>
                  <div className="p-3 d-flex flex-column gap-1 small lh-lg">
                    <a href="#!" className="">
                      <span>Home</span>
                    </a>
                    <a href="#!" className="">
                      <span> Inbox</span>
                    </a>
                    <a href="#!" className="">
                      <span> Chat</span>
                    </a>
                    <a href="#!" className="">
                      <span> Activity</span>
                    </a>
                    <a href="#!" className="">
                      <span> Account Settings</span>
                    </a>
                    <li>
                     <NavLink className="nav-link" to="/login">
                       <i className="ti ti-logout"></i>
                       <span className="nav-text">Log out</span>
                     </NavLink>
                    </li>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
     </nav>

      </>
    )
}

export default Navbar
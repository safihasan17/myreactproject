import { useEffect, useState } from "react";
import { api, basePath } from "../../../Config";
import type { Product as ApiProduct } from "../../../interfaces/Product";
import { Link, useNavigate } from "react-router";

interface Product {
  id: number | string;
  code: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  unit: string;
  stock: number;
  image: string;
}

interface CartItem extends Product {
  qty: number;
}

function PosManage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const navigate = useNavigate();

  const getProducts = () => {
    api
      .get("product")
      .then((res) => {
        const data: ApiProduct[] = res.data;
        const mapped: Product[] = data.map((item) => ({
          id: item.id,
          code: item.sku,
          name: item.name,
          category: item.category ?? "Uncategorized",
          brand: item.brand ?? "No brand",
          price: Number(item.price) || 0,
          unit: "pcs",
          stock: Number(item.quantity) || 0,
          image:
            item.image_path != null && item.image_path !== ""
              ? basePath + item.image_path
              : "",
        }));

        setProducts(mapped);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const categoryList: string[] = ["All"];
  for (let i = 0; i < products.length; i++) {
    const cat = products[i].category;
    if (categoryList.indexOf(cat) === -1) {
      categoryList.push(cat);
    }
  }

  const filteredProducts: Product[] = [];
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const categoryOk = category === "All" || p.category === category;
    const searchOk = p.name.toLowerCase().includes(search.toLowerCase());
    if (categoryOk && searchOk) {
      filteredProducts.push(p);
    }
  }

  function addToCart(product: Product) {
    let foundIndex = -1;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex === -1) {
      const newItem: CartItem = { ...product, qty: 1 };
      setCart([...cart, newItem]);
    } else {
      const existingItem = cart[foundIndex];
      if (existingItem.qty < existingItem.stock) {
        const newCart = [...cart];
        newCart[foundIndex] = { ...existingItem, qty: existingItem.qty + 1 };
        setCart(newCart);
      }
    }
  }

  function increaseQty(id: number | string) {
    const newCart = [...cart];
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === id) {
        if (newCart[i].qty < newCart[i].stock) {
          newCart[i] = { ...newCart[i], qty: newCart[i].qty + 1 };
        }
      }
    }
    setCart(newCart);
  }

  function decreaseQty(id: number | string) {
    const newCart = [...cart];
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === id) {
        if (newCart[i].qty > 1) {
          newCart[i] = { ...newCart[i], qty: newCart[i].qty - 1 };
        }
      }
    }
    setCart(newCart);
  }

  function removeItem(id: number | string) {
    const newCart = [];
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id !== id) {
        newCart.push(cart[i]);
      }
    }
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  let subtotal = 0;
  let itemCount = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal = subtotal + cart[i].price * cart[i].qty;
    itemCount = itemCount + cart[i].qty;
  }

  const taxRate = 0.05;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  async function handleCheckout() {
    if (cart.length === 0) {
      return;
    }

    setCheckingOut(true);
    setCheckoutError("");

    try {
      const res = await api.post("sales", {
        items: cart.map((item) => ({
          id: item.id,
          price: item.price,
          qty: item.qty,
        })),
        subtotal,
        tax,
        total,
      });

      const sale = res.data;

      navigate("/pos-recept", {
        state: {
          items: cart.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            qty: item.qty,
          })),
          subtotal,
          tax,
          total,
          invoiceNo: sale.invoice_no,
          date: new Date().toLocaleString(),
        },
      });

      clearCart();
      getProducts(); 
    } catch (err: any) {
      setCheckoutError(
        err?.response?.data?.message || "Checkout failed. Please try again."
      );
    } finally {
      setCheckingOut(false);
    }
  }

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="mb-3">
              <Link to="/" className="btn btn-primary">
                Back to Dashboard
              </Link>
            </div>

            <h1 className="fs-3 mb-1">POS</h1>
            <p className="mb-3">Select products to add to cart</p>

            <div className="col-md-4">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <select
                className="form-select mb-3"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categoryList.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="row g-3">
              {filteredProducts.map((p) => (
                <div className="col-6 col-md-4 col-xl-3" key={p.id}>
                  <div className="card h-100">
                    <div className="card-body text-center p-3">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.name}
                          className="rounded mb-2"
                          style={{
                            width: "70px",
                            height: "70px",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div
                          className="rounded mb-2 bg-light d-flex align-items-center justify-content-center mx-auto"
                          style={{ width: "70px", height: "70px" }}
                        >
                          <i className="ti ti-photo text-muted"></i>
                        </div>
                      )}
                      <h6>{p.name}</h6>
                      <p className="fw-bold">৳{p.price.toFixed(2)}</p>
                      <p className="text-muted small">Stock: {p.stock}</p>
                      <button
                        className="btn btn-primary btn-sm w-100"
                        disabled={p.stock === 0}
                        onClick={() => addToCart(p)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {filteredProducts.length === 0 && (
                <p className="text-muted text-center mt-3">No products found</p>
              )}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h5 className="mb-0">Cart ({itemCount})</h5>
                {cart.length > 0 && (
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={clearCart}
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="card-body">
                {cart.length === 0 ? (
                  <p className="text-muted text-center">Cart is empty</p>
                ) : (
                  <ul className="list-group list-group-flush">
                    {cart.map((item) => (
                      <li key={item.id} className="list-group-item">
                        <div className="d-flex justify-content-between">
                          <span>{item.name}</span>
                          <button
                            className="btn btn-sm link-danger p-0"
                            onClick={() => removeItem(item.id)}
                          >
                            ✕
                          </button>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-1">
                          <div>
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => decreaseQty(item.id)}
                            >
                              -
                            </button>
                            <span className="mx-2">{item.qty}</span>
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => increaseQty(item.id)}
                            >
                              +
                            </button>
                          </div>
                          <span>৳{(item.price * item.qty).toFixed(2)}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>৳{subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Tax (5%)</span>
                  <span>৳{tax.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>৳{total.toFixed(2)}</span>
                </div>
                {checkoutError && (
                  <p className="text-danger small mt-2 mb-0">{checkoutError}</p>
                )}
                <button
                  className="btn btn-primary w-100 mt-2"
                  disabled={cart.length === 0 || checkingOut}
                  onClick={handleCheckout}
                >
                  {checkingOut ? "Processing..." : "Checkout"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PosManage;
import {useState } from "react";
import product1 from "../../../assets/images/product-1.png";
import product2 from "../../../assets/images/product-2.png";
import product3 from "../../../assets/images/product-3.png";
import product4 from "../../../assets/images/product-4.png";
import product5 from "../../../assets/images/product-5.png";
import product6 from "../../../assets/images/product-6.png";
import product7 from "../../../assets/images/product-7.png";
import product8 from "../../../assets/images/product-8.png";
import product9 from "../../../assets/images/product-9.png";
import product10 from "../../../assets/images/product-10.png";

interface Product {
  id: string;
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


const products: Product[] = [
  {
    id: "PRD001",
    code: "PRD001",
    name: "Gaming Joy Stick",
    category: "Electronics",
    brand: "Brand Name",
    price: 99.99,
    unit: "pcs",
    stock: 150,
    image: product1,
  },
  {
    id: "PRD002",
    code: "PRD002",
    name: "Wireless Earphones",
    category: "Electronics",
    brand: "Tech Pro",
    price: 89.99,
    unit: "pcs",
    stock: 320,
    image: product2,
  },
  {
    id: "PRD003",
    code: "PRD003",
    name: "Smart Watch Pro",
    category: "Electronics",
    brand: "Tech Pro",
    price: 98.0,
    unit: "pcs",
    stock: 200,
    image: product3,
  },
  {
    id: "PRD004",
    code: "PRD004",
    name: "USB-C Fast Charger",
    category: "Electronics",
    brand: "Tech Pro",
    price: 86.0,
    unit: "pcs",
    stock: 80,
    image: product4,
  },
  {
    id: "PRD005",
    code: "PRD005",
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    brand: "Tech Pro",
    price: 32.0,
    unit: "pcs",
    stock: 110,
    image: product5,
  },
  {
    id: "PRD006",
    code: "PRD006",
    name: "Magic Keyboard",
    category: "Electronics",
    brand: "Tech Pro",
    price: 49.0,
    unit: "pcs",
    stock: 10,
    image: product6,
  },
  {
    id: "PRD007",
    code: "PRD007",
    name: 'MacBook Pro 16"',
    category: "Electronics",
    brand: "Tech Pro",
    price: 99.0,
    unit: "pcs",
    stock: 10,
    image: product7,
  },
  {
    id: "PRD008",
    code: "PRD008",
    name: "Wireless Earphones",
    category: "Electronics",
    brand: "Tech Pro",
    price: 109.0,
    unit: "pcs",
    stock: 200,
    image: product8,
  },
  {
    id: "PRD009",
    code: "PRD009",
    name: "Wireless Mouse",
    category: "Electronics",
    brand: "Tech Pro",
    price: 19.99,
    unit: "pcs",
    stock: 250,
    image: product9,
  },
  {
    id: "PRD010",
    code: "PRD010",
    name: "HD Webcam",
    category: "Electronics",
    brand: "Tech Pro",
    price: 45.5,
    unit: "pcs",
    stock: 60,
    image: product10,
  },
];



function PosManage() {
  
  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  
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

  
  function increaseQty(id: string) {
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

  function decreaseQty(id: string) {
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

  
  function removeItem(id: string) {
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

  
  function handleCheckout() {
    if (cart.length === 0) {
      return; 
    }
    alert();
    clearCart();
  }

 
  return (
    <div className="row">
      
      <div className="col-lg-8 mb-4 mb-lg-0">
        
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
                  <img
                    src={p.image}
                    alt={p.name}
                    className="rounded mb-2"
                    style={{ width: "70px", height: "70px" }}
                  />
                  <h6>{p.name}</h6>
                  <p className="fw-bold">${p.price.toFixed(2)}</p>
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
        </div>
      </div>

      
      <div className="col-lg-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h5 className="mb-0">Cart ({itemCount})</h5>
            {cart.length > 0 && (
              <button className="btn btn-sm btn-outline-danger" onClick={clearCart}>
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
                      <span>${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="card-footer">
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Tax (5%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              className="btn btn-primary w-100 mt-2"
              disabled={cart.length === 0}
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PosManage;

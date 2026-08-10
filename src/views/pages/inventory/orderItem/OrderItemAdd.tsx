import { Link } from "react-router";
import { type OrderItem, defaultOrderItem } from "../../../../interfaces/OrderItem";
import { useState } from "react";

function OrderItemAdd() {
   
  const [orderItem, setOrderItem] = useState<OrderItem>(defaultOrderItem);
  const [error, setError] = useState({
    order_id: "",
    product_id: "",
    quantity: "",
    unit_price: "",
  });

  function handleSubmit(e:any) {
    e.preventDefault()
    let newErrors: any = {};

    if (orderItem.order_id === 0) {
      newErrors.order_id = "Order is required";
    } else {
      newErrors.order_id = "";
    }

    if (orderItem.product_id === 0) {
      newErrors.product_id = "Product is required";
    } else {
      newErrors.product_id = "";
    }

    if (orderItem.quantity === 0) {
      newErrors.quantity = "Quantity is required";
    } else {
      newErrors.quantity = "";
    }

    if (orderItem.unit_price === 0) {
      newErrors.unit_price = "Unit price is required";
    } else {
      newErrors.unit_price = "";
    }

    setError(newErrors);
    console.log(orderItem)
  }

  const subtotal = orderItem.quantity * orderItem.unit_price;

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div className="">
              <h1 className="fs-3 mb-1">Add Order Item</h1>
              <p className="mb-0">Add a product line item to a sales order</p>
            </div>
            <div>
              <Link to="/order-items" className="btn btn-primary">
                Go to Order Items List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-4">
              <form id="addOrderItemForm">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="itemOrder" className="form-label">
                      Order
                    </label>
                    <select
                      className="form-select"
                      id="itemOrder"
                      required
                      value={orderItem.order_id}
                      onChange={(e) => setOrderItem({ ...orderItem, order_id: Number(e.target.value) })}
                    >
                      <option value={0}>Select order</option>
                      <option value={1}>#ORD-1001</option>
                      <option value={2}>#ORD-1002</option>
                      <option value={3}>#ORD-1003</option>
                    </select>
                    <small className="text-danger">{error.order_id}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="itemProduct" className="form-label">
                      Product
                    </label>
                    <select
                      className="form-select"
                      id="itemProduct"
                      required
                      value={orderItem.product_id}
                      onChange={(e) => setOrderItem({ ...orderItem, product_id: Number(e.target.value) })}
                    >
                      <option value={0}>Select product</option>
                      <option value={1}>Gaming Joy Stick</option>
                      <option value={2}>Wireless Earphones</option>
                      <option value={3}>Smart Watch Pro</option>
                      <option value={4}>USB-C Fast Charger</option>
                    </select>
                    <small className="text-danger">{error.product_id}</small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="itemVariant" className="form-label">
                      Variant (optional)
                    </label>
                    <select
                      className="form-select"
                      id="itemVariant"
                      value={orderItem.variant_id}
                      onChange={(e) => setOrderItem({ ...orderItem, variant_id: Number(e.target.value) })}
                    >
                      <option value={0}>None</option>
                      <option value={1}>Black</option>
                      <option value={2}>White</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="itemQuantity" className="form-label">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="itemQuantity"
                      placeholder="0"
                      min={1}
                      step={1}
                      required
                      value={orderItem.quantity}
                      onChange={(e) => setOrderItem({ ...orderItem, quantity: Number(e.target.value) })}
                    />
                    <small className="text-danger">{error.quantity}</small>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="itemUnitPrice" className="form-label">
                      Unit Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="itemUnitPrice"
                      placeholder=""
                      min={0}
                      step="10"
                      required
                      value={orderItem.unit_price}
                      onChange={(e) => setOrderItem({ ...orderItem, unit_price: Number(e.target.value) })}
                    />
                    <small className="text-danger">{error.unit_price}</small>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Subtotal</label>
                  <input type="text" className="form-control" disabled value={`$${subtotal.toFixed(2)}`} />
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Add Order Item
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

export default OrderItemAdd;

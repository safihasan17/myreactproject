import { useLocation, useNavigate, Navigate } from "react-router";

interface ReceiptItem {
  id: number | string;
  name: string;
  price: number;
  qty: number;
}

interface ReceiptState {
  items: ReceiptItem[];
  subtotal: number;
  tax: number;
  total: number;
  invoiceNo: string;
  date: string;
}

function PosReceipt() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ReceiptState | null;

  if (!state) {
    return <Navigate to="/pos" replace />;
  }

  const { items, subtotal, tax, total, invoiceNo, date } = state;

  return (
    <div className="container mt-4" style={{ maxWidth: "700px" }}>
      <div className="d-flex justify-content-between mb-3 no-print">
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/pos")}
        >
          Back to POS
        </button>
        <button className="btn btn-primary" onClick={() => window.print()}>
          Print
        </button>
      </div>

      <div className="card p-4" id="receipt-content">
        <div className="text-center mb-4">
          <h3 className="mb-0">Invoice</h3>
          <p className="text-muted mb-0">Invoice No: {invoiceNo}</p>
          <p className="text-muted">Date: {date}</p>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Item</th>
              <th className="text-end">Price</th>
              <th className="text-end">Qty</th>
              <th className="text-end">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td className="text-end">৳{item.price.toFixed(2)}</td>
                <td className="text-end">{item.qty}</td>
                <td className="text-end">
                  ৳{(item.price * item.qty).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex flex-column align-items-end">
          <div className="d-flex justify-content-between" style={{ width: "220px" }}>
            <span>Subtotal</span>
            <span>৳{subtotal.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between" style={{ width: "220px" }}>
            <span>Tax (5%)</span>
            <span>৳{tax.toFixed(2)}</span>
          </div>
          <div
            className="d-flex justify-content-between fw-bold fs-5"
            style={{ width: "220px" }}
          >
            <span>Total</span>
            <span>৳{total.toFixed(2)}</span>
          </div>
        </div>

        <p className="text-center text-muted mt-4 mb-0">Thank you for your purchase</p>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body * { visibility: hidden; }
          #receipt-content, #receipt-content * { visibility: visible; }
          #receipt-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default PosReceipt;
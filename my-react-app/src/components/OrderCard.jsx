export default function OrderCard() {
  return (
    <section className="card orderCard">
      <div className="orderLeft">
        <div className="tag">IN PROGRESS</div>
        <div className="muted">Today, 10:30 AM</div>

        <h3 className="orderTitle">Order #WB-8821</h3>
        <p className="muted">Assorted Pastries, Chocolate Cake, Fish Buns...</p>

        <div className="progressWrap">
          <div className="progressLabel">
            <span className="muted">Status:</span>{" "}
            <strong className="status">Out for Delivery</strong> — <span className="muted">Arriving by 2:00 PM</span>
          </div>
          <div className="progressBar">
            <div className="progressFill" />
          </div>
        </div>

        <div className="btnRow">
          <button className="darkBtn">📍 Track Order</button>
          <button className="lightBtn">View Details</button>
        </div>
      </div>

      <div className="orderRight">
        <div className="imgMock">🥐</div>
      </div>
    </section>
  );
}

export default function RecentOrdersTable({ orders }) {
  return (
    <section className="card tableCard">
      <div className="tableHeader">
        <h3>Recent Orders</h3>
        <a className="viewAll" href="#">View All</a>
      </div>

      <div className="tableWrap">
        <table className="table">
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>DATE</th>
              <th>ITEMS</th>
              <th>TOTAL</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td className="mono">{o.id}</td>
                <td>{o.date}</td>
                <td>{o.items}</td>
                <td>{o.total}</td>
                <td>
                  <span className={`pill ${o.status === "Delivered" ? "pillGreen" : "pillGray"}`}>
                    {o.status}
                  </span>
                </td>
                <td>
                  <button className="linkBtn">Reorder</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

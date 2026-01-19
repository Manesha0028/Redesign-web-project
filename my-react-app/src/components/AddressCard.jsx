export default function AddressCard({ title, name, lines = [], isAddNew = false }) {
  if (isAddNew) {
    return (
      <section className="card addressCard addNew">
        <div className="addIcon">➕</div>
        <div className="addText">Add New Address</div>
      </section>
    );
  }

  return (
    <section className="card addressCard">
      <div className="addressTop">
        <span className="addressTag">🏠 {title}</span>
        <div className="addressActions">
          <button className="iconBtnSmall" title="Edit">✏️</button>
          <button className="iconBtnSmall" title="Delete">🗑️</button>
        </div>
      </div>

      <h4 className="addressName">{name}</h4>
      {lines.map((l, i) => (
        <div key={i} className="muted">{l}</div>
      ))}
    </section>
  );
}

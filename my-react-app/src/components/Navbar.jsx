export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <div className="logoBox">🧁</div>
        <strong>Wasana Bakers</strong>
      </div>

      <nav className="navLinks">
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </nav>

      <div className="navRight">
        <div className="searchWrap">
          <span className="searchIcon">🔎</span>
          <input className="searchInput" placeholder="Search for cakes, buns..." />
        </div>

        <button className="iconBtn" title="Cart">🛒</button>
        <button className="iconBtn" title="Notifications">🔔</button>
        <button className="iconBtn" title="Account">👤</button>
      </div>
    </header>
  );
}

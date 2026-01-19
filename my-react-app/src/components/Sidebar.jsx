export default function Sidebar({ user }) {
  return (
    <aside className="sidebar">
      <div className="userCard">
        <div className="avatar">👩</div>
        <div>
          <div className="userName">{user.name}</div>
          <div className="userEmail">{user.email}</div>
        </div>
      </div>

      <div className="sideMenu">
        <button className="sideItem active">🏠 Dashboard</button>
        <button className="sideItem">📦 My Orders</button>
        <button className="sideItem">📍 Addresses</button>
        <button className="sideItem">⚙️ Account Details</button>
      </div>

      <button className="logoutBtn">⎋ Log Out</button>
    </aside>
  );
}

import "../styles/account.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import OrderCard from "../components/OrderCard";
import StatCard from "../components/StatCard";
import RecentOrdersTable from "../components/RecentOrdersTable";
import AddressCard from "../components/AddressCard";

export default function AccountPage() {
  // Later you can fetch these from API
  const user = { name: "Amara Perera", email: "amara.p@example.com" };

  const stats = [
    { label: "Completed Orders", value: 12, icon: "✅" },
    { label: "Saved Favorites", value: 4, icon: "💙" },
    { label: "Loyalty Points", value: 150, icon: "🏷️" },
  ];

  const recentOrders = [
    { id: "#WB-8820", date: "Oct 24, 2023", items: 3, total: "Rs. 4,500.00", status: "Delivered" },
    { id: "#WB-8755", date: "Oct 15, 2023", items: 1, total: "Rs. 850.00", status: "Delivered" },
  ];

  return (
    <div className="page">
      <Navbar />

      <div className="container">
        <Sidebar user={user} />

        <main className="content">
          <div className="headerRow">
            <div>
              <h1 className="title">My Account</h1>
              <p className="subtitle">Welcome back, {user.name}! Here’s what’s happening with your treats.</p>
            </div>

            <button className="primaryBtn">+ New Order</button>
          </div>

          <OrderCard />

          <div className="statsRow">
            {stats.map((s) => (
              <StatCard key={s.label} label={s.label} value={s.value} icon={s.icon} />
            ))}
          </div>

          <RecentOrdersTable orders={recentOrders} />

          <div className="grid2">
            <AddressCard
              title="HOME"
              name="Amara Perera"
              lines={[
                "No. 45, Temple Road,",
                "Colombo 03, Western Province,",
                "Sri Lanka.",
                "+94 77 123 4567",
              ]}
            />
            <AddressCard isAddNew />
          </div>
        </main>
      </div>
    </div>
  );
}

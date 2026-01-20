// src/pages/AdminDashboard.jsx
import React from 'react';
import { MdDashboard, MdShoppingCart, MdInventory2, MdPeople, MdMail, MdLogout } from 'react-icons/md';

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen w-full bg-background-light dark:bg-background-dark text-[#181311] dark:text-white">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col border-r border-[#e6dedb] dark:border-[#4a3b36] bg-white dark:bg-[#2a1d18] fixed inset-y-0">
        <div className="p-6 flex items-center gap-3">
          <img
            src="https://wasanabakers.lk/Logo%20[Converted]%20copy%20(1).jpg"
            alt="Wasana Bakers"
            className="h-10 w-auto rounded-md"
            onError={(e) => {
              e.target.parentElement.innerHTML = '<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7l-3.5-3.5L13 7"/><path d="M20 17l-3.5 3.5L13 17"/><path d="M21 12H3"/></svg></div>';
            }}
          />
          <div>
            <h1 className="font-bold text-lg">Wasana Bakers</h1>
            <p className="text-xs text-[#896b61] dark:text-gray-400">Admin Panel</p>
          </div>
        </div>

        <nav className="flex-1 px-4 mt-4 space-y-1">
          <a 
            href="/admin/dashboard" 
            className="sidebar-item-active flex items-center gap-3 px-4 py-3 rounded-xl font-medium"
          >
            <MdDashboard className="text-xl" />
            Dashboard
          </a>
          {/* 👇 Updated: orange hover like buttons */}
          <a 
            href="/admin/orders" 
            className="flex items-center gap-3 px-4 py-3 text-[#181311] dark:text-gray-300 hover:bg-[#ee5c2b] hover:text-white rounded-xl transition-colors font-medium"
          >
            <MdShoppingCart className="text-xl" />
            Orders
          </a>
          <a 
            href="/admin/products" 
            className="flex items-center gap-3 px-4 py-3 text-[#181311] dark:text-gray-300 hover:bg-[#ee5c2b] hover:text-white rounded-xl transition-colors font-medium"
          >
            <MdInventory2 className="text-xl" />
            Products
          </a>
          <a 
            href="/admin/customers" 
            className="flex items-center gap-3 px-4 py-3 text-[#181311] dark:text-gray-300 hover:bg-[#ee5c2b] hover:text-white rounded-xl transition-colors font-medium"
          >
            <MdPeople className="text-xl" />
            Customers
          </a>
          <a 
            href="/admin/inquiries" 
            className="flex items-center gap-3 px-4 py-3 text-[#181311] dark:text-gray-300 hover:bg-[#ee5c2b] hover:text-white rounded-xl transition-colors font-medium"
          >
            <MdMail className="text-xl" />
            Inquiries
          </a>
        </nav>

        <div className="p-4 mt-auto">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-[#181311] dark:text-gray-300 hover:bg-[#ffe5e5] dark:hover:bg-[#5a1d1d]/20 hover:text-red-600 dark:hover:text-red-400 rounded-xl transition-colors font-medium">
            <MdLogout className="text-xl" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8">
          <h2 className="text-3xl font-bold">Good Morning, Manager</h2>
          <p className="text-[#896b61] dark:text-gray-400 mt-1">
            Welcome to your admin dashboard.
          </p>
        </header>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-[#2a1d18] p-6 rounded-2xl border border-[#e6dedb] dark:border-[#4a3b36] shadow-sm">
            <p className="text-sm font-semibold text-[#896b61] dark:text-gray-400 uppercase tracking-wider">New Orders</p>
            <button className="w-full mt-4 border border-[#e6dedb] dark:border-[#4a3b36] hover:bg-[#ee5c2b] hover:text-white font-semibold py-2.5 rounded-xl transition-all">
              View All Orders
            </button>
          </div>

          <div className="bg-white dark:bg-[#2a1d18] p-6 rounded-2xl border border-[#e6dedb] dark:border-[#4a3b36] shadow-sm">
            <p className="text-sm font-semibold text-[#896b61] dark:text-gray-400 uppercase tracking-wider">Inventory</p>
            <button className="w-full mt-4 border border-[#e6dedb] dark:border-[#4a3b36] hover:bg-[#ee5c2b] hover:text-white font-semibold py-2.5 rounded-xl transition-all">
              Update Inventory
            </button>
          </div>
        </div>

        {/* Recent Activity Section (Header Only - No Table) */}
        <div className="bg-white dark:bg-[#2a1d18] rounded-2xl border border-[#e6dedb] dark:border-[#4a3b36] shadow-sm p-6">
          <h3 className="text-lg font-bold">Recent Activity</h3>
          <p className="text-[#896b61] dark:text-gray-400 text-sm mt-2">
            No recent activity to display.
          </p>
        </div>
      </main>
    </div>
  );
}
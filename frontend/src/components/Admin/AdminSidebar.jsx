import React from "react";
import {
  FaBoxOpen,
  FaClipboardList,
  FaStore,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";
import { clearCart } from "../../redux/slices/cartSlice";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded transition-colors ${
      isActive
        ? "bg-gray-700 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <div className="p-6">
      {/* Brand */}
      <div className="mb-8">
        <Link
          to="/admin"
          className="text-2xl font-bold tracking-tight hover:text-gray-200 transition-colors"
        >
          Nyvra
        </Link>
      </div>

      {/* Dashboard Title */}
      <h2 className="text-lg font-semibold mb-6 text-center text-gray-200">
        Admin Dashboard
      </h2>

      {/* Nav Links */}
      <nav className="flex flex-col space-y-2">
        <NavLink to="/admin/users" className={linkClasses}>
          <FaUser />
          <span>Users</span>
        </NavLink>

        <NavLink to="/admin/products" className={linkClasses}>
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>

        <NavLink to="/admin/orders" className={linkClasses}>
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>

        <NavLink to="/" className={linkClasses}>
          <FaStore />
          <span>Shop</span>
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="mt-8">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded transition-colors"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;

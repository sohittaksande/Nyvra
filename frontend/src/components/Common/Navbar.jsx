import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { cart } = useSelector((state) => state.cart);
  const {user}=useSelector((state)=>state.auth);

  const cartItemCount =
    cart?.products?.reduce((total, product) => total + product.quantity, 0) ||
    0;

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const [navDrwawerOpen, setnavDrwawerOpen] = useState(false);
  const toggleNavDrawer = () => {
    setnavDrwawerOpen(!navDrwawerOpen);
  };

  return (
    <>
       {/* Navbar */}
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 sticky top-0 bg-white shadow-md z-50">
        {/* Logo */}
        <div>
          <NavLink
            to="/"
            className="text-3xl font-semibold hover:scale-105 transition-transform"
          >
            Nyvra
          </NavLink>
        </div>
        {/* center navigation links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/collections/all?gender=Men"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            men
          </Link>
          <Link
            to="/collections/all?gender=Women"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="/collections/all?category=Top Wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="/collections/all?category=Bottom Wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom wear
          </Link>
        </div>

        {/* right section */}
        <div className="flex items-center space-x-4">
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="block bg-black px-2 rounded text-sm text-white"
            >
              Admin
            </Link>
          )}

          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black cursor-pointer"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700"></HiOutlineShoppingBag>
            {cartItemCount > 0 && (
              <span className="absolute bg-blue-500 -top-1 text-white text-xs rounded-full py-0.5 px-2">
                {cartItemCount}
              </span>
            )}
          </button>
          {/* search icon */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button
            onClick={toggleNavDrawer}
            className="md:hidden cursor-pointer"
          >
            <HiBars3BottomRight className="h-6 w-6 text-gray-700"></HiBars3BottomRight>
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/3 h-full bg-white shadow-lg 
      transform transition-transform duration-300 z-50
       ${navDrwawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* close button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer} className="cursor-pointer">
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="/collections/all?gender=Men"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="/collections/all?gender=Women"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="/collections/all?category=Top Wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="/collections/all?category=Bottom Wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

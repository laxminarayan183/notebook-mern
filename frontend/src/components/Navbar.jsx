// import React from 'react'

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  CircleUserRound,
  Heart,
  NotebookText,
  Search,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdown, setDropdown] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { currUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setDropdown(false);
  };
  return (
    <>
      <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          {/* left side */}
          <div className="flex items-center md:gap-16 gap-4">
            <Link to="/">
              <NotebookText />
            </Link>

            {/* search input */}
            <div className="relative sm:w-72 w-40 space-x-2">
              <Search className="absolute inline-block left-3 inset-y-2" />
              <input
                type="text"
                placeholder="Search here"
                className="bg-[#EAEAEA] w-full py-2 md:px-8 px-6 rounded-md"
              />
            </div>
          </div>
          {/* right side */}
          <div className="relative  flex items-center md:space-x-3 space-x-2">
            {currUser ? (
              <button onClick={() => setDropdown(!isDropdown)}>
                <img
                  className="size-7 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/3781/3781986.png"
                  alt=""
                />
              </button>
            ) : (
              <Link to="/login">
                <CircleUserRound />
              </Link>
            )}
            {/* <CircleUserRound /> */}
            <button>
              <Heart className="hidden sm:block" />
            </button>
            {/* show Dropdown */}
            {isDropdown && (
              <div className="absolute right-[0] mt-60 w-48 bg-white shadow-lg rounded-md z-40">
                <ul className="py-2">
                  {navigation.map((item) => (
                    <li key={item.name} onClick={() => setDropdown(false)}>
                      <Link
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                        to={item.href}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
            <Link
              to="/cart"
              className="bg-yellow-400 p-1 sm:px-6 px-2 flex items-center rounded-full"
            >
              <ShoppingCart />
              {cartItems.length > 0 ? (
                <span className="text-sm font-semibold sm:ml-1">
                  {cartItems.length}
                </span>
              ) : (
                <span className="text-sm font-semibold sm:ml-1">0</span>
              )}
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
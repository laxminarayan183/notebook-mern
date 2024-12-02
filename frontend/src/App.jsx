// import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <div className="min-h-screen max-w-screen-2xl mx-auto">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </AuthProvider>
    </>
  );
};

export default App;

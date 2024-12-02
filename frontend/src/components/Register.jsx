import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [message, setMessage] = useState("");
  const { registerUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // register user
  const onSubmit = async (data) => {
    // console.log(data);
    try {
      await registerUser(data.email, data.password);
      alert("User registartion succesfull");
      navigate("/login");
    } catch (error) {
      setMessage("Please provide a valid email and password");
    }
  };

  return (
    <>
      <div className="h-[calc(100vh-120px)] flex items-center justify-center ">
        <div className="w-full max-w-sm mx-auto bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Register Here</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>

            {message && (
              <p className="text-red-500 text-xs italic mb-3">{message}</p>
            )}

            <div className="flex flex-wrap space-y-2.5 items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          <p className="inline-block align-baseline font-medium mt-4 text-sm">
            Have an account? Please
            <Link to="/login" className="text-blue-500 hover:text-blue-800">
              {" "}
              Login
            </Link>
          </p>

          <p className="mt-5 text-center text-gray-500 text-xs">
            &copy;2025 Book Store. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;

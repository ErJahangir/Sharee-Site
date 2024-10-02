"use client";
import React from "react";

// Reusable Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        <button className="absolute top-2 right-2" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

// SignUp Modal Component
export const SignUpModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sign Up">
      <form>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" className="border p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-[#fa8f47] text-white p-2 rounded">
          Submit
        </button>
      </form>
    </Modal>
  );
};

// LogIn Modal Component
export const LogInModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Log In">
      <form>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-[#fa8f47] text-white p-2 rounded">
          Log In
        </button>
      </form>
    </Modal>
  );
};

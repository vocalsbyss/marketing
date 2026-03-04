"use client";
import React from "react";

const SharedContent: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 text-gray-900 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About VIKISHA Grills</h2>
        <p className="mb-6">
          VIKISHA provides premium invisible grills for balconies and windows in Visakhapatnam. Our grills are rust-free, durable, and designed to keep your family safe without compromising aesthetics.
        </p>
        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
        <p>Call: 7386194588 | Email: info@vikisha.com</p>
      </div>
    </section>
  );
};

export default SharedContent;
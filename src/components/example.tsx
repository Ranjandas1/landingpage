import React from "react";

export function TopBar() {
  return (
    <div className="bg-[#131528] text-white py-2 px-4">
      <div className="container mx-auto flex ">
        <div className="flex-1">
          <select className="bg-transparent text-sm hover:text-gray-300 focus:outline-none">
            <option value="CAD">CAD</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="justify-end space-x-4">
          <button className="text-sm hover:text-gray-300">Sign in</button>
          <button className="text-sm hover:text-gray-300">
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
}

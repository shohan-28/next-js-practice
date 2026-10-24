import React from "react";

export default function Header() {
  return (
    <div>
      <div className="flex gap-2 justify-between items-center">
        <div className="text-2xl text-amber-600">Spriengge.Shop</div>
        <div className="flex gap-3">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}

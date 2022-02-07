import React from "react";

export default function Footer() {
  return (
  <div className="container">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
       <li className="nav-item"><a href="/home" className="nav-link px-2 text-muted">Home</a></li>
       <li className="nav-item"><a href="https://spoonacular.com/food-api" className="nav-link px-2 text-muted">API</a></li>
       <li className="nav-item"><a href="https://www.linkedin.com/in/effeleiva/" className="nav-link px-2 text-muted">About Creator</a></li>
      </ul>
      <p className="text-center text-muted">&copy; 2022 Created by @Effeleiva</p>
    </footer>
  </div>
)};
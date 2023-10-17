import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Teknolojik Yemekler</h1>
        <nav className="navbar">
          <a href="#">Anasayfa -</a>
          <a href="#">Secenekler - </a>
          <a href="#">
            <b>Siparis Olustur</b>
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;

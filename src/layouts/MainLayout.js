import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaHome , FaBook } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import ThemeToggle from "../components/ThemeTogle";

export default function MainLayout() {
  return (
    <div className="container-fluid ">
      <div className="row">
        {/* Sidebar для компьютеров */}
        <div className="col-3 col-md-2 d-none d-md-block vh-100 p-3 main-layout-sidebar">
          <nav className="nav flex-column">
            <NavLink to="/HomePage" className="btn-nav-link"><FaHome /> Главная</NavLink>
            <NavLink to="/Learning" className="btn-nav-link"><FaBook /> Уроки</NavLink>
            <NavLink to="/Profile" className="btn-nav-link"><CgProfile /> Профиль</NavLink>
          </nav>
        </div>

        {/* Контент */}
        <div className="col p-3">
          <div className="d-flex justify-content-between mb-3">
            <h1 id="logo"><span>L</span>platform</h1>
            <ThemeToggle />
          </div>
          <Outlet />
        </div>
      </div>

      {/* Нижнее меню для телефонов */}
      <nav className="d-md-none navbar fixed-bottom navbar-light main-layout-navbar border-top">
        <div className="d-flex justify-content-around w-100">
          <NavLink to="/HomePage" className="btn-nav-link"><FaHome /></NavLink>
          <NavLink to="Learning" className="btn-nav-link"><FaBook /></NavLink>
          <NavLink to="/Profile" className="btn-nav-link"><CgProfile /></NavLink>
        </div>
      </nav>
    </div>
  );
}

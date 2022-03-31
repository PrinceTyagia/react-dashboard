import React, { useEffect } from "react";
import "./menu.css";
import logo from "../img/logo.png";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

function Menu() {
  useEffect(() => {
    const mainMenuLi = document.getElementById("mainMenu").querySelectorAll("li");
    // console.log(mainMenuLi);
    function changeActive(){
        mainMenuLi.forEach(li => {
            li.classList.remove("active");
        });
        this.classList.add("active");
    }
    mainMenuLi.forEach(n => n.addEventListener('click',changeActive))
  }, []);

  return (
    <menu>
      <img src={logo} alt="" />

      <ul id="mainMenu">
        <Icon icon={<FaDelicious />} />
        <Icon icon={<FaShoppingCart />} />
        <Icon icon={<FaWallet />} />
        <Icon icon={<FaChartLine />} />
        <Icon icon={<FaRegClock />} />
      </ul>
      <ul id="lastMenu">
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </menu>
  );
}

export default Menu;

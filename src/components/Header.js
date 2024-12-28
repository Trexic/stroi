import React from 'react';
import logo from '../images/1.jpg';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Главная</a></li>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#about">О нас</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
      <img src={logo} alt="Логотип компании" />
    </header>
  );
};

export default Header;
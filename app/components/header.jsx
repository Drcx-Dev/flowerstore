"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col  md:flex-row bg-indigo-950 text-white space-x-14  w-full items-center p-4 h-16 justify-center  ">
      <button
        className="md:hidden flex flex-col items-center space-y-1"
        onClick={toggleMenu}
      >
        <span
          className={`w-8 h-0.5 bg-white transition-transform duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-8 h-0.5 bg-white transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`w-8 h-0.5 bg-white transition-transform duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-indigo-950 p-6 absolute top-16 left-0 right-0 z-50 shadow-lg">
          <Link
            href="./aboutus"
            className="text-white text-xl hover:text-gray-300 transition-colors flex justify-center "
          >
            О нас
          </Link>
          <Link
            href=""
            className="text-white text-xl hover:text-gray-300 transition-colors flex justify-center"
          >
            Доставка и Оплата
          </Link>
          <button className="text-white text-xl hover:text-gray-300 transition-colors pr-">
            Ночная доставка
          </button>
          <button className="text-white text-xl hover:text-gray-300 transition-colors pr-">
            Магазины
          </button>
          <h1 className="text-white text-xl pl- flex justify-center">Киев</h1>
          <h1 className="text-white text-xl flex justify-center">Валюта</h1>
          <button className="text-white text-xl hover:text-gray-300 transition-colors pr">
            Заказ по фото
          </button>
          <button className="text-white text-xl hover:text-gray-300 transition-colors ">
            Корпоративным клиентам
          </button>
        </div>
      )}

      <div className="hidden md:flex space-x-14 ">
        <button className="text-small">Ночная доставка</button>
        <h1>Киев</h1>
        <h1>Валюта</h1>
        <button>Магазины</button>
        <div>
          <Link href="./aboutus" className="text-white">
            О нас
          </Link>
        </div>
        <div>
          <Link href="./aboutus" className="text-white">
            Доставка и Оплата
          </Link>
        </div>
        <button>Заказ по фото</button>
        <button>Корпоративным клиентам</button>
      </div>
    </header>
  );
}

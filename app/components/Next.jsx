"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { productsbuketi } from "../productsbuketi"; // Импорт массива товаров
import { productsrose } from "../productsrose"; // Импорт другого массива товаров
import tel from "../components/img/call.png";
import logo from "../components/img/logo_dicentra.png";
import poisk from "../components/img/icon_search.png";
import user from "../components/img/icon_user.png";
import { products } from "../products";
import { boxf } from "@/boxf";
import { productsdrugoe } from "../productsdrugoe";
import { productstulpan } from "../producttulpan";
import { gift } from "../gift";

// хаммай массив да 1
const allProducts = [
  ...productsbuketi,
  ...productsrose,
  ...products,
  ...boxf,
  ...productsdrugoe,
  ...productstulpan,
  ...gift,
];

export default function Headerr() {
  const [searchQuery, setSearchQuery] = useState(""); // Текст поиска
  const [filteredProducts, setFilteredProducts] = useState([]); // Результаты поиска

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const filtered = allProducts.filter(
      (product) => product.name.toLowerCase().includes(query.toLowerCase()) // Сравниваем без учета регистра
    );
    setFilteredProducts(filtered);
  };

  return (
    <section className="flex flex-wrap justify-between items-center p-5 space-y-4 md:space-y-0 md:space-x-36">
      <div className="flex items-center space-x-2">
        <Image className="w-7 h-7 object-contain" src={tel} alt="Телефон" />
        <div>
          <p className="text-sm">+380 997-19-19</p>
          <p className="text-xs text-gray-400">обратный звонок</p>
        </div>
      </div>

      <div className="flex justify-center md:justify-start">
        <Image className="w-44 h-auto" src={logo} alt="Логотип" />
      </div>

      <div className="flex items-center space-x-2 relative">
        <Image className="w-7 h-7 object-contain" src={poisk} alt="Поиск" />
        <input
          className="border border-gray-300 p-1 rounded-md"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Поиск"
        />

        {/*  результаты поиска */}
        {filteredProducts.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto z-10">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/tovar/${product.id}`} passHref>
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  <p>{product.name}</p>
                  <p className="text-sm text-gray-500">{product.price} грн.</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Image
          className="w-7 h-7 object-contain"
          src={user}
          alt="Личный кабинет"
        />
        <Link href="./usercabinet" className="text-sm">
          Личный Кабинет
        </Link>
      </div>
    </section>
  );
}

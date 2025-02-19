"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsbuketi } from "../productsbuketi";

export default function Flowers() {
  // Состояние для корзины
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Функция для добавления товара в корзину
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Функция для удаления товара из корзины
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Открытие и закрытие корзины
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Подсчитываем общее количество товаров и цену в корзине
  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <section>
      <main className="bg-gray-100 min-h-screen">
        <div className="justify-self-center mt-4">
          <h1 className="text-gray-700">Главная/Букеты/Все розы</h1>
          <h1 className="font-bold text-3xl mt-3 pl-5">Все розы</h1>
        </div>

        {/* Карточки товаров */}
        <div className="flex flex-wrap gap-8 mt-8 justify-center ">
          {productsbuketi.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white p-4 w-64 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <Image
                width={500}
                height={300}
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-lg text-gray-600 mt-2">{product.price} грн.</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full py-2 bg-indigo-950 text-white rounded-full hover:bg-red-600"
              >
                Добавить в корзину
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Кнопка для корзины */}
      <button
        onClick={toggleCart}
        className="fixed bottom-10 right-10 bg-red-700 text-white py-2 px-6 rounded-full shadow-lg sm:   sm:bottom-20 sm: sm:py-3 sm:px-8"
      >
        Корзина ({totalItems})
      </button>

      {/* Модальное окно для корзины */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 sm:w-72">
            <h2 className="text-2xl font-bold">Ваша корзина</h2>
            <ul className="mt-4">
              {cart.length > 0 ? (
                cart.map((product) => (
                  <li
                    key={product.id}
                    className="flex justify-between items-center mt-3"
                  >
                    <span>{product.name}</span>
                    <span>{product.price} руб.</span>
                    <button
                      onClick={() => handleRemoveFromCart(product.id)}
                      className="text-red-500"
                    >
                      Удалить
                    </button>
                  </li>
                ))
              ) : (
                <li>Корзина пуста</li>
              )}
            </ul>
            {cart.length > 0 && (
              <>
                <div className="mt-4 text-xl font-semibold">
                  <p>Общая стоимость: {totalPrice} руб.</p>
                </div>
                <div className="flex justify-between mt-4"></div>
              </>
            )}
            <button
              onClick={toggleCart}
              className="mt-4 w-full py-2 bg-gray-300 text-black rounded-lg"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
      <div className="h-96">
        <div className="justify-items-center mt-20">
          <h1 className="font-bold text-2xl">
            Доставка цветов в Киеве круглосуточно
          </h1>
          <p className="pt-4 text-center">
            Ускоренный ритм жизни не всегда позволяет лично отправиться в
            магазин и <br /> выбрать букет для любимой женщины, близких или
            коллег. Доставка цветов по <br /> Киеву решит эту проблему: вам не
            придется тратить время на поиски салона со <br /> свежими цветами и
            опаздывать на торжество.
          </p>
          <p className="pt-5 text-center ">
            Удобнее приобрести срезанные или комнатные растения в <br /> режиме
            онлайн. В нашем каталоге можно выбрать готовые букеты или оформить
            заказ цветочной <br /> композиции по фото. А экспресс-доставка
            свежих цветов займет до 2 часов.
          </p>
        </div>
      </div>
      <section className="bg-indigo-950 text-white py-16">
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-20 mx-6">
          <div className="space-y-4">
            <button className="font-bold text-lg">Dicentra.ua</button>
            <p>
              Мы знаем, что дарим не просто цветы, <br /> а вашу любовь. На
              самом деле, мы <br /> передаем чувства, когда собираем и
              доставляем букет.
            </p>
            <p>
              Любовь — это поступки. Любовь не <br /> передать словами.
            </p>
            <p>© Дицентра 2018 Все права защищены</p>
          </div>

          <div className="space-y-4">
            <h1 className="text-lg font-semibold">Клиентам</h1>
            <Link
              href="./aboutus"
              className="hover:text-gray-400 transition-colors"
            >
              Доставка и Оплата
            </Link>
            <h1 className="text-lg font-semibold">Контакты</h1>
            <h1 className="hover:text-gray-400 transition-colors">
              Замена и Возврат
            </h1>
            <h1 className="hover:text-gray-400 transition-colors">Акции</h1>
          </div>

          <div className="space-y-4">
            <button className="font-bold text-lg">Компания</button>
            <h1 className="hover:text-gray-400 transition-colors">О нас</h1>
            <h1 className="hover:text-gray-400 transition-colors">Магазины</h1>
            <h1 className="hover:text-gray-400 transition-colors">Отзывы</h1>
            <h1 className="hover:text-gray-400 transition-colors">Портал</h1>
          </div>

          <div className="space-y-4">
            <h1 className="text-lg font-semibold">
              Будьте в курсе последних новостей
            </h1>
            <button className="bg-white h-10 w-44 rounded-full text-black mt-4 hover:bg-gray-200 transition-colors">
              Ваш email
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

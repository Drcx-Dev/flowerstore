"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { productsbuketi } from "../../productsbuketi"; // Импорт массива товаров
import { productsrose } from "../../productsrose"; // Импорт другого массива товаров
import { products } from "../../products";
import { boxf } from "@/boxf";
import { productsdrugoe } from "../../productsdrugoe";
import { productstulpan } from "../../producttulpan";
import { gift } from "../../gift";
import { useParams } from "next/navigation";

const allProducts = [
  ...productsbuketi,
  ...productsrose,
  ...products,
  ...boxf,
  ...productsdrugoe,
  ...productstulpan,
  ...gift,
];

export default function TovarPage() {
  const { id } = useParams();

  const productId = Number(id);

  if (isNaN(productId)) {
    return (
      <section>
        <h1>Неверный ID товара</h1>
      </section>
    );
  }

  const tovar = allProducts.find((product) => product.id === productId);

  if (!tovar) {
    return (
      <section>
        <h1>Товар не найден</h1>
      </section>
    );
  }

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderConfirmed(true);
  };

  return (
    <section style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem" }}>{tovar.name}</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        <div style={{ flex: 1, textAlign: "center" }}>
          <Image
            src={tovar.image}
            alt={tovar.name}
            width={400}
            height={400}
            style={{ objectFit: "contain", borderRadius: "10px" }}
          />
        </div>
        <div style={{ flex: 2 }}>
          <p style={{ fontSize: "1.2rem" }}>{tovar.description}</p>
          <p
            style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ff4500" }}
          >
            {tovar.price} грн
          </p>

          {!orderConfirmed ? (
            <div>
              <h2>Оформление заказа</h2>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Имя"
                  required
                  style={{
                    padding: "10px",
                    fontSize: "1rem",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Фамилия"
                  required
                  style={{
                    padding: "10px",
                    fontSize: "1rem",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Адрес"
                  required
                  style={{
                    padding: "10px",
                    fontSize: "1rem",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "12px 30px",
                    fontSize: "1rem",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    marginTop: "20px",
                  }}
                >
                  Подтвердить заказ
                </button>
              </form>
            </div>
          ) : (
            <p
              style={{
                color: "#28a745",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Ваш заказ принят! Мы свяжемся с вами для подтверждения.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

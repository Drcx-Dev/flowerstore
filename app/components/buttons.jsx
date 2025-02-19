import Link from "next/link";

export default function Buttons() {
  return (
    <section className="">
      <div className="flex flex-wrap justify-center space-x-6 sm:space-x-12 lg:space-x-32 font-bold">
        <Link href="./buketi" className="hover:text-pink-900 mb-4 sm:mb-0">
          Букеты
        </Link>{" "}
        <Link href="./rose" className="hover:text-pink-900 mb-4 sm:mb-0">
          Розы
        </Link>{" "}
        <Link href="./flower" className="hover:text-pink-900 mb-4 sm:mb-0">
          Цветы
        </Link>
        <Link href="./boxf" className="hover:text-pink-900 mb-4 sm:mb-0">
          Цветы в коробке
        </Link>
        <Link href="./gift" className="hover:text-pink-900 mb-4 sm:mb-0">
          Подарки
        </Link>{" "}
        <Link href="./tulpan" className="hover:text-pink-900 mb-4 sm:mb-0">
          Тюльпаны
        </Link>{" "}
        <Link href="./drugoe" className="hover:text-pink-900 mb-4 sm:mb-0">
          Другое
        </Link>{" "}
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import aboutsurat1 from "../assets/aboutsurat1.png";
import aboutsurat2 from "../assets/aboutsurat2.png";

export default function About() {
  return (
    <main className="bg-gray-100">
      <div className="text justify-self-center mt-8">
        <p className="text-gray-600 pt-4">Главная/ Dicentra.ua</p>
        <h1 className="pt-4 pr-10 font-bold text-3xl">Dicentra.ua</h1>
      </div>
      <div>
        <h1 className="text-center mt-1 font-serif font-bold text-2xl">
          Мы работаем с цветами уже 10 лет.
        </h1>
        <p className="text-center pt-5 p">
          Все это время мы искали и находили надежных партнеров со всего мира,
          договаривались о <br /> лучших условиях и проверяли качество каждого
          бутона самостоятельно. Мы занимались оптом. <br /> Это значит, что за
          десять последних лет вы наверняка хотя бы раз покупали цветы именно у
          нас, <br /> хотя и не знали об этом.
        </p>
        <Image
          className="justify-self-center h-80 pt-10"
          src={aboutsurat1}
          alt="1"
        />
      </div>
      <div>
        <div>
          <h1 className=" text-center font-bold text-2xl pt-5">
            Мы решили сделать доставку букетов, которая <br /> будет идеальной.{" "}
          </h1>
          <p className="text-center pt-5">
            Ведь когда даришь цветы, ты говоришь то, что словами не сказать.
            Можно признаться в любви, <br /> извиниться, рассказать об уважении.
            Вы доверяете нам эти важные и личные моменты - и наша <br /> команда
            старается сделать все, чтобы передать не только цветы, но и любовь.{" "}
          </p>
          <Image
            className="justify-self-center h-80 pt-10 object-fill "
            src={aboutsurat2}
            alt="2"
          />
          <div>
            <h1 className="text-center text-2xl font-bold pt-4">
              Мы работаем напрямую с производителями цветов,
              <br /> поэтому у нас очень доступные цены.
            </h1>
            <p className="text-center pt-4">
              Наша команда флористов обожает свое дело и всегда может
              подсказать, какой именно букет <br /> выбрать, как упаковать. Мы
              хотим радовать и удивлять, когда вы дарите цветы. Ведь любовь{" "}
              <br /> словами не передать.
            </p>
          </div>
        </div>
      </div>
      <section className="bg-indigo-950 text-white py-16 mt-10">
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
    </main>
  );
}

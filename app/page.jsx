import glavniysurat from "./assets/Rectangle.png";
import flowercut from "./assets/image 3.png";
import floweranbr from "./assets/Group.png";
import flower1 from "./assets/image 2.6.png";
import flower2 from "./assets/image 2.png";
import flower3 from "./assets/4.png";
import flower4 from "./assets/5.png";
import flower5 from "./assets/6.png";
import sklad from "./assets/sklad.png";
import floristi from "./assets/floristi.png";
import flowerpresent from "./assets/flowerpresent.png";
import rafaelo from "./assets/rafaelo.png";
import flowerpresent2 from "./assets/flowerpresent2.png";
import chocolate from "./assets/chocolate.png";
import flowerbuket from "./assets/flowerbuket.png";
import flowerhand from "./assets/flowerhand.jpg";
import flowerorange from "./assets/flowerorange.png";
import weddingflower from "./assets/weddingflower.png";
import flowergreen from "./assets/flowergreen.png";
import flowerheart from "./assets/flowerheart.png";
import flowergirl2 from "./assets/flowergirl2.png";
import flowergirl1 from "./assets/flowergirl1.png";
import flowergirl3 from "./assets/flowergirl3.png";
import dicentra1 from "./assets/dicentra1.png";
import dicentra2 from "./assets/dicentra2.png";
import dicentra3 from "./assets/dicentra3.png";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="">
      <div className="mt-7 relative">
        <Image
          className="w-full h-[500px] object-cover  "
          src={glavniysurat}
          alt="2"
        />
        <div className="bg-indigo-950 w-full sm:w-96 h-auto sm:h-[500px] text-white absolute bottom-0 p-5 sm:p-8  ">
          <h1 className="text-3xl sm:text-4xl pt-24 sm:pt-24 pl-0 sm:pl-20">
            Только лучшие букеты
          </h1>
          <p className="pl-0 sm:pl-20 text-gray-400 text-sm sm:text-base">
            Круглосуточная доставка
          </p>
          <button className="bg-orange-200 text-black h-11 rounded-3xl w-full sm:w-52 mt-6 sm:mt-10 mx-auto sm:ml-16">
            Выбрать букет
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center pt-10 px-4 sm:px-">
        <h1 className="font-bold sm:mr-44 mt-10 sm:mt-28 text-center sm:text-left text-xl sm:text-3xl">
          Мы создали Dicentra для того, чтобы вам больше <br /> не пришлось
          думать, как лучше выразить свои <br /> чувства.
        </h1>
        <div className="flex-none mt-10 sm:mt-20 text-center sm:text-left">
          <Image className="mx-auto sm:mx-0" src={flowercut} alt="2" />
          <h1 className="font-bold text-xl sm:text-2xl mt-4">
            Вау-ассортимент
          </h1>
          <p className="text-gray-400 text-sm sm:text-base  mt-2">
            И здесь тоже нам не до шуток! <br /> 4676 видов срезанных цветов и
            около 100 видов горшечных растений.
          </p>
        </div>
      </div>

      <div className="pl-4 sm:pl-20 text-center sm:text-left">
        <Image src={floweranbr} alt="hello" className="mx-auto sm:mx-0" />
        <h1 className="font-bold text-xl sm:text-2xl mt-4">
          Сервис с первой секунды
        </h1>
        <p className="text-gray-400 text-sm sm:text-base mt-2">
          Мы скрупулезно контролируем все этапы взаимодействия с нашими <br />
          клиентами, от <br /> момента оформления заказа до его полного <br />
          выполнения.
        </p>
      </div>

      <section className="bg-gray-100 ">
        <div className="flex flex-col sm:flex-row justify-center items-center font-bold space-y-4 sm:space-x-16 sm:mr-10 mt-10 text-xl sm:text-2xl">
          <h1 className="ml-0 sm:ml-10 mb-4 sm:pt-7">Наши бестселлеры</h1>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto">Розы</button>
            <button className="w-full sm:w-auto">Тюльпаны</button>
            <button className="w-full sm:w-auto">Хризантемы</button>
            <button className="w-full sm:w-auto">Микс</button>
          </div>
        </div>
        <div className="flex flex-wrap space-x-4 sm:space-x-16 ml-32 mt-10">
          <div className="mb-5 w-full sm:w-auto pl-4">
            <Image className="rounded-lg" src={flower1} alt="2" />
            <p>Букет №11 Роз спрей микс</p>
            <h1 className="pl-16 font-bold">700 грн</h1>
            <button className="bg-indigo-950 ml-8 h-10 w-32 rounded-full text-white">
              <Link href="./flower" className=" mb-4 sm:mb-0">
                Купить
              </Link>
            </button>
          </div>
          <div className="w-full sm:w-auto mb-5">
            <Image className="rounded-lg w-[198px]" src={flower2} alt="2" />
            <p>Букет №11 Роз спрей микс</p>
            <h1 className="pl-16 font-bold">700 грн</h1>
            <button className="bg-indigo-950 ml-8 h-10 w-32 rounded-full text-white">
              <Link href="./flower" className=" mb-4 sm:mb-0">
                Купить
              </Link>
            </button>
          </div>
          <div className="w-full sm:w-auto mb-5">
            <Image className="rounded-lg" src={flower3} alt="2" />
            <p>Букет №11 Роз спрей микс</p>
            <h1 className="pl-16 font-bold">700 грн</h1>
            <button className="bg-indigo-950 ml-8 h-10 w-32 rounded-full text-white">
              <Link href="./flower" className=" mb-4 sm:mb-0">
                Купить
              </Link>
            </button>
          </div>
          <div className="w-full sm:w-auto mb-5">
            <Image className="rounded-lg w-[197px]" src={flower4} alt="2" />
            <p>Букет №11 Роз спрей микс</p>
            <h1 className="pl-16 font-bold">700 грн</h1>
            <button className="bg-indigo-950 ml-8 h-10 w-32 rounded-full text-white">
              <Link href="./flower" className=" mb-4 sm:mb-0">
                Купить
              </Link>
            </button>
          </div>
          <div className="w-full sm:w-auto mb-5">
            <Image className="rounded-lg" src={flower5} alt="2" />
            <p>Букет №11 Роз спрей микс</p>
            <h1 className="pl-16 font-bold">700 грн</h1>
            <button className="bg-indigo-950 ml-8 h-10 w-32 rounded-full text-white">
              <Link href="./flower" className=" mb-4 sm:mb-0">
                Купить
              </Link>
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-44 mt-20">
          <div className="text-center sm:text-left mb-10 sm:mb-0">
            <Image className="w-full sm:w-[600px]" src={sklad} alt="2" />
            <h1 className="font-bold mt-4">Склад-шоурум</h1>
            <p className="text-gray-400 mt-2 sm:mt-4">
              Необычное словосочетание, не правда ли? <br /> Согласны, а ведь
              это еще и ____ квадратных <br /> метров, куда можно
              прийти/-приехать/-прилететь <br /> в любой день недели, выбрать
              понравившийся <br /> цветок и выпить вкуснейший кофе.
            </p>
          </div>
          <div className="text-center sm:text-left ">
            <Image className="w-full  sm:w-[550px]" src={floristi} alt="w" />
            <h1 className="font-bold mt-4">Флористы — альтруисты</h1>
            <p className="text-gray-400 mt-2 sm:mt-4">
              Если вы еще до сих пор не знаете, кто такой <br /> альтруист, есть
              отличный предлог погуглить ; Ведь <br /> наши флористы всегда в
              курсе последних трендов в <br /> создании букетов, всегда
              учитывают ваши пожелания <br /> и помимо цветка, заворачивают в
              упаковку еще и <br /> частичку своей души :
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 mb-1">
        <div className="text-center font-bold mt-10 text-xl">
          <h1 className=" mb-4 pt-10">Аукционные Предложения</h1>
        </div>
        <div className="flex space-x-16 ml-20 mt-10 flex-wrap md:flex-nowrap">
          <div className="w-full sm:w-auto mb-5 sm: pl-16 ">
            <Image className="rounded-lg" src={flower1} alt="2" />
            <p>Букет №11 Роз спрей микс</p>
            <h1 className="pl-16 font-bold ">
              <span className="line-through text-sm font-thin">845 грн</span>
              <span className="pl-1">230 грн</span>
            </h1>
            <button className="bg-indigo-950 ml-8 h-10 w-32 rounded-full text-white">
              <Link href="./flower" className=" mb-4 sm:mb-0">
                Купить
              </Link>
            </button>
          </div>
          <div className="w-full sm:w-auto mb-5">
            <Image className="rounded-lg w-[198px]" src={flower2} alt="2" />
            <p>Букет №11 Роз спрей микс</p>
            <h1 className="pl-16 font-bold">
              <span className="line-through text-sm font-thin">843 грн</span>
              <span className="pl-1">250 грн</span>
            </h1>
            <button className="bg-indigo-950 ml-8 h-10 w-32 rounded-full text-white">
              <Link href="./flower" className=" mb-4 sm:mb-0">
                Купить
              </Link>
            </button>
          </div>
          <div className="w-full sm:w-auto mb-5">
            <Image className="rounded-lg" src={flower3} alt="2" />
            <p>Букет №11 Роз спрей микс</p>
            <h1 className="pl-16 font-bold">
              <span className="line-through text-sm font-thin">550 грн</span>
              <span className="pl-1">150 грн</span>
            </h1>
            <button className="bg-indigo-950 ml-8 h-10 w-32 rounded-full text-white">
              <Link href="./flower" className=" mb-4 sm:mb-0">
                Купить
              </Link>
            </button>
          </div>
          <div className="w-full sm:w-auto mb-5">
            <Image className="rounded-lg w-[197px]" src={flower4} alt="2" />
            <p>Букет №11 Роз спрей микс</p>
            <h1 className="pl-16 font-bold">
              <span className="line-through text-sm font-thin">450 грн</span>
              <span className="pl-1">99 грн</span>
            </h1>
            <button className="bg-indigo-950 ml-8 h-10 w-32 rounded-full text-white">
              <Link href="./flower" className=" mb-4 sm:mb-0">
                Купить
              </Link>
            </button>
          </div>
          <div className="w-full sm:w-auto mb-5">
            <Image className="rounded-lg" src={flower5} alt="2" />
            <p>Букет №11 Роз спрей микс</p>
            <h1 className="pl-16 font-bold">
              <span className="line-through text-sm font-thin">530 грн</span>
              <span className="pl-1">230 грн</span>
            </h1>
            <button className="bg-indigo-950 ml-8 h-10 w-32 rounded-full text-white">
              <Link href="./flower" className=" mb-4 sm:mb-0">
                Купить
              </Link>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-indigo-950 text-white justify-items-center">
        <div className="">
          <h1 className="justify-self-center text-2xl mb-6 pt-10">
            Красивый букет — лучший подарок!
          </h1>
          <p className="justify-self-center text-gray-400 text-lg">
            Быстрый подбор мы подберём вам идеальный вариант
          </p>
          <div className="flex flex-col sm:flex-row mt-20 mb-10  sm:space-x-3 text-black sm:justify-start justify-center ">
            <div className="space-x-2 mb-10">
              <button className="bg-white w-full sm:w-44 h-10 rounded-full ml-1 mb-4 sm:mb-0">
                Цветок
              </button>
              <button className="bg-white w-full sm:w-44 h-10 rounded-full mb-4 sm:mb-0">
                Событие
              </button>
              <button className="bg-white w-full sm:w-44 h-10 rounded-full mb-4 sm:mb-0">
                Бюджет
              </button>
              <button className="bg-orange-300 w-full sm:w-44 h-10 rounded-full mb-4 sm:mb-0">
                Подобрать
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div>
          <h1 className="justify-self-center pt-10 font-bold text-3xl pr-20 text-center sm:text-left pl-16">
            Вместе дешевле
          </h1>
          <div className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-44 ml-0 sm:ml-20 justify-center sm:justify-start">
            <Image src={flowerpresent} alt="2" className="mb-4 sm:mb-0" />
            <Image src={rafaelo} alt="2" className="mb-4 sm:mb-0" />
            <Image src={flowerpresent2} alt="2" className="mb-4 sm:mb-0" />
            <Image src={chocolate} alt="2" className="mb-4 sm:mb-0" />
          </div>
          <div className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-48 pl-0 sm:pl-16 justify-center sm:justify-start text-center sm:text-left">
            <h1 className="mb-4 sm:mb-0">Букет №29 Роз Джумилия</h1>
            <h1 className="mb-4 pl-4 sm:mb-0">Конфеты Raffaello Пиатта</h1>
            <h1 className="mb-4 sm:mb-0">Букет # 29 Роз Джумилия</h1>
            <h1 className="mb-4 pl-4 sm:mb-0">Конфеты Fererro Rocher</h1>
          </div>
          <div className="font-bold space-x-0 sm:space-x-80 flex flex-wrap sm:flex-nowrap justify-center sm:justify-start pl-0 sm:pl-36 text-center sm:text-left">
            <h1 className="mb-4 sm:mb-0">754грн</h1>
            <h1 className="mb-4 pl-4 sm:mb-0">299грн</h1>
            <h1 className="mb-4 pl-4 sm:mb-0">754грн</h1>
            <h1 className="mb-4 pl-4 sm:mb-0">649грн</h1>
          </div>
          <div className="justify-self-center mt-8 text-center sm:text-left">
            <button className="bg-indigo-950 ml-0 sm:ml-12 h-10 w-56 rounded-full text-white">
              В корзину
            </button>
            <h1 className="font-bold text-xl pt-5">
              Вместе всего лишь за 1200 грн🤩
            </h1>
            <hr className="border-t-2 my-4 border-black" />
          </div>
        </div>
      </section>

      <section className="px-4 md:px-20 mt-16">
        <h1 className="text-3xl font-semibold text-gray-800 text-center md:text-left md:text-4xl">
          Квіти – це не просто подарунок з приводу,
          <br /> це – ще один спосіб підкреслити вашу <br /> унікальність.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="text-center md:text-left">
            <Image
              className="mx-auto md:mx-0 mt-8"
              src={flowerbuket}
              alt="Букети"
            />
            <h2 className="font-bold text-xl mt-4 text-gray-800">Букеты</h2>
            <p className="text-gray-600 mt-2">
              Найсвіжіші та найкрутіші букети завжди в <br /> наявності у нас на
              сайті. Замовляйте
            </p>
          </div>

          <div className="text-center md:text-left">
            <Image
              className="mx-auto md:mx-0 mt-8"
              src={flowerhand}
              alt="Розы"
            />
            <h2 className="font-bold text-xl mt-4 text-gray-800">Розы</h2>
            <p className="text-gray-600 mt-2">
              Букет із троянд можна без кінця <br /> доповнювати іншими
              рослинами та <br />
              елементами: вони завжди ідеальні – як у <br /> поєднанні, так
              самостійно
            </p>
          </div>

          <div className="text-center md:text-left">
            <Image
              className="mx-auto md:mx-0 mt-8"
              src={flowerorange}
              alt="Цветы"
            />
            <h2 className="font-bold text-xl mt-4 text-gray-800">Цветы</h2>
            <p className="text-gray-600 mt-2">
              Подаруйте коханим близьким букет <br /> квітів, покажіть їм свої
              справжні <br /> почуття ❤
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <Image
              className="mx-auto md:mx-0 mt-8 md:mt-44"
              src={weddingflower}
              alt="Услуги"
            />
            <h1 className="font-bold text-xl mt-4">Услуги</h1>
          </div>

          <div className="text-center md:text-left">
            <Image
              className="mx-auto md:mx-0 mt-8"
              src={flowergreen}
              alt="Комнатные растения"
            />
            <h1 className="font-bold text-xl mt-4">
              Комнатные <br /> растения
            </h1>
            <p className="text-gray-600 mt-2">
              Букет із троянд можна без кінця <br />
              доповнювати іншими рослинами та
              <br />
              елементами: вони завжди ідеальні – як у <br /> поєднанні, так
              самостійно
            </p>
          </div>

          <div className="text-center md:text-left">
            <Image
              className="mx-auto md:mx-0 mt-8"
              src={flowerheart}
              alt="Подарки"
            />
            <h1 className="font-bold text-xl mt-4">Подарки</h1>
            <p className="text-gray-600 mt-2">
              Букет із троянд можна без кінця <br /> доповнювати іншими
              рослинами та <br />
              елементами: вони завжди ідеальні – як у<br /> поєднанні, так
              самостійно
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 h-auto mt-10 pb-20 px-4 md:px-20">
        <div>
          <h1 className="font-bold text-3xl text-center md:text-left mb-5 pt-5">
            Отзывы клиентов
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 h-48 font-serif shadow-md rounded-lg">
            <h1 className="text-lg mb-4">
              Благодарю за быстрое и качественное оформление
              <br /> и доставку цветов, лилии превосходны!
            </h1>
            <p className="font-bold">Анжела Романченко</p>
          </div>

          <div className="bg-white p-6 h-48 font-serif shadow-md rounded-lg">
            <h1 className="text-lg mb-4">
              Всем привет! Хочу порекомендовать ребят! Снегопад, а <br /> они
              все доставили вовремя! Молодцы!!! Цветы очень <br /> свежие.
              Именинница довольна!!! <br />{" "}
              <p className="font-bold">Olia Marchenko</p>
            </h1>
          </div>
        </div>
      </section>

      <section className=" mb-20">
        <div className="flex w-72  border-r-2 ml-20    ">
          <h1 className="font-bold mt-36 text-xl">
            Dicentra <br />в Instagram
            <p className="text-gray-500">@dicentraflowers</p>
          </h1>
          <Image className=" ml-60 mt-10" src={flowergirl2} alt="2" />
          <Image className="mt-10" src={flowergirl1} alt="2" />
          <Image className="mt-10" src={flowergirl3} alt="2" />
        </div>
      </section>
      <section className="bg-gray-200 h-auto ">
        <h1 className="text-3xl text-center pt-10">Портал Dicentra</h1>
        <div className="flex flex-col md:flex-row  mt-10 gap-8 md:ml-40">
          <div className="text-center md:text-left">
            <Image className="mx-auto md:mx-0" src={dicentra1} alt="2" />
            <h1 className="font-bold text-xl mt-4">Пионы – украшение сада</h1>
            <p className="text-gray-600 mt-2">
              Пион — многолетнее кустистое растение. В <br /> больших садах их
              лучше сажать группами, причем <br /> расстояние между растениями
              сохраняется <br /> 60-100 см.
            </p>
          </div>

          <div className="text-center md:text-left">
            <Image className="mx-auto md:mx-0" src={dicentra2} alt="2" />
            <h1 className="font-bold text-xl mt-4">Оформление свадеб</h1>
            <p className="text-gray-600 mt-2">
              Свадебная флористика – это не просто <br /> великолепный букет
              невесты. Это целое искусство <br /> создания волшебного свадебного
              торжества.
            </p>
          </div>

          <div className="text-center md:text-left">
            <Image className="mx-auto md:mx-0" src={dicentra3} alt="2" />
            <h1 className="text-xl font-bold mt-4">Уход за суккулентами</h1>
            <p className="text-gray-600 mt-2">
              Суккуленты в последнее время стали чрезвычайно <br /> популярными,
              на подоконниках можно все чаще <br /> можно увидеть экзотические
              растения.
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="space-y-10 ">
          <h1 className="text-center font-bold text-2xl mt-20">
            Доставка цветов в Киеве круглосуточно
          </h1>
          <p className="text-center">
            Ускоренный ритм жизни не всегда позволяет лично отправиться в
            магазин и выбрать букет для любимой женщины, <br /> близких или
            коллег. Доставка цветов по Киеву решит эту проблему: вам не придется
            тратить время на поиски салона со <br /> свежими цветами и
            опаздывать на торжество.{" "}
          </p>
          <p className="text-center">
            Удобнее приобрести срезанные или комнатные растения в режиме онлайн.
            В нашем каталоге можно выбрать готовые <br /> букеты или оформить
            заказ цветочной композиции по фото. А экспресс-доставка свежих
            цветов займет до 2 часов.
          </p>
          <p className="text-center m-10 pb-4">
            Охапка роскошных роз, скромные ромашки или даже один цветок
            неизменно вызывают бурю эмоций и улыбку у адресата. Нежные ароматные
            растения способны растопить сердце неприступной красавицы,
            порадовать начальника, растрогать маму, жену или бабушку. В пользу
            покупки букета в магазине цветов с доставкой говорят такие факты:
          </p>
        </div>
      </section>
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

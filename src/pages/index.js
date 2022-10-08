import BasicSlider from "../components/hero";
import MyCarousel from "../components/accesories/index.js";
import Categories from "../components/categories-carousel/categories";
import style from "./index.module.scss";

export default function Home() {
  return (
    <div className={style.container}>
      <BasicSlider />
      <div>
        <h1 className={style.title}>Categories</h1>
        <p>Rediscover your childhood</p>
        <br></br>
        <p>Book Viking Treasures</p>
        <button>Shop All</button>
      </div>
      <Categories />
      <div className={style.accesories}>
        <h1 className={style.title}>Accesories</h1>
        <div>
          <p>
            Gems, minerals, rose quartz, jewelry, and butterfly specimens fill
            our storefront. Now you can take a peek at our collection from the
            comfort of your own home. Each different piece would make a great
            new home accent or gift for any loved one!
          </p>
        </div>
        <button>Shop All</button>
      </div>
      <MyCarousel />
      <div className={style.contact}>
        <h1 className={style.title}>Contact Us</h1>
        <p>Have questions?</p>
        <br></br>
        <p>
          Please reach out! We will respond to you within 2-3 business days.
        </p>
        <button>Contact Us</button>
      </div>
      <footer />
    </div>
  );
}

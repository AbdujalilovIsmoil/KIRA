import "./style.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  PossibilityImage1,
  PossibilityImage2,
  PossibilityImage3,
  PossibilityImage4,
} from "Assets/Images/Png";

const Possibility = () => {
  return (
    <section className='possibility'>
      <div className='container'>
        <Swiper
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
            el: ".possibility__pagination-dot-list",
            renderBullet(_, className) {
              return `
              <button type="button" class="${className}"></button>`;
            },
          }}
          slidesPerView={1}
          spaceBetween={50}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <li className='possibility__box'>
              <div className='possibility__content'>
                <h2 className='possibility__content-title'>
                  KIRA Anti-Fraud Protection Program
                </h2>
                <p className='possibility__content-description'>
                  Fraud is everywhere, and KIRA aims to equip our industry with
                  the resources needed to combat it.
                </p>
                <Link
                  to='/'
                  className='possibility__content-link'
                >
                  LEARN MORE
                </Link>
              </div>

              <img
                width={590}
                height={435}
                src={PossibilityImage1}
                className='possibility__box-img'
                alt='KIRA Anti-Fraud Protection Program'
              />
            </li>
          </SwiperSlide>

          <SwiperSlide>
            <li className='possibility__box'>
              <div className='possibility__content'>
                <h2 className='possibility__content-title'>
                  Орган по управлению грузоперевозками
                </h2>
                <p className='possibility__content-description'>
                  Готовы быть сами себе начальником? Получите свой номер MC и
                  DOT как можно быстрее и без головной боли, чтобы вы могли
                  начать свой бизнес.
                </p>
                <Link
                  to='/'
                  className='possibility__content-link'
                >
                  LEARN MORE
                </Link>
              </div>

              <img
                width={590}
                height={435}
                src={PossibilityImage2}
                className='possibility__box-img'
                alt='Орган по управлению грузоперевозками'
              />
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className='possibility__box'>
              <div className='possibility__content'>
                <h2 className='possibility__content-title'>
                  Загрузочная доска
                </h2>
                <p className='possibility__content-description'>
                  Найдите грузы и грузовые автомобили на крупнейшем рынке
                  грузовых перевозок в Северной Америке с более чем 150 000
                  транзакциями в минуту.
                </p>
                <Link
                  to='/'
                  className='possibility__content-link'
                >
                  LEARN MORE
                </Link>
              </div>

              <img
                width={590}
                height={435}
                src={PossibilityImage3}
                className='possibility__box-img'
                alt='Орган по управлению грузоперевозками'
              />
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className='possibility__box'>
              <div className='possibility__content'>
                <h2 className='possibility__content-title'>
                  Аналитика просмотра ставок
                </h2>
                <p className='possibility__content-description'>
                  The industry standard in truckload pricing. See the most
                  current spot and contract truckload rates on more than 68,000
                  trucking lanes in North America.
                </p>
                <Link
                  to='/'
                  className='possibility__content-link'
                >
                  LEARN MORE
                </Link>
              </div>

              <img
                width={590}
                height={435}
                src={PossibilityImage4}
                className='possibility__box-img'
                alt='Аналитика просмотра ставок'
              />
            </li>
          </SwiperSlide>
        </Swiper>

        <div className='possibility__pagination-dot-list'></div>
      </div>
    </section>
  );
};

export default Possibility;

import "./style.scss";
import { NavLink } from "react-router-dom";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
} from "Assets/Images/Png";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__container'>
          <ul className='footer__list'>
            <li className='footer__item'>
              <h2 className='footer__item-title'>компания</h2>
              <ul className='footer__navigations'>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Руководство
                  </NavLink>
                </li>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    История
                  </NavLink>
                </li>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Карьеры
                  </NavLink>
                </li>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Новости и события
                  </NavLink>
                </li>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Сотрудничайте с нами
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className='footer__item'>
              <h2 className='footer__item-title'>продукты</h2>
              <ul className='footer__navigations'>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Загрузочная доска
                  </NavLink>
                </li>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Тарифы на фрахт
                  </NavLink>
                </li>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Сравнительная аналитика
                  </NavLink>
                </li>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Операционный орган
                  </NavLink>
                </li>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Поиск товаров
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className='footer__item'>
              <h2 className='footer__item-title'>ресурсы</h2>
              <ul className='footer__navigations'>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Вопросы и ответы
                  </NavLink>
                </li>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Блог
                  </NavLink>
                </li>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Пресс-центр
                  </NavLink>
                </li>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Руководство
                  </NavLink>
                </li>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Видео
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className='footer__item'>
              <h2 className='footer__item-title'>поддержка</h2>
              <ul className='footer__navigations'>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Вход в систему продукта
                  </NavLink>
                </li>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Защита от мошенничества
                  </NavLink>
                </li>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Запрос в службу поддержки
                  </NavLink>
                </li>
                <li className='footer__navigation'>
                  <NavLink
                    to='/'
                    className='footer__navigation-link'
                  >
                    Связаться с нами
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <hr className='footer-horizontal-rule' />

        <ul className='footer__medias'>
          <li className='footer__media'>
            <a
              href='#'
              target='_blank'
            >
              <img
                width={32}
                height={32}
                src={Facebook}
                alt='KIRA facebook'
                className='footer__media-image'
              />
            </a>
          </li>
          <li className='footer__media'>
            <a
              href='#'
              target='_blank'
            >
              <img
                width={32}
                height={32}
                src={Twitter}
                alt='KIRA twitter'
                className='footer__media-image'
              />
            </a>
          </li>
          <li className='footer__media'>
            <a
              href='#'
              target='_blank'
            >
              <img
                width={32}
                height={32}
                src={Instagram}
                alt='KIRA instagram'
                className='footer__media-image'
              />
            </a>
          </li>
          <li className='footer__media'>
            <a
              href='#'
              target='_blank'
            >
              <img
                width={32}
                height={32}
                src={LinkedIn}
                alt='KIRA linkedin'
                className='footer__media-image'
              />
            </a>
          </li>
          <li className='footer__media'>
            <a
              href='#'
              target='_blank'
            >
              <img
                width={32}
                height={32}
                src={Telegram}
                alt='KIRA telegram'
                className='footer__media-image'
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

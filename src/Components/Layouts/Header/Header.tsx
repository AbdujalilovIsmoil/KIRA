import "./style.scss";
import { siteLogo } from "Assets/Images/Svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__container'>
          <Link to='/'>
            <img
              height={32}
              width={140}
              src={siteLogo}
              alt='KIRA logo'
              className='header-logo'
            />
          </Link>

          <nav className='nav'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <NavLink
                  to='/'
                  className='nav__item-link'
                >
                  Products
                </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink
                  to='/'
                  className='nav__item-link'
                >
                  Solutions
                </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink
                  to='/'
                  className='nav__item-link'
                >
                  Resources
                </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink
                  to='/'
                  className='nav__item-link'
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <Link
            to='/pages/login'
            className='header-login'
          >
            LOG IN
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

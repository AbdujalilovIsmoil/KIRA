import "./style.scss";
import { Link } from "react-router-dom";
import {
  ServicesImage1,
  ServicesImage2,
  ServicesImage3,
} from "Assets/Images/Jpg";

const Services = () => {
  return (
    <section className='services'>
      <div className='container'>
        <ul className='services__list'>
          <li className='services__item'>
            <div className='services__content'>
              <h2 className='services__content-title'>Broker</h2>
              <p className='services__content-description'>
                Move more freight and solve for any problem, with access to the
                most trucks and the deepest data.
              </p>
            </div>
            <img
              width={405}
              alt='Broker'
              height={280}
              src={ServicesImage1}
              className='services__item-img'
            />
            <div className='services__item-box'>
              <Link
                to='/'
                className='services__item-link'
              >
                LEARN MORE
              </Link>
            </div>
          </li>
          <li className='services__item'>
            <div className='services__content'>
              <h2 className='services__content-title'>Tracker</h2>
              <p className='services__content-description'>
                Find the best loads first on trucking’s largest load board
                network, with support from dock to dock and beyond.
              </p>
            </div>
            <img
              width={405}
              height={280}
              alt='Tracker'
              src={ServicesImage2}
              className='services__item-img'
            />
            <div className='services__item-box'>
              <Link
                to='/'
                className='services__item-link'
              >
                LEARN MORE
              </Link>
            </div>
          </li>
          <li className='services__item'>
            <div className='services__content'>
              <h2 className='services__content-title'>Shipper</h2>
              <p className='services__content-description'>
                Take charge of your transportation and logistics network, with a
                360-degree view of truckload markets.
              </p>
            </div>
            <img
              width={405}
              height={280}
              alt='Shipper'
              src={ServicesImage3}
              className='services__item-img'
            />
            <div className='services__item-box'>
              <Link
                to='/'
                className='services__item-link'
              >
                LEARN MORE
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;

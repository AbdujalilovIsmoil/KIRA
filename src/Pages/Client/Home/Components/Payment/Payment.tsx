import "./style.scss";
import { ApplePhone, AppStore, GooglePlay } from "Assets/Images/Png";

const Payment = () => {
  return (
    <section className='payment'>
      <div className='container'>
        <div className='payment__container'>
          <div className='payment__content'>
            <h2 className='payment__content-title'>
              Скачайте мобильное приложение Kira Логистика
            </h2>

            <ul className='payment__cards'>
              <li className='payment__card'>
                <a
                  href='#'
                  target='_blank'
                >
                  <img
                    height={60}
                    width={195}
                    src={AppStore}
                    alt='KIRA app store'
                    className='payment__card-img'
                  />
                </a>
              </li>
              <li className='payment__card'>
                <a
                  href='#'
                  target='_blank'
                >
                  <img
                    height={60}
                    width={195}
                    alt='KIRA google play'
                    src={GooglePlay}
                    className='payment__card-img'
                  />
                </a>
              </li>
            </ul>
          </div>

          <img
            width={300}
            height={385}
            alt='KIRA app'
            src={ApplePhone}
            className='payment-phone'
          />
        </div>
      </div>
    </section>
  );
};

export default Payment;

import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { FaTimes } from "Assets/React-icons";
import { LoginBackgroundImage } from "Assets/Images/Jpg";
import { Button, Input } from "Components";
import { FacebookIcon, GoogleIcon } from "Assets/Images/Svg";

const Login = () => {
  const backgroundImage = {
    width: "100%",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `linear-gradient(#00296B80),url(${LoginBackgroundImage})`,
  };

  return (
    <section
      style={backgroundImage}
      className='login login-background'
    >
      <div className='container'>
        <h1 className='visually-hidden'>KIRA Login</h1>

        <div className='login-background-light'>
          <Button
            type='button'
            className='login-background__btn'
          >
            <FaTimes className='login-background__btn-close' />
          </Button>

          <div className='login-background__container'>
            <ul className='login-background__navigations'>
              <li className='login-background__navigation'>
                <NavLink
                  to='/pages/login'
                  className={({ isActive }) =>
                    isActive
                      ? "login-background__navigation-link login-background__navigation-link--active"
                      : "login-background__navigation-link"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li className='login-background__navigation'>
                <NavLink
                  to='/pages/registration'
                  className={({ isActive }) =>
                    isActive
                      ? "login-background__navigation-link login-background__navigation-link--active"
                      : "login-background__navigation-link"
                  }
                >
                  Register
                </NavLink>
              </li>
            </ul>

            <div className='login__form'>
              <p className='login__form-description'>
                Enter your phone number and password to login.
              </p>

              <form className='form'>
                <div className='form__group'>
                  <PhoneInput
                    value={""}
                    country={"us"}
                    onChange={() => {}}
                  />
                </div>

                <div className='form__group'>
                  <Input
                    type='password'
                    placeholder='***********'
                    className='form__group-input'
                  />
                </div>

                <div className='form__group-links'>
                  <Link
                    to='/pages/forgot-password'
                    className='form__group-forgot'
                  >
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  type='submit'
                  className='form__group-submit'
                >
                  Login
                </Button>
              </form>

              <p className='login__form-or-description'>Or login with</p>

              <ul className='login__medias'>
                <li className='login__media'>
                  <Button
                    type='button'
                    className='login__btn'
                  >
                    <img
                      width={20}
                      height={20}
                      src={GoogleIcon}
                      alt='KIRA google account'
                      className='login__btn-icon'
                    />
                    <span className='login__btn-text'>Login with Google</span>
                  </Button>
                </li>
                <li className='login__media'>
                  <Button
                    type='button'
                    className='login__btn'
                  >
                    <img
                      width={20}
                      height={20}
                      src={FacebookIcon}
                      alt='KIRA google account'
                      className='login__btn-icon'
                    />
                    <span className='login__btn-text'>Login with Facebook</span>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

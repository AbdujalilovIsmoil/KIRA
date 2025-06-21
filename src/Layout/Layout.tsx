import { Outlet } from "react-router-dom";
import { Footer, Header } from "Components";

const Layout = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

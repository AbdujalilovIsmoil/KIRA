import "swiper/css";
import "swiper/css/pagination";
import { Suspense } from "react";
import routes from "Layout/Routes";
import { Loader } from "Components";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default App;

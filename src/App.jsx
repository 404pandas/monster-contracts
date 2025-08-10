import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path='/' element={<MainLayout />}></Route>)
  );

  return <RouterProvider router={router} />;
};
export default App;

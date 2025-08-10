import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ContractsPage from "./pages/ContractsPage";
import NotFound from "./pages/NotFound";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='contracts' element={<ContractsPage />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;

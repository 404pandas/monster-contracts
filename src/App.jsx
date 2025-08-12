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
import ContractPage, { contractLoader } from "./pages/ContractPage";
import AddContractPage from "./pages/AddContractPage";
import EditContractPage from "./pages/EditContractPage";

const App = () => {
  // Adds a new contract
  const addContract = async (newcontract) => {
    const res = await fetch("/api/contracts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newcontract),
    });
    return;
  };

  // Delete a contract
  const deleteContract = async (id) => {
    const res = await fetch(`/api/contracts/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // Update a contract
  const updateContractSubmit = async (updatedContract) => {
    const res = await fetch(`/api/contracts/${updatedContract.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContract),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/contracts' element={<ContractsPage />} />
        <Route
          path='/contracts/:id'
          element={<ContractPage deleteContract={deleteContract} />}
          loader={contractLoader}
        />
        <Route
          path='/add-contract'
          element={<AddContractPage addContractSubmit={addContract} />}
        />
        <Route
          path='/edit-contract/:id'
          loader={contractLoader}
          element={
            <EditContractPage updateContractSubmit={updateContractSubmit} />
          }
        />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;

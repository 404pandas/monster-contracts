import { useState, useEffect } from "react";
import ContractListing from "../ContractListing/ContractListing";
import Spinner from "../Spinner/Spinner";

const ContractListings = ({ isHome = false }) => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContracts = async () => {
      const res = await fetch("http://www.localhost:8000/contracts");
      const data = await res.json();

      try {
        // data.jobs contains the array
        const contractsArray = isHome ? data.slice(0, 3) : data;
        setContracts(contractsArray);
        console.log(contractsArray);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContracts();
  }, []);

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? "Recent Contracts" : "Browse Contracts"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {contracts.map(
              (contract) => (
                console.log(contract),
                (<ContractListing key={contract.id} contract={contract} />)
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};
export default ContractListings;

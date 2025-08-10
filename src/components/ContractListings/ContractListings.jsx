import { useState, useEffect } from "react";
import ContractListing from "../ContractListing/ContractListing";
import Spinner from "../Spinner/Spinner";
import data from "../../jobs.json";

const ContractListings = ({ isHome = false }) => {
  const [Contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContracts = async () => {
      const contractData = data;

      try {
        // data.jobs contains the array
        const contractsArray = isHome
          ? contractData.jobs.slice(0, 3)
          : contractData.jobs;
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
            {Contracts.map(
              (Contract) => (
                console.log(Contract),
                (<ContractListing key={Contract.id} contract={Contract} />)
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};
export default ContractListings;

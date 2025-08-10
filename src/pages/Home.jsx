import Hero from "../components/Hero/Hero";
import HomeCards from "../components/HomeCards/HomeCards";
import ContractListings from "../components/ContractListings/ContractListings";
import ViewAllContracts from "../components/ViewAllContracts/ViewAllContracts";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <ContractListings isHome={true} />
      <ViewAllContracts />
    </>
  );
};
export default HomePage;

import { useParams, useLoaderData } from "react-router-dom";

const ContractPage = () => {
  const { id } = useParams();
  const contract = useLoaderData();

  return (
    <div>
      {" "}
      <h1>{contract.title}</h1>
    </div>
  );
};

const contractLoader = async ({ params }) => {
  const res = await fetch(`/api/contracts/${params.id}`);
  const data = await res.json();
  return data;
};

export { ContractPage as default, contractLoader };

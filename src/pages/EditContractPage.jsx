import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const EditContractPage = ({ updateContractSubmit }) => {
  const contract = useLoaderData();
  const [title, setTitle] = useState(contract.title);
  const [type, setType] = useState(contract.type);
  const [location, setLocation] = useState(contract.location);
  const [description, setDescription] = useState(contract.description);
  const [salary, setSalary] = useState(contract.salary);
  const [companyName, setCompanyName] = useState(contract.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    contract.company.description
  );
  const [companyEmail, setCompanyEmail] = useState(
    contract.company.contactEmail
  );
  const [companyPhone, setCompanyPhone] = useState(
    contract.company.contactPhone
  );
  const id = contract.id;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedContract = {
      id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail: companyEmail,
        contactPhone: companyPhone,
      },
    };

    updateContractSubmit(updatedContract);
    toast.success("Contract updated successfully");
    return navigate(`/contracts/${id}`);
  };
  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={handleSubmit}>
            <h2 className='text-3xl text-center font-semibold mb-6'>
              Add Contract
            </h2>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Contract Type
              </label>
              <select
                id='type'
                name='type'
                className='border rounded w-full py-2 px-3'
                required
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                  console.log(type);
                }}
              >
                <option value='Full-Time'>Full-Time</option>
                <option value='Part-Time'>Part-Time</option>
                <option value='Remote'>Remote</option>
                <option value='Internship'>Internship</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Contract Listing Name
              </label>
              <input
                type='text'
                id='title'
                name='title'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='eg. Leshen Eliminator'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='description'
                className='block text-gray-700 font-bold mb-2'
              >
                Description
              </label>
              <textarea
                id='description'
                name='description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='Add any job duties, expectations, requirements, etc'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Salary
              </label>
              <select
                id='salary'
                name='salary'
                className='border rounded w-full py-2 px-3'
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value='Under 100 Crowns'>Under 100 Crowns</option>
                <option value='100-200 Crowns'>100-200 Crowns</option>
                <option value='200-300 Crowns'>200-300 Crowns</option>
                <option value='300-400 Crowns'>300-400 Crowns</option>
                <option value='400-500 Crowns'>400-500 Crowns</option>
                <option value='500-600 Crowns'>500-600 Crowns</option>
                <option value='600-700 Crowns'>600-700 Crowns</option>
                <option value='700-800 Crowns'>700-800 Crowns</option>
                <option value='800-900 Crowns'>800-900 Crowns</option>
                <option value='900-1000 Crowns'>900-1000 Crowns</option>
                <option value='Over 1000 Crowns'>Over 1000 Crowns</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Company Location'
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className='text-2xl mb-5'>Company Info</h3>

            <div className='mb-4'>
              <label
                htmlFor='company'
                className='block text-gray-700 font-bold mb-2'
              >
                Company Name
              </label>
              <input
                type='text'
                id='company'
                name='company'
                className='border rounded w-full py-2 px-3'
                placeholder='Company Name'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='company_description'
                className='block text-gray-700 font-bold mb-2'
              >
                Company Description
              </label>
              <textarea
                id='company_description'
                name='company_description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='What does your company do?'
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='contact_email'
                className='block text-gray-700 font-bold mb-2'
              >
                Contact Email
              </label>
              <input
                type='email'
                id='contact_email'
                name='contact_email'
                className='border rounded w-full py-2 px-3'
                placeholder='Email address for applicants'
                required
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='contact_phone'
                className='block text-gray-700 font-bold mb-2'
              >
                Contact Phone
              </label>
              <input
                type='tel'
                id='contact_phone'
                name='contact_phone'
                className='border rounded w-full py-2 px-3'
                placeholder='Optional phone for applicants'
                value={companyPhone}
                onChange={(e) => setCompanyPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Add Contract
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
EditContractPage.propTypes = {
  updateContractSubmit: PropTypes.func.isRequired,
};

export default EditContractPage;

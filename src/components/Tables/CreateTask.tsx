import { useNavigate } from 'react-router-dom';
import { useCreateTaskMutation } from '../../slices/taskApiSlice';
import { useState } from 'react';

const CraeteTask = () => {
  const navigate = useNavigate();

  const [createTask, { isLoading, error }] = useCreateTaskMutation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [username, setUser] = useState('');
  const [enddate, setEndDate] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createTask({
        title,
        description,
        username,
        enddate,
      }).unwrap();
      navigate('/tables');
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) return <p>Creating tasks...</p>;
  if (error) return <p>Error when creating tasks</p>;
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <form onSubmit={handleSubmit}>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium  text-black dark:text-white xl:pl-11">
                  Title
                </th>

                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  User
                </th>
                <th className="py-4 px-4 font-medium text-black  dark:text-white">
                  End date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-[#eee] py-5 px-4 pl-6 flex flex-col dark:border-strokedark ">
                  <input
                    type="text"
                    className="font-medium bg-strokedark text-black dark:text-white w-[200px]  p-3 rounded-md"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <textarea
                    name=""
                    id=""
                    className="mt-2 w-[300px] p-3 bg-strokedark rounded-md"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <input
                    type="text"
                    className="font-medium bg-strokedark text-black dark:text-white w-[150px]  p-3 rounded-md"
                    placeholder="Username"
                    onChange={(e) => setUser(e.target.value)}
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <input
                    type="date"
                    className="font-medium bg-strokedark text-black dark:text-white w-[150px]  p-3 rounded-md"
                    placeholder="End Date"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </td>
              </tr>
              <button
                className="bg-white hover:bg-strokedark hover:text-white hover:shadow-8 ml-6 my-2
              text-black rounded-xl font-bold py-2 px-4 border border-strokedark right-0"
                type="submit"
              >
                Submit
              </button>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default CraeteTask;

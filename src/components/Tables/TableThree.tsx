import { Task } from '../../types';

interface TableThreeProps {
  tasks: Task[];
}

const TableThree: React.FC<TableThreeProps> = ({ tasks }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Title
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Start date
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                User
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                End date
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task: Task) => (
              <tr key={task.id}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {task.title}
                  </h5>
                  <p className="text-sm">{task.description}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {new Date(task.startdate).toLocaleDateString()}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      task.status === 'completed'
                        ? 'bg-success text-success'
                        : task.status === 'ongoing'
                          ? 'bg-warning text-warning'
                          : 'bg-danger text-danger'
                    }`}
                  >
                    {task.status}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{task.username}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {new Date(task.enddate).toLocaleDateString()}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;

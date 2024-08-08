import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableThree from '../components/Tables/TableThree';
import CraeteTask from '../components/Tables/CreateTask';
import { useFetchTasksQuery } from '../slices/taskApiSlice';

const Tables = () => {
  const { data: tasks, error, isLoading } = useFetchTasksQuery();
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <CraeteTask />
        <div>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: when creating post</p>}
          {tasks && <TableThree tasks={tasks} />}
        </div>
      </div>
    </>
  );
};

export default Tables;

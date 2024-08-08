import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableThree from '../components/Tables/TableThree';
import TaskEdit from '../components/Tables/TaskEdit';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TaskEdit/>
        <TableThree />
      </div>
    </>
  );
};

export default Tables;

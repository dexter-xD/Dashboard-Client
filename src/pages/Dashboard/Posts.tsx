import React from 'react';
import TableOne from '../../components/Tables/TableOne';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const Posts: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Posts" />

      <div className="col-span-12 xl:col-span-8">
        <TableOne />
      </div>
    </>
  );
};

export default Posts;

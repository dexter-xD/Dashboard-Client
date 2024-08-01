import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
  query Posts {
    posts(where: { isFeatured: true }) {
      id
      isLatest
      isFeatured
      publishDate
      category
      tag
      slug
      title
      excerpt {
        text
      }
      coverImg {
        url
      }
      author
    }
  }
`;

const TableOne = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          All Posts
        </h4>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Title
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Author
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Type
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Publish Date
              </h5>
            </div>
          </div>

          {data.posts.map((post: any, key: any) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-4 ${
                key === data.posts.length - 1
                  ? ''
                  : 'border-b border-stroke dark:border-strokedark'
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{post.title}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{post.author}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{post.category}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <time dateTime={post.publishDate}>{post.publishDate}</time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TableOne;

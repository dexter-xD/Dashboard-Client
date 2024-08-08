import { apiSlice } from "./apiSlice";

const TASKS_URL = "/task";

// baseurl == http://loaclhost:6769/api/v1

export const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation<any, { title: string; description: string, status: string, username: string, enddate: Date }>({
      query: (data) => ({
        url: `${TASKS_URL}/create`,
        method: "POST",
        body: data,
      }),
    }),
    fetchTasks: builder.query<any, void>({
      query: () => ({
        url: TASKS_URL,
        method: "GET",
      }),
    }),
    fetchTaskById: builder.query<any, string>({
      query: (id) => ({
        url: `${TASKS_URL}/${id}`,
        method: "GET",
      }),
    }),
    // updateTask: builder.mutation<any, { id: string; title: string; description: string }>({
    //   query: (data) => ({
    //     url: `${TASKS_URL}/${data.id}`,
    //     method: "PUT",
    //     body: { title: data.title, description: data.description },
    //   }),
    // }),
    // deleteTask: builder.mutation<void, string>({
    //   query: (id) => ({
    //     url: `${TASKS_URL}/${id}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const {
  useCreateTaskMutation,
  useFetchTasksQuery,
  useFetchTaskByIdQuery,
} = taskApiSlice;

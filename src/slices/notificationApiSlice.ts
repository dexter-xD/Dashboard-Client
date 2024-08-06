import { apiSlice } from "./apiSlice";

const NOTIFICATIONS_URL = "/notification";

export const notificationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNotification: builder.mutation<any, { title: string; description: string }>({
      query: (data) => ({
        url: NOTIFICATIONS_URL,
        method: "POST",
        body: data,
      }),
    }),
    fetchNotifications: builder.query<any, void>({
      query: () => ({
        url: NOTIFICATIONS_URL,
        method: "GET",
      }),
    }),
    fetchNotificationById: builder.query<any, string>({
      query: (id) => ({
        url: `${NOTIFICATIONS_URL}/${id}`,
        method: "GET",
      }),
    }),
    updateNotification: builder.mutation<any, { id: string; title: string; description: string }>({
      query: (data) => ({
        url: `${NOTIFICATIONS_URL}/${data.id}`,
        method: "PUT",
        body: { title: data.title, description: data.description },
      }),
    }),
    deleteNotification: builder.mutation<void, string>({
      query: (id) => ({
        url: `${NOTIFICATIONS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateNotificationMutation,
  useFetchNotificationsQuery,
  useFetchNotificationByIdQuery,
  useUpdateNotificationMutation,
  useDeleteNotificationMutation,
} = notificationsApiSlice;

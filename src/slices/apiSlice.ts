import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
    baseUrl: "/api/v1",
    prepareHeaders: (headers) => {
        const token = import.meta.env.VITE_BEARER_TOKEN;
        if(token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    }
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["User", "Notification"],
    endpoints: (builder) => ({}),
});
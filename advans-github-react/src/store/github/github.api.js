import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubAPI = createApi({
    reducerPath:'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://api.github.com/'
    }),
    endpoints: (builder) => ({
        searchUser: builder.query({
          query: (name) =>`search/users?q=${name}`
        })
    })
})

export const {useSearchUserQuery} = githubAPI
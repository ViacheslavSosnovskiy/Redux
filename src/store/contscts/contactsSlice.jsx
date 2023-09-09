import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://64fb46c0cb9c00518f7addc5.mockapi.io/',
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTag: ['Contacts']
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `contacts/${contactId}`,
                method: 'DELETE',
                invalidatesTags: ['Contacts'],
            }),
        }),
        addCntact: builder.mutation({
            query: newContact => ({
                url: `/contacts`,
                method: 'POST',
                body: newContact,
                invalidatesTags: ['Contacts'],
            })
        })
    }),
});

export const { 
    useFetchContactsQuery,
    useDeleteContactMutationQuery,
    useCreateContactMutationQuery
} = contactsApi
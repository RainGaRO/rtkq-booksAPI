import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseBook, IBookId, ParamsQuery } from '../models/models';

const API_KEY = 'AIzaSyBGfUWBaanXPCHkmMaa4AOtWSSeQsjaHC8';

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.googleapis.com/books/v1/volumes'
    }),
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        getBooks: builder.query<ResponseBook, ParamsQuery>({
            query: ({terms, sorting, categories, startIndex}: {terms?:string, sorting?:string, categories?: string, startIndex?: number}) => (
                `?q=${categories === 'All' ? terms + '&orderBy=' + sorting + '&maxResults=30' + '&printType=books' : 
                terms + '+subject:' + categories + '&orderBy=' + sorting + '&maxResults=30'+ '&startIndex='+ startIndex + '&printType=books' + '&key:' + API_KEY}`
            ),
            providesTags: ['Books']
        },),
        getBooksId: builder.query<IBookId, string | undefined>({
            query: (id: string) => ({
                url: `${id}`
            }),
        })
    })
})

export const { useGetBooksQuery, useGetBooksIdQuery } = booksApi;
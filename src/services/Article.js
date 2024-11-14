import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// const options = {
//     method: 'POST',
//     url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text',
//     headers: {
//       'content-type': 'application/json',
//       'X-RapidAPI-Key': '32b97460famsh2b59096daf52a20p1aa4cfjsn85da915ab8eb',
//       'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//     },}

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery:  fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (header) =>  {
            header.set('X-RapidAPI-Key', rapidApiKey )
            header.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')

            return header;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}$length=3`
        })
    })
})

export const { useLazyGetSummaryQuery } = articleApi;


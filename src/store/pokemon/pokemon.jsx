import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath: 'pokemons',
    baseQuery: fetchBaseQuery({baseUrl: 'http://pokeapi.co/api/v2/'}),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pkemon/${name}`,
        })
    })
})

export const { useGetPokemonByNameQuery } = pokemonApi
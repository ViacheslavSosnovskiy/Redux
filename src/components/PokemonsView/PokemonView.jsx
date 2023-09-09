import React, { useState } from 'react'
import { useGetPokemonByNameQuery } from 'store/pokemon/pokemon'

const PokemonView = () => {
    const [pokemon, setPokemon] = useState('')
    const { data, error, isUnititialized, isFetching, isError } = useGetPokemonByNameQuery(pokemon, {
        skip: pokemon === '',
        //   ------ for 3s update  ----------
        // pollingInterval: 3000,
        //  ----- refetch your page if you return again ----
        // refetchOnFocus: true,
    })

    const showError = isError && error.originalStatus === 404;
    const showPokemonData = data && isFetching && isError 

    const handleSubmit = e => {
        e.preventDefault();
        setPokemon(e.target.elements.pokemonName.value)
    }

  return (
    <>
        <form onSubmit={handleSubmit} autoComplete='off'>
            <input type="text" name="pokemonName"/>
            <button type="submit">search</button>
        </form>

        {isFetching && <div>Loading</div>}
      
        {showError && <p>Sorry pokemon - {pokemon} doesn't exist.</p>}

        {showPokemonData && <h2>{data.name}</h2>}
    </>
  )
}

export default PokemonView
import React, { useState } from "react";
import { Pokemon } from "./pokemon";

export const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);


    const dataPokemons = async () => {
        if (pokemons.length > 0) {
            return;
        }

        const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
        const response = await fetch(url);
        const data = await response.json();
        setPokemons(data.results);

        console.log(data)
    }

    dataPokemons()

    return (
        <div className="text-center">

            <h1> POKEMONS </h1>
           
            {
                pokemons.map((pokemon, index) => {
                    return <Pokemon key={index}
                    name={pokemon.name}
                    url={pokemon.url} />
                })
            }

        </div>
    )
}
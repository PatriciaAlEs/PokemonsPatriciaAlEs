import React, { useState } from "react";


export const Pokemon = ({ name, url }) => {
    const [dataPokemon, setDataPokemon] = useState({})

    const cargarDatosPokemon = async () => {
        if (dataPokemon.abilities) {
            return;
        }
        const response = await fetch(url);
        const data = await response.json();
        setDataPokemon(data)
    };

    cargarDatosPokemon();
    console.log(dataPokemon)

    return (
        <div >
            <h4> {name}</h4>
            <div className="pokecontenedor col">
                {dataPokemon && dataPokemon.sprites ? (<img src={dataPokemon.sprites.front_default} alt={`Imagen de ${name}`} />) :
                    (<p> Buscando imagen... </p>)
                }
            </div>
        </div>
    )
}
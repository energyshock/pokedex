import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PokemonEvolutions from './PokemonEvolutions';

const Pokemon = props => {
  const [pokemon, setPokemon] = useState([]);

  const id = props.match.params.id;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        buildPokemon(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  }, []);

  const buildPokemon = async res => {
    setPokemon({
      picture: res.sprites.front_default,
      name: res.name,
      abilities: res.abilities,
      types: res.types,
      orderNumber: res.order,
      stats: res.stats,
      moves: res.moves,
      evolutions: await getEvolutions(id),
    });
  };

  const getEvolutions = async id => {
    try {
      const responseSpecies = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      // getChain(responseSpecies);
      return getChain(responseSpecies.data.evolution_chain.url);
    } catch (error) {
      console.log(error);
    }
  };

  const getChain = async url => {
    try {
      const responseChain = await axios.get(url);
      return responseChain.data.chain;
    } catch (error) {
      console.log(error);
    }
  };

  console.log('init: ' + pokemon);

  return (
    <>
      {pokemon.length !== 0 && (
        <div className="container border border-primary my-2">
          <div className="row align-items-center">
            <div className="col">
              <Link to="/" className="btn btn-light">
                Back to All
              </Link>
            </div>
            <div className="col text-center">{pokemon.name}</div>
            <div className="col">
              <img src={pokemon.picture} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>Abilities: </h5>
              <ul>
                {pokemon.abilities.map((ability, index) => (
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
            <div className="col">
              <h5>Types: </h5>
              <ul>
                {pokemon.types.map((type, index) => (
                  <li key={index}>{type.type.name}</li>
                ))}
              </ul>
            </div>
            <div className="col">
              <h5>Order-Number:</h5>
              {pokemon.orderNumber}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>Stats: </h5>
              {pokemon.stats.map((stat, index) => (
                <div className="row" key={index}>
                  <div className="col">{stat.stat.name}</div>
                  <div className="col">{stat.base_stat}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>Moves</h5>
              <ul>
                {pokemon.moves.map((move, index) => (
                  <li key={index}>{move.move.name}</li>
                ))}
              </ul>
            </div>
            <div className="col">
              <PokemonEvolutions
                evolutionChain={pokemon.evolutions}
                name={pokemon.name}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pokemon;

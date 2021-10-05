import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonEvolutions from './PokemonEvolutions';
import Spinner from './Spinner';
import BackToAllBtn from './BackToAllBtn';

const Pokemon = props => {
  const [pokemon, setPokemon] = useState(null);
  const [err, setError] = useState(false);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        await buildPokemon(response.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
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
        return getChain(responseSpecies.data.evolution_chain.url);
      } catch (error) {
        console.log(error);
      }
    };

    const getChain = async url => {
      try {
        const responseChain = await axios.get(url);
        return buildEvolutions(responseChain.data.chain);
      } catch (error) {
        console.log(error);
      }
    };

    const buildEvolutions = evoChain => {
      const formEvolution = {
        name: evoChain.species.name,
        evolutions: [],
      };

      for (let i = 0; i < evoChain.evolves_to.length; i++) {
        formEvolution.evolutions.push(
          buildEvolutions(evoChain.evolves_to[i], formEvolution.name)
        );
      }
      return formEvolution;
    };
    fetchPokemon();
  }, [id]);

  if (pokemon === null) {
    if (err) {
      return (
        <>
          <BackToAllBtn />
          <div className="container container-details mt-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Pokemon not found.</h5>
              </div>
            </div>
          </div>
        </>
      );
    }
    return <Spinner />;
  } else {
    return (
      <>
        <BackToAllBtn />
        <div className="container container-details mt-3">
          <div className="row row-cols-1 row-cols-md-2 g-3">
            <div className="col d-flex">
              <div className="card flex-grow-1">
                <div className="card-body">
                  <h5 className="card-title text-center capitalize">
                    {pokemon.name}
                  </h5>
                  <div className="d-flex justify-content-center">
                    <img
                      src={pokemon.picture}
                      alt=""
                      className="pokemon-sprite"
                    />
                  </div>
                  <h5 className="card-title text-center">
                    Order-Number: {pokemon.orderNumber}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body pb-0">
                  <h5 className="card-title">Abilities:</h5>
                  <div className="card">
                    <ul className="list-group list-group-flush">
                      {pokemon.abilities.map((ability, index) => (
                        <li className="list-group-item capitalize" key={index}>
                          {ability.ability.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Types:</h5>
                  <div className="card">
                    <ul className="list-group list-group-flush">
                      {pokemon.types.map((type, index) => (
                        <li className="list-group-item capitalize" key={index}>
                          {type.type.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {pokemon.evolutions.evolutions.length !== 0 && (
            <div className="row row-cols-1 mt-3">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Possible Evolutions:</h5>
                    <PokemonEvolutions evolutions={pokemon.evolutions} />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="row row-cols-1 mt-3">
            <div className="col">
              <div className="card">
                <div className="card-body pb-0">
                  <h5 className="card-title">Stats:</h5>
                  <table className="table table-striped align-middle">
                    <tbody>
                      {pokemon.stats.map((stat, index) => (
                        <tr key={index}>
                          <td className="capitalize">{stat.stat.name}</td>
                          <td>{stat.base_stat}</td>
                          <td style={{ width: '70%' }}>
                            <div className="progress" key={index}>
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                  width: `${(stat.base_stat / 255) * 100}%`,
                                }}
                                aria-valuenow={stat.base_stat}
                                aria-valuemin="0"
                                aria-valuemax="255"
                              ></div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 mt-3">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Moves:</h5>
                  <div className="row row-cols-2 row-cols-md-4 row-cols-sm-3 g-2">
                    {pokemon.moves.map((move, index) => (
                      <div className="col" key={index}>
                        <div className="card">
                          <div className="card-body capitalize text-center">
                            {move.move.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Pokemon;

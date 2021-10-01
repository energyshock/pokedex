const PokemonEvolutions = ({ evolutions }) => {
  console.log(evolutions.preEvolution);

  return (
    <ul className="list-group list-group-root list-group-flush">
      <li className="list-group-item">{evolutions.name}</li>
      {evolutions.evolutions.map(evolution => {
        return (
          <PokemonEvolutions evolutions={evolution} key={evolution.name} />
        );
      })}
    </ul>
  );
};

export default PokemonEvolutions;

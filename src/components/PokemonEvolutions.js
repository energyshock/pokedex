const PokemonEvolutions = ({ evolutions, index = 1 }) => {
  return (
    <ul className="list-group list-group-root">
      <li className="list-group-item capitalize mb-1">
        {index}. {evolutions.name}
      </li>
      {evolutions.evolutions.map(evolution => {
        return (
          <PokemonEvolutions
            evolutions={evolution}
            index={index + 1}
            key={evolution.name}
          />
        );
      })}
    </ul>
  );
};

export default PokemonEvolutions;

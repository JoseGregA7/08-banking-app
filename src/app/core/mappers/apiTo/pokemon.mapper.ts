import { IPokemon } from "../../interfaces/pokemon";

export const pokemonMapper = (pokemon: any): IPokemon => {
  const props = ["id", "name", "types", "sprites"];

  if (props.some((prop) => !pokemon[prop])) {
    throw new Error("Pokemon is missing some properties");
  }

  return {
    id: pokemon.id,
    name: pokemon.name,
    type: pokemon.types[0].type.name,
    image: pokemon.sprites.front_default,
  };
};
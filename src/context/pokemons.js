import { createContext, useContext } from 'react';

export const pokemons = createContext();
export default function usePokemons() {
    return useContext(pokemons);
}

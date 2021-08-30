import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from "./components/Game";
import MyContext from "./MyContext";
import uuid from "uuid";

export default function App() {
    
    const [pokemonStorage, setPokemonStorage] = useState(
        [{nr:1, name:'Bulbasaur', id:uuid()},
            {nr:2, name:'Charizard', id:uuid()},
            {nr:3, name:'Lucario', id:uuid()},
            {nr:4, name:'Pikachu', id:uuid()},
            {nr:5, name:'Snorlax', id:uuid()},
            {nr:6, name:'Blissey', id:uuid()},
            {nr:1, name:'Bulbasaur', id:uuid()},
            {nr:2, name:'Charizard', id:uuid()},
            {nr:3, name:'Lucario', id:uuid()},
            {nr:4, name:'Pikachu', id:uuid()},
            {nr:5, name:'Snorlax', id:uuid()},
            {nr:6, name:'Blissey', id:uuid()},
            {nr:1, name:'Bulbasaur', id:uuid()},
            {nr:2, name:'Charizard', id:uuid()},
            {nr:3, name:'Lucario', id:uuid()},
            {nr:4, name:'Pikachu', id:uuid()},
            {nr:5, name:'Snorlax', id:uuid()},
            {nr:6, name:'Blissey', id:uuid()},
            {nr:1, name:'Bulbasaur', id:uuid()},
            {nr:2, name:'Charizard', id:uuid()},
            {nr:3, name:'Lucario', id:uuid()},
            {nr:4, name:'Pikachu', id:uuid()},
            {nr:5, name:'Snorlax', id:uuid()},
            {nr:6, name:'Blissey', id:uuid()},],
    )

    const addPokemon = newPokemon => {
        setPokemonStorage([...pokemonStorage, newPokemon]);
    }

    const removePokemon = id => {
        setPokemonStorage(pokemonStorage.filter(item => item.id !== id))
    }
    
  return (
      <MyContext.Provider value={{
        pokemon: pokemonStorage,
        add: addPokemon,
        remove: removePokemon}}>
          <Game/>
      </MyContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      border: 1,
  },
});

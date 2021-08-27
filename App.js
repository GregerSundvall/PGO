import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from "./components/Game";
import MyContext from "./MyContext";
import uniqueID from "react-native-web/dist/exports/StyleSheet/ReactNativePropRegistry";


export default function App() {

    const [pokemon, setPokemon] = useState([
        {nr:1, name:'Bulbasaur', id: uniqueID},
        {nr:3, name:'Charizard', id: uniqueID},
        {nr:5, name:'Lucario', id: uniqueID},
        {nr:4, name:'Pikachu', id: uniqueID},
        {nr:7, name:'Snorlax', id: uniqueID},
        {nr:10, name:'Blissey', id: uniqueID},
    ])
    
  return (
      <>
          <MyContext.Provider value={{pokemon: pokemon}}>
              <Game/>
          </MyContext.Provider>
      </>
      
      
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

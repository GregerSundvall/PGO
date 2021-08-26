import {Text, View} from "react-native";
import {PokemonProvider} from "../pokemonContext";
import React, {useState} from "react";
import NavBar from "./NavBar";
import Explorer from "./Explorer";
import Storage from "./Storage";
import Pokedex from "./Pokedex";

const Game = () => {
    
    const [currentView, setCurrentView] = useState("Storage");
    let content;
    
    const pokemon = [
        {id:1, name:'Bulbasaur', caught:false},
        {id:2, name:'Charizard', caught:false},
        {id:3, name:'Lucario', caught:false},
        {id:4, name:'Pikachu', caught:false},
        {id:5, name:'Snorlax', caught:false},
        {id:6, name:'Blissey', caught:false},
    ]

    switch (currentView) {
        case "Explorer" : content = <Explorer />; break;
        case "Storage" : content = <Storage />; break;
        case "Pokedex" : content = <Pokedex />; break;
        default : content = <Storage />;
    }
    
    
    
    
    return(
        <>
            {content}
            <Text>Game</Text>
            <PokemonProvider value={pokemon}>
                <Explorer />
                <Storage />
                <Pokedex />
            </PokemonProvider>
            <NavBar 
                goToExplorer={() => setCurrentView("Explorer")}
                goToStorage={() => setCurrentView("Storage")}
                goToPokedex={() => setCurrentView("Pokedex")}
            /> 
        </>
    )
}

export default Game;
import {Text, View} from "react-native";
import React, {useState} from "react";
import NavBar from "./NavBar";
import Explorer from "./Explorer";
import Storage from "./Storage";
import Pokedex from "./Pokedex";

const Game = () => {
    const [currentView, setCurrentView] = useState("Explorer");
    let content;
    
    const pokedex = [
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
        default : content = <Explorer />;
    }
    
    return(
        <View style={{flex: 1, width: "100%"}}>
            {content}
            <NavBar style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
                goToExplorer={() => setCurrentView("Explorer")}
                goToStorage={() => setCurrentView("Storage")}
                goToPokedex={() => setCurrentView("Pokedex")}
            /> 
        </View>
    )
}

export default Game;
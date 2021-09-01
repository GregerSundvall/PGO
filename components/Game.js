import {Text, View} from "react-native";
import React, {useState} from "react";
import NavBar from "./NavBar";
import Explorer from "./Explorer";
import Storage from "./Storage";
import Pokedex from "./Pokedex";

const Game = () => {
    const [currentView, setCurrentView] = useState("Explorer");
    let content;

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
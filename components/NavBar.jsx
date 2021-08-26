import {Text, View} from "react-native";
import React from "react";

const NavBar = ({goToExplorer, goToStorage, goToPokedex}) => {
    return(
        <View>
            <Text onClick={goToExplorer}>Explorer</Text>
            <Text onClick={goToStorage}>Storage</Text>
            <Text onClick={goToPokedex}>Pokedex</Text>
        </View>
    )
}

export default NavBar;
import {Text, View} from "react-native";
import React from "react";

const NavBar = ({goToExplorer, goToStorage, goToPokedex}) => {
    
    return(
        <View style={{flexDirection:"row",
                flex: 1,
            backgroundColor: '#bbf'
            }}>
            <View onClick={goToExplorer} style={{
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center"
                    }}>
                <Text>Explorer</Text>
            </View>
            <View onClick={goToStorage} style={{
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center"
                    }}>
                <Text>Storage</Text>
            </View>
            <View onClick={goToPokedex} style={{
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center"
                    }}>
                <Text>Pokedex</Text>
            </View>
        </View>
    )
}

export default NavBar;
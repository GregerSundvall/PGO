import {Text, View, Image, StyleSheet, Pressable, ScrollView} from "react-native";
import React, {useContext} from "react";
import MyContext from "../MyContext";

const Pokedex = () => {
    return(
        <View style={{flex:9}}>
            <MyContext.Consumer style={{flex:1}}>
                {context => (
                    <View style={{flex:1}}>
                        <View style={styles.title}>
                            <Text>Pokedex
                            </Text>
                        </View>
                        <View style={{flex: 8}}>
                            <ScrollView
                                style={{flex: 1}}
                                contentContainerStyle={{flex: 1}}
                            >
                                {context.pokemon.map((item) =>
                                    <View style={styles.item} key={item.id}>
                                        <Image source={require('../images/map.jpeg')} style={styles.image}/>
                                        <Text>{item.name}</Text>
                                        
                                    </View>
                                )}
                            </ScrollView>
                        </View>
                        
                    </View>
                )}
            </MyContext.Consumer>
        </View>
        
    )
}
export default Pokedex;

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
    },
    title:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item:{
        width: 110,
        height: 110,
        alignItems: 'center',
    },
    button:{
        backgroundColor: '#7777ff',
        paddingLeft: 4,
        paddingRight: 4,
    },
    
    
})
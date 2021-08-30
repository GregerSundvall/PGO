import {FlatList, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import MyContext from "../MyContext";

const Pokedex = () => {
    return(
        <MyContext.Consumer style={{flex:9}}>
            {context => (
                <View style={{flex:1}}>
                    <View style={styles.title}>
                        <Text>Ok let's just pretend this is a different presentation of
                            the mons. At least it shows I'm picking up the context stuff 
                            on two different pages right? :)
                        </Text>
                    </View>
                    <ScrollView style={{flex:8}}>
                        <FlatList
                            numColumns={3}
                            columnWrapperStyle={{justifyContent: 'space-around'}}
                            data={context.pokemon}
                            renderItem={({item}) =>
                                <View style={styles.item}>
                                    <Image source={require('../images/map.jpeg')} style={styles.image}/>
                                    <Text>{item.name}</Text>
                                </View>}
                            keyExtractor={item => item.id}
                        />
                    </ScrollView>
                </View>
            )}
        </MyContext.Consumer>
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
        padding: 30,
    },
    item:{
        width: 100,
        height: 100,
        alignItems: 'center',
    }

})
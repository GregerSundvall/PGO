import {Text, View, FlatList, Image, StyleSheet, Pressable, ScrollView} from "react-native";
import React, {useContext} from "react";
import MyContext from "../MyContext";

const Storage = () => {
    const context = useContext(MyContext);

    return(
        <MyContext.Consumer style={{flex:9}}>
            {context => (
                <View style={{flex:1}}>
                    <View style={styles.title}>
                        <Text>Here are all your awesome Pokemon!</Text>
                    </View>
                    <ScrollView style={{flex: 8}}>
                        <FlatList
                            style={{flex: 1}}
                            numColumns={3}
                            contentContainerStyle={{flexGrow: 1}}
                            columnWrapperStyle={{justifyContent: 'space-around'}}
                            data={context.pokemon}
                            renderItem={({item}) =>
                                <View style={styles.item}>
                                    <Image source={require('../images/map.jpeg')} style={styles.image}/>
                                    <Text>{item.name}</Text>
                                    <Pressable onPress={() => {context.remove(item.id)}} style={styles.button}>
                                        <Text>Delete</Text>
                                    </Pressable>
                                </View>}
                            keyExtractor={item => item.id}
                        />
                    </ScrollView>
                </View>
            )}
        </MyContext.Consumer>
    )
}
export default Storage;

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
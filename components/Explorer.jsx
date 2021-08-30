import {Image, Text, View, Pressable, Modal, ImageBackground} from "react-native";
import React, {useState} from "react";

const Explorer = () => {

    const [modalVisible, setModalVisible] = useState(true);
    
    return(
        <View style={{
                flex:9,
                width:"100%",
                alignItems: "center",
                justifyContent: "center"
            }}>
            
            <ImageBackground source={require("../images/map.jpeg")}
                   style={{ 
                       width: "100%", height: "100%",
                   }}
            />
            
        </View>
    )
}

export default Explorer;
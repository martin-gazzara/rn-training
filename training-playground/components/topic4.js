import React from "react";
import {View,Text} from "react-native";
import {createStackNavigator} from "react-navigation";

class HomeScreen extends React.Component{

    render(){
        return(
            <View style={{Flex:1,backgroundColor:"#ccc",justifyContent:"center"}}>
                <Text style={{color:"#fff"}}>Home screen</Text>
            </View>
        )
    }


}

const RootStack = createStackNavigator({
    Home:HomeScreen
});

export default RootStack;



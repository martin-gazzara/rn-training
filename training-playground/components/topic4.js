import React from "react";
import {View,Text} from "react-native";
import {createStackNavigator, createBottomTabNavigator} from "react-navigation";

class HomeScreen extends React.Component{

    render(){
        return(
            <View style={{Flex:1,backgroundColor:"#ccc",justifyContent:"center"}}>
                <Text style={{color:"#fff"}}>Home screen</Text>
            </View>
        )
    }


}

class SecondScreen extends React.Component{

    render(){
        return(
            <View style={{Flex:1,backgroundColor:"#cc0000",justifyContent:"center"}}>
                <Text style={{color:"#fff"}}>This is the second screen</Text>
            </View>
        )
    }
}

const HomeStack = createStackNavigator({
    Home:HomeScreen
});

const SecondStack = createStackNavigator({
    Second:SecondScreen
})

const RootStack = createBottomTabNavigator({
    Home:HomeStack,
    Second:SecondStack
})


export default RootStack;



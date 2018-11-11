import React from "react";
import {View,Text} from "react-native";
import { Ionicons } from "@expo/vector-icons"
import {createStackNavigator,createBottomTabNavigator} from "react-navigation";

class FormScreen extends React.Component{

    render(){
        return(
            <View style={{flex:1,backgroundColor:"#ccc",justifyContent:"center",justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"#000"}}>This is the Form screen</Text>
            </View>
        )
    }


}

class OtherScreen extends React.Component{

    render(){
        return(
            <View style={{flex:1,backgroundColor:"#ccc",justifyContent:"center",justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"#fff"}}>This is the Other screen</Text>
            </View>
        )
    }
}

const FormStack = createStackNavigator({
    Form:{screen: FormScreen},
})


const OtherStack = createStackNavigator({
    Other:{screen: OtherScreen}
})

const RootStack = createBottomTabNavigator({

    Form:{screen: FormStack},
    Other:{screen: OtherStack}

},
{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        switch (routeName){
            case "Form":
                return <Ionicons name="md-apps" size={horizontal ? 20 : 25} color={tintColor} />;
            case "Other":
                return <Ionicons name="md-build" size={horizontal ? 20 : 25} color={tintColor} />;    
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default RootStack;
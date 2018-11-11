import React from "react";
import {View,Text,Button} from "react-native";
import { Ionicons } from "@expo/vector-icons"
import {createStackNavigator,createBottomTabNavigator} from "react-navigation";

class FormScreen extends React.Component{

    render(){
        return(
            <View style={{flex:1,backgroundColor:"#ccc",justifyContent:"center",justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"#000"}}>This is the Form screen</Text>
                <Button title="Go to Form 2" onPress={() => this.props.navigation.navigate("Form2")}/>
            </View>
        )
    }

}

class FormScreen2 extends React.Component{

    render(){
        return(
            <View style={{flex:1,backgroundColor:"#ccc",justifyContent:"center",justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"#000"}}>This is the Form 2 screen</Text>
                <Button title="Go to Form 3" onPress={() => this.props.navigation.navigate("Form3")}/>
            </View>
        )
    }

}

class FormScreen3 extends React.Component{

    render(){
        return(
            <View style={{flex:1,backgroundColor:"#ccc",justifyContent:"center",justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"#000"}}>This is the Form 3 screen</Text>
                <Button title="Finished" onPress={() => this.props.navigation.popToTop()}/>
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
    Form2:{screen: FormScreen2},
    Form3:{screen: FormScreen3}
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
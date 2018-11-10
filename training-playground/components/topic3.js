import React from "react";
import {View,TextInput,Text,TouchableOpacity,Alert} from "react-native";
import styles from "../styles/styleTopic3"

export default class Button extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            type:(props.type === undefined ? "primary" : props.type),
            disable:props.disable
        }

    }

    render(){
        return(
            <TouchableOpacity activeOpacity={!this.state.disable ? 0.2 : 1} onPress={ () => {if (!this.state.disable){Alert.alert(this.state.type + " button")} } }>
                <View style={ !this.state.disable ? 
                    this.state.type === "primary" ? [styles.button,styles.primary] : [styles.button,styles.secondary] 
                    : 
                    [styles.button,styles.disable] }>

                    <Text style={ !this.state.disable ?
                        this.state.type === "primary" ? styles.textPrimary : styles.textSecondary
                        :
                        styles.textDisable }>{this.props.value}</Text>

                </View>
            </TouchableOpacity>
        )
    }


}

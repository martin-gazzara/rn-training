import React from "react";
import {View,TextInput,Text,TouchableOpacity} from "react-native";
import styles from "../styles/styleTopic3"

export default class AppTextInput extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            input:"",
            type:(props.type === undefined ? "text" : props.type)
        }

        this.HandleInput = this.HandleInput.bind(this);
        this.ClearInput = this.ClearInput.bind(this);
    }

    HandleInput(text){
        this.setState({input:text});
    }

    ClearInput(){
        this.setState({input:""});
    }

    render(){
        return(
            <TextInput onChangeText={this.HandleInput} secureTextEntry={this.state.type === "password" ? true : false} underlineColorAndroid="transparent" style={styles.textInput}></TextInput>
        )
    }


}

/*

secureTextEntry="true" 

<View style={styles.container}>
                <Text>Username:</Text>
                <TextInput onChangeText={this.HandleInput} value={this.state.input} underlineColorAndroid="transparent" style={styles.textInput}></TextInput>
                <TouchableOpacity style={styles.clearButton} onPress={this.ClearInput}>
                    <Text style={{textAlign:"center"}}>Clear</Text>
                </TouchableOpacity>
                <Text>You are writing this:</Text>
                <Text>{this.state.input}</Text>
            </View>
*/
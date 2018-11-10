import React from "react";
import {View,TextInput,Text,TouchableOpacity} from "react-native";
import styles from "../styles/styleTopic3"

export default class Input extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            input:[]
        }

        this.HandleInput = this.HandleInput.bind(this);
        this.ClearInput = this.ClearInput.bind(this);
    }

    HandleInput(text){
        this.setState({input:text});
    }

    ClearInput(){
        this.setState({input:[]});
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Insert anything that you want</Text>
                <TextInput onChangeText={this.HandleInput} value={this.state.input} underlineColorAndroid="transparent" style={{color:"red",borderColor:"grey",borderWidth:1,width:300}}></TextInput>
                <TouchableOpacity style={styles.clearButton} onPress={this.ClearInput}>
                    <Text style={{textAlign:"center"}}>Clear</Text>
                </TouchableOpacity>
                <Text>You are writing this:</Text>
                <Text>{this.state.input}</Text>
            </View>
        )
    }


}
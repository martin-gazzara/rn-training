import React from "react";
import {View,TextInput,Text} from "react-native";

export default class Input extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            input:[]
        }

        this.HandleInput = this.HandleInput.bind(this);
    }

    HandleInput(text){
        this.setState({input:text});
    }

    render(){
        return(
            <View style={{marginTop:50}}>
                <Text>Insert anything that you want</Text>
                <TextInput onChangeText={this.HandleInput} underlineColorAndroid="transparent" style={{color:"red",borderColor:"grey",borderWidth:1,width:300}}></TextInput>
                <Text>You are writing this:</Text>
                <Text>{this.state.input}</Text>
            </View>
        )
    }


}
import React from "react";
import {View, Image} from "react-native";
import styles from "../../styles/wireframe/styles"


export default class SocialNetwork extends React.Component{

    render(){
        return(
            <View style={{flex:1,flexDirection:"row"}}>
                <Image style={styles.social} source={require("../../images/wireframe/comments.png")}></Image>
                <Image style={styles.social} source={require("../../images/wireframe/fb.png")}></Image>
                <Image style={styles.social} source={require("../../images/wireframe/twitter.png")}></Image>
                <Image style={styles.social} source={require("../../images/wireframe/linkedin.png")}></Image>
                <Image style={styles.social} source={require("../../images/wireframe/pinterest.png")}></Image>
            </View>
        )
    }
}
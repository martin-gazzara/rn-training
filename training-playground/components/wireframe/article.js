import React from "react";
import {View,ScrollView,Text,Image} from "react-native";
import styles from "../../styles/wireframe/styles"
import SocialNetwork from "../wireframe/socialNetwork"



export default class Article extends React.Component{

    render(props){

        const sample = {
            title: "Vestibulum in rhoncus nulla. Cras vitae ante a tellus maximus convallis.",
            autor: "Donec Vel",
            image: "../images/wireframe/woman_executive.jpg",
            body: "Vestibulum porta leo odio, sit amet" + 
            "tristique urna finibus non. Sed at dolor laoreet,"+ " viverra purus a, tincidunt metus. Mauris nec aliquam dui," +  
            "nec faucibus tellus. Vestibulum posuere, dui id auctor convallis, mi turpis tincidunt lacus, ut sollicitudin lorem lorem" + 
            " varius arcu. Nam sed euismod arcu. Pellentesque habitant morbi tristique senectus et netus et" +
            " malesuada fames ac turpis egestas. Praesent justo dolor, rhoncus ut nulla vitae, lobortis ultrices enim."
          }

        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{sample.title}</Text>
                    <Text style={styles.autor}>By <Text style={{color:"#000056"}}>{sample.autor}</Text>{"\n"}{"\n"}</Text>
                </View>
                <View>
                    <Image style={styles.image} source={require("../../images/wireframe/woman_executive.jpg")}></Image>
                </View>
                <View>
                    <Text>{"\n"}{sample.body}</Text>
                </View>
                <SocialNetwork/>
            </View>
        )
    }
}
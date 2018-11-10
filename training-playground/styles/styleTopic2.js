import {StyleSheet,Dimensions} from "react-native";

const aux = Dimensions.get("screen");

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        backgroundColor:"#7fbfbf",
        padding:100
    },
    first:{
        width:(aux.width*1/2),
        height:(aux.width*1/2),
        backgroundColor:"#e50202",
        marginBottom:10
    },
    second:{
        marginBottom:10,
        width:(aux.width*3/10),
        height:(aux.width*3/10),
        backgroundColor:"#2b0057",
        
    },
    third:{
        marginBottom:10,
        width:(aux.width*1/5),
        height:(aux.width*1/5),
        backgroundColor:"#ffffff",
        
    }
})

export default styles;
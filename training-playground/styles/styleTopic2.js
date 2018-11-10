import {StyleSheet,} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#7fbfbf",
        justifyContent:"space-between",
    },
    first:{
        width:100,
        height:100,
        alignSelf:"flex-start",
        backgroundColor:"#e50202",
        marginBottom:10
    },
    second:{
        marginBottom:10,
        width:100,
        height:100,
        alignSelf:"center",
        backgroundColor:"#ffffff",
        
    },
    third:{
        marginBottom:10,
        width:100,
        height:100,
        alignSelf:"flex-end",
        backgroundColor:"#2b0057",
        
    }
})

export default styles;
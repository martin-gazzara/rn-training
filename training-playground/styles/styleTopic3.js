import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    button:{
        width:200,
        padding:5,
        borderRadius:100,
        marginBottom:5
        
    },
    primary:{
        backgroundColor:"#158359",
    },
    secondary:{
        borderColor:"#468499",
        borderWidth:1,
    },
    disable:{
        borderColor:"#ccc",
        borderWidth:1
    },
    textPrimary:{
        color:"#fff",
        fontSize:20,
        textAlign:"center"
    },
    textSecondary:{
        color:"#468499",
        fontSize:20,
        textAlign:"center"
    },
    textDisable:{
        color:"#ccc",
        fontSize:20,
        textAlign:"center"
    }
})

export default styles;
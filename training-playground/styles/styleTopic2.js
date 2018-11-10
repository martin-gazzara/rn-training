import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        backgroundColor:"#7fbfbf",
        padding:10
    },
    box1:{
        width:100,
        height:100,
        backgroundColor:"#e50202",
        marginBottom:10
    },
    box2:{
        marginBottom:10,
        width:100,
        height:100,
        backgroundColor:"#2b0057",
        
    },
    box3:{
        marginBottom:10,
        width:100,
        height:100,
        backgroundColor:"#ffffff",
        
    },
    row:{
        flexDirection:"row"
    },
    col:{
        flexDirection:"column"
    }

})

export default styles;
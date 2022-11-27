import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 8,
        alignItems: 'center',
        flexDirection:'row',
        paddingHorizontal:8,
        paddingVertical:12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333333',
        backgroundColor:'#262626', 
    },
    containerChecked:{
        marginBottom: 8,
        alignItems: 'center',
        flexDirection:'row',
        paddingHorizontal:8,
        paddingVertical:12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#262626',
        backgroundColor:'#262626', 
    },
    checkbox:{
        borderRadius: 10,
        borderColor: '#4EA8DE'
    },
    textChecked:{
        color: '#808080',
        fontSize: 14,
        marginHorizontal: 8,
        flex: 1,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    text:{
        color: '#F2F2F2',
        fontSize: 14,
        marginHorizontal: 8,
        flex: 1,
    },
    trash:{
        flex: 1,
        width: 15,
        height: 15,
        resizeMode: 'contain',
    }
})
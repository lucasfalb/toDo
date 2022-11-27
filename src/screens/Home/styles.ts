import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor:'#1a1a1a', 
    },
    header:{
        backgroundColor:'#0D0D0D',
        height: 173,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    logo:{
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    newTask:{
        marginTop: -30,
        flexDirection: 'row',
        width: '100%',
        marginBottom: 32,
    },
    textInput:{
        backgroundColor: '#262626',
        color:'#fff',
        padding: 20,
        height: 52,
        flex: 1,
        marginRight: 8,
        fontSize: 16,
        border: '1px solid #171717',
        borderRadius: 6
    },
    addButton: {
        backgroundColor: '#1f709f',
        height: 52,
        width: 52,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    amountInfo:{
        color: '#fff',
        fontSize: 12,
        alignSelf: 'baseline',
        paddingTop:5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        borderRadius: 30,
        backgroundColor: '#333333',
        marginLeft: 8
    },
    amount:{
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    filterSection:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterOptions:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingBottom: 32,
    },
    filterTextBlue:{
        fontWeight: 'bold',
        fontSize: 14,
        color:'#4EA8DE',
    },
    filterTextPurple:{
        fontWeight: 'bold',
        fontSize: 14,
        color:'#8284FA',
    },
    tasksList:{
        flexDirection: 'column',
    }
})
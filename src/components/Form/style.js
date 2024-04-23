import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginTop: 20
    },
    labelText: {
        marginTop: 50,
        fontSize: 20,
        marginBottom: 5
    },
    inputText: {
        fontSize: 20,
        marginBottom: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 10,
        borderRadius: 15
    }, 
    buttonSubmit: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C5FF95',
        borderRadius: 50
    },
    buttonText: {
        fontSize: 22,
        padding: 10,
    }
})

export default styles
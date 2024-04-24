import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1679AB',
        paddingTop: 80,
        alignItems: 'center'
    },
    questionTitleBox: {
        marginBottom: 15,
        backgroundColor: '#C5FF95',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15
    },
    questionTitleText: {
        fontSize: 20
    },
    questionTitle: {
        fontSize: 20
    },
    answersContext: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginTop: 20,
        paddingTop: 20
    },
    answersAlternative: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        width: '80%',
        borderRadius: 25,
        padding: 10,
        paddingLeft: 20
    }
})

export default styles
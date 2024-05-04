import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ErrorMessage from "./ErrorMessage";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";


export default function Form() {

    const [cap, setCap] = useState(null);
    const [message, setMessage] = useState(null);

    const navigation = useNavigation();

    function validateMessage() {
        if(cap == null) {
            setCap(null);
            setMessage("Preencha o capítulo!");
        } else {
            navigation.navigate('Questions', {'cap': cap});
        }
    }

    return (
        <View style={styles.formContext}>
            <View>
                <Text style={styles.labelText}>Digite o capítulo da aula</Text>
                <TextInput style={styles.inputText}
                    placeholder="Ex.: 9" 
                    maxLength={2} 
                    keyboardType="numeric"
                    onChangeText={setCap}
                    value={cap}
                ></TextInput>
                <TouchableOpacity style={styles.buttonSubmit} onPress={() => validateMessage()} title="Enviar">
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
                <ErrorMessage errorMessage={message} />
            </View>
        </View>
    )
}
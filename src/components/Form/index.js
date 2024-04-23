import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ErrorMessage from "./ErrorMessage";
import styles from "./style";

export default function Form() {

    const [cap, setCap] = useState(null);
    const [message, setMessage] = useState(null);

    function validateMessage() {
        if(cap == null) {
            setCap(null)
            setMessage("Preencha o capítulo!")
        } else {
            setMessage("Capítulo selecionado = " + cap)
        }
    }

    return (
        <View style={styles.formContext}>
            <View>
                <Text style={styles.labelText}>Digite o capítulo da aula</Text>
                <TextInput style={styles.inputText}
                    placeholder="9" 
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
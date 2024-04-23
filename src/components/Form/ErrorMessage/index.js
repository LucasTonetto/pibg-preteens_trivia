import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ErrorMessage(props) {
    return (
        <View style={styles.errorContext}>
            <Text style={styles.errorText}>{props.errorMessage}</Text>
        </View>
    )
}
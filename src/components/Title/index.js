import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Title() {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>TRIVIA QUEST - PRÉ TEENS</Text>
        </View>
    );
}
import React from "react";
import { View, Text } from "react-native";
import styles from "./style";


export default function Questions() {

    const questions = require('../../../database/questions.json');

    const renderAlternatives = [];

    for (alternativeNumber in questions['questions'][0]['alternatives']) {
        renderAlternatives.push(
            <Text style={styles.answersAlternative} key={alternativeNumber}>
                {questions['questions'][0]['alternatives'][alternativeNumber]['text']}
            </Text>
        );
      }

    return (
        <View style={styles.container}>
            <View style={styles.questionTitleBox}>
                <Text style={styles.questionTitleText}>Qual é o nome do novo personagem biblicoe que aparece na série The Chosen?</Text>
            </View>
            <View style={styles.answersContext}>
                {renderAlternatives}
            </View>
        </View>
    )
}

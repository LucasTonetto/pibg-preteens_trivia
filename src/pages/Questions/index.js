import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./style";

function randomQuestion(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

export default function Questions({route, navigation}) {

    const [points, setPoints] = useState(0);
    const [selectedQuestionText, setSelectedQuestionText] = useState('');
    const [selectedQuestionAlternatives, setSelectedQuestionAlternatives] = useState([]);

    const databaseQuesitons = require('../../../database/questions.json');

    const cap = route.params['cap'];
    const filteredQuestions = databaseQuesitons['questions'].filter(question => question['cap'] <= cap);

    useEffect(() => {
        setSelectedQuestionText(filteredQuestions[randomQuestion(filteredQuestions.length)]['question']);
        setSelectedQuestionAlternatives(filteredQuestions[randomQuestion(filteredQuestions.length)]['alternatives']);
    }, []);

    const renderAlternatives = [];

    const validateAnswer = (answer) => {
        if (answer == 'true') {
            setPoints(points + 1);
        } else {
            setPoints(points - 1);
        }
    }

    for (alternativeNumber in selectedQuestionAlternatives) {
        const alternative = selectedQuestionAlternatives[alternativeNumber];
        renderAlternatives.push(
            <Text 
                style={styles.answersAlternative} 
                key={alternativeNumber}
                onPress={() => validateAnswer(alternative['correct'].toString())}
            >
                {alternative['text']}
            </Text>
        );
      }

    return (
        <View style={styles.container}>
            <Text>Pontuação: {points}</Text>
            <View style={styles.questionTitleBox}>
                <Text style={styles.questionTitleText}>{selectedQuestionText}</Text>
            </View>
            <View style={styles.answersContext}>
                {renderAlternatives}
            </View>
        </View>
    )
}

import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./style";

function randomQuestion(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function removeItemFromList(indexToRemove, list) {
    return list.filter((item, index) => index != indexToRemove);
}

export default function Questions({route, navigation}) {

    const [points, setPoints] = useState(0);
    const [answerSend, setAnswerSend] = useState('firstLoad');
    const [databaseAllQuestions, setDatabaseAllQuestions] = useState([]);
    const [selectedQuestionText, setSelectedQuestionText] = useState('');
    const [selectedQuestionAlternatives, setSelectedQuestionAlternatives] = useState([]);

    function changeQuestionStates(questions, questionSelected) {
        setSelectedQuestionText(questions[questionSelected]['question']);
        setSelectedQuestionAlternatives(questions[questionSelected]['alternatives']);
        setDatabaseAllQuestions(removeItemFromList(questionSelected, questions));
    }

    function firstLoad() {
        const databaseQuesitons = require('../../../database/questions.json');
        const cap = route.params['cap'];
        const filteredQuestions = databaseQuesitons['questions'].filter(question => question['cap'] <= cap);
        const questionSelected = randomQuestion(filteredQuestions.length);
        changeQuestionStates(filteredQuestions, questionSelected);
    }

    function reloadQuestion() {
        if (databaseAllQuestions.length > 0) {
            const newQuestionSelected = randomQuestion(databaseAllQuestions.length);
            changeQuestionStates(databaseAllQuestions, newQuestionSelected);
        }
    }

    useEffect(() => {
        if (answerSend === 'false') {
            setPoints(points - 1);
        } else if (answerSend === 'true') {
            setPoints(points + 1);
        } else if(answerSend === 'firstLoad') {
            firstLoad();
        } else {
            reloadQuestion();
        }
        setAnswerSend('nextQuestion');
    }, [answerSend]);

    const renderAlternatives = [];

    for (alternativeNumber in selectedQuestionAlternatives) {
        const alternative = selectedQuestionAlternatives[alternativeNumber];
        renderAlternatives.push(
            <Text 
                style={styles.answersAlternative} 
                key={alternativeNumber}
                onPress={() => setAnswerSend(alternative['correct'].toString())}
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

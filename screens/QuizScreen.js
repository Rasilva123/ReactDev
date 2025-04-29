import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import QuestionCard from '../components/QuestionCard';

const questions = [
  {
    question: 'O que é React Native?',
    options: ['Linguagem de backend', 'Framework mobile', 'IDE', 'Sistema operacional'],
    answer: 1,
  },
  {
    question: 'Qual comando inicializa um projeto com Expo?',
    options: ['npm start', 'expo init', 'npx react-native start', 'yarn add expo'],
    answer: 1,
  },
  {
    question: 'useState é um...?',
    options: ['Componente', 'Hook', 'Evento', 'Tema'],
    answer: 1,
  },
];

export default function QuizScreen() {
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[current].answer) setScore(score + 1);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {!finished ? (
        <QuestionCard
          question={questions[current]}
          onAnswer={handleAnswer}
        />
      ) : (
        <View style={styles.resultContainer}>
          <Text style={[styles.resultText, { color: theme.colors.primary }]}>
            Quiz Finalizado!
          </Text>
          <Text style={[styles.scoreText, { color: theme.colors.text }]}>
            Você acertou {score} de {questions.length}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  scoreText: {
    fontSize: 18,
  },
});

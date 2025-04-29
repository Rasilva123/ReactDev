import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

export default function QuestionCard({ question, onAnswer }) {
  const { theme } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.cardBackground }]}>
      <Text style={[styles.question, { color: theme.colors.text }]}>
        {question.question}
      </Text>
      {question.options.map((option, index) => (
        <Pressable
          key={index}
          style={({ pressed }) => [
            styles.option,
            {
              backgroundColor: pressed ? theme.colors.primaryLight : theme.colors.secondary,
            },
          ]}
          onPress={() => onAnswer(index)}
        >
          <Text style={[styles.optionText, { color: theme.colors.text }]}>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 12,
    elevation: 5,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  option: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
  },
});

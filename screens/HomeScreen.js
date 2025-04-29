import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext'; // 👈 Importa o contexto do tema

export default function HomeScreen({ navigation }) {
  const { theme, toggleTheme, darkMode } = useTheme(); // 👈 Usa o contexto

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Bem-vindo ao ReactDev
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={styles.buttonText}>Começar Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.secondary }]}
        onPress={() => navigation.navigate('Sobre o React Native')}
      >
        <Text style={styles.buttonText}>O que é React Native?</Text>
      </TouchableOpacity>

      {/* Botão de alternância de tema */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primaryLight }]}
        onPress={toggleTheme}
      >
        <Text style={[styles.buttonText, { color: darkMode ? '#000' : '#000' }]}>
          Alternar Tema
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

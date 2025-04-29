import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>O que é React Native?</Text>
      <Text style={styles.paragraph}>
        React Native é um framework criado pelo Facebook que permite o desenvolvimento de aplicativos móveis
        utilizando JavaScript e a biblioteca React. Com ele, é possível criar apps para Android e iOS a partir de uma única base de código.
      </Text>
      <Text style={styles.paragraph}>
        Diferente das abordagens híbridas, o React Native utiliza componentes nativos da plataforma, o que
        proporciona melhor performance e uma experiência mais próxima de aplicativos desenvolvidos de forma tradicional.
      </Text>
      <Text style={styles.paragraph}>
        Entre suas principais vantagens estão:
        {'\n'}- Reaproveitamento de código entre plataformas;
        {'\n'}- Grande comunidade e ecossistema;
        {'\n'}- Integração facilitada com APIs nativas;
        {'\n'}- Atualizações rápidas com Hot Reload.
      </Text>
      <Text style={styles.paragraph}>
        Aprender React Native é uma excelente escolha para quem deseja desenvolver aplicativos modernos de forma eficiente.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'justify',
  },
});

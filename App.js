import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { ThemeProvider as ContextThemeProvider, useTheme } from './theme/ThemeContext';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LessonsScreen from './screens/LessonsScreen';
import LessonDetailScreen from './screens/LessonDetailScreen';
import QuizScreen from './screens/QuizScreen';
import AboutScreen from './screens/AboutScreen';
import { ThemeProvider as StyledProvider } from 'styled-components/native';

const Stack = createStackNavigator();

function AppContent() {
  const { darkMode, theme } = useTheme();
  return (
    <StyledProvider theme={theme.colors}>
      <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
            <Stack.Screen name="Início" component={HomeScreen} />
            <Stack.Screen name="Quiz" component={QuizScreen} />
            <Stack.Screen name="Sobre o React Native" component={AboutScreen} />
            <Stack.Screen name="Lições" component={LessonsScreen} />
            <Stack.Screen name="Detalhes da Lição" component={LessonDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StyledProvider>
  );
}

export default function App() {
  return (
    <ContextThemeProvider>
      <AppContent />
    </ContextThemeProvider>
  );
}

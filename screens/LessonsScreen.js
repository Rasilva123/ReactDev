import React from 'react';
import { SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '../theme/ThemeContext';
import LessonTable from '../components/LessonTable';

const lessons = [
    { id: 'what-is', title: 'O que é React Native' },
    { id: 'components', title: 'Componentes Básicos' },
    { id: 'state-props', title: 'States e Props' },
    { id: 'styling', title: 'Estilização Simples' },
];

export default function LessonsScreen({ navigation }) {
    const { theme } = useTheme();

    const handleLessonSelect = (lessonId) => {
        navigation.navigate('Detalhes da Lição', { lessonId });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
        <LessonTable lessons={lessons} onLessonSelect={handleLessonSelect} />
        </SafeAreaView>
    );
}

LessonsScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

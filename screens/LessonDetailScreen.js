import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '../theme/ThemeContext';
import CodeExample from '../components/CodeExample';

const lessonsContent = {
    'what-is': {
        title: 'O que é React Native',
        summary: 'React Native é um framework que permite desenvolver aplicações móveis usando JavaScript e React, compilando para componentes nativos em Android e iOS.',
        ExampleComponent: () => (
        <View>
            <Text>React Native usa React para criar interfaces nativas.</Text>
        </View>
        ),
        codeSnippet: `import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
    return (
        <View>
        <Text>Olá, React Native!</Text>
        </View>
    );
}`
    },
    'components': {
        title: 'Componentes Básicos',
        summary: 'Componentes como View, Text e Button são blocos de construção fundamentais em React Native.',
        ExampleComponent: () => (
        <View>
            <Text>Este é um Text dentro de uma View.</Text>
            <Button title="Clique aqui" onPress={() => alert('Olá!')} />
        </View>
        ),
        codeSnippet: `import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Example() {
    return (
        <View>
        <Text>Texto de exemplo</Text>
        <Button title="Pressione-me" onPress={() => {}} />
        </View>
    );
}`
    },
    'state-props': {
        title: 'State e Props',
        summary: 'State gerencia dados internos de um componente; Props passam dados de pai para filho.',
        ExampleComponent: () => {
        const [count, setCount] = React.useState(0);
        return (
            <View>
            <Text>Contador: {count}</Text>
            <Button title="Incrementar" onPress={() => setCount(c => c + 1)} />
            </View>
        );
        },
        codeSnippet: `import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <View>
        <Text>Você clicou {count} vezes</Text>
        <Button title="Clique" onPress={() => setCount(count + 1)} />
        </View>
    );
}`
    },
    'styling': {
        title: 'Estilização Simples',
        summary: 'Você pode estilizar componentes usando o prop style ou styled-components.',
        ExampleComponent: () => (
        <View>
            <Text style={{ color: 'blue', fontSize: 18 }}>Texto estilizado</Text>
        </View>
        ),
        codeSnippet: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    texto: {
        color: 'blue',
        fontSize: 18,
    },
});

export default function StyledText() {
    return (
        <View>
        <Text style={styles.texto}>Olá, com estilo!</Text>
        </View>
    );
}`
    }
};

export default function LessonDetailScreen({ route }) {
    const { lessonId } = route.params;
    const { theme } = useTheme();

    const lesson = lessonsContent[lessonId];
    if (!lesson) {
        return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
            <Text style={{ color: theme.colors.text }}>Lição não encontrada.</Text>
        </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <ScrollView>
                <CodeExample
                    title={lesson.title}
                    description={lesson.summary}
                    code={lesson.codeSnippet}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

LessonDetailScreen.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
        lessonId: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};
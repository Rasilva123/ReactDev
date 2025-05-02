import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    padding: 16px;
    background-color: ${({ theme }) => theme.background};
`;

const Row = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-vertical: 12px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.border};
`;

const LessonTitle = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.text};
`;

const DetailsIcon = styled.Text`
    font-size: 18px;
    color: ${({ theme }) => theme.primary};
`;

export default function LessonTable({ lessons, onLessonSelect }) {
    if (!Array.isArray(lessons)) {
        console.error('LessonTable: prop "lessons" deve ser um array.');
        return null;
    }

    const renderItem = ({ item }) => {
        const { id, title } = item;
        return (
        <Row activeOpacity={0.7} onPress={() => onLessonSelect(id)}>
            <LessonTitle numberOfLines={1}>{title}</LessonTitle>
            <DetailsIcon>ℹ️</DetailsIcon>
        </Row>
        );
    };

    return (
        <Container>
        <FlatList
            data={lessons}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            initialNumToRender={10}
            ListEmptyComponent={<Text>Nenhuma lição disponível.</Text>}
        />
        </Container>
    );
}

LessonTable.propTypes = {
    lessons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onLessonSelect: PropTypes.func.isRequired,
};

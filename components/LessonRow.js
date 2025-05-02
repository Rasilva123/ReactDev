import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const RowContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-vertical: 12px;
    padding-horizontal: 16px;
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

export default function LessonRow({ id, title, onPress }) {
    if (!id || !title || typeof onPress !== 'function') {
        console.error('LessonRow: props inválidas.', { id, title, onPress });
        return null;
    }

    const handlePress = () => {
        try {
            onPress(id);
        } catch (error) {
            console.error('Erro em onPress de LessonRow:', error);
        }
    };

    return (
        <RowContainer activeOpacity={0.7} onPress={handlePress}>
        <LessonTitle numberOfLines={1}>{title}</LessonTitle>
        <DetailsIcon>ℹ️</DetailsIcon>
        </RowContainer>
    );
}

LessonRow.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

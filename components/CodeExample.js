import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
    flex: 1;
    padding: 16px;
    background-color: ${({ theme }) => theme.background};
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    margin-bottom: 8px;
`;

const Description = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 16px;
`;

const ExampleContainer = styled.View`
    padding: 12px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.border};
    border-radius: 8px;
    margin-bottom: 16px;
`;

const CodeContainer = styled.View`
    background-color: #2d2d2d;
    border-radius: 8px;
    padding: 12px;
`;

const CodeText = styled.Text`
    font-family: 'Courier New';
    color: #e5e5e5;
`;

export default function CodeExample({ title, description, ExampleComponent, codeSnippet }) {
  return (
    <Wrapper>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}

        {ExampleComponent && (
            <ExampleContainer>
            <ExampleComponent />
            </ExampleContainer>
        )}

        {codeSnippet && (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CodeContainer>
                <CodeText>{codeSnippet}</CodeText>
            </CodeContainer>
            </ScrollView>
        )}
    </Wrapper>
  );
}

import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const PageTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    margin: 16px;
`;

const Description = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.text};
    margin-horizontal: 16px;
    margin-bottom: 8px;
`;

const ExampleContainer = styled.View`
    background-color: #111;
    padding: 8px;
    margin-horizontal: 16px;
    margin-bottom: 8px;
    border-radius: 4px;
`;

const Box = styled.View`
    margin: 16px;
    border: 1px solid #333;
    background-color: #282a36;
    border-radius: 4px;
    overflow: hidden;
`;

const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #21222c;
    padding: 4px 8px;
`;

const Title = styled.Text`
    color: #f8f8f2;
    font-family: 'Courier New';
    font-size: 14px;
`;

const Controls = styled.View`
    flex-direction: row;
`;

const Control = styled.View`
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: ${(p) => p.color};
    margin-left: 4px;
`;

const CodeScroll = styled(ScrollView).attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    padding: 8px;
`;

export default function CodeExample({title = '', description = '', ExampleComponent = null, code = '', language = 'javascript',}) {
    return (
        <>
            {title.length > 0 && <PageTitle>{title}</PageTitle>}
            {description.length > 0 && <Description>{description}</Description>}
        
            {ExampleComponent && (
                <ExampleContainer>
                    <ExampleComponent />
                </ExampleContainer>
            )}
        
            <Box>
                <Header>
                    <Title>Code</Title>
                    <Controls>
                        <Control color="#ff5555" />
                        <Control color="#f1fa8c" />
                        <Control color="#50fa7b" />
                    </Controls>
                </Header>
        
                <CodeScroll>
                    <SyntaxHighlighter
                        language={language}
                        style={dracula}
                        highlighter="hljs"
                        customStyle={{ backgroundColor: 'transparent', padding: 0, margin: 0 }}
                        codeTagProps={{ style: { fontFamily: 'Courier New', fontSize: 14 } }}
                    >
                        {code}
                    </SyntaxHighlighter>
                </CodeScroll>
            </Box>
        </>
    );
}

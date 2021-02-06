
import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TypingText from './components/typingtext';

const sampleText = `hello world
		hello world
		hello world
    hello world`

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <TypingText text={sampleText} />
      </Box>
    </Container>
  );
}
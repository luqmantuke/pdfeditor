import React, { useState, useRef } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

const PDFEdit = () => {
  const [file, setFile] = useState(null);
  const [wordsToReplace, setWordsToReplace] = useState('');
  const [replacementWords, setReplacementWords] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleWordsToReplaceChange = (event) => {
    setWordsToReplace(event.target.value);
  };

  const handleReplacementWordsChange = (event) => {
    setReplacementWords(event.target.value);
  };

  const handleSubmit = () => {
    // Perform your submit logic here
    // You can access wordsToReplace, replacementWords, and file in this function
  };

  return (
    <Container maxW="sm" centerContent py={10}>
      <Box
        bg="white"
        boxShadow="md"
        p={8}
        rounded="md"
        w="100%"
        maxW="md"
      >
        <Stack spacing={6} w="100%">
          {/* Upload component */}
          <Box
            border="2px dashed gray"
            borderRadius="md"
            p={4}
            cursor="pointer"
            _hover={{ borderColor: 'gray.400' }}
            onDrop={(event) => {
              event.preventDefault();
              const selectedFile = event.dataTransfer.files[0];
              setFile(selectedFile);
            }}
            onDragOver={(event) => event.preventDefault()}
          >
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              ref={fileInputRef}
            />
            <Flex
              direction="column"
              align="center"
              justify="center"
              height="120px"
            >
              <Button
                colorScheme="gray"
                onClick={() => fileInputRef.current.click()}
              >
                Select PDF File
              </Button>
              {file && (
                <Text mt={2} fontWeight="bold">
                  Selected file: {file.name}
                </Text>
              )}
            </Flex>
          </Box>

          {/* Input field for words to replace */}
          <Input
            placeholder="Words to Replace"
            value={wordsToReplace}
            onChange={handleWordsToReplaceChange}
          />

          {/* Input field for replacement words */}
          <Input
            placeholder="Replacement Words"
            value={replacementWords}
            onChange={handleReplacementWordsChange}
          />

          {/* Submit button */}
          <Button colorScheme="blue" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default PDFEdit;

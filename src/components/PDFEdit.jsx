import React, { useState, useRef } from 'react';
import { Box, Button, Input, Stack } from '@chakra-ui/react';

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
    <Box>
      {/* Upload component */}
      <Box
        border="2px dashed gray"
        borderRadius="md"
        p={4}
        mb={4}
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
        <Button colorScheme="gray" onClick={() => fileInputRef.current.click()}>
          Select PDF File
        </Button>
        {file && <p>Selected file: {file.name}</p>}
      </Box>

      <Stack spacing={4}>
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
  );
};

export default PDFEdit;

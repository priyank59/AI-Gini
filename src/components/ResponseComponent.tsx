import React from 'react';
import { styled } from '@mui/material/styles';

interface ResponseProps {
  response: string;
}

const ResponseBoxContainer = styled('div')(({ theme }) => ({
  width: '600px',
  height: '400px',
  border: '1px solid gray',
  borderRadius: '10px',
  marginTop: theme.spacing(2),
  background: 'white',
  padding: `1px`,
  fontSize: '24px', 
  color: 'light-black' 
}));



const ResponseComponent: React.FC<ResponseProps> = ({ response }) => {
  return (
    <div>
      <ResponseBoxContainer >
      {/* Displaying the ChatGPT response in the response box container */}
      {response}
      </ResponseBoxContainer>
    </div>
  );
};

export default ResponseComponent;
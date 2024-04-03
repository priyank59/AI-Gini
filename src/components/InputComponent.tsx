import React, { useState } from 'react';
import axios from "axios"  ;
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


const InputField = styled(TextField, {
  name: 'MuiInput',
  slot: 'textField',
})(({ theme }) => ({
  width: '500px',
  marginRight: theme.spacing(2),
}));
interface InputProps {
  onInputResponse: (response: string) => void;
}


const SendButton = styled(Button)(({ theme }) => ({
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(2),
  }));


const InputComponent: React.FC<InputProps> = ({ onInputResponse }) => {
  const [inputValue, setInputValue] = useState("");

  // Creating a handleClick function which will send the api request to chatgpt and will fetch the response 

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
        // Make a request to the ChatGPT API endpoint
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          model: "gpt-3.5-turbo",
          max_tokens: 300, // Example parameter, adjust as needed,
          messages : [{
              "role": "user",
              "content": inputValue
          }]
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer XXXXXXXXXXXXXXX',
          }
        });
        // Handle the response
        onInputResponse(response.data.choices[0].message.content);
        setInputValue("")
     } catch (error) {
      console.error('Error fetching response from ChatGPT API:', error);
    }
  };

  return (
  <form onSubmit={handleClick}>
    <InputField
        label=""
        multiline
        rows={1}
        style={{ background: '#ffffff', padding: '1px', borderRadius:"5px"}}
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your message..."
      />
    <SendButton size="medium" variant="outlined" style={{ background: '#ffffff', padding: '1px'}} type ="submit" endIcon={<SendIcon />}>Send</SendButton>
    </form>
  );
};

export default InputComponent;
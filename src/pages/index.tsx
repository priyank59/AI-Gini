
import React, { useState } from 'react';
import InputComponent from '../components/InputComponent';
import ResponseComponent from '../components/ResponseComponent';
import Grid from '@mui/material/Grid';

const App: React.FC = () => {
  const [response, setResponse] = useState('');

  // Creating a response state which will rerender our app whenever it value changeses and is passed to response compnent to display output.

  const handleInputResponse = (response: string) => {
    setResponse(response);
  };

  return (
    <div className="body">
      <h1 style={{textAlign:'center',color:"#d2691e"}}>AI-Gini</h1>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Grid container alignItems="center" >
      <InputComponent onInputResponse={handleInputResponse} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
      <ResponseComponent response={response} />
      </Grid>
      </Grid>
    </div>
  );
};

export default App
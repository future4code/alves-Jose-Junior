import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ResetButton() {
  const onClickReset = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/robinaldo-alves/clear')
      .then(response => {
        console.log(response)
      })
  }
  return (
    <div><Button
      size="small"
      variant="outlined"
      color="secondary"
      startIcon={<DeleteIcon />}
      onClick={onClickReset}>Excluir lista
    </Button>
    </div>
  )
}
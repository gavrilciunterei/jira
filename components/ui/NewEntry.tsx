import { Button, TextField, Box } from '@mui/material';
import React, { useState } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onSave = () => {
    if (inputValue.length === 0) return;

    console.log(inputValue);
  };
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva entrada"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText={
              inputValue.length <= 0 &&
              touched &&
              'Escribe aquí tu nueva entrada'
            }
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            error={inputValue.length <= 0 && touched}
            onBlur={() => setTouched(true)}
          />

          <Box display={'flex'} justifyContent={'space-between'}>
            <Button variant="text" onClick={() => setIsAdding(false)}>
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddOutlinedIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAdding(true)}
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  );
};

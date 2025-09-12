import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Paper, Box, TextField, Button, Typography, Stack } from '@mui/material';

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const { email, setEmail} = useAuth();
  const inputRefEmail = React.useRef<HTMLInputElement>(null);
  const inputRefPassword = React.useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRefEmail.current?.value || !inputRefPassword.current?.value) {
      setError('Inserisci email e password');
      return;
    }
    setError('');
    setEmail(inputRefEmail.current.value);
    alert(`Login effettuato!\nEmail: ${inputRefEmail.current.value}`);
    onClose();
    // Qui puoi aggiungere la logica di autenticazione
  };
  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Email"
          type="email"
          inputRef={inputRefEmail}
          //value={email}
          //onChange={e => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          inputRef={inputRefPassword}
          //value={password}
          //onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <Typography color="error">{error}</Typography>}
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button type="submit" variant="contained" color="primary">Accedi</Button>
          <Button onClick={onClose} variant="outlined" color="secondary">Annulla</Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default LoginForm;

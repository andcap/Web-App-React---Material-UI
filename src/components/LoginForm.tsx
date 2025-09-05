import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Paper, Box, TextField, Button, Typography, Stack } from '@mui/material';

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const { email, setEmail, password, setPassword } = useAuth();
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Inserisci email e password');
      return;
    }
    setError('');
    alert(`Login effettuato!\nEmail: ${email}`);
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
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
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

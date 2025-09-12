import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Paper, Dialog } from '@mui/material';
import LoginForm from './LoginForm';
import { useAuth } from './AuthContext';

const MainPage = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const { email } = useAuth();
  // Disabilita la chiusura automatica del dialog
  const handleCloseLogin = () => setOpenLogin(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Demo Web App
          </Typography>
          <Button color="inherit" onClick={() => setOpenLogin(true)}>Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 1 }}>
        <Paper elevation={5} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Benvenuto nella tua Web Application!
          </Typography>
          {email && (
            <Typography variant="subtitle1" color="primary" gutterBottom>
              Email utente: {email}
            </Typography>
          )}
          <Typography variant="body1" gutterBottom>
            Questa è una pagina principale di esempio realizzata con i componenti MUI.
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            <Button variant="contained" color="primary">Azione 1</Button>
            <Button variant="outlined" color="secondary">Azione 2</Button>
          </Box>
        </Paper>
      </Container>
      <Dialog open={openLogin} onClose={() => {}}>
        <LoginForm onClose={handleCloseLogin} />
      </Dialog>
    </>
  );
};

export default MainPage;

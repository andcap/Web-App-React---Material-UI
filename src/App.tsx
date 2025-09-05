import './App.css';
import MainPage from './components/MainPage';
import { AuthProvider } from './components/AuthContext';
//import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        {/*<MuiTypography />*/}
        <MainPage />
      </div>
    </AuthProvider>
  );
}

export default App;

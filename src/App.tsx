import './App.css';
import MainPage from './components/MainPage';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <MainPage />
      </div>
    </AuthProvider>
  );
}

export default App;

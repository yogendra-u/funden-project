import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/router';
import { AppProvider } from '@/state';
function App() {
  return (
    <>
      <div className="App">
        <AppProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AppProvider>
      </div>
    </>
  );
}

export default App;

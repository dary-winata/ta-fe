import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Register from './components/register';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

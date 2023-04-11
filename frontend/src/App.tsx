import Landing from './pages/landing/Landing';
import Header from './components/Header';
import PersonalityTest from './pages/personality-test/PersonalityTest';
import Result from './pages/result/Result';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/test" element={<PersonalityTest />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;

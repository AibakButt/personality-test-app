import Landing from './pages/landing/Landing';
import PersonalityTest from './pages/personality-test/PersonalityTest';
import Result from './pages/result/Result';
import Header from './components/header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import { URIS } from './utils/constants';
import { useSelector } from 'react-redux';
import { ApplicationState } from './store';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { questions, answers } = useSelector((state: ApplicationState) => state.personality)
  let isTestCompleted = answers.length === questions.length

  return (
    <>
      <Toaster />
      <Header />
      <Routes>
        <Route path={URIS.LADNDING} element={<Landing />} />
        <Route path={URIS.TEST} element={<PersonalityTest />} />
        <Route path={URIS.RESULT} element={isTestCompleted ? <Result /> : <Navigate to={URIS.LADNDING} /> } />
      </Routes>
    </>
  );
}

export default App;

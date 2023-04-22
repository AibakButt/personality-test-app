import { useEffect } from 'react';
import Loading from '../../components/common/Loading';
import QuestionCard from '../../components/questions/QuestionCard';
import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import QuestionService from '../../services/questions/questions';
import { ApplicationState } from '../../store';
import { apiFetchQuestions, updateLoading } from '../../store/actions/personalityTest';
import { LABELS, URIS } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import toastMessage from '../../utils/helpers';
import "./styles.css";

const PersonalityTest = () => {

  const { questions, answers, loading } = useSelector((state: ApplicationState) => state.personality)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    if(questions.length !== 0) return

    dispatch(updateLoading(true))
    fetchQuestions()
  }, [])

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = (event: any) => {
    event.preventDefault();
    event.returnValue = "";
  }  

  const fetchQuestions = async () => {
    try{
      const { data: { questions } } = await QuestionService.get_questions()
      dispatch(apiFetchQuestions(questions))
      dispatch(updateLoading(false))
    } catch(e: any) {
      let message = e?.response?.data?.message || LABELS.NO_QUESTION_TEXT
      toastMessage(message, "error")
      dispatch(updateLoading(false))
    }
  }

  const renderNoQuestion = () => <Title css="title text-center mt-5">{LABELS.NO_QUESTION_TEXT}</Title>

  const handleSubmit = () => {
    navigate(URIS.RESULT, { replace: true })
  }

  if(loading)
    return <Loading loading={loading}/>

  if(!loading && questions.length === 0)
    return renderNoQuestion()  

  return (
    <Container>
      <Title css={'text-center my-5 title'}>{LABELS.LANDING_PAGE_TITLE_TEXT}</Title>
      <QuestionCard />
      <div className="d-grid gap-2">
        <Button 
          className={`shadow ${answers.length < questions.length ? 'submit-button-disabled' : 'submit-button'}`}  
          disabled={answers.length < questions.length}
          onClick={handleSubmit}
        >
          {LABELS.SUBMIT}
        </Button>
      </div>
    </Container>
  )
}

export default PersonalityTest;
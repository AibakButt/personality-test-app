import React, { useEffect } from 'react';
import Loading from '../../components/common/Loading';
import QuestionCard from '../../components/questions/QuestionCard';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { get_questions } from '../../apis/questions';
import { ApplicationState } from '../../store';
import { apiFetchQuestions, updateLoading } from '../../store/actions/personalityTest';
import Title from '../../components/common/Title';
import { LABELS } from '../../utils/constants';
import "./styles.css"

const PersonalityTest = () => {

  const { questions, currentQuestion, answers, loading } = useSelector((state: ApplicationState) => state.personality)
  let question = questions[currentQuestion]
  const dispatch = useDispatch()

  const fetchQuestions = async () => {
    const { data: { questions } } = await get_questions()
    dispatch(apiFetchQuestions(questions))
  }

  useEffect(() => {
    dispatch(updateLoading(true))
    fetchQuestions()  
    dispatch(updateLoading(false))
  }, [])

  const renderNoQuestion = () => <div>No Question Right Now. Come back later</div>

  if(loading || questions.length === 0)
    return <Loading />

  if(!loading && questions.length === 0)
    return renderNoQuestion()
  
  return (
    <Container>
      <Title css={'text-center my-5'}>{LABELS.LANDING_PAGE_TITLE_TEXT}</Title>
      <QuestionCard key={question.id} question={question} currentQuestion={currentQuestion} totalQuestions={questions.length} />
      <div className="d-grid gap-2">
      <button className={`shadow ${answers.length < questions.length ? 'submit-button-disabled' : 'submit-button'}`}  disabled={answers.length < questions.length}>Submit</button>
      </div>
    </Container>
  )
}

export default PersonalityTest;
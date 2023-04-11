import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { nextQuesiton, prevQuesiton } from '../../store/actions/personalityTest';

const QuestionActions = () => {

  const dispatch = useDispatch()

  return (
    <div className="d-flex justify-content-end mt-4">
      <Button className='card-button-outline me-2' style={{width: '100px'}} onClick={() => dispatch(prevQuesiton())}>
        Previous
      </Button>
      <Button className="card-button"  style={{width: '100px'}}  onClick={() => dispatch(nextQuesiton())}>
        Next
      </Button>
    </div>
  )
}

export default QuestionActions;
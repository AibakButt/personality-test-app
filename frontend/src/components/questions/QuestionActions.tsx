import Button from '../common/Button';
import { useDispatch } from 'react-redux';
import { nextQuesiton, prevQuesiton } from '../../store/actions/personalityTest';

const QuestionActions = () => {

  const dispatch = useDispatch()

  return (
    <div className="d-flex justify-content-end mt-4">
      <Button className='button-outline me-2' onClick={() => dispatch(prevQuesiton())}>
        Previous
      </Button>
      <Button className="button"  onClick={() => dispatch(nextQuesiton())}>
        Next
      </Button>
    </div>
  )
}

export default QuestionActions;
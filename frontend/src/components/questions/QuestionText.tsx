import React, { FC } from 'react';

interface QuesitonTextProps {
  text: string
}

const QuestionText: FC<QuesitonTextProps> = ({text}) => {
  return (
    <div className='question-text bold'>
      {text}
    </div>
  )
}

export default QuestionText;
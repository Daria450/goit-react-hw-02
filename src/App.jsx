import { useState } from 'react';
import Description from "./components/Description/Description"
import Feedback from "./components/Feedback/Feedback"
import Options from "./components/Options/Options";
import Notification from './components/Notification/Notification';
import './App.css';




function App() {
  const [mark, setMarkData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    // Тут використовуй сеттер, щоб оновити стан
    setMarkData({
      ...mark,
      [feedbackType]: mark[feedbackType] + 1,
    })
  }
  const resetFeedback = () => {
    setMarkData({
      good: 0,
      neutral: 0,
      bad: 0,
    })
  }

  const totalFeedback = mark.good + mark.neutral + mark.bad;

  const positiveFeedback = Math.round((mark.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options hadleClick={updateFeedback} handleReset={resetFeedback} total={totalFeedback} />
      <Feedback markData={mark} total={totalFeedback} positive={positiveFeedback} />
    </>
  )
}

export default App

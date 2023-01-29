import { useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const newOption = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = event => {
    const target = event.target.innerText.toLowerCase();
    switch (target) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return 'something went wrong';
    }
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          newOption={newOption}
        />
      </Section>
      {countTotalFeedback() ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            countTotalFeedback={countTotalFeedback}
            percent={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

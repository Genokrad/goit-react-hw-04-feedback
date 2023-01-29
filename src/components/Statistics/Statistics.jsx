import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  percent,
}) => {
  return (
    <>
      <p>
        Good <span>{good}</span>
      </p>
      <p>
        Neutral <span>{neutral}</span>
      </p>
      <p>
        Bad <span>{bad}</span>
      </p>
      <p>
        Total <span>{countTotalFeedback()}</span>
      </p>
      <p>
        Positive feedback <span>{percent()}%</span>
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  percent: PropTypes.func.isRequired,
};

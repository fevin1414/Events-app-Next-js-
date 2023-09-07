import ButtonExplore from '../ui/Button';
import Button from '../ui/Button';
import classes from './results-title.module.css';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <ButtonExplore link='/events'>Show all events</ButtonExplore>
    </section>
  );
}

export default ResultsTitle;

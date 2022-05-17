import { Link } from 'react-router-dom';
import styles from './ReadyToGetStart.module.sass';

function ReadyToGetStart () {
  return (
    <section className={styles.section}>
      <span className={styles.span}>
        Ready to get started? Launch a contest and start receiving submissions
        instantly.
      </span>
      <Link className={styles.link} to='startContest'>
        <i class='far fa-lightbulb mr-1'></i>Start A Contest
      </Link>
    </section>
  );
}

export default ReadyToGetStart;

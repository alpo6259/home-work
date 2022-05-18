import { Link } from 'react-router-dom';
import agencyInfo from './agencyLevel.json';
import styles from './AgencyLevel.module.sass';

function AgencyLevel () {
  const mapAgencyInfo = (a, index) => (
    <li key={index} className={styles.agencyList}>
      <div
        style={{ backgroundColor: a.iconBgColor }}
        className={styles.iconContainer}
      >
        <i className={a.iconClassName} style={{ color: a.iconColor }}></i>
      </div>
      <h3 className={styles.agencyHeader}>{a.header}</h3>
      <p className={styles.agencyBody}>
        {a.body}{' '}
        <Link to={a.linkHref} className={styles.agencyLink}>
          Learn More.
        </Link>
      </p>
    </li>
  );

  return (
    <ul className={styles.agencyContainer}>{agencyInfo.map(mapAgencyInfo)}</ul>
  );
}

export default AgencyLevel;

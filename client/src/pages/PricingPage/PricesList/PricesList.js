import pricingInfo from './pricingInfo.json';
import styles from './PricesList.module.sass';
import { Link } from 'react-router-dom';

function PricesList () {
  const mapList = (p, index) => (
    <li key={index} className={styles.pricesList}>
      <div
        style={{ border: `7px solid ${p.color}` }}
        className={styles.pricesTypeInfo}
      >
        <h3 style={{ color: `${p.color}` }}>{p.type}</h3>
        <p>{p.criterion}</p>
        <p style={{ color: `${p.color}` }}>{p.price}</p>
      </div>

      <ul>
        {p.profit.map((p, index) => (
          <li key={index}>
            <p>{p.body}</p>
            <p>{p.tooltip}</p>
          </li>
        ))}
      </ul>
      <Link to='/#'>
        <i className='fa fa-check'></i>Start
      </Link>
    </li>
  );
  return (
    <ul className={styles.pricesListContainer}>{pricingInfo.map(mapList)}</ul>
  );
}

export default PricesList;

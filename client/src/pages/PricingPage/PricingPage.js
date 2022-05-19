import styles from './PricingPage.module.sass';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PricesList from './PricesList/PricesList';

function PricingPage () {
  return (
    <div>
      <Header />
      <div className={styles.pricesContainer}>
        <PricesList />
      </div>
      <Footer />
    </div>
  );
}

export default PricingPage;

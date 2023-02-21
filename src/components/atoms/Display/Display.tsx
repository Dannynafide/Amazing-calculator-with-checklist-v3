import AutoTextSize from '../AutoTextSize/AutoTextSize';
import styles from './display.module.scss';

interface DisplayProps {
  /**
   * The value to display
   */
  value: number;
}

export default function Display({value = 0}: DisplayProps) {
  return (
    <div className={styles.display}>
      <div className={styles.price}>
        <div className={styles.priceNumber}>
          <AutoTextSize>{String(value)}</AutoTextSize>
        </div>
      </div>
      <span className={styles.underline} />
    </div>
  );
}

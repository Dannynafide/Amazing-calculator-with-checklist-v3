import RippleEffect from '../../RippleEffect/RippleEffect';
import styles from './navButton.module.scss';

interface NavButtonProps {
  /**
   * Should the button be active?
   */
  active?: boolean;
  /**
   * Button contents
   */
  children: string;
  /**
   * Click handler
   */
  onClick: () => void;
}

export default function NavButton({active, children, onClick}: NavButtonProps) {
  const activeClass = active && styles.nav_button__active;

  return (
    <button
      type="button"
      className={`${styles.nav_button} ${activeClass}`}
      onClick={onClick}
    >
      {children}
      <div className={styles.nav_button__underline} />
      <RippleEffect />
    </button>
  );
}

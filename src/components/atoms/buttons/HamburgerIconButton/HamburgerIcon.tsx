import IconButton from 'components/atoms/buttons/IconButton/IconButton';
import styles from './hamburgerIcon.module.scss';
import iconStyles from './icon.module.scss';

export default function HamburgerIcon({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) {
  return (
    <IconButton onClick={onClick} className={styles.hamburgerIcon}>
      <label
        className={`${iconStyles.burger} ${iconStyles.burger3}`}
        htmlFor="burger3"
      >
        <input
          className={iconStyles.hidden}
          id="burger3"
          type="checkbox"
          checked={isOpen}
          readOnly
        />
        <span />
      </label>
    </IconButton>
  );
}

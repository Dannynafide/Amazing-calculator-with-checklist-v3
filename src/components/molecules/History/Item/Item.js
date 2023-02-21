import {MdClose} from 'react-icons/md';

import IconButton from 'components/atoms/buttons/IconButton/IconButton';
import styles from './item.module.scss';

export default function Item({item, children, removeItem}) {
  return (
    <div className={styles.history__item}>
      <IconButton
        type="button"
        className={styles.history__item__remove}
        onClick={() => removeItem(item.id)}
        remove
      >
        <MdClose />
      </IconButton>
      <div className={styles.history__item__cost}>{children}</div>
    </div>
  );
}

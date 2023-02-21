import {FC} from 'react';

import NavButton from 'components/atoms/buttons/NavButton/NavButton';
import styles from './nav.module.scss';

interface NavProps {
  checkPage: boolean;
  setCheckPage: FC;
}

export default function Nav({checkPage, setCheckPage}: NavProps) {
  return (
    <nav>
      <ul className={styles.navLinks}>
        <li>
          <NavButton active={!checkPage} onClick={() => setCheckPage(false)}>
            Lets calc!
          </NavButton>
        </li>
        <li>
          <NavButton active={checkPage} onClick={() => setCheckPage(true)}>
            Lets check!
          </NavButton>
        </li>
      </ul>
    </nav>
  );
}

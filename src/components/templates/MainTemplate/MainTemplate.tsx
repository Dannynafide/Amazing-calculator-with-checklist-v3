import {ReactElement} from 'react';

import AppBar from 'components/organisms/AppBar/AppBar';
import {useTheme} from 'context/themeContext';
import 'theme/breakpoints.scss';
import 'theme/index.scss';
import styles from './mainTemplate.module.scss';

export default function MainTemplate({children}: {children: ReactElement}) {
  const {theme} = useTheme();

  return (
    <div className="App" data-theme={theme}>
      <div className={styles.mainTemplate}>
        <AppBar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

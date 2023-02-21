import {useState} from 'react';
import {useParams} from 'react-router-dom';

import HamburgerIcon from 'components/atoms/buttons/HamburgerIconButton/HamburgerIcon';
import {useCalculator} from 'context/calculatorContext';
import styles from './appBar.module.scss';
import Dropdown from './Dropdown/Dropdown';

export default function AppBar() {
  const [open, setOpen] = useState(false);
  const [preventingFirstStart, setPreventingFirstStart] = useState(true);

  const {getProject, projects} = useCalculator();
  const {projectId} = useParams();
  const projectName = getProject(projectId)?.name || 'No name';

  const handleDropdown = () => {
    setOpen(!open);
    setPreventingFirstStart(false);
  };

  return (
    <div className={styles.appbar}>
      <div className={styles.appbar__accordion}>
        <p>{projectName}</p>
        <HamburgerIcon isOpen={open} onClick={handleDropdown} />
      </div>
      {!preventingFirstStart && (
        <Dropdown
          isOpen={open}
          closeDropdown={handleDropdown}
          projects={projects}
        />
      )}
    </div>
  );
}

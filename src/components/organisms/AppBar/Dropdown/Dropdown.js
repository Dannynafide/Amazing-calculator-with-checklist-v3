import {useNavigate} from 'react-router-dom';

import Button from 'components/atoms/buttons/Button/Button';
import {useCalculator} from 'context/calculatorContext';
import {useTheme} from 'context/themeContext';
import styles from './dropdown.module.scss';
import ProjectListItem from './ProjectListItem/ProjectListItem';

export default function Dropdown({isOpen, closeDropdown, projects}) {
  const {theme, switchTheme} = useTheme();
  const {addProject} = useCalculator();
  const navigate = useNavigate();

  let slideOutEffect = null;
  if (isOpen === true) slideOutEffect = styles.dropdown__open;
  if (isOpen === false) slideOutEffect = styles.dropdown__close;

  // Add a new project
  const handleAddProject = () => {
    closeDropdown();
    const projetdId = addProject();
    navigate(`/projects/${projetdId}`, {replace: false});
  };

  return (
    <div className={`${styles.dropdown} ${slideOutEffect}`}>
      <div className={styles.grid}>
        <Button onClick={handleAddProject}>Add a new project</Button>

        <select
          value={theme}
          onChange={(event) => switchTheme(event.target.value)}
          className={styles.themeSelect}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <ul className={styles.dropdown__projectsList}>
        {projects &&
          projects.map((project) => (
            <li key={project.id}>
              <ProjectListItem project={project} closeMenu={closeDropdown} />
            </li>
          ))}
      </ul>
    </div>
  );
}

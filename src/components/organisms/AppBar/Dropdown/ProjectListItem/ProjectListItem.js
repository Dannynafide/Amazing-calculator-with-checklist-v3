import {useState} from 'react';
import {MdCreate, MdDelete, MdOutlineCancel, MdSaveAlt} from 'react-icons/md';
import {Link, useNavigate, useParams} from 'react-router-dom';

import IconButton from 'components/atoms/buttons/IconButton/IconButton';
import Input from 'components/atoms/Input/Input';
import {useCalculator} from 'context/calculatorContext';
import styles from './projectListItem.module.scss';

export default function ProjectListItem(props) {
  const {project, closeMenu} = props;

  const [editName, setEditName] = useState(false);
  const [name, setname] = useState(project.name);

  const navigate = useNavigate();
  const {projects, removeProject, getResult, updateProject} = useCalculator();
  const {projectId} = useParams();

  // Remove the project
  const handleRemoveProject = (id) => {
    const newState = removeProject(id);
    if (id === projectId) {
      if (projects.length > 1) {
        navigate(`/projects/${newState[0].id}`, {replace: false});
      } else {
        navigate(`/`, {replace: false});
      }
    }
  };

  return !editName ? (
    <div className={styles.projectsList__item}>
      <IconButton onClick={() => setEditName(!editName)}>
        <MdCreate />
      </IconButton>

      <Link
        to={`/projects/${project.id}`}
        className={styles.projectsList__item__name}
        onClick={closeMenu}
      >
        {project.name || 'No name'}
      </Link>

      <span className={styles.projectsList__item__cost}>
        {getResult(project.id)}
      </span>

      <IconButton onClick={() => handleRemoveProject(project.id)} remove>
        <MdDelete />
      </IconButton>
    </div>
  ) : (
    <div className={`${styles.projectsList__editItem}`}>
      <IconButton onClick={() => setEditName(!editName)} remove>
        <MdOutlineCancel />
      </IconButton>

      <Input value={name} onChange={(e) => setname(e.target.value)} />

      <IconButton
        onClick={() =>
          updateProject(project.id, name) && setEditName(!editName)
        }
      >
        <MdSaveAlt />
      </IconButton>
    </div>
  );
}

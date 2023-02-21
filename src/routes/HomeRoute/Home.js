import {useState} from 'react';
import {useParams} from 'react-router-dom';

import Nav from 'components/molecules/Nav/Nav';
import {useCalculator} from 'context/calculatorContext';
import CalcPage from './subpages/CalcPage';
import CheckPage from './subpages/CheckPage';

function Project() {
  const params = useParams();
  const {getProject} = useCalculator();
  const [checkPage, setCheckPage] = useState(false);

  const project = params.projectId && getProject(params.projectId);

  if (params.projectId && !project) throw new Error('No project!');

  const page = checkPage ? (
    <CheckPage project={project} />
  ) : (
    <CalcPage project={project} />
  );

  return (
    <>
      <Nav checkPage={checkPage} setCheckPage={setCheckPage} />
      {page}
    </>
  );
}

export default Project;

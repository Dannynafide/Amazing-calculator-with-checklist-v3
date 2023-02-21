import {useParams} from 'react-router-dom';

import {useCalculator} from 'context/calculatorContext';

export default function Edit() {
  const {getProject} = useCalculator();
  const params = useParams();
  const project = params.projectId && getProject(params.projectId);
  if (!project) throw new Error('No project!');

  return <div>Edit Page</div>;
}

import Display from 'components/atoms/Display/Display';
import ProgressBar from 'components/atoms/ProgressBar/ProgressBar';
import History from 'components/molecules/History/History';
import {useCalculator} from 'context/calculatorContext';
import {evaluateCalculator} from 'helpers/mathFunc';

export default function CalcPage({project}) {
  const {getResult, getProject} = useCalculator();

  const data = getProject(project?.id)?.data;

  let count = 0;
  let countComplite = 0;
  if (data) {
    data.forEach((item) => {
      const result = evaluateCalculator(item.value);

      count += result;
      if (item.complite) countComplite += result;
    });
  }

  return (
    <div>
      <Display value={getResult(project?.id)} />
      {count >= 1 ? (
        <>
          <div className="motto">
            <p>Don&apos;t get too lazy!</p>
            <p>start now!</p>
          </div>
          <ProgressBar progress={(countComplite / count) * 100} />
          <History id={project?.id} details />
        </>
      ) : (
        <div className="no-math-operation">
          Don&apos;t wait! <br />
          Add the first element 😀
        </div>
      )}
    </div>
  );
}

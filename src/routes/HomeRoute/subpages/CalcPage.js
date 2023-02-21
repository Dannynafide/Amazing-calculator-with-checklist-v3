import Display from 'components/atoms/Display/Display';
import History from 'components/molecules/History/History';
import Keypad from 'components/molecules/Keypad/Keypad';
import {useCalculator} from 'context/calculatorContext';

export default function CalcPage({project}) {
  const {getResult} = useCalculator();

  return (
    <>
      <Display value={getResult(project?.id)} />
      <History id={project?.id} />
      <Keypad id={project?.id} />
    </>
  );
}

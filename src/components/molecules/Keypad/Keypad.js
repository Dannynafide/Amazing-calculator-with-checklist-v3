import {nanoid} from 'nanoid';
import {useEffect, useState} from 'react';
import {IoMdArrowBack, IoMdReturnLeft} from 'react-icons/io';
import {useNavigate} from 'react-router-dom';

import {
  BracketBtn,
  DigitBtn,
  OperatorBtn,
} from 'components/atoms/buttons/KeypadButtons/Button';
import Input from 'components/atoms/Input/Input';
import {useCalculator} from 'context/calculatorContext';
import {evaluateCalculator} from 'helpers/mathFunc';
import useFocus from 'hooks/useFocus';
import styles from './keypad.module.scss';

export default function Keypad({id}) {
  const [display, setDisplay] = useState([]);

  const {projects, addProject, addTask} = useCalculator();
  const [inputRef, setInputFocus] = useFocus();
  const navigate = useNavigate();

  const numberHandler = (props) => {
    setInputFocus();
    // If he adds the first number (display.length === 0)
    // Add the number after the operator (display[display.length - 1].type === 'operator')
    if (
      display.length === 0 ||
      display[display.length - 1].type === 'operator' ||
      display[display.length - 1].type === 'bracket'
    ) {
      const newValue = {
        id: display.length ?? 0,
        type: 'number',
        value: `${props}`,
      };
      setDisplay([...display, newValue]);
      return;
    }

    // If there is a dot in the number.
    if (/\./.test(display[display.length - 1].value) && props === '.') {
      return;
    }

    // If it adds a digit to a digit.
    const newDisplay = [...display];
    newDisplay[display.length - 1].value += `${props}`;
    setDisplay(newDisplay);
  };

  const operatorHandler = (props) => {
    setInputFocus();
    // Blocking input from the operator. (except "-")
    if (display.length === 0) {
      if (props !== '-') return;
    } else if (display.length === 1 && props !== '-') {
      if (display[0].type === 'operator') {
        return;
      }
    }

    // The operator must be added after the number/parenthesis.
    // The exception is "-", where it can occur as the first element.
    if (
      display.length === 0 ||
      display[display.length - 1].type === 'number' ||
      display[display.length - 1].type === 'bracket'
    ) {
      const newValue = {
        id: display.length,
        type: 'operator',
        value: `${props}`,
      };
      setDisplay([...display, newValue]);
      return;
    }

    // Operator replacement
    if (display[display.length - 1].type === 'operator') {
      const newDisplay = [...display];
      newDisplay[display.length - 1].value = `${props}`;
      setDisplay(newDisplay);
    }
  };

  const bracketHandler = (props) => {
    setInputFocus();
    // Blocking the use of ")" before "(", which is mathematically incorrect.
    if (props === ')') {
      const countFirstBracket = display.filter((x) => x.value === '(').length;
      const countSecondBracket = display.filter((x) => x.value === ')').length;

      if (countSecondBracket >= countFirstBracket) return;
      if (display[display.length - 1].value === '(') {
        if (countSecondBracket >= countFirstBracket - 1) return;
      }
    }

    // Adding a parenthesis
    const newValue = {
      id: display.length ?? 0,
      type: 'bracket',
      value: `${props}`,
    };
    setDisplay([...display, newValue]);
  };

  const equalHandler = () => {
    setInputFocus();
    let count = '';
    display.forEach((e) => {
      count = `${count}${e.value}`;
    });

    const evaluateCount = evaluateCalculator(count);
    if (
      evaluateCount === undefined ||
      Number.isNaN(evaluateCount) ||
      evaluateCount === Infinity ||
      evaluateCount === -Infinity
    ) {
      // I can add an error display handler.
      return;
    }

    const index = projects.findIndex((element) => element.id === id);

    if (index !== -1) {
      addTask(id, '', count, false);
    } else {
      const projetdId = addProject({
        id: nanoid(),
        name: '',
        value: count,
        complite: false,
      });
      navigate(`projects/${projetdId}`, {replace: true});
    }

    setDisplay([]);
  };

  /* Backspace last character */
  const backspaceHandler = () => {
    setInputFocus();
    const newDisplay = [...display];
    if (newDisplay.length < 1) return;

    if (newDisplay[newDisplay.length - 1].value.length > 1) {
      const items = Array.from(newDisplay[newDisplay.length - 1].value);
      items.pop();
      newDisplay[newDisplay.length - 1].value = items.join('');
    } else {
      newDisplay.pop();
    }
    setDisplay(newDisplay);
  };

  useEffect(() => {
    setInputFocus();
  }, [setInputFocus]);

  const handleKeyDown = (event) => {
    // https://www.toptal.com/developers/keycode/for/enter

    if (event.which >= 48 && event.which <= 57 && event.shiftKey === false) {
      numberHandler(event.key);
    } else if (event.key === '.') {
      numberHandler(event.key);
    } else if (event.key === '(' || event.key === ')') {
      bracketHandler(event.key);
    } else if (
      event.key === '/' ||
      event.key === '*' ||
      event.key === '+' ||
      event.key === '-' ||
      event.key === '%'
    ) {
      operatorHandler(event.key);
    } else if (event.keyCode === 13) {
      equalHandler(event.key);
    } else if (event.key === 'Backspace') {
      backspaceHandler();
    }
  };

  return (
    <div className={styles.keypad}>
      <Input
        className={styles.keypad__input}
        value={display && display.map((e) => e.value).join('')}
        innerRef={inputRef}
        onKeyDown={handleKeyDown}
      />

      <div className={styles.keypad__bracketKeys}>
        <BracketBtn onClick={() => bracketHandler('(')}>[</BracketBtn>
        <BracketBtn onClick={() => bracketHandler(')')}>]</BracketBtn>
      </div>

      <div className={styles.keypad__inputKeys}>
        <div className={styles.keypad__inputKeys__digitKeys}>
          <DigitBtn onClick={() => numberHandler(7)}>7</DigitBtn>
          <DigitBtn onClick={() => numberHandler(8)}>8</DigitBtn>
          <DigitBtn onClick={() => numberHandler(9)}>9</DigitBtn>
          <DigitBtn onClick={() => numberHandler(4)}>4</DigitBtn>
          <DigitBtn onClick={() => numberHandler(5)}>5</DigitBtn>
          <DigitBtn onClick={() => numberHandler(6)}>6</DigitBtn>
          <DigitBtn onClick={() => numberHandler(1)}>1</DigitBtn>
          <DigitBtn onClick={() => numberHandler(2)}>2</DigitBtn>
          <DigitBtn onClick={() => numberHandler(3)}>3</DigitBtn>
          <DigitBtn onClick={() => numberHandler(0)}>0</DigitBtn>
          <DigitBtn onClick={() => numberHandler('.')}>.</DigitBtn>
          <DigitBtn onClick={() => backspaceHandler()}>
            <IoMdArrowBack />
          </DigitBtn>
        </div>

        <div className={styles.keypad__inputKeys__operatorKeys}>
          <OperatorBtn
            className={styles.divideKey}
            onClick={() => operatorHandler('/')}
          >
            /
          </OperatorBtn>
          <OperatorBtn onClick={() => operatorHandler('*')}>&#215;</OperatorBtn>
          <OperatorBtn
            className={styles.addKey}
            onClick={() => operatorHandler('+')}
          >
            &#43;
          </OperatorBtn>
          <OperatorBtn onClick={() => operatorHandler('-')}>
            &#8722;
          </OperatorBtn>
          <OperatorBtn
            className={styles.percentKey}
            onClick={() => operatorHandler('%')}
          >
            &#37;
          </OperatorBtn>
          <OperatorBtn
            className={styles.equalsKey}
            onClick={() => equalHandler()}
          >
            <IoMdReturnLeft />
          </OperatorBtn>
        </div>
      </div>
    </div>
  );
}
